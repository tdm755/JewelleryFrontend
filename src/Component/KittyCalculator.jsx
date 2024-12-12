import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const KittySchemeCalculator = () => {
    // Retrieve Kitty Configuration
    const [kittyConfig, setKittyConfig] = useState(() => {
        const savedConfig = localStorage.getItem('kittyConfiguration')
        return savedConfig ? JSON.parse(savedConfig) : {
            minDuration: 6,
            maxDuration: 12,
            jewelryTypes: [
                { 
                    id: 1, 
                    name: 'Gold Necklace Set', 
                    minValue: 50000, 
                    maxValue: 500000 
                },
                { 
                    id: 2, 
                    name: 'Diamond Pendant', 
                    minValue: 25000, 
                    maxValue: 250000 
                },
                { 
                    id: 3, 
                    name: 'Silver Bracelet', 
                    minValue: 10000, 
                    maxValue: 100000 
                }
            ]
        }
    });

    // State Management
    const [selectedJewelry, setSelectedJewelry] = useState(null);
    const [userDuration, setUserDuration] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [calculationResult, setCalculationResult] = useState(null);
    const [kittySchedule, setKittySchedule] = useState([]);

    // Initialize selected jewelry when component mounts
    useEffect(() => {
        if (kittyConfig.jewelryTypes.length > 0) {
            setSelectedJewelry(kittyConfig.jewelryTypes[0]);
        }
    }, [kittyConfig]);

    // Validation Function
    const validateInputs = () => {
        if (!selectedJewelry || !userDuration || !monthlyContribution) {
            alert('Please fill in all details');
            return false;
        }

        const duration = parseInt(userDuration);
        const contribution = parseFloat(monthlyContribution);

        // Validate duration (must be 6, 7, 8, etc.)
        if (duration < kittyConfig.minDuration || duration > kittyConfig.maxDuration) {
            alert(`Duration must be between ${kittyConfig.minDuration} and ${kittyConfig.maxDuration} months`);
            return false;
        }

        // Validate monthly contribution against jewelry value
        if (contribution < selectedJewelry.minValue || contribution > selectedJewelry.maxValue) {
            alert(`Monthly contribution must be between ₹${selectedJewelry.minValue} and ₹${selectedJewelry.maxValue}`);
            return false;
        }

        return true;
    };

    // Calculate Kitty Scheme
    const calculateKittyScheme = () => {
        if (!validateInputs()) return;

        const userMonths = parseInt(userDuration);
        const totalDuration = userMonths + 1; // Admin adds one month
        const contribution = parseFloat(monthlyContribution);

        // Generate Kitty Schedule
        const schedule = [];
        let totalCollected = 0;

        for (let month = 1; month <= totalDuration; month++) {
            // User pays for first 6 months, admin pays last month
            const monthlyCollection = month <= userMonths ? contribution : contribution;
            totalCollected += monthlyCollection;

            schedule.push({
                month: month,
                monthlyCollection: Math.round(monthlyCollection),
                totalCollected: Math.round(totalCollected),
                isAdminMonth: month === totalDuration,
                adminContribution: month === totalDuration ? Math.round(contribution) : 0
            });
        }

        // Calculate final results
        setCalculationResult({
            userMonths: userMonths,
            totalDuration: totalDuration,
            totalMonthlyCollection: Math.round(contribution),
            totalSchemeCollection: Math.round(totalCollected),
            jewelryType: selectedJewelry.name,
            jewelryValue: selectedJewelry.maxValue,
            adminMonth: totalDuration
        });

        setKittySchedule(schedule);
    };

    // Custom Tooltip for Chart
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const isAdminMonth = payload[0].payload.isAdminMonth;
            return (
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg">
                    <p className="font-bold text-gray-800">Month {label}</p>
                    <p className="text-blue-600">Monthly Contribution: ₹{payload[0].value.toLocaleString()}</p>
                    <p className="text-green-600">Total Collected: ₹{payload[1].value.toLocaleString()}</p>
                    {isAdminMonth && (
                        <p className="text-red-600 font-bold">Admin's Month: Full Collection Received</p>
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-4 mt-32">
            <div className="flex flex-col items-center justify-center lg:pb-20">
                <h2 className='text-[#9fb8e2] text-2xl md:text-4xl lg:text-7xl fontStyle'>
                    <span className='font-serif'>Jewelry</span> Kitty Scheme
                </h2>
            </div>

            <div className="shadow-3xl lg:mx-10 rounded-xl overflow-hidden">
                <div className={`py-16 flex flex-col lg:flex-row ${calculationResult ? 'gap-10' : 'gap-0'}`}>
                    {/* Input Section */}
                    <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${calculationResult ? 'w-full lg:w-1/3' : 'w-full'}`}>
                        <div className={`grid grid-cols-1 ${calculationResult ? 'grid-cols-1' : 'md:grid-cols-3'} gap-4 items-center`}>
                            {/* Jewelry Type Selection */}
                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font-medium mb-2">Select Jewelry</label>
                                <select
                                    className="w-full px-3 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                    value={selectedJewelry?.id}
                                    onChange={(e) => {
                                        const selected = kittyConfig.jewelryTypes.find(
                                            type => type.id === parseInt(e.target.value)
                                        );
                                        setSelectedJewelry(selected);
                                    }}
                                >
                                    {kittyConfig.jewelryTypes.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Kitty Duration */}
                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font-medium mb-2">Kitty Duration</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                    placeholder={`Duration (${kittyConfig.minDuration}-${kittyConfig.maxDuration} months)`}
                                    value={userDuration}
                                    onChange={(e) => setUserDuration(e.target.value)}
                                    min={kittyConfig.minDuration}
                                    max={kittyConfig.maxDuration}
                                />
                            </div>

                            {/* Monthly Contribution */}
                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font-medium mb-2">Monthly Contribution</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                    placeholder={`Contribution (₹${selectedJewelry?.minValue} - ₹${selectedJewelry?.maxValue})`}
                                    value={monthlyContribution}
                                    onChange={(e) => setMonthlyContribution(e.target.value)}
                                    min={selectedJewelry?.minValue}
                                    max={selectedJewelry?.maxValue}
                                />
                            </div>
                        </div>

                        {/* Calculate Button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={calculateKittyScheme}
                                className="bg-white/10 backdrop-blur-sm px-10 rounded-full text-white py-2 hover:bg-white hover:text-primary-default transition duration-300 ease-in-out"
                                disabled={!selectedJewelry || !userDuration || !monthlyContribution}
                            >
                                Calculate Kitty Scheme
                            </button>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className={`transition-all duration-500 ease-in-out ${calculationResult ? 'w-2/3' : 'w-0'}`}>
                        {calculationResult && (
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#9fb9e2]">Kitty Scheme Breakdown</h3>
                                
                                {/* Summary Cards */}
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Jewelry Type</p>
                                        <p className="font-bold text-white/80">{calculationResult.jewelryType}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Monthly Contribution</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalMonthlyCollection.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Scheme Collection</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalSchemeCollection.toLocaleString()}</p>
                                    </div>
                                </div>

                                {/* Admin's Month Details */}
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-4">
                                    <h4 className="text-[#9fb9e2] font-semibold mb-2">Kitty Scheme Details</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-[#9fb9e2]">User Contribution Months</p>
                                            <p className="font-bold text-white/80">{calculationResult.userMonths} Months</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#9fb9e2]">Admin's Contribution Month</p>
                                            <p className="font-bold text-white/80">Month {calculationResult.adminMonth}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#9fb9e2]">Total Scheme Duration</p>
                                            <p className="font-bold text-white/80">{calculationResult.totalDuration} Months</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#9fb9e2]">Jewelry Value</p>
                                            <p className="font-bold text-green-500">₹{calculationResult.totalSchemeCollection.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart */}
                                {kittySchedule.length > 0 && (
                                    <div className="w-full h-[300px] bg-white/10 backdrop-blur-md">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={kittySchedule}>
                                                <defs>
                                                    <linearGradient id="collectionColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                                    </linearGradient>
                                                    <linearGradient id="totalCollectedColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -10 }} />
                                                <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                                                <Tooltip content={<CustomTooltip />} />
                                                
                                                {/* Monthly Collection Area */}
                                                <Area
                                                    type="monotone"
                                                    dataKey="monthlyCollection"
                                                    stroke="#8884d8"
                                                    fillOpacity={1}
                                                    fill="url(#collectionColor)"
                                                    name="Monthly Contribution"
                                                />
                                                
                                                {/* Total Collected Area */}
                                                <Area
                                                    type="monotone"
                                                    dataKey="totalCollected"
                                                    stroke="#82ca9d"
                                                    fillOpacity={1}
                                                    fill="url(#totalCollectedColor)"
                                                    name="Total Collected"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Kitty Scheme Features Section */}
            <div className="shadow-lg rounded-lg overflow-hidden mt-10 md:mt-20 lg:mt-40">
                <div className="px-6 py-4 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#9fb9e2]">Kitty Scheme Highlights</h2>
                </div>
                <div className="py-6 lg:p-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Flexible Duration</h4>
                        <p className="text-white/80">Choose your preferred kitty duration.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Admin Bonus Month</h4>
                        <p className="text-white/80">Admin adds an extra month to complete the scheme.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Transparent Calculation</h4>
                        <p className="text-white/80">Clear breakdown of monthly contributions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KittySchemeCalculator;
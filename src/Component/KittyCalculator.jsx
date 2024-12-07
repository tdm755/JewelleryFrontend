import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const KittySchemeCalculator = () => {
    // Predefined Kitty Scheme Types
    const kittyTypes = [
        { id: 1, name: 'Small Group Kitty', minMembers: 5, maxMembers: 10, minContribution: 1000, maxContribution: 5000 },
        { id: 2, name: 'Medium Group Kitty', minMembers: 10, maxMembers: 20, minContribution: 5000, maxContribution: 15000 },
        { id: 3, name: 'Large Group Kitty', minMembers: 20, maxMembers: 30, minContribution: 15000, maxContribution: 30000 }
    ];

    // State Management
    const [selectedKittyType, setSelectedKittyType] = useState(kittyTypes[0]);
    const [numberOfMembers, setNumberOfMembers] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [numberOfMonths, setNumberOfMonths] = useState('');
    const [calculationResult, setCalculationResult] = useState(null);
    const [kittySchedule, setKittySchedule] = useState([]);

    const calculateKittyScheme = () => {
        const members = parseInt(numberOfMembers);
        const contribution = parseFloat(monthlyContribution);
        const months = parseInt(numberOfMonths);

        // Validation
        if (!members || !contribution || !months) {
            alert('Please fill in all details');
            return;
        }

        if (members < selectedKittyType.minMembers || members > selectedKittyType.maxMembers) {
            alert(`Number of members must be between ${selectedKittyType.minMembers} and ${selectedKittyType.maxMembers}`);
            return;
        }

        if (contribution < selectedKittyType.minContribution || contribution > selectedKittyType.maxContribution) {
            alert(`Monthly contribution must be between ₹${selectedKittyType.minContribution} and ₹${selectedKittyType.maxContribution}`);
            return;
        }

        // Total collection per month
        const monthlyCollection = members * contribution;
        
        // Generate Kitty Schedule
        const schedule = [];
        let totalCollected = 0;

        for (let month = 1; month <= months; month++) {
            totalCollected += monthlyCollection;
            
            schedule.push({
                month: month,
                monthlyCollection: Math.round(monthlyCollection),
                totalCollected: Math.round(totalCollected),
                winningAmount: Math.round(totalCollected)
            });
        }

        setCalculationResult({
            totalMonthlyCollection: Math.round(monthlyCollection),
            totalSchemeCollection: Math.round(totalCollected),
            averageWinningAmount: Math.round(totalCollected / months)
        });

        setKittySchedule(schedule);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-gray-800">Month {label}</p>
                    <p className="text-blue-600">Monthly Collection: ₹{payload[0].value.toLocaleString()}</p>
                    <p className="text-green-600">Total Collected: ₹{payload[1].value.toLocaleString()}</p>
                    {/* <p className="text-red-600">Potential Winning: ₹{payload[2].value.toLocaleString()}</p> */}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-4 mt-32">
            <div className="flex flex-col items-center justify-center pb-20">
                <h2 className='text-[#9fb8e2] text-7xl fontStyle'>Kitty <span className='font-serif'>Scheme</span> Calculator</h2>
            </div>
            <div className="shadow-3xl p-7 mx-10 rounded-xl overflow-hidden">
                <div className="p-6 py-16 flex gap-10">
                    {/* Left Column: Input Section */}
                    <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${calculationResult ? 'w-1/3' : 'w-full'}`}>
                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Select Kitty Type</label>
                            <select
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                value={selectedKittyType.id}
                                onChange={(e) =>
                                    setSelectedKittyType(kittyTypes.find(kitty => kitty.id === parseInt(e.target.value)))
                                }
                            >
                                {kittyTypes.map((kitty) => (
                                    <option key={kitty.id} value={kitty.id}>
                                        {kitty.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Number of Members</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder={`Members (${selectedKittyType.minMembers} - ${selectedKittyType.maxMembers})`}
                                value={numberOfMembers}
                                onChange={(e) => setNumberOfMembers(e.target.value)}
                                min={selectedKittyType.minMembers}
                                max={selectedKittyType.maxMembers}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Monthly Contribution</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder={`Contribution (₹${selectedKittyType.minContribution} - ₹${selectedKittyType.maxContribution})`}
                                value={monthlyContribution}
                                onChange={(e) => setMonthlyContribution(e.target.value)}
                                min={selectedKittyType.minContribution}
                                max={selectedKittyType.maxContribution}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Number of Months</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder="Total Scheme Duration"
                                value={numberOfMonths}
                                onChange={(e) => setNumberOfMonths(e.target.value)}
                                min="3"
                                max="24"
                            />
                        </div>

                        <button
                            onClick={calculateKittyScheme}
                            className="w-full bg-white/10 backdrop-blur-sm text-white py-2 hover:bg-white hover:text-primary-default transition duration-300 ease-in-out"
                            disabled={!numberOfMembers || !monthlyContribution || !numberOfMonths}
                        >
                            Calculate Kitty Scheme
                        </button>
                    </div>

                    {/* Right Column: Results Section */}
                    <div className={` transition-all duration-500 ease-in-out ${calculationResult ? 'w-2/3' : 'w-0'}`}>
                        {calculationResult && (
                            <div>
                                <h3 className="text- font-semibold mb-2 text-[#9fb9e2]">Kitty Scheme Breakdown</h3>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Monthly Collection</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalMonthlyCollection.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Scheme Collection</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalSchemeCollection.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Average Winning Amount</p>
                                        <p className="font-bold text-green-600">
                                            ₹{calculationResult.averageWinningAmount.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

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
                                                <Area
                                                    type="monotone"
                                                    dataKey="monthlyCollection"
                                                    stroke="#8884d8"
                                                    fillOpacity={1}
                                                    fill="url(#collectionColor)"
                                                    name="Monthly Collection"
                                                />
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
            <div className="shadow-lg rounded-lg overflow-hidden mt-40">
                <div className="px-6 py-4 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#9fb9e2]">Kitty Scheme Highlights</h2>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Flexible Group Sizes</h4>
                        <p className="text-white/80">Choose from small, medium, and large group kitty schemes.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Transparent Calculations</h4>
                        <p className="text-white/80">Get detailed insights into monthly collections and potential winnings.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Comprehensive Visualization</h4>
                        <p className="text-white/80">Interactive charts to understand your kitty scheme's financial journey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KittySchemeCalculator;
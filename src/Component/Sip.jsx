import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SIPBGImage from '../../public/assets/SIPBGImage.jpg'

const SipCalculator = () => {
    // Predefined fixed interest rates set by admin
    const fixedInterestRates = [
        { id: 1, name: 'Gold SIP', rate: 8.5, minInvestment: 100, tenure: [12, 24, 36, 48, 60] },
        { id: 2, name: 'Silver SIP', rate: 7.2, minInvestment: 500, tenure: [12, 24, 36] },
        { id: 3, name: 'Diamond SIP', rate: 9.0, minInvestment: 500, tenure: [24, 36, 48, 60] }
    ];

    // State management
    const [selectedPlan, setSelectedPlan] = useState(fixedInterestRates[0]);
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [selectedTenure, setSelectedTenure] = useState('');
    const [calculationResult, setCalculationResult] = useState(null);
    const [chartData, setChartData] = useState([]);

    // Modify the chart data generation to include more precise calculations
    const calculateSipReturns = () => {
        const investment = parseFloat(monthlyInvestment);
        const tenure = parseInt(selectedTenure);
        const rate = selectedPlan.rate / 100 / 12;

        if (!investment || !tenure) {
            alert('Please fill in all details');
            return;
        }

        if (investment < selectedPlan.minInvestment) {
            alert(`Minimum investment for ${selectedPlan.name} is ₹${selectedPlan.minInvestment}`);
            return;
        }

        let totalInvested = investment * tenure;
        let finalValue = 0;
        let chartDataPoints = [];

        for (let month = 1; month <= tenure; month++) {
            const monthlyInvestment = investment * month;
            const compoundedValue = monthlyInvestment * Math.pow((1 + rate), month);

            chartDataPoints.push({
                month: month,
                invested: monthlyInvestment,
                currentValue: Math.round(compoundedValue)
            });
        }

        setCalculationResult({
            totalInvested: Math.round(totalInvested),
            finalValue: Math.round(chartDataPoints[chartDataPoints.length - 1].currentValue),
            totalGain: Math.round(chartDataPoints[chartDataPoints.length - 1].currentValue - totalInvested)
        });

        setChartData(chartDataPoints);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-gray-800">Month {label}</p>
                    <p className="text-blue-600">Total Invested: ₹{payload[0].value.toLocaleString()}</p>
                    <p className="text-green-600">Current Value: ₹{payload[1].value.toLocaleString()}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-4 mt-32 ">
            <div className="flex flex-col items-center justify-center lg:pb-20">
                <h2 className='text-[#9fb8e2] text-2xl md:text-4xl lg:text-7xl fontStyle'>Jewelry <span className='font-serif'>SIP</span> Investment Calculator</h2>
            </div>
            <div className=" shadow-3xl  lg:mx-10 rounded-xl overflow-hidden" >

                <div className={`py-16 flex flex-col lg:flex-row  ${calculationResult ? 'gap-10' : 'gap-0'}`}>
                    {/* Left Column: Input Section */}
                    <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${calculationResult ? 'w-full lg:w-1/3' : 'w-full'}`}>
                        <div className={`grid grid-cols-1 ${calculationResult ? 'grid-cols-1' : 'md:grid-cols-3'}  gap-4 items-center `}>
                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font-medium mb-2">Select SIP Plan</label>
                                <select
                                    className="w-full px-3 py-4 rounded-full  bg-white/10 backdrop-blur-sm text-white  focus:outline-none  outline-none  [&>option]:bg-gray-700 [&>option]:text-white [&>option:hover]:bg-gray-600 "
                                    value={selectedPlan.id}
                                    onChange={(e) =>
                                        setSelectedPlan(fixedInterestRates.find(plan => plan.id === parseInt(e.target.value)))
                                    }
                                >
                                    {fixedInterestRates.map((plan) => (
                                        <option key={plan.id} value={plan.id}>
                                            {plan.name} ({plan.rate}% p.a.)
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font- mb-2">Monthly Investment Amount</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-4 rounded-full  bg-white/10 backdrop-blur-sm text-white  focus:outline-none  outline-none  [&>option]:bg-gray-700 [&>option]:text-white [&>option:hover]:bg-gray-600 "
                                    placeholder={`Minimum ₹${selectedPlan.minInvestment}`}
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                                    min={selectedPlan.minInvestment}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-[#9fb9e2] font-medium mb-2">Investment Tenure (Months)</label>
                                <select
                                    className="w-full px-3 py-4 rounded-3xl  bg-white/10 backdrop-blur-sm text-white  focus:outline-none  outline-none  [&>option]:bg-gray-700 [&>option]:text-white [&>option:hover]:bg-gray-600 "
                                    value={selectedTenure}
                                    onChange={(e) => setSelectedTenure(e.target.value)}
                                >
                                    <option value="">Select Tenure</option>
                                    {selectedPlan.tenure.map((months) => (
                                        <option key={months} value={months}>
                                            {months} Months
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                onClick={calculateSipReturns}
                                className=" bg-white/10 backdrop-blur-sm px-10 text-white py-4 cursor-pointer  hover:bg-white hover:text-primary-default transition duration-300 ease-in-out rounded-full"
                                disabled={!monthlyInvestment || !selectedTenure}
                            >
                                Calculate Returns
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Results Section */}
                    <div className={` transition-all duration-500 ease-in-out ${calculationResult ? 'w-full lg:w-2/3' : 'w-0'}`}>
                        {calculationResult && (
                            <div>
                                <h3 className="text- font-semibold mb-2 text-[#9fb9e2]">Investment Projection</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Invested</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalInvested}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Final Value</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.finalValue}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Gain</p>
                                        <p className="font-bold text-green-600">
                                            ₹{calculationResult.totalGain} ({Math.round((calculationResult.totalGain / calculationResult.totalInvested) * 100)}%)
                                        </p>
                                    </div>
                                </div>

                                {chartData.length > 0 && (
                                    <div className="w-full h-[300px]  bg-white/10 backdrop-blur-md">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={chartData} >
                                                <defs >
                                                    <linearGradient id="investedColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stFopColor="#8884d8" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                                    </linearGradient>
                                                    <linearGradient id="currentValueColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis
                                                    dataKey="month"
                                                    label={{
                                                        value: '',
                                                        position: 'insideBottom',
                                                        offset: -10,
                                                        className: 'text-[#9fb9e2]'
                                                    }}
                                                />
                                                {/* <YAxis 
                                                    label={{ 
                                                        value: '', 
                                                        angle: -90, 
                                                        position: '',
                                                        className: 'text-[#9fb9e2]'
                                                    }} 
                                                    tickFormatter={(value) => `₹${value.toLocaleString()}`}
                                                /> */}
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Area
                                                    type="monotone"
                                                    dataKey="invested"
                                                    stroke="#8884d8"
                                                    fillOpacity={1}
                                                    fill="url(#investedColor)"
                                                    name="Total Invested"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="currentValue"
                                                    stroke="#82ca9d"
                                                    fillOpacity={1}
                                                    fill="url(#currentValueColor)"
                                                    name="Current Value"
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

            {/* Additional SIP Features Section */}
            <div className=" shadow-lg overflow-hidden mt-10 md:mt-20 lg:mt-40">
                <div className="px-6 py-4 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#9fb9e2]">SIP Investment Features</h2>
                </div>
                <div className="py-6 lg:p-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-7 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Flexible Plans</h4>
                        <p className="text-white/80">Choose from Gold, Silver, and Diamond SIP plans tailored for jewelry investments.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-7 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Low Entry Barrier</h4>
                        <p className="text-white/80">Start investing with as low as ₹500 per month in our Silver SIP plan.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-7 rounded-3xl">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Competitive Returns</h4>
                        <p className="text-white/80">Enjoy attractive interest rates ranging from 7.2% to 9% per annum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SipCalculator;
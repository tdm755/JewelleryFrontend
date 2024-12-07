import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const JewelleryEmiCalculator = () => {
    // Predefined jewellery loan types
    const loanTypes = [
        { id: 1, name: 'Gold Jewellery Loan', minAmount: 50000, maxAmount: 5000000, minTenure: 6, maxTenure: 36, baseRate: 12.5 },
        { id: 2, name: 'Diamond Jewellery Loan', minAmount: 100000, maxAmount: 10000000, minTenure: 12, maxTenure: 60, baseRate: 13.5 },
        { id: 3, name: 'Silver Jewellery Loan', minAmount: 25000, maxAmount: 2000000, minTenure: 6, maxTenure: 24, baseRate: 11.5 }
    ];

    // State management
    const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
    const [loanAmount, setLoanAmount] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [calculationResult, setCalculationResult] = useState(null);
    const [paymentSchedule, setPaymentSchedule] = useState([]);

    const calculateEmi = () => {
        const principal = parseFloat(loanAmount);
        const tenure = parseInt(loanTenure);
        const rate = parseFloat(interestRate) / 12 / 100;

        if (!principal || !tenure || !interestRate) {
            alert('Please fill in all details');
            return;
        }

        if (principal < selectedLoanType.minAmount || principal > selectedLoanType.maxAmount) {
            alert(`Loan amount must be between ₹${selectedLoanType.minAmount.toLocaleString()} and ₹${selectedLoanType.maxAmount.toLocaleString()}`);
            return;
        }

        if (tenure < selectedLoanType.minTenure || tenure > selectedLoanType.maxTenure) {
            alert(`Loan tenure must be between ${selectedLoanType.minTenure} and ${selectedLoanType.maxTenure} months`);
            return;
        }

        // EMI Calculation
        const emi = principal * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
        const totalPayment = emi * tenure;
        const totalInterest = totalPayment - principal;

        // Generate Amortization Schedule
        let remainingBalance = principal;
        const schedule = [];

        for (let month = 1; month <= tenure; month++) {
            const interestPayment = remainingBalance * rate;
            const principalPayment = emi - interestPayment;
            remainingBalance -= principalPayment;

            schedule.push({
                month: month,
                emi: Math.round(emi),
                principalPayment: Math.round(principalPayment),
                interestPayment: Math.round(interestPayment),
                remainingBalance: Math.round(Math.max(remainingBalance, 0))
            });
        }

        setCalculationResult({
            monthlyEmi: Math.round(emi),
            totalPayment: Math.round(totalPayment),
            totalInterest: Math.round(totalInterest)
        });

        setPaymentSchedule(schedule);
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-gray-800">Month {label}</p>
                    <p className="text-blue-600">EMI: ₹{payload[0].value.toLocaleString()}</p>
                    <p className="text-green-600">Principal Payment: ₹{payload[1].value.toLocaleString()}</p>
                    <p className="text-red-600">Interest Payment: ₹{payload[2].value.toLocaleString()}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-4 mt-32">
            <div className="flex flex-col items-center justify-center pb-20">
                <h2 className='text-[#9fb8e2] text-7xl fontStyle'>Jewellery Loan <span className='font-serif'>EMI</span> Calculator</h2>
            </div>
            <div className="shadow-3xl p-7 mx-10 rounded-xl overflow-hidden">
                <div className="p-6 py-16 flex gap-10">
                    {/* Left Column: Input Section */}
                    <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out ${calculationResult ? 'w-1/3' : 'w-full'}`}>
                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Select Jewellery Loan Type</label>
                            <select
                                  className="w-full px-3 py-4 rounded-lg  bg-white/10 backdrop-blur-sm text-white  focus:outline-none  outline-none  [&>option]:bg-gray-700 [&>option]:text-white [&>option:hover]:bg-gray-600 "
                                value={selectedLoanType.id}
                                onChange={(e) =>
                                    setSelectedLoanType(loanTypes.find(loan => loan.id === parseInt(e.target.value)))
                                }
                            >
                                {loanTypes.map((loan) => (
                                    <option key={loan.id} value={loan.id}>
                                        {loan.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Jewellery Loan Amount</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder={`Amount (₹${selectedLoanType.minAmount} - ₹${selectedLoanType.maxAmount})`}
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                min={selectedLoanType.minAmount}
                                max={selectedLoanType.maxAmount}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Loan Tenure (Months)</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder={`Tenure (${selectedLoanType.minTenure} - ${selectedLoanType.maxTenure} months)`}
                                value={loanTenure}
                                onChange={(e) => setLoanTenure(e.target.value)}
                                min={selectedLoanType.minTenure}
                                max={selectedLoanType.maxTenure}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#9fb9e2] font-medium mb-2">Interest Rate (%)</label>
                            <input
                                type="number"
                                className="w-full px-3 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white focus:outline-none"
                                placeholder={`Interest Rate (Base: ${selectedLoanType.baseRate}%)`}
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                min="8"
                                max="18"
                                step="0.1"
                            />
                        </div>

                        <button
                            onClick={calculateEmi}
                            className="w-full bg-white/10 backdrop-blur-sm text-white py-2 hover:bg-white hover:text-primary-default transition duration-300 ease-in-out"
                            disabled={!loanAmount || !loanTenure || !interestRate}
                        >
                            Calculate Jewellery Loan EMI
                        </button>
                    </div>

                    {/* Right Column: Results Section */}
                    <div className={` transition-all duration-500 ease-in-out ${calculationResult ? 'w-2/3' : 'w-0'}`}>
                        {calculationResult && (
                            <div>
                                <h3 className="text- font-semibold mb-2 text-[#9fb9e2]">Jewellery Loan Breakdown</h3>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Monthly EMI</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.monthlyEmi.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Payment</p>
                                        <p className="font-bold text-white/80">₹{calculationResult.totalPayment.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                        <p className="text-xs text-[#9fb9e2]">Total Interest</p>
                                        <p className="font-bold text-green-600">
                                            ₹{calculationResult.totalInterest.toLocaleString()} 
                                            ({Math.round((calculationResult.totalInterest / (calculationResult.totalPayment - calculationResult.totalInterest) * 100))}%)
                                        </p>
                                    </div>
                                </div>

                                {paymentSchedule.length > 0 && (
                                    <div className="w-full h-[300px] bg-white/10 backdrop-blur-md">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={paymentSchedule}>
                                                <defs>
                                                    <linearGradient id="emiColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                                    </linearGradient>
                                                    <linearGradient id="principalColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                                    </linearGradient>
                                                    <linearGradient id="interestColor" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -10 }} />
                                                <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Area
                                                    type="monotone"
                                                    dataKey="emi"
                                                    stroke="#8884d8"
                                                    fillOpacity={1}
                                                    fill="url(#emiColor)"
                                                    name="Total EMI"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="principalPayment"
                                                    stroke="#82ca9d"
                                                    fillOpacity={1}
                                                    fill="url(#principalColor)"
                                                    name="Principal Payment"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="interestPayment"
                                                    stroke="#ff7300"
                                                    fillOpacity={1}
                                                    fill="url(#interestColor)"
                                                    name="Interest Payment"
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

            {/* Jewellery Loan Features Section */}
            <div className="shadow-lg rounded-lg overflow-hidden mt-40">
                <div className="px-6 py-4 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#9fb9e2]">Jewellery Loan Features</h2>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Multiple Jewellery Options</h4>
                        <p className="text-white/80">Choose from Gold, Diamond, and Silver jewellery loans with flexible terms.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Transparent Calculations</h4>
                        <p className="text-white/80">Get detailed breakdowns of EMI, principal, and interest payments for your jewellery loan.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4">
                        <h4 className="font-bold mb-2 text-[#9fb9e2]">Visual Insights</h4>
                        <p className="text-white/80">Interactive charts to help you understand your jewellery loan repayment journey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JewelleryEmiCalculator;
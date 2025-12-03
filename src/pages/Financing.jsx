import { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Financing = () => {
    const [loanAmount, setLoanAmount] = useState(25000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [loanTerm, setLoanTerm] = useState(60);

    const calculateMonthlyPayment = () => {
        const principal = loanAmount;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm;

        if (monthlyRate === 0) {
            return (principal / numberOfPayments).toFixed(2);
        }

        const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        return monthlyPayment.toFixed(2);
    };

    const monthlyPayment = calculateMonthlyPayment();

    return (
        <div className="pt-32 pb-20 premium-gradient min-h-screen">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Flexible <span className="text-gradient">Financing Options</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We work with you to find financing solutions that fit your budget. All credit types welcome!
                    </p>
                </div>

                {/* Payment Calculator */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="glass-dark p-8 md:p-12 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">
                            Payment <span className="text-gradient">Calculator</span>
                        </h2>

                        <div className="space-y-8 mb-8">
                            {/* Loan Amount */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-gray-300">Loan Amount</label>
                                    <span className="text-electric-400 font-semibold">${loanAmount.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="5000"
                                    max="50000"
                                    step="1000"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                    className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-electric-500"
                                />
                            </div>

                            {/* Interest Rate */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-gray-300">Interest Rate (APR)</label>
                                    <span className="text-electric-400 font-semibold">{interestRate}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="3"
                                    max="15"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-electric-500"
                                />
                            </div>

                            {/* Loan Term */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-gray-300">Loan Term</label>
                                    <span className="text-electric-400 font-semibold">{loanTerm} months</span>
                                </div>
                                <input
                                    type="range"
                                    min="24"
                                    max="84"
                                    step="12"
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                                    className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-electric-500"
                                />
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-electric-500/10 border-2 border-electric-500 rounded-xl p-8 text-center">
                            <p className="text-gray-300 mb-2">Estimated Monthly Payment</p>
                            <p className="text-5xl font-bold text-electric-400">${monthlyPayment}</p>
                            <p className="text-sm text-gray-500 mt-2">*Estimate only. Actual rates may vary.</p>
                        </div>
                    </div>
                </div>

                {/* Financing Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="card text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-electric-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Good Credit</h3>
                        <p className="text-gray-400 mb-4">Competitive rates for qualified buyers with good to excellent credit scores.</p>
                        <p className="text-electric-400 font-semibold">Rates from 3.9% APR</p>
                    </div>

                    <div className="card text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gold-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Building Credit</h3>
                        <p className="text-gray-400 mb-4">Special programs for those working to improve or establish their credit.</p>
                        <p className="text-gold-400 font-semibold">Flexible Terms Available</p>
                    </div>

                    <div className="card text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-electric-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Credit Challenges</h3>
                        <p className="text-gray-400 mb-4">We work with multiple lenders to find solutions, even with past credit issues.</p>
                        <p className="text-electric-400 font-semibold">All Applications Considered</p>
                    </div>
                </div>

                {/* Application Process */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Simple <span className="text-gradient">Application Process</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="glass-dark p-6 rounded-xl text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-electric-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Apply Online</h3>
                            <p className="text-gray-400 text-sm">Fill out our quick application form</p>
                        </div>
                        <div className="glass-dark p-6 rounded-xl text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-electric-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Get Approved</h3>
                            <p className="text-gray-400 text-sm">Receive approval within hours</p>
                        </div>
                        <div className="glass-dark p-6 rounded-xl text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-electric-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Choose Your Car</h3>
                            <p className="text-gray-400 text-sm">Browse our inventory with confidence</p>
                        </div>
                        <div className="glass-dark p-6 rounded-xl text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-gold-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Drive Away</h3>
                            <p className="text-gray-400 text-sm">Hit the road in your new ride!</p>
                        </div>
                    </div>
                </div>

                {/* Pre-Approval Form */}
                <div className="max-w-3xl mx-auto">
                    <div className="glass-dark p-8 md:p-12 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">
                            Get <span className="text-gradient">Pre-Approved</span> Today
                        </h2>
                        <p className="text-gray-400 text-center mb-8">
                            Fill out the form below and we'll get back to you with financing options.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financing;

import { useState } from 'react';

const ContactForm = ({ preselectedVehicle = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: preselectedVehicle ? 'vehicle-inquiry' : 'general',
        vehicleInterest: preselectedVehicle || '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        setStatus({ type: 'loading', message: 'Sending message...' });

        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.',
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'general',
                vehicleInterest: '',
                message: '',
            });
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="(405) 123-4567"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="general">General Inquiry</option>
                        <option value="vehicle-inquiry">Vehicle Inquiry</option>
                        <option value="financing">Financing Question</option>
                        <option value="trade-in">Trade-In Valuation</option>
                        <option value="test-drive">Schedule Test Drive</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            {/* Vehicle Interest (conditional) */}
            {(formData.subject === 'vehicle-inquiry' || formData.subject === 'test-drive') && (
                <div>
                    <label htmlFor="vehicleInterest" className="block text-sm font-medium text-gray-300 mb-2">
                        Vehicle of Interest
                    </label>
                    <input
                        type="text"
                        id="vehicleInterest"
                        name="vehicleInterest"
                        value={formData.vehicleInterest}
                        onChange={handleChange}
                        className="input"
                        placeholder="e.g., 2022 Toyota Camry"
                    />
                </div>
            )}

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea"
                    placeholder="Tell us how we can help you..."
                />
            </div>

            {/* Status Message */}
            {status.message && (
                <div
                    className={`p-4 rounded-lg ${status.type === 'success'
                            ? 'bg-green-500/20 border border-green-500 text-green-400'
                            : status.type === 'error'
                                ? 'bg-red-500/20 border border-red-500 text-red-400'
                                : 'bg-electric-500/20 border border-electric-500 text-electric-400'
                        }`}
                >
                    {status.message}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status.type === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                    </span>
                )}
            </button>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
        </form>
    );
};

export default ContactForm;

import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 premium-gradient min-h-screen">
            <div className="container-custom px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have questions? We're here to help! Reach out and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="glass-dark p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Location */}
                        <div className="glass-dark p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-electric-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Visit Our Showroom</h3>
                                    <p className="text-gray-400">3736 E I-240 Service Road</p>
                                    <p className="text-gray-400">Oklahoma City, OK 73135</p>
                                    <a
                                        href="https://maps.google.com/?q=3736+E+I-240+Service+Road+Oklahoma+City+OK+73135"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-electric-400 hover:text-electric-500 text-sm mt-2 inline-block"
                                    >
                                        Get Directions →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="glass-dark p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                                    <a href="tel:4057357397" className="text-electric-400 hover:text-electric-500 text-xl font-semibold">
                                        (405) 735-7397
                                    </a>
                                    <p className="text-gray-400 text-sm mt-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="glass-dark p-6 rounded-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-electric-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                                    <a href="mailto:info@autocuecars.com" className="text-electric-400 hover:text-electric-500">
                                        info@autocuecars.com
                                    </a>
                                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="glass-dark p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Business Hours</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="text-electric-400">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-electric-400">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-gold-400">Closed</span>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="glass-dark p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Find Us</h3>
                            <div className="aspect-video bg-navy-800 rounded-lg overflow-hidden">
                                <iframe
                                    title="AutoCue Cars Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.9!2d-97.4!3d35.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI0JzAwLjAiTiA5N8KwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

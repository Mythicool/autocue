import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Luxury Cars"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60"></div>
            </div>

            {/* Animated Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom px-4 py-32 mt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-electric-500/20 border border-electric-500/50 px-4 py-2 rounded-full mb-6 animate-fade-in">
                        <span className="w-2 h-2 bg-electric-400 rounded-full animate-pulse"></span>
                        <span className="text-electric-400 text-sm font-semibold">Oklahoma City's Trusted Dealership</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                        Find Your Perfect
                        <span className="text-gradient block mt-2">Ride Today</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Quality pre-owned vehicles at honest prices. Browse our inventory of handpicked cars, trucks, and SUVs ready for Oklahoma roads.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <Link to="/inventory" className="btn-primary text-lg">
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Browse Inventory
                        </Link>
                        <Link to="/contact" className="btn-secondary text-lg">
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <div className="glass p-4 rounded-xl">
                            <div className="text-3xl font-bold text-electric-400">9+</div>
                            <div className="text-sm text-gray-400">Years in Business</div>
                        </div>
                        <div className="glass p-4 rounded-xl">
                            <div className="text-3xl font-bold text-gold-400">2500+</div>
                            <div className="text-sm text-gray-400">Cars Sold</div>
                        </div>
                        <div className="glass p-4 rounded-xl">
                            <div className="text-3xl font-bold text-electric-400">4.9★</div>
                            <div className="text-sm text-gray-400">Customer Rating</div>
                        </div>
                        <div className="glass p-4 rounded-xl">
                            <div className="text-3xl font-bold text-gold-400">100%</div>
                            <div className="text-sm text-gray-400">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-6 h-6 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;

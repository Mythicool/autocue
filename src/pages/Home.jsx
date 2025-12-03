import Hero from '../components/Hero';
import InventoryCard from '../components/InventoryCard';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { getFeaturedVehicles } from '../data/inventoryData';

const Home = () => {
    const featuredVehicles = getFeaturedVehicles(6);

    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Featured Inventory */}
            <section className="section premium-gradient">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Featured <span className="text-gradient">Inventory</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Handpicked vehicles that offer exceptional value and reliability. Every car is inspected and ready for the road.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredVehicles.map((vehicle) => (
                            <InventoryCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/inventory" className="btn-primary text-lg">
                            View All Inventory
                            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose AutoCue */}
            <section className="section bg-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Choose <span className="text-gradient">AutoCue?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We're not just about selling cars - we're about building lasting relationships with our customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quality Guarantee */}
                        <div className="card text-center group hover:border-electric-500">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-500/20 rounded-full flex items-center justify-center group-hover:bg-electric-500 transition-all duration-300">
                                <svg className="w-8 h-8 text-electric-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
                            <p className="text-gray-400">Every vehicle undergoes thorough inspection and comes with a detailed service history.</p>
                        </div>

                        {/* Honest Pricing */}
                        <div className="card text-center group hover:border-gold-500">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                <svg className="w-8 h-8 text-gold-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fair Prices</h3>
                            <p className="text-gray-400">Transparent pricing with no hidden fees. We believe in honest deals that work for everyone.</p>
                        </div>

                        {/* Financing Options */}
                        <div className="card text-center group hover:border-electric-500">
                            <div className="w-16 h-16 mx-auto mb-4 bg-electric-500/20 rounded-full flex items-center justify-center group-hover:bg-electric-500 transition-all duration-300">
                                <svg className="w-8 h-8 text-electric-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Flexible Financing</h3>
                            <p className="text-gray-400">Multiple financing options available to fit your budget. We work with all credit types.</p>
                        </div>

                        {/* Local Business */}
                        <div className="card text-center group hover:border-gold-500">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                <svg className="w-8 h-8 text-gold-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Oklahoma Local</h3>
                            <p className="text-gray-400">Family-owned business serving OKC for 9+ years. Your neighbors, your dealership.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <section className="section premium-gradient">
                <div className="container-custom">
                    <div className="glass p-12 rounded-2xl text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Find Your <span className="text-gradient">Perfect Car?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Visit our showroom today or give us a call. Our friendly team is ready to help you drive away in your dream vehicle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/inventory" className="btn-primary text-lg">
                                Browse Inventory
                            </Link>
                            <a href="tel:4057357397" className="btn-gold text-lg">
                                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (405) 735-7397
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

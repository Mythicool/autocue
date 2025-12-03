const About = () => {
    return (
        <div className="pt-32 pb-20 premium-gradient min-h-screen">
            <div className="container-custom px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        About <span className="text-gradient">AutoCue Cars</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Oklahoma City's trusted source for quality pre-owned vehicles since 2015
                    </p>
                </div>

                {/* Our Story */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="glass-dark p-8 md:p-12 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Founded in 2015, AutoCue Cars began with a simple mission: to provide Oklahoma City residents with honest, reliable, and affordable pre-owned vehicles. What started as a small family operation has grown into one of the most trusted names in the OKC automotive community.
                            </p>
                            <p>
                                We've built our reputation on transparency, quality, and customer service. Every vehicle on our lot undergoes a rigorous inspection process, and we provide full service histories so you can buy with confidence. We're not just about making a sale – we're about building relationships that last long after you drive off our lot.
                            </p>
                            <p>
                                As a locally-owned business, we understand the unique needs of Oklahoma drivers. From vehicles that can handle our unpredictable weather to options that fit every budget, we're committed to helping our neighbors find the perfect ride.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Photo */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="glass-dark p-6 rounded-2xl">
                        <img
                            src="/images/team.png"
                            alt="AutoCue Cars Team"
                            className="w-full rounded-lg"
                        />
                        <p className="text-center text-gray-400 mt-4">
                            Our friendly team is ready to help you find your perfect vehicle
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Our <span className="text-gradient">Core Values</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                <img src="/images/clipboard.png" alt="Honesty & Transparency" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Honesty & Transparency</h3>
                            <p className="text-gray-400">
                                No games, no gimmicks. We believe in straightforward pricing and honest communication every step of the way.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                <img src="/images/checkemblem.png" alt="Quality First" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
                            <p className="text-gray-400">
                                Every vehicle is carefully inspected and comes with a detailed history. We stand behind the quality of our inventory.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                <img src="/images/satisfaction.png" alt="Customer Focus" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Customer Focus</h3>
                            <p className="text-gray-400">
                                Your satisfaction is our success. We're here to answer questions, offer guidance, and support you long after the sale.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="glass p-12 rounded-2xl max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        AutoCue by the Numbers
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">9+</div>
                            <div className="text-gray-400">Years in Business</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">2,500+</div>
                            <div className="text-gray-400">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-electric-400 mb-2">4.9★</div>
                            <div className="text-gray-400">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">100%</div>
                            <div className="text-gray-400">Satisfaction Focus</div>
                        </div>
                    </div>
                </div>

                {/* Oklahoma Pride */}
                <div className="glass-dark p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center">
                    <div className="text-5xl mb-4">🏆</div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Proudly <span className="text-gradient">Oklahoma Local</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        We're not just a business in Oklahoma – we're part of the community. From supporting local schools to sponsoring community events, we believe in giving back to the place we call home. When you buy from AutoCue, you're supporting a local family business that cares about this city as much as you do.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

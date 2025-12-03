import { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const previousTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const currentTestimonial = testimonialsData[currentIndex];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-gold-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="section bg-navy-800">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our <span className="text-gradient">Customers Say</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it - hear from satisfied customers who found their perfect vehicle at AutoCue.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="glass p-8 md:p-12 rounded-2xl">
                        {/* Customer Info */}
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-electric-500"
                            />
                            <div>
                                <h4 className="text-xl font-bold text-white">{currentTestimonial.name}</h4>
                                <p className="text-gray-400 text-sm">{currentTestimonial.location}</p>
                                <p className="text-electric-400 text-sm mt-1">Purchased: {currentTestimonial.vehiclePurchased}</p>
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                            {renderStars(currentTestimonial.rating)}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            "{currentTestimonial.review}"
                        </p>

                        {/* Date */}
                        <p className="text-gray-500 text-sm">
                            {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={previousTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-electric-500 hover:bg-electric-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-electric-500 hover:bg-electric-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-electric-500 w-8' : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Google Reviews Badge */}
                <div className="text-center mt-12">
                    <div className="inline-block glass px-6 py-3 rounded-full">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                {renderStars(5)}
                            </div>
                            <span className="text-white font-semibold">4.9/5.0</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Based on 250+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

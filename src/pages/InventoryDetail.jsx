import { useParams, Link, useNavigate } from 'react-router-dom';
import { inventoryData } from '../data/inventoryData';
import { useEffect, useState } from 'react';

const InventoryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch delay
        const timer = setTimeout(() => {
            const foundVehicle = inventoryData.find(v => v.id === parseInt(id));
            setVehicle(foundVehicle);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex justify-center items-center premium-gradient">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-electric-500"></div>
            </div>
        );
    }

    if (!vehicle) {
        return (
            <div className="min-h-screen pt-32 flex flex-col justify-center items-center premium-gradient text-white">
                <h2 className="text-3xl font-bold mb-4">Vehicle Not Found</h2>
                <Link to="/inventory" className="btn-primary">Back to Inventory</Link>
            </div>
        );
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(price);
    };

    const formatMileage = (mileage) => {
        return new Intl.NumberFormat('en-US').format(mileage);
    };

    return (
        <div className="pt-24 pb-20 premium-gradient min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10"></div>
                <img
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/1920x1080/0A1628/0EA5E9?text=Car+Image';
                    }}
                />
                <div className="absolute bottom-0 left-0 w-full z-20 container-custom px-4 pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                {vehicle.certified && (
                                    <img src="/images/certifiedoremium.png" alt="Certified Premium" className="h-12" />
                                )}
                                <span className="bg-electric-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    {vehicle.condition}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                                {vehicle.year} {vehicle.make} <span className="text-electric-400">{vehicle.model}</span>
                            </h1>
                            <p className="text-xl text-gray-300">{vehicle.trim}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-5xl font-bold text-white mb-2">{formatPrice(vehicle.price)}</p>
                            <p className="text-gray-400">Plus taxes & licensing</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Specs Grid */}
                        <div className="glass-dark p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Specifications
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Mileage</p>
                                    <p className="text-white font-semibold">{formatMileage(vehicle.mileage)} mi</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Body Style</p>
                                    <p className="text-white font-semibold">{vehicle.bodyType}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Exterior</p>
                                    <p className="text-white font-semibold">{vehicle.exteriorColor || 'N/A'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Interior</p>
                                    <p className="text-white font-semibold">{vehicle.interiorColor || 'N/A'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Fuel Type</p>
                                    <p className="text-white font-semibold">{vehicle.fuelType}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Transmission</p>
                                    <p className="text-white font-semibold">{vehicle.transmission}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">Engine</p>
                                    <p className="text-white font-semibold">{vehicle.engine || 'N/A'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm">VIN</p>
                                    <p className="text-white font-semibold text-xs">{vehicle.vin || 'N/A'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="glass-dark p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Features & Options
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {vehicle.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <img src="/images/checkemblem.png" alt="Check" className="w-5 h-5 object-contain" />
                                        <span className="text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="glass-dark p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Vehicle Description</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Experience the perfect blend of performance and luxury with this {vehicle.year} {vehicle.make} {vehicle.model}.
                                Meticulously inspected and maintained, this {vehicle.bodyType} offers exceptional value.
                                Finished in a stunning {vehicle.exteriorColor || 'custom'} exterior with a comfortable {vehicle.interiorColor || 'premium'} interior.
                                Don't miss out on this incredible opportunity to own a piece of automotive excellence.
                            </p>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">

                        {/* Action Card */}
                        <div className="glass-dark p-6 rounded-2xl sticky top-32">
                            <div className="text-center mb-6">
                                <img src="/images/logo.png" alt="AutoCue" className="h-12 mx-auto mb-4" />
                                <p className="text-gray-400 text-sm">Stock #: {vehicle.id}</p>
                            </div>

                            <div className="space-y-4">
                                <Link to="/contact" className="w-full btn-primary flex items-center justify-center gap-2 group">
                                    <img src="/images/clipboard.png" alt="Schedule" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Schedule Test Drive
                                </Link>
                                <Link to="/financing" className="w-full bg-navy-700 hover:bg-navy-600 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group border border-navy-600">
                                    <img src="/images/dollarsign.png" alt="Finance" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Calculate Payment
                                </Link>
                                <a href="tel:555-123-4567" className="w-full bg-transparent border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    (555) 123-4567
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-navy-700">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <img src="/images/satisfaction.png" alt="Satisfaction" className="w-6 h-6" />
                                    Our Promise
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <img src="/images/checkemblem.png" alt="Check" className="w-4 h-4 mt-1 flex-shrink-0" />
                                        <span>150-Point Inspection</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <img src="/images/checkemblem.png" alt="Check" className="w-4 h-4 mt-1 flex-shrink-0" />
                                        <span>Free CARFAX Report</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-gray-400">
                                        <img src="/images/checkemblem.png" alt="Check" className="w-4 h-4 mt-1 flex-shrink-0" />
                                        <span>7-Day Money Back Guarantee</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="glass-dark p-6 rounded-2xl text-center">
                            <img src="/images/handshake.png" alt="Trust" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Trusted Dealership</h3>
                            <p className="text-gray-400 text-sm mb-4">Serving our community with integrity and excellence for over 20 years.</p>
                            <img src="/images/route66.png" alt="Route 66" className="h-12 mx-auto opacity-50 hover:opacity-100 transition-opacity" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;

import { Link } from 'react-router-dom';

const InventoryCard = ({ vehicle }) => {
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
        <div className="card-hover group">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                    src={vehicle.image}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600/0A1628/0EA5E9?text=Car+Image';
                    }}
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {vehicle.certified && (
                        <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                            ✓ Certified
                        </span>
                    )}
                    {vehicle.condition === 'Excellent' && (
                        <span className="bg-electric-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            🏆 Excellent
                        </span>
                    )}
                </div>
                {/* Price Badge */}
                <div className="absolute bottom-3 right-3">
                    <span className="bg-navy-900/90 backdrop-blur-sm text-white text-lg font-bold px-4 py-2 rounded-lg">
                        {formatPrice(vehicle.price)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-electric-400 transition-colors">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-gray-400 text-sm">{vehicle.trim}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-4 h-4 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>{formatMileage(vehicle.mileage)} mi</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-4 h-4 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-4 h-4 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>{vehicle.bodyType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-4 h-4 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{vehicle.fuelType}</span>
                    </div>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-2">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-navy-700 text-gray-300 px-2 py-1 rounded-full">
                            {feature}
                        </span>
                    ))}
                    {vehicle.features.length > 3 && (
                        <span className="text-xs bg-navy-700 text-electric-400 px-2 py-1 rounded-full">
                            +{vehicle.features.length - 3} more
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                    <Link
                        to={`/inventory/${vehicle.id}`}
                        className="flex-1 bg-electric-500 hover:bg-electric-600 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                    >
                        View Details
                    </Link>
                    <Link
                        to={`/contact?vehicle=${vehicle.id}`}
                        className="flex-1 bg-transparent border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-white text-center py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryCard;

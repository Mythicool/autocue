import { useState } from 'react';
import { inventoryData } from '../data/inventoryData';
import InventoryCard from '../components/InventoryCard';

const Inventory = () => {
    const [filters, setFilters] = useState({
        make: '',
        bodyType: '',
        minPrice: '',
        maxPrice: '',
        maxMileage: '',
        certified: false,
    });

    const [sortBy, setSortBy] = useState('price-asc');

    const makes = [...new Set(inventoryData.map(v => v.make))].sort();
    const bodyTypes = [...new Set(inventoryData.map(v => v.bodyType))].sort();

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const clearFilters = () => {
        setFilters({
            make: '',
            bodyType: '',
            minPrice: '',
            maxPrice: '',
            maxMileage: '',
            certified: false,
        });
    };

    let filteredVehicles = inventoryData.filter(vehicle => {
        if (filters.make && vehicle.make !== filters.make) return false;
        if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
        if (filters.minPrice && vehicle.price < parseInt(filters.minPrice)) return false;
        if (filters.maxPrice && vehicle.price > parseInt(filters.maxPrice)) return false;
        if (filters.maxMileage && vehicle.mileage > parseInt(filters.maxMileage)) return false;
        if (filters.certified && !vehicle.certified) return false;
        return true;
    });

    // Sort vehicles
    filteredVehicles = filteredVehicles.sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'mileage-asc':
                return a.mileage - b.mileage;
            case 'year-desc':
                return b.year - a.year;
            default:
                return 0;
        }
    });

    return (
        <div className="pt-32 pb-20 premium-gradient min-h-screen">
            <div className="container-custom px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Browse Our <span className="text-gradient">Inventory</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'} available
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="glass-dark p-6 rounded-xl sticky top-32">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Filters</h3>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-electric-400 hover:text-electric-500 transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Make */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Make</label>
                                    <select
                                        name="make"
                                        value={filters.make}
                                        onChange={handleFilterChange}
                                        className="input"
                                    >
                                        <option value="">All Makes</option>
                                        {makes.map(make => (
                                            <option key={make} value={make}>{make}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Body Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Body Type</label>
                                    <select
                                        name="bodyType"
                                        value={filters.bodyType}
                                        onChange={handleFilterChange}
                                        className="input"
                                    >
                                        <option value="">All Types</option>
                                        {bodyTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            name="minPrice"
                                            placeholder="Min"
                                            value={filters.minPrice}
                                            onChange={handleFilterChange}
                                            className="input"
                                        />
                                        <input
                                            type="number"
                                            name="maxPrice"
                                            placeholder="Max"
                                            value={filters.maxPrice}
                                            onChange={handleFilterChange}
                                            className="input"
                                        />
                                    </div>
                                </div>

                                {/* Max Mileage */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Max Mileage</label>
                                    <input
                                        type="number"
                                        name="maxMileage"
                                        placeholder="e.g., 50000"
                                        value={filters.maxMileage}
                                        onChange={handleFilterChange}
                                        className="input"
                                    />
                                </div>

                                {/* Certified Only */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="certified"
                                        name="certified"
                                        checked={filters.certified}
                                        onChange={handleFilterChange}
                                        className="w-4 h-4 text-electric-500 bg-navy-800 border-gray-700 rounded focus:ring-electric-500 focus:ring-2"
                                    />
                                    <label htmlFor="certified" className="ml-2 text-sm text-gray-300">
                                        Certified Vehicles Only
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Sort Controls */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-400">
                                Showing {filteredVehicles.length} {filteredVehicles.length === 1 ? 'result' : 'results'}
                            </p>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="input w-auto"
                            >
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="mileage-asc">Mileage: Low to High</option>
                                <option value="year-desc">Year: Newest First</option>
                            </select>
                        </div>

                        {/* Vehicle Grid */}
                        {filteredVehicles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredVehicles.map((vehicle) => (
                                    <InventoryCard key={vehicle.id} vehicle={vehicle} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-2xl font-bold text-white mb-2">No vehicles found</h3>
                                <p className="text-gray-400 mb-6">Try adjusting your filters to see more results</p>
                                <button onClick={clearFilters} className="btn-primary">
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;

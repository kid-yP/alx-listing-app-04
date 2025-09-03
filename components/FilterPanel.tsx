import React from 'react';

const FilterPanel: React.FC = () => {
  return (
    <aside className="bg-white p-4 rounded-lg shadow-md w-full md:w-64">
      <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          id="location"
          placeholder="e.g., Addis Ababa"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium mb-1">Property Type</label>
        <select
          id="type"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium mb-1">Max Price (ETB)</label>
        <input
          type="number"
          id="price"
          placeholder="e.g., 1,000,000"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default FilterPanel;
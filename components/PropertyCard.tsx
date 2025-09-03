import React from "react";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    name,
    address,
    rating,
    category,
    price,
    offers,
    image,
    discount,
  } = property;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {address.city}, {address.state}, {address.country}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="font-medium">{rating.toFixed(2)}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {category.map((cat, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-4">
          <div>🛏 {offers.bed} Bed</div>
          <div>🚿 {offers.shower} Shower</div>
          <div>👥 {offers.occupants} Guests</div>
        </div>
        <div className="text-lg font-bold">${price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
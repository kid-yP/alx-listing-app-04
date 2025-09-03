import React from "react";
import PropertyCard from "./PropertyCard";
import { PropertyProps } from "@/interfaces";

interface PropertyListProps {
  properties: PropertyProps[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          // Use index fallback key if no unique ID exists, but better to use something unique
          <PropertyCard
            key={`${property.name}-${property.address.city}-${index}`}
            property={property}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
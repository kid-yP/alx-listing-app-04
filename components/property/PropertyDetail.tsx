import React from 'react';

interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    imageUrl?: string;
    [key: string]: any;
}

interface PropertyDetailProps {
    property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
    return (
        <div className="property-detail">
            {property.imageUrl && (
                <img src={property.imageUrl} alt={property.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
            )}
            <h2>{property.title}</h2>
            <p>{property.address}</p>
            <p>{property.description}</p>
            <ul>
                {Object.entries(property).map(([key, value]) => {
                    if (
                        [
                            'id',
                            'ID',
                            'title',
                            'Title',
                            'description',
                            'Description',
                            'price',
                            'Price',
                            'address',
                            'Address',
                            'imageUrl',
                            'ImageUrl',
                            'imageURL'
                        ].includes(key)
                    )
                        return null;
                    return (
                        <li key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </li>            
                    );
                })}
            </ul>
        </div>
    );
};

export default PropertyDetail;
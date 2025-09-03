import React from 'react';

const Hero: React.FC = () => {
return (
    <section
        className="text-white py-20 px-4"
        style={{
            backgroundImage: "url('/assets/image/hero_back.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!            </h1>
            <p className="text-lg md:text-xl mb-8">
            The best prices for over 2 million properties worldwide            </p>
            <a
                href="#properties"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
                Browse Listings
            </a>
        </div>
    </section>
);
};

export default Hero;
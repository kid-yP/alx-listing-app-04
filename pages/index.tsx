import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import FilterPanel from "@/components/FilterPanel";
import PropertyList from "@/components/PropertyList";
import Footer from "@/components/layout/Footer";


import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
          <aside className="md:w-1/3 lg:w-1/4">
            <FilterPanel />
          </aside>
          <section className="md:w-2/3 lg:w-3/4">
            {/* Pass the sample data here */}
            <PropertyList properties={PROPERTYLISTINGSAMPLE} />
          </section>
          
        </div>
      </main>
    </div>
  );
};

export default Home;
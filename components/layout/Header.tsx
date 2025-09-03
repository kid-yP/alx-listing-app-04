import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        StayFinder
      </div>

      {/* Accommodation Types */}
      <nav className="hidden md:flex space-x-6">
        {["Rooms", "Mansion", "Countryside", "Apartments", "Villas"].map((type) => (
          <a
            key={type}
            href="#"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            {type}
          </a>
        ))}
      </nav>

      {/* Search bar */}
      <div className="flex-1 mx-6 hidden lg:flex">
        <Input
          type="text"
          placeholder="Search destinations, properties..."
          className="w-full rounded-md"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Button variant="outline">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
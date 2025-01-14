import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">AI Photo Service</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600">
            Портфолио
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-indigo-600">
            FAQ
          </Link>
        </div>
      </nav>
    </header>
  );
};
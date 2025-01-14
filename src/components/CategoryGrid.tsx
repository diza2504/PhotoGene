import React from 'react';
import { categories } from '../data/categories';

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
            <p className="mt-2 text-gray-600">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
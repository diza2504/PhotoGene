import React from 'react';
import { Benefits } from '../components/Benefits';
import { CategoryGrid } from '../components/CategoryGrid';
import { MessageSquare } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Уникальные фото с помощью ИИ
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                Создаем профессиональные фотографии для любых целей по вашим пожеланиям
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Наши преимущества
          </h2>
          <Benefits />
        </div>

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Категории фотографий
          </h2>
          <CategoryGrid />
        </div>
      </main>
    </div>
  );
};
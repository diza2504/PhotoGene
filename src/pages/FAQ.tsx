import React from 'react';
import { faqs } from '../data/faq';

export const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Часто задаваемые вопросы
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
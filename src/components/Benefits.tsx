import React from 'react';
import { Shield, Clock, Lock, Image } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Без авторских прав',
      description: 'Полные права на использование фотографий'
    },
    {
      icon: <Image className="h-8 w-8 text-indigo-600" />,
      title: 'Индивидуальный подход',
      description: 'Создаем фото точно по вашим пожеланиям'
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: 'Быстрая работа',
      description: 'Начинаем работу сразу после обращения'
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: 'Безопасная оплата',
      description: 'Оплата только после утверждения фото'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center">{benefit.icon}</div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
          <p className="mt-2 text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
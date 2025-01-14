import { PhotoCategory } from '../types';

export const categories: PhotoCategory[] = [
  {
    id: 'portraits',
    name: 'Портреты',
    description: 'Профессиональные портретные фотографии для любых целей',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'products',
    name: 'Продуктовые фото',
    description: 'Качественные фотографии товаров для интернет-магазинов',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'interiors',
    name: 'Интерьеры',
    description: 'Фотографии интерьеров для недвижимости и дизайна',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
  }
];
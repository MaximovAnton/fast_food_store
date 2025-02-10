import React, { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const dishTypes = [
    "Салаты",
    "Супы",
    "Паста",
    "Пицца",
    "Ризотто",
    "Напитки",
    "Соусы"
];

const italianDishes = [
    "Маргарита",
    "Карбонара",
    "Болоньезе",
    "Лазанья",
    "Феттучини Альфредо",
    "Ризотто",
    "Минестроне",
    "Брускетта",
    "Тирамису",
    "Панна-котта",
    "Оссобуко",
    "Кальцоне",
    "Капрезе",
    "Панцанелла",
    "Гноччи",
    "Арростичини",
    "Фокачча",
    "Пармиджана ди меланзане",
    "Пастьера неаполитана",
    "Сальтимбокка"
];

let activeIndex = 0; 

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 p-1 rounded-2xl', className)}>
      {dishTypes.map((types, index) => (
        <a className={cn('px-6 py-2 rounded-2xl bg-[#444c5c] text-white hover:bg-[#e1b16a] active:bg-[#ce5a57] transition-all shadow-md font-amatic text-2xl', 
                        activeIndex === index && 'bg-[#e1b16a] shadow-md shadow-gray-200 text-black')} href={`${types}`} key={index}> 
                        {types} 
        </a>
      ))}
    </div>
  );
};
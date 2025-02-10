import React, { FC } from 'react';
import { FilterCheckbox, Title } from '.';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

const pizzaIngredients = [
  { text: "Сыр Моцарелла", value: "1" },
  { text: "Томатный соус", value: "2" },
  { text: "Пепперони", value: "3" },
  { text: "Грибы", value: "4" },
  { text: "Ветчина", value: "5" },
  { text: "Оливки", value: "6" },
  { text: "Болгарский перец", value: "7" },
  { text: "Ананасы", value: "8" },
  { text: "Курица", value: "9" },
  { text: "Бекон", value: "10" },
  { text: "Лук", value: "11" },
  { text: "Чеснок", value: "12" },
  { text: "Орегано", value: "13" },
  { text: "Базилик", value: "14" },
  { text: "Тунец", value: "15" },
  { text: "Сливочный соус", value: "16" },
  { text: "Острый перец", value: "17" },
  { text: "Мясной фарш", value: "18" },
  { text: "Колбаски", value: "19" },
  { text: "Пармезан", value: "20" }
];

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text={'Фильтрация'} size={'sm'} className='mb-5 font-bold'/>

        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="Можно собирать" value='1'/>
            <FilterCheckbox text="Новинки" value="2"/>
        </div>

        <div className='mt-5 border-y border-y-neutral-400 py-4 pb-7'>
          <p className='font-bold mb-3'>Цена от и до:</p>
          <div className='flex gap-3 mb-5'>
            <Input type="numder" placeholder='0' min={0} max={20000} defaultValue={0}/>
            <Input type="numder" placeholder='20000' min={0} max={20000} defaultValue={20000}/>
          </div>
          <RangeSlider min={0} max={20000} step={10} value={[0, 20000]}/>
        </div>
        
        <CheckboxFiltersGroup title={''} items={pizzaIngredients} defaultItems={[]} limit={5}/>

    </div>
  );
};
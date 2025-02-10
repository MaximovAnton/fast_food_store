import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-slate-500 px-4 h-[52] rounded-2xl cursor-pointer font-amatic text-2xl', className)}>
        <ArrowUpDown size={16}/>
        <b>сортировка:</b>
        <b className='text-primary'>основное</b>
    </div>
  );
};
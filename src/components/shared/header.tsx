import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { AnimatedLogo } from './animatedLogo';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            <AnimatedLogo />

            <div className='flex items-center gap-3 mx-4'>
                <Button variant="outline" className='flex items-center gap-1'> <User /> Войти </Button>

                <div>
                    <Button className='group relative'>
                        <b>520 $</b>
                        <span className='h-full w-[1px] bg-black/70 mx-3'></span>
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}/>
                            <b>3</b>
                        </div>
                        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover-translate-x-0'></ArrowRight>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  );
};
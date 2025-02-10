import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { Categories, Container, SortPopup } from './index';

interface Props {
  className?: string;
}

export const TopBar: FC<Props> = ({ className }) => {
  return (
    <Container className={cn('flex justify-between items-center sticky top-0',className)}>
      <Categories/>
      <SortPopup/>
    </Container>
  );
};
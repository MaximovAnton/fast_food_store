import React, { FC } from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const AnimatedLogo: FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex items-center h-12 w-[200px]">
        <div className="absolute bg-[#ce5a57] animate-mainBlock h-full"></div>

        <h1 className="relative text-2xl opacity-0 animate-mainFadeIn uppercase text-[#180c0b]">
          CHERRY BAR
          <div className="absolute top-[-55px] right-[-15px] animate-fall">
            <Image src={'/pizza.webp'} alt="logo" width={15} height={15} />
          </div>
        </h1>

        <div className="absolute top-[-55px] right-0 animate-fall">
          <Image src={'/westie.png'} alt="logo" width={55} height={55} />
        </div>
      </div>
      <div className="relative flex h-8 mt-[-10px] overflow-hidden pr-auto perspective-[500px]">
        <div className="absolute bg-[#ce5a57] animate-secBlock h-full"></div>
        <p className="text-black text-lg font-bold uppercase tracking-wider opacity-0 animate-secFadeIn font-amatic pl-[5px]">
          Вкусно вишенке собаke
        </p>
      </div>
    </div>
    
  );
};
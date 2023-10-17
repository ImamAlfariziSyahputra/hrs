import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

type FlagProps = {
  src: string | StaticImport;
  active: boolean;
  onClick?: () => void;
};

export default function Flag({ src, active, onClick }: FlagProps) {
  return (
    <button
      type='button'
      className={cn(
        `relative inline-block rounded-full border-2 bg-background p-2 transition-colors`,
        active && 'border-primary'
      )}
      onClick={onClick}
    >
      <Image
        src={src}
        alt='USA Flag'
        width='0'
        height='0'
        sizes='100vw'
        className='h-10 w-10 rounded-full object-cover'
      />

      {/* CHECK✅ ICON */}
      <div
        className={cn(
          'absolute -right-2 -top-2 inline-block rounded-full border-4 border-background bg-primary p-1 text-white opacity-0 transition-opacity',
          active && 'opacity-100'
        )}
      >
        <Check size={16} />
      </div>
    </button>
  );
}

import React from 'react';

import { dummyArray } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export default function MenuItemSkeleton() {
  return (
    <div className='mb-2.5 mt-3 grid grid-cols-1 gap-2.5 px-3'>
      {dummyArray(10).map((idx) => (
        <div key={idx} className='flex items-center gap-2'>
          <Skeleton className='h-6 w-6' />
          <Skeleton className='h-6 w-3/4' />
        </div>
      ))}
    </div>
  );
}

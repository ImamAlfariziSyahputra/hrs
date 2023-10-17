import { useState } from 'react';
import Image from 'next/image';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import IDFlag from 'public/svg/id.png';
import USAFlag from 'public/svg/usa.svg';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Flag from './flag';

export default function LangSwitch() {
  const [locale, setLocale] = useState<'en' | 'id'>('en');

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='rounded-full bg-background text-muted-foreground transition-all duration-300 hover:ring-1 hover:ring-border hover:ring-offset-4 dark:hover:ring-offset-body'
        >
          <Image
            src={locale === 'en' ? USAFlag : IDFlag}
            alt='USA Flag'
            width='0'
            height='0'
            sizes='100vw'
            className='h-7 w-7 object-cover'
          />
        </Button>
      </SheetTrigger>
      <SheetContent closeButton={false}>
        <SheetHeader className='mb-8 flex flex-row items-center justify-between'>
          <SheetTitle>Select Language</SheetTitle>
          <SheetPrimitive.Close className='!m-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
            <X size={20} />
            <span className='sr-only'>Close</span>
          </SheetPrimitive.Close>
        </SheetHeader>

        <div className=''>
          <ul className='inline-flex flex-wrap items-center gap-6'>
            <li>
              <Flag
                src={USAFlag}
                onClick={() => setLocale('en')}
                active={locale === 'en'}
              />
            </li>
            <li>
              <Flag
                src={IDFlag}
                onClick={() => setLocale('id')}
                active={locale === 'id'}
              />
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

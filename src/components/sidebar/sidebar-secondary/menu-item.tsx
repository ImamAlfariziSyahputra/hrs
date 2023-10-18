import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { MenuItemChildren } from '@/types/sidebar.type';
import { cn } from '@/lib/utils';

type MenuItemProps = {
  item: MenuItemChildren;
};

export default function MenuItem({ item }: MenuItemProps) {
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (dropdownRef.current)
      setOpen(
        !!dropdownRef.current.nextElementSibling?.querySelector('.active')
      );
  }, []);

  //! dropdown (parent)
  if (item.children) {
    return (
      <li>
        <button
          type='button'
          ref={dropdownRef}
          className='flex min-h-[2rem] cursor-pointer items-center gap-1 px-3 transition-colors hover:text-primary [&:has(+_ul_.active)>*]:text-primary'
          onClick={() => setOpen(!open)}
        >
          <ChevronRight
            size={16}
            className={cn(
              'chevron-right transition-transform duration-300',
              open ? 'rotate-90' : 'rotate-0'
            )}
          />
          <span>{item.label}</span>
        </button>

        <ul
          className={cn(
            'grid grid-rows-[0fr] pl-4 transition-[grid-template-rows] duration-300',
            open && 'grid-rows-[1fr]'
          )}
        >
          <div className='overflow-hidden'>
            {item.children.map((i, idx) => (
              <MenuItem key={idx} item={i} />
            ))}
          </div>
        </ul>
      </li>
    );
  }

  //! link
  return (
    <li key={item.value}>
      <Link
        href={item.value}
        className={cn(
          'flex min-h-[2rem] items-center gap-1 px-3 transition-colors hover:text-primary',
          pathname === item.value && 'active text-primary'
        )}
      >
        <item.icon size={16} />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTopbarStore } from '@/store/use-topbar-store';
import { NavLink } from '@mantine/core';
import { isEqual } from 'lodash';
import { ChevronRight } from 'lucide-react';

import { type MenuItemChildren } from '@/types/sidebar.type';
import { cn } from '@/lib/utils';

const split = ({ value, delimiter }: { value: string; delimiter: string }) =>
  value.split(delimiter).slice(1, value.split(delimiter).length);

type MenuItemProps = {
  item: MenuItemChildren;
  depth: number;
};

export default function MenuItem({ item, depth = 0 }: MenuItemProps) {
  const pathname = usePathname();

  const [parentActive, setParentActive] = useState(false);
  const [open, setOpen] = useState(false);

  const setTopbarTitle = useTopbarStore((state) => state.setTitle);

  const pathnameSplit = split({ value: pathname, delimiter: '/' }).slice(
    0,
    depth + 1
  );

  const linkSplit = split({ value: item.value, delimiter: '/' }).slice(
    0,
    depth + 1
  );

  useEffect(() => {
    //! set parent active
    setParentActive(isEqual(pathnameSplit, linkSplit));

    //! set topbar-title based on active link
    if (pathname === item.value) setTopbarTitle(item.label);
  }, [pathname]);

  //! Dropdown (parent)
  return typeof item.children === 'object' ? (
    <NavLink
      key={`parent-${item.label}`}
      component='button'
      opened={open || parentActive}
      leftSection={
        <ChevronRight
          className={cn(
            'chevron transition-all',
            parentActive && 'text-primary'
          )}
          size={16}
        />
      }
      label={
        <span className={cn(parentActive && 'text-primary transition-colors')}>
          {item.label}
        </span>
      }
      rightSection={<span />}
      childrenOffset={20}
      onClick={() => setOpen(open ? !parentActive : !open)}
    >
      {item.children.map((i, idx) => (
        <MenuItem key={`${depth}-${idx}`} item={i} depth={depth + 1} />
      ))}
    </NavLink>
  ) : (
    //! Link
    <NavLink
      href={item.value}
      component={Link}
      label={
        <span
          className={cn(
            'flex items-center gap-1.5',
            pathname === item.value && 'text-primary transition-colors'
          )}
        >
          {item.label}
        </span>
      }
      leftSection={
        <item.icon
          size={16}
          className={cn(
            pathname === item.value && 'text-primary transition-colors'
          )}
        />
      }
    />
  );
}

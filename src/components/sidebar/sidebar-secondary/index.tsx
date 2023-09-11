'use client';

import React from 'react';
import Link from 'next/link';
import { useSidebarStore } from '@/store/use-sidebar-store';
import { NavLink } from '@mantine/core';
import { ChevronRight } from 'lucide-react';

import { type MenuItemChildren } from '@/types/sidebar.type';

export default function SidebarSecondary() {
  const selectedMain = useSidebarStore((state) => state.selectedMain);

  return (
    <nav className='w-[220px] shrink-0 border-r'>
      <h1 className='px-6 py-3.5 text-lg'>{selectedMain?.label}</h1>

      {selectedMain?.children.map((item) => {
        return <MenuItem key={item.label} item={item} depth={0} />;
      })}
    </nav>
  );
}

type MenuItemProps = {
  item: MenuItemChildren;
  depth: number;
};

const MenuItem = ({ item, depth = 0 }: MenuItemProps) => {
  //! Parent
  return typeof item.children === 'object' ? (
    <NavLink
      key={`parent-${item.label}`}
      label={item.label}
      childrenOffset={20}
      leftSection={
        <ChevronRight className='chevron transition-transform' size={16} />
      }
      rightSection={<span />}
    >
      {item.children.map((i, idx) => (
        <MenuItem key={`${depth}-${idx}`} item={i} depth={depth + 1} />
      ))}
    </NavLink>
  ) : (
    //! Child
    <NavLink
      href={item.value}
      component={Link}
      label={<span className='flex items-center gap-1.5'>{item.label}</span>}
      leftSection={<item.icon size={16} />}
    />
  );
};

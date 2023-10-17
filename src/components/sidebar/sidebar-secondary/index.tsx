'use client';

import { useSidebarMainStore } from '@/store/use-sidebar-main-store';

import MenuItem from './menu-item';

export default function SidebarSecondary() {
  const selectedMain = useSidebarMainStore((state) => state.selectedMain);

  return (
    <nav className='w-[220px] shrink-0 border-r bg-background'>
      <h1 className='px-6 py-3.5 text-lg'>{selectedMain?.label}</h1>

      {selectedMain?.children.map((item) => {
        return <MenuItem key={item.label} item={item} depth={0} />;
      })}
    </nav>
  );
}

import { create } from 'zustand';

import { type MenuItem } from '@/types/sidebar.type';
import sidebarData from '@/data/sidebar-data';

type SidebarState = {
  selectedMain: MenuItem;
  setSelectedMain: (menuItem: MenuItem) => void;
};

export const useSidebarStore = create<SidebarState>()((set) => ({
  selectedMain: sidebarData[0],
  setSelectedMain: (menuItem) => set({ selectedMain: menuItem }),
}));

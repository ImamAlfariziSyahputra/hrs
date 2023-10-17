import { create } from 'zustand';

import { type MenuItem } from '@/types/sidebar.type';
import sidebarData from '@/data/sidebar-data';

type SidebarMainState = {
  selectedMain: MenuItem;
  setSelectedMain: (menuItem: MenuItem) => void;
};

export const useSidebarMainStore = create<SidebarMainState>()((set) => ({
  selectedMain: sidebarData[0],
  setSelectedMain: (menuItem) => set({ selectedMain: menuItem }),
}));

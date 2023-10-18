import { create } from 'zustand';

import { MenuItem } from '@/types/sidebar.type';

type SidebarMainState = {
  show: boolean;
  setShow: (bool: boolean) => void;
  selectedMain: MenuItem | null;
  setSelectedMain: (payload: MenuItem) => void;
};

export const useSidebarMainStore = create<SidebarMainState>()((set) => ({
  show: true,
  setShow: (bool) => set({ show: bool }),
  selectedMain: null,
  setSelectedMain: (payload) => set({ selectedMain: payload }),
}));

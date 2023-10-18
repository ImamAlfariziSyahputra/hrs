import { create } from 'zustand';

type SidebarSecondaryState = {
  show: boolean;
  setShow: (bool: boolean) => void;
};

export const useSidebarSecondaryStore = create<SidebarSecondaryState>()(
  (set) => ({
    show: true,
    setShow: (bool) => set({ show: bool }),
  })
);

import { create } from 'zustand';

type TopbarState = {
  title: string | null;
  setTitle: (title: string) => void;
};

export const useTopbarStore = create<TopbarState>()((set) => ({
  title: null,
  setTitle: (title) => set({ title }),
}));

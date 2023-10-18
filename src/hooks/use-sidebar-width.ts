import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';

export const useSidebarWidth = () => {
  const sidebarMainShow = useSidebarMainStore((state) => state.show);
  const sidebarSecondaryShow = useSidebarSecondaryStore((state) => state.show);

  const mainWidth = sidebarMainShow ? 80 : 0;
  const secondaryWidth = sidebarSecondaryShow ? 220 : 0;

  return mainWidth + secondaryWidth;
};

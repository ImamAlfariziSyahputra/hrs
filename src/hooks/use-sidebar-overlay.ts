import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';

import { useWindowSize } from '@/lib/react-hookz';

export const useSidebarOverlay = () => {
  const window = useWindowSize();

  const showMain = useSidebarMainStore((state) => state.show);
  const showSecondary = useSidebarSecondaryStore((state) => state.show);

  const showBlurOverlay = window.width < 1280 && (showMain || showSecondary);

  return { showBlurOverlay };
};

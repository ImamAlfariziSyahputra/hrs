import { useWindowSize } from '@react-hookz/web';

export const useWindowWidth = () => {
  const window = useWindowSize();

  const isSm = window.width > 425;
  const isMd = window.width > 768;
  const isLg = window.width > 1024;
  const isXl = window.width > 1280;
  const is2Xl = window.width > 1536;

  return { isSm, isMd, isLg, isXl, is2Xl };
};

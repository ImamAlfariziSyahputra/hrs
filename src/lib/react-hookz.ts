import { useWindowSize as useWindowSizeHook } from '@react-hookz/web';

export const useWindowSize = () => {
  const window = useWindowSizeHook(undefined, true);

  return window;
};

import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { useMounted } from '@/hooks/use-mounted';
import { Button } from '@/components/ui/button';

export default function ThemeSwitch() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  return (
    mounted && (
      <Button
        variant='outline'
        size='icon'
        className='rounded-full bg-background hover:bg-background'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? (
          <RiSunFill className='h-5 w-5 text-yellow-500' />
        ) : (
          <RiMoonFill className='h-5 w-5 text-yellow-500' />
        )}
      </Button>
    )
  );
}

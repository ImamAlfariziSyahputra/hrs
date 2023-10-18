import { type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type LiProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Li({ icon: Icon, label, active, onClick }: LiProps) {
  return (
    <li>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type='button'
              className={cn(
                'grid h-12 w-12 cursor-pointer place-items-center rounded-2xl text-[#94a3b8] transition-colors',
                active && 'bg-primary/10 text-primary'
              )}
              onClick={onClick}
            >
              <Icon size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side='right' className='bg-gray-950 dark:bg-primary'>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
}

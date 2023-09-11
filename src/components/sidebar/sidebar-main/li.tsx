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
              onClick={onClick}
              className={cn(
                'grid h-12 w-12 cursor-pointer place-items-center rounded-2xl text-[#94a3b8] transition-colors',
                active && 'bg-[#D1FAE5] text-[#10b981]'
              )}
            >
              <Icon size={20} />
            </button>
          </TooltipTrigger>
          <TooltipContent side='right' className='bg-gray-950'>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
}

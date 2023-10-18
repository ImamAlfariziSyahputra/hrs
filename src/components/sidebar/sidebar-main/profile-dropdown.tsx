import { LucideUserCircle2, Settings } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='h-10 w-10 cursor-pointer rounded-full p-0 transition-all hover:ring-1 hover:ring-primary hover:ring-offset-4 dark:hover:ring-offset-body'
        >
          <Avatar className='h-full w-full'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side='right'
        align='end'
        sideOffset={15}
        className='p-0'
      >
        <div className='flex items-center gap-3 bg-[#F8FAFC] p-6 dark:bg-[#263345]'>
          <Avatar className='h-14 w-14 shrink-0'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='shrink-0'>
            <p className='text-sm'>Matt Murdock</p>
            <p className='text-xs text-muted-foreground'>Web Developer</p>
          </div>
        </div>
        <div className='space-y-1 p-1.5'>
          <DropdownMenuItem className='group flex cursor-pointer items-center gap-2.5 text-xs focus:bg-muted'>
            <LucideUserCircle2
              size={16}
              className='text-muted-foreground group-hover:text-primary'
            />
            <div className=''>
              <p>Profile</p>
              <p className='text-muted-foreground'>View your profile</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='group flex cursor-pointer items-center gap-2.5 text-xs focus:bg-muted'>
            <Settings
              size={16}
              className='text-muted-foreground group-hover:text-primary'
            />
            <div className=''>
              <p>Settings</p>
              <p className='text-muted-foreground'>Account settings</p>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

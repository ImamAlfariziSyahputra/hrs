import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='h-9 w-9 cursor-pointer rounded-full p-0 transition-all hover:ring-1 hover:ring-primary hover:ring-offset-4 dark:hover:ring-offset-body'
        >
          <Avatar className='h-full w-full'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        sideOffset={10}
        className='w-64 p-0 text-sm'
      >
        <div className='flex flex-col items-center border-b border-b-border p-6'>
          <Avatar className='mb-3 h-20 w-20'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='font-medium'>Matt Murdock</p>
          <p className='mb-4 text-xs text-muted-foreground'>
            murdock@gmail.com
          </p>

          <Button
            variant='outline'
            className='w-full dark:border-slate-600 dark:bg-slate-700 dark:hover:bg-slate-700/80'
          >
            Manage Account
          </Button>
        </div>

        <div className='p-6'>
          <Button
            variant='outline'
            className='w-full dark:border-slate-600 dark:bg-slate-700 dark:hover:bg-slate-700/80'
          >
            Logout
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import './globals.scss';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/provider/theme-provider';
import SidebarMain from '@/components/sidebar/sidebar-main';
import SidebarSecondary from '@/components/sidebar/sidebar-secondary';
import Topbar from '@/components/topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HRS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cn(inter.className, 'flex bg-body text-foreground')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
            <SidebarMain />
            <SidebarSecondary />

            <main className='w-full px-10'>
              <Topbar />
              {children}
            </main>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

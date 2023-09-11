import './globals.scss';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { cn } from '@/lib/utils';
import SidebarMain from '@/components/sidebar/sidebar-main';
import SidebarSecondary from '@/components/sidebar/sidebar-secondary';

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
      <body className={cn(inter.className, 'flex')}>
        <MantineProvider>
          <SidebarMain />
          <SidebarSecondary />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

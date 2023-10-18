import './globals.scss';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { cn } from '@/lib/utils';
import Main from '@/components/main';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Sidebar from '@/components/sidebar';

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
      <body className={cn(inter.className, 'relative bg-body text-foreground')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
            <Sidebar />

            <Main>{children}</Main>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

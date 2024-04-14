import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex-1">
        <Header />
        <main className="container h-full w-full pt-20">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

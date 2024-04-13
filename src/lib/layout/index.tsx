import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="wrapper h-screen pt-20 ">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

import type { Metadata, Viewport } from 'next';

import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'nextarter-tailwind';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js + TailwindCSS v3 + TypeScript template',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          // eslint-disable-next-line prettier/prettier
          'flex h-screen overflow-x-hidden whitespace-nowrap bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;

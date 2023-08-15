import { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import '@/styles/globals.css';

const outfit = Outfit({ subsets: ['latin'] });
interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: 'Demo',
        template: '%s | Demo',
    },
    description: 'Demo app for internship at mobilics india pvt ltd',
    keywords: ['demo', 'mobilics', 'internship'],
    creator: 'Mobilics India Pvt Ltd',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen overflow-y-hidden bg-background font-sans antialiased',
                    outfit.className,
                )}
            >
                {children}
                <Analytics />
                <TailwindIndicator />
            </body>
        </html>
    );
}

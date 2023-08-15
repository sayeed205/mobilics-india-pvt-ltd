import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <Link
                href="/dashboard"
                className={cn(
                    buttonVariants({
                        variant: 'outline',
                    }),
                )}
            >
                Dashboard
            </Link>
        </main>
    );
}

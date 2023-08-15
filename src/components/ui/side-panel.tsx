'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarItem } from '@/types/sidebar';
import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { buttonVariants } from './button';

interface SidePanelProps {
    items: SidebarItem[];
}

export default function SidePanel({ items }: SidePanelProps) {
    const currentRoute = usePathname();
    return (
        <aside className="h-screen bg-white border-r-2 border-r-primary">
            <div className="flex items-center justify-center px-16 py-4">
                <Link
                    href="/dashboard"
                    className={cn(buttonVariants({ variant: 'outline-muted' }))}
                >
                    Dashboard
                </Link>
            </div>
            <ul className="flex flex-col mr-5 ml-9 text-primary">
                {items.map((item) => (
                    <li className="flex items-center gap-3 align-middle">
                        <Icons.right />
                        <Link
                            href={item.path}
                            className={cn(
                                buttonVariants({
                                    variant:
                                        item.path === currentRoute
                                            ? 'outline-primary'
                                            : 'ghost',
                                }),
                            )}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="for logout">Log out</div>
        </aside>
    );
}

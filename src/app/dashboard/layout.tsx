import { Metadata } from 'next';

import { SidebarItem } from '@/types/sidebar';
import SidePanel from '@/components/ui/side-panel';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
};

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const items: SidebarItem[] = [
        {
            title: 'My Profile',
            path: '/dashboard/profile',
        },
        {
            title: 'My Connections',
            path: '/dashboard/connections',
        },
    ];

    return (
        <div className="flex">
            <SidePanel items={items} />
            {children}
        </div>
    );
}

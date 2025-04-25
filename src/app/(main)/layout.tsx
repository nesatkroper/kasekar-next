"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useIsTablet } from "@/hooks/use-tablet";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isTablet = useIsTablet();

  return (
    <SidebarProvider
      defaultOpen={isTablet}
      style={
        {
          // "--sidebar-width": "calc(var(--spacing) * 60)",
          "--header-height": "calc(var(--spacing) * 15)",
        } as React.CSSProperties
      }>
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2 p-4'>
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

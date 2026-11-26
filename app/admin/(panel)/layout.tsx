import Link from "next/link";
import { Suspense } from "react";
import { AdminNav } from "@/components/admin/admin-nav";

export default function PanelLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="flex min-h-dvh flex-col lg:flex-row">
      <aside className="border-b border-line bg-plate px-4 py-4 lg:sticky lg:top-0 lg:h-dvh lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r lg:py-7">
        <div className="mb-4 flex items-center justify-between lg:mb-8 lg:block">
          <Link href="/admin" className="text-lg font-extrabold text-brand">
            VK Admin
          </Link>
          <Link href="/" className="text-xs text-muted hover:text-brand lg:mt-4 lg:block">
            View site ↗
          </Link>
        </div>
        <Suspense fallback={<div className="h-10 lg:h-24" />}>
          <AdminNav />
        </Suspense>
      </aside>
      <div className="min-w-0 flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8 lg:py-10">{children}</div>
      </div>
    </div>
  );
}

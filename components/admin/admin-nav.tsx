"use client";

import clsx from "clsx";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true }];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Admin">
      <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-0.5">
        {LINKS.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={clsx("flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-colors", active ? "bg-brand font-medium text-white" : "text-ink-soft hover:bg-paper hover:text-ink")}
              >
                <Icon className="size-[1.05rem]" aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

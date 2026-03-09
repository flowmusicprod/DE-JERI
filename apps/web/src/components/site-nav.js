"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="top-banner">FREE SHIPPING AND RETURNS WORLDWIDE</div>
      <nav className="main-nav shell">
        <Link href="/" className="brand-mark">
          DE&apos;JERI
        </Link>
        <div className="nav-links">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}


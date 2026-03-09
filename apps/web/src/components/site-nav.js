"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="main-nav shell">
        <button className="mobile-toggle" type="button" onClick={() => setOpen((p) => !p)}>
          {open ? "Close" : "Menu"}
        </button>

        <Link href="/" className="brand-mark" aria-label="DE'JERI Home">
          <Image
            src="/assets/brand/logos/Transparent/dejeri_white_trans.png"
            alt="DE'JERI"
            width={170}
            height={58}
            className="brand-logo"
            priority
          />
        </Link>

        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <Link href="/social">IG</Link>
          <Link href="/social">TT</Link>
          <Link href="/atelier/login">Admin</Link>
        </div>
      </nav>

      {open ? (
        <div className="mobile-nav shell">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/atelier/login" onClick={() => setOpen(false)}>
            Admin
          </Link>
        </div>
      ) : null}
    </header>
  );
}


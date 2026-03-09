"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="main-nav shell">
        <div className="nav-side nav-left desktop-only">
          <Link href="/catalog">Catalog</Link>
          <Link href="/showcase">Showcase</Link>
          <Link href="/collaboration">Collabs</Link>
        </div>

        <button
          type="button"
          className="menu-toggle mobile-only"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
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

        <div className="nav-side nav-right desktop-only">
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

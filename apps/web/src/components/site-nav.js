"use client";

import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-header">
      <nav className="main-nav shell">
        <div className="nav-side nav-left">
          <Link href="/catalog">All Pieces</Link>
          <Link href="/showcase">Drops</Link>
          <Link href="/collaboration">Collabs</Link>
        </div>
        <Link href="/" className="brand-mark" aria-label="DE'JERI Home">
          <Image
            src="/assets/brand/logos/Transparent/dejeri_black_trans.png"
            alt="DE'JERI"
            width={170}
            height={58}
            className="brand-logo"
            priority
          />
        </Link>
        <div className="nav-side nav-right">
          <Link href="/social">IG</Link>
          <Link href="/social">TT</Link>
          <Link href="/atelier/login">Admin</Link>
        </div>
      </nav>
    </header>
  );
}

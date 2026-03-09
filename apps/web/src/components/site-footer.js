import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <Image
        src="/assets/brand/logos/Transparent/dejeri_white_trans.png"
        alt="DE'JERI"
        width={160}
        height={48}
        className="footer-logo"
      />
      <p>DE&apos;JERI Atelier. Modern fashion platform + management dashboard.</p>
      <p>Admin access is restricted to authorized operators.</p>
    </footer>
  );
}


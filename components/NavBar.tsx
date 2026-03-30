"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <h2 className="logo">Payhub-Portal</h2>
      <div>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/privacy" className={pathname === "/privacy" ? "active" : ""}>Privacy</Link>
        <Link href="/terms" className={pathname === "/terms" ? "active" : ""}>Terms</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}

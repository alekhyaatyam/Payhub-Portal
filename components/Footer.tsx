"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/" className={pathname === "/" ? "active" : ""}>Home</a>
        <a href="/privacy" className={pathname === "/privacy" ? "active" : ""}>Privacy</a>
        <a href="/terms" className={pathname === "/terms" ? "active" : ""}>Terms</a>
      </div>

      <p>© 2026 Payhub-Portal</p>
    </footer>
  );
}

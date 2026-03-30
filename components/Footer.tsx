"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="footer">
    <div className="footer-inner">
      <div className="footer-left">
        <div className="footer-links">
          <a href="/" className={pathname === "/" ? "active" : ""}>Home</a>
          <a href="/privacy" className={pathname === "/privacy" ? "active" : ""}>Privacy</a>
          <a href="/terms" className={pathname === "/terms" ? "active" : ""}>Terms</a>
          <a href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</a>
        </div>
      </div>

      <div className="footer-center">
        <p style={{color : "#ccc"}}>© 2024 Payhub Portal. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
    </footer>
  );
}

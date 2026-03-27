import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>{children}</main>

        <footer className="footer">
          <p>© 2026 Payhub-Portal</p>
        </footer>
      </body>
    </html>
  );
}

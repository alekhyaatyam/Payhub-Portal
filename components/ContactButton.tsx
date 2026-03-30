import Link from "next/link";

export default function ContactButton() {
  return (
    <div className="contact-btn-wrapper">
      <Link href="/contact">
        <span className="contact-btn">Contact Us</span>
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <p className="contact-intro">
        We're here to help. If you have questions or need support, feel free to reach out using the details below.
      </p>

      <div className="contact-card">
        <h3>Email Support</h3>
        <p>You can contact our support team anytime at:</p>
        <p className="contact-highlight">support@payhub.com</p>
      </div>

      <div className="contact-card">
        <h3>Office Address</h3>
        <p>Payhub Portal Headquarters</p>
        <p className="contact-highlight">123 Fintech Avenue, London, UK</p>
      </div>
    </div>
  );
}

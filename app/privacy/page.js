import Image from "next/image";
import { images } from "@/lib/images";

export default function Privacy() {
  return (
    <div className="container">
      {/* Privacy Notice */}
      <div className="section">
        <div className="section-text">
          <h1>Privacy Policy</h1>
          <p>Last updated March 27, 2026</p>
          <p>
            This Privacy Notice explains how Payhub-Portal collects, uses, and
            protects your personal information when you access or use our
            services. We are committed to maintaining the highest standards of
            privacy and data security.
          </p>
        </div>

        <div className="section-image">
          <Image
            src={images.security}
            alt="Privacy Security"
            width={400}
            height={280}
          />
        </div>
      </div>

      {/* Summary Section */}
      <h2>Summary of Key Points</h2>
      <p>
        This summary provides a quick overview of how we handle your data. For
        full details, please read the complete Privacy Notice below.
      </p>
      <ul className="list-spaced">
        <li>We collect information you provide directly and data generated through your use of our platform.</li>
        <li>Your data is used to operate, improve, and secure our services.</li>
        <li>We implement strong security measures to protect your information.</li>
        <li>You may have rights to access, update, or delete your data depending on your location.</li>
      </ul>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul className="list-spaced">
        <li>
          <strong>Personal Information:</strong> Name, email address, contact
          details, and any information you provide when creating an account.
        </li>
        <li>
          <strong>Usage Data:</strong> How you interact with our platform,
          including pages visited, features used, and time spent on the site.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, device
          information, and operating system details.
        </li>
        <li>
          <strong>Payment-Related Data:</strong> Transaction details (but not
          full payment card numbers).
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>Your information is used to:</p>
      <ul className="list-spaced">
        <li>Provide and maintain our services.</li>
        <li>Improve platform performance and user experience.</li>
        <li>Communicate updates, security alerts, and support messages.</li>
        <li>Detect and prevent fraud or unauthorized activity.</li>
        <li>Comply with legal and regulatory requirements.</li>
      </ul>

      <h2>3. How We Protect Your Data</h2>
      <p>
        We use a combination of technical, administrative, and physical
        safeguards to protect your information from unauthorized access,
        alteration, or disclosure. These include:
      </p>
      <ul className="list-spaced">
        <li>Encryption of sensitive data.</li>
        <li>Secure server infrastructure.</li>
        <li>Regular security audits and monitoring.</li>
        <li>Strict access controls for authorized personnel only.</li>
      </ul>

      <h2>4. Your Privacy Rights</h2>
      <p>
        Depending on your region, you may have the right to access, update, or
        delete your personal information. You may also request:
      </p>
      <ul className="list-spaced">
        <li>A copy of the data we hold about you.</li>
        <li>Correction of inaccurate or incomplete information.</li>
        <li>Deletion of your data, where legally permitted.</li>
        <li>Restriction or objection to certain types of processing.</li>
      </ul>

      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Notice or how your data is
        handled, please contact us at:
      </p>
      <p><strong>support@payhub.com</strong></p>

      {/* FAQ Section */}
      <div className="section-gap">
        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>1. Do you share my personal information with third parties?</h3>
        <p>
          We do not sell or share your personal information with third parties
          for marketing purposes. We may share data only with trusted service
          providers who help us operate our platform, and only when necessary.
        </p>

        <h3>2. How long do you keep my data?</h3>
        <p>
          We retain your information only for as long as needed to provide our
          services, comply with legal obligations, or resolve disputes. Once
          data is no longer required, it is securely deleted.
        </p>

        <h3>3. Can I request deletion of my data?</h3>
        <p>
          Yes. Depending on your region, you may request that we delete your
          personal information. If deletion is not possible due to legal or
          security reasons, we will inform you.
        </p>

        <h3>4. How do you secure my payment information?</h3>
        <p>
          We use encryption, secure servers, and strict access controls to
          protect payment-related data. Sensitive financial information is never
          stored in plain text.
        </p>

        <h3>5. Do you use cookies or tracking technologies?</h3>
        <p>
          Yes, we use cookies to improve your experience, analyze usage, and
          enhance platform performance. You can manage cookie preferences
          through your browser settings.
        </p>

        <h3>6. How can I update my personal information?</h3>
        <p>
          You can update your account details by contacting our support team or
          accessing your account settings if available.
        </p>
      </div>
    </div>
  );
}

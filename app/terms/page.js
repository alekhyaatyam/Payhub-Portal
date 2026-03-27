import Image from "next/image";
import { images } from "@/lib/images";

export default function Terms() {
  return (
    <div className="container">
      {/* Terms of Service */}
      <div className="section">
        <div className="section-text">
          <h1>Terms of Service</h1>
          <p>Last updated March 27, 2026</p>
          <p>
            These Terms of Service outline the rules and conditions for using
            Payhub-Portal. By accessing or using our platform, you agree to
            follow these terms and ensure that your use of the service remains
            lawful, responsible, and secure.
          </p>
        </div>

        <div className="section-image">
          <Image
            src={images.payment}
            alt="Terms and Conditions"
            width={400}
            height={280}
          />
        </div>
      </div>

      <h2>1. Use of Services</h2>
      <p>
        You agree to use our platform only for lawful purposes and in compliance
        with all applicable laws and regulations. You must not:
      </p>
      <ul className="list-spaced">
        <li>Engage in fraudulent or unauthorized transactions.</li>
        <li>Attempt to access restricted areas of the platform.</li>
        <li>Interfere with the security or performance of our services.</li>
        <li>Use the platform in a way that harms other users or our systems.</li>
      </ul>

      <h2>2. User Responsibilities</h2>
      <p>As a user of Payhub-Portal, you are responsible for:</p>
      <ul className="list-spaced">
        <li>Providing accurate and up-to-date information when creating an account.</li>
        <li>Maintaining the confidentiality of your login credentials.</li>
        <li>Notifying us immediately if you suspect unauthorized access.</li>
        <li>Ensuring that your use of the platform complies with these terms.</li>
      </ul>

      <h2>3. Limitation of Liability</h2>
      <p>
        While we strive to provide a secure and reliable platform, Payhub-Portal
        is not liable for:
      </p>
      <ul className="list-spaced">
        <li>Indirect, incidental, or consequential damages.</li>
        <li>Loss of data, revenue, or business opportunities.</li>
        <li>Issues caused by third-party services or external systems.</li>
        <li>Unauthorized access resulting from user negligence.</li>
      </ul>
      <p>
        Our platform is provided on an “as-is” and “as-available” basis, without
        warranties of any kind unless required by law.
      </p>

      <h2>4. Changes to Terms</h2>
      <p>
        We may update these Terms of Service from time to time to reflect
        changes in our platform, legal requirements, or business practices. When
        updates occur:
      </p>
      <ul className="list-spaced">
        <li>We will revise the “Last updated” date at the top of this page.</li>
        <li>Continued use of the platform means you accept the updated terms.</li>
        <li>You are encouraged to review this page periodically.</li>
      </ul>

      <h2>5. Termination of Access</h2>
      <p>
        We reserve the right to suspend or terminate your access to the platform
        if you violate these terms or engage in harmful or unlawful activity.
        Termination may occur without prior notice in cases of severe misuse.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        Our platform may integrate with third-party tools or services. We are
        not responsible for:
      </p>
      <ul className="list-spaced">
        <li>The content, policies, or performance of third-party providers.</li>
        <li>Any issues arising from your use of external services.</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service or need support,
        please reach out to us at:
      </p>
      <p><strong>support@payhub.com</strong></p>

      {/* FAQ Section */}
      <div className="section-gap">
        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>1. Can my account be suspended?</h3>
        <p>
          Yes. Accounts may be suspended if they violate our terms, engage in
          fraudulent activity, or pose a security risk.
        </p>

        <h3>2. Can I dispute a suspension?</h3>
        <p>
          Absolutely. You can contact our support team to request a review of
          your account status.
        </p>

        <h3>3. Are these terms legally binding?</h3>
        <p>
          Yes. By using Payhub-Portal, you agree to comply with these legally
          binding terms.
        </p>

        <h3>4. Will I be notified of major changes?</h3>
        <p>
          Yes. Significant updates to our terms will be communicated through the
          platform or via email when appropriate.
        </p>

        <h3>5. What happens if I disagree with the updated terms?</h3>
        <p>
          If you do not agree with the updated terms, you must stop using the
          platform. Continued use indicates acceptance.
        </p>
      </div>
    </div>
  );
}

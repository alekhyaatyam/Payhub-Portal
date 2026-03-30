import Image from "next/image";
import { images } from "@/lib/images";
import FAQ from "@/components/FAQ";
import ContactButton from "@/components/ContactButton";

export default function Terms() {
  const termsFaqs = [
    {
      q: "Can my account be suspended?",
      a: "Yes. Accounts may be suspended if they violate our terms, engage in fraudulent activity, or pose a security risk."
    },
    {
      q: "Can I dispute a suspension?",
      a: "Absolutely. You can contact our support team to request a review of your account status."
    },
    {
      q: "Are these terms legally binding?",
      a: "Yes. By using Payhub-Portal, you agree to comply with these legally binding terms."
    },
    {
      q: "Will I be notified of major changes?",
      a: "Yes. Significant updates to our terms will be communicated through the platform or via email when appropriate."
    },
    {
      q: "What happens if I disagree with the updated terms?",
      a: "If you do not agree with the updated terms, you must stop using the platform. Continued use indicates acceptance."
    }
  ];

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

      <section className="info-section">
      <h2 className="info-title">Summary of Terms</h2>
      <p className="info-subtitle">
        This summary provides a simplified overview of the key rules and expectations 
        when using Payhub‑Portal. For full legal details, please review the complete Terms of Service below.
      </p>

      <div className="info-grid">

        <div className="info-card">
          <div className="info-icon">🛠️</div>
          <h3 className="info-card-title">Use of Services</h3>
          <p className="info-card-text">
            You must use Payhub‑Portal responsibly and follow all applicable laws.  
            Activities like fraud, unauthorized access, or disrupting the platform are not allowed.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">👤</div>
          <h3 className="info-card-title">User Responsibilities</h3>
          <p className="info-card-text">
            You are responsible for providing accurate information, keeping your account secure,  
            and notifying us if you suspect unauthorized activity.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">⚠️</div>
          <h3 className="info-card-title">Limitation of Liability</h3>
          <p className="info-card-text">
            While we work to keep the platform secure, we are not liable for indirect damages,  
            data loss, or issues caused by third‑party services.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🔄</div>
          <h3 className="info-card-title">Changes to Terms</h3>
          <p className="info-card-text">
            We may update these terms as our services evolve.  
            Continued use of the platform means you accept any changes.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">⛔</div>
          <h3 className="info-card-title">Termination of Access</h3>
          <p className="info-card-text">
            We may suspend or terminate your account if you violate these terms  
            or engage in harmful or unlawful activity.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🔗</div>
          <h3 className="info-card-title">Third‑Party Services</h3>
          <p className="info-card-text">
            Some features rely on third‑party tools.  
            We are not responsible for their content, policies, or performance.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">📩</div>
          <h3 className="info-card-title">Contact Us</h3>
          <p className="info-card-text">
            For questions or support, reach out anytime.
          </p>
          <ContactButton />
        </div>

      </div>
    </section>


      {/* FAQ Section */}
      <FAQ title="Frequently Asked Questions (FAQ)" items={termsFaqs} />
    </div>
  );
}

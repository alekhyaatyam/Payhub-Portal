import Image from "next/image";
import { images } from "@/lib/images";
import FAQ from "@/components/FAQ";
import ContactButton from "@/components/ContactButton";

export default function Privacy() {
  const privacyFaqs = [
    {
      q: "Do you share my personal information with third parties?",
      a: "We do not sell or share your personal information with third parties for marketing purposes. We may share data only with trusted service providers who help us operate our platform, and only when necessary."
    },
    {
      q: "How long do you keep my data?",
      a: "We retain your information only for as long as needed to provide our services, comply with legal obligations, or resolve disputes. Once data is no longer required, it is securely deleted."
    },
    {
      q: "Can I request deletion of my data?",
      a: "Yes. Depending on your region, you may request that we delete your personal information. If deletion is not possible due to legal or security reasons, we will inform you."
    },
    {
      q: "How do you secure my payment information?",
      a: "We use encryption, secure servers, and strict access controls to protect payment-related data. Sensitive financial information is never stored in plain text."
    },
    {
      q: "Do you use cookies or tracking technologies?",
      a: "Yes, we use cookies to improve your experience, analyze usage, and enhance platform performance. You can manage cookie preferences through your browser settings."
    },
    {
      q: "How can I update my personal information?",
      a: "You can update your account details by contacting our support team or accessing your account settings if available."
    }
  ];

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
      <section className="info-section">
      <h2 className="info-title">Summary of Key Points</h2>
      <p className="info-subtitle">
        This summary provides a quick overview of how we handle your data.  
        For full details, please read the complete Privacy Notice below.
      </p>

      <div className="info-grid">

        <div className="info-card">
          <div className="info-icon">📥</div>
          <h3 className="info-card-title">Information We Collect</h3>
          <p  className="info-card-text">
            We collect information you provide directly and data generated through your use of our platform.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">⚙️</div>
          <h3  className="info-card-title">How We Use Your Data</h3>
          <p className="info-card-text"> 
            Your data is used to operate, improve, and secure our services.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🔐</div>
          <h3  className="info-card-title">How We Protect Your Data</h3>
          <p className="info-card-text">
            We implement strong security measures to protect your information.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">🧾</div>
          <h3 className="info-card-title">Your Privacy Rights</h3>
          <p className="info-card-text">
            You may have rights to access, update, or delete your data depending on your location.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">📩</div>
          <h3 className="info-card-title">Contact Us</h3>
          <p className="info-card-text"> 
            If you have any questions about this Privacy Notice or how your data is handled,  
            feel free to reach out to us anytime at:
          </p>
          <ContactButton />
      </div>
      </div>
    </section>

      {/* FAQ Section */}
      <FAQ title="Frequently Asked Questions (FAQ)" items={privacyFaqs} />
    </div>
  );
}

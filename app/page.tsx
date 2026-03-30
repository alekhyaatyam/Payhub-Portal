import Image from "next/image";
import { images } from "@/lib/images";

export default function About() {
  return (
    <div className="container">
      {/* Intro Section */}
      <div className="section">
        <div className="section-text">
          <h1>About Us</h1>
          <p>
            Payhub-Portal is a modern digital platform built to simplify and
            secure online payments. We help individuals and businesses manage
            transactions with confidence through fast, reliable, and intuitive
            tools.
          </p>
          <p>
            Our platform is designed with a user-first mindset, ensuring that
            every interaction is smooth, transparent, and secure.
          </p>
        </div>

        <div className="section-image">
          <Image
            src={images.about}
            alt="About Payhub"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="section section-reverse">
        <div className="section-text">
          <h2>Our Mission</h2>
          <p>
            We aim to empower users with a seamless digital payment experience.
            Our mission is to make financial transactions effortless by
            combining strong security, modern technology, and user-friendly
            design.
          </p>
          <p>
            Whether you're sending money, receiving payments, or managing
            business transactions, Payhub-Portal ensures everything works
            smoothly.
          </p>
        </div>

        <div className="section-image">
          <Image
            src={images.payment}
            alt="Mission"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Who We Are */}
      <div className="section">
        <div className="section-text">
          <h2>Who We Are</h2>
          <p>
            We are a team of developers, designers, and payment technology
            specialists passionate about building secure and accessible digital
            solutions. Our focus is on innovation, reliability, and delivering
            real value to our users.
          </p>
        </div>

        <div className="section-image">
          <Image
            src={images.security}
            alt="Team"
            width={400}
            height={300}
          />
        </div>
      </div>

    {/* Core Values */}
    <section className="core-values">
      <h2>Our Core Values</h2>
      <p>These principles guide everything we build:</p>
      {/* 1 - Left */}
      <div className="value-item left">
        <div className="value-icon">🔒</div>
          <p>
            <strong>Security First</strong><br />
              Protecting user data is our top priority.
          </p>
      </div>
      {/* 2 - Right */}
      <div className="value-item right">
        <div className="value-icon">✨</div>
          <p>
            <strong>Simplicity</strong><br />
              Payments should be easy, not complicated.
          </p>
      </div>
      {/* 3 - Left */}
      <div className="value-item left">
        <div className="value-icon">🔍</div>
          <p>
            <strong>Transparency</strong><br />
              No hidden steps, no confusion.
          </p>
      </div>
      {/* 4 - Right */}
      <div className="value-item right">
        <div className="value-icon">🚀</div>
          <p>
            <strong>Innovation</strong><br />
              Constantly improving to meet modern needs.
          </p>
      </div>
      {/* 5 - Center */}
      <div className="value-item left">
        <div className="value-icon">🤝</div>
          <p>
            <strong>Trust</strong><br />
              Building long‑term confidence with every interaction.
          </p>
      </div>
    </section>

      {/* Why Choose Us */}
      <div className="section-gap">
        <h2>Why Choose Payhub-Portal?</h2>
        <p>
          We combine modern technology with a clean, intuitive interface to make
          digital payments accessible to everyone. Our platform is built for speed,
          reliability, and peace of mind.
        </p>
      </div>
    </div>
  );
}

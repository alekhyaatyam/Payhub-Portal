"use client";
import { useState } from "react";

export default function FAQ({
  title,
  items
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section-gap faq-section">
      <h2 className="faq-title">{title}</h2>

      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className={`faq-card ${isOpen ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.q}</span>
              <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              className="faq-answer"
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0
              }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

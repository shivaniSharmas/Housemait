"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Housemait?",
    answer:
      "Housemait is an AI-powered family organiser that brings your calendar, meals, shopping, chores and school life into one shared app, with an assistant on WhatsApp that does the typing for you.",
  },
  {
    question: "How does the WhatsApp assistant work?",
    answer:
      "Message Housemait like you’d message a friend: type, send a voice note, or snap a photo of a school letter. It adds events, updates lists and answers questions about the week, and everything appears in the app for the whole family, instantly.",
  },
  {
    question: "Do both parents see the same thing?",
    answer:
      "Yes. Everyone in the family shares the same calendar, lists and plans, live. Add something on the school run and it’s on your partner’s phone before you’re home.",
  },
  {
    question: "Is it safe for kids?",
    answer:
      "Child Mode is a separate, playful space with their quests, stars and countdowns, and nothing else. No ads, no messages from strangers, no social feed. You decide what they see.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Housemait is $7.99 a month, or $79.99 a year (two months free). One subscription covers the whole household, and you can cancel anytime.",
  },
  {
    question: "Which phones does it work on?",
    answer:
      "Housemait is on iPhone and Android, and the WhatsApp assistant works from any phone.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Questions, answered.</h2>

        <div className="faq-list">
          {faqs.map((faq: FaqItem, index: number) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>

                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
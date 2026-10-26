import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ListChecks,
  MessageCircle,
} from "lucide-react";

import "./features.scss";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "One shared family calendar",
    description:
      "Keep school dates, appointments, activities, and plans together in one clear view.",
  },
  {
    icon: ListChecks,
    title: "Lists that stay up to date",
    description:
      "Manage meals, shopping, and chores without chasing updates across different apps.",
  },
  {
    icon: MessageCircle,
    title: "Help from WhatsApp",
    description:
      "Message your AI assistant to add plans, update lists, and organise family life faster.",
  },
];

export default function Features() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="features__container">
        <div className="features__intro">
          <p className="features__eyebrow">Everything in one place</p>
          <h2 id="features-title">A calmer way to run family life.</h2>
          <p className="features__description">
            HouseMait keeps the everyday details organised, so your family can
            spend less time coordinating and more time together.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="features__card" key={feature.title}>
                <div className="features__icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

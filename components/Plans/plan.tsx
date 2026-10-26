const plans = [
  {
    type: "MONTHLY",
    price: "$7.99",
    duration: "/month",
    description:
      "Billed monthly. Flexible if you're just settling in.",
    button: "Start monthly",
    featured: false,
  },
  {
    type: "ANNUAL",
    price: "$79.99",
    duration: "/year",
    description:
      "That's $6.67 a month, for the calmest year yet.",
    button: "Start annual",
    featured: true,
    badge: "2 MONTHS FREE",
  },
];

const features = [
  "Whole family included",
  "All features, no tiers",
  "WhatsApp assistant",
  "Cancel anytime",
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">

        <div className="pricing-heading">
          <h2>One plan, whole household.</h2>

          <p>
            Every feature, every family member, one subscription.
            <br />
            Cancel anytime.
          </p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <span className="pricing-badge">
                  {plan.badge}
                </span>
              )}

              <span className="plan-type">
                {plan.type}
              </span>

              <div className="price">
                <h3>{plan.price}</h3>

                <span>{plan.duration}</span>
              </div>

              <p className="plan-description">
                {plan.description}
              </p>

              <button className="pricing-btn">
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-features">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <span>✓</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { ShieldCheck, Lock, Download } from "lucide-react";

export default function PrivacySection() {
  const items = [
    {
      icon: <ShieldCheck size={28} />,
      title: "No ads, no data sales",
      desc: "Your family's data is yours. We never share, sell it, or use it to train AI models.",
    },
    {
      icon: <Lock size={28} />,
      title: "Encrypted, always",
      desc: "All data is protected with industry standard encryption in transit and at rest.",
    },
    {
      icon: <Download size={28} />,
      title: "Yours to take or delete",
      desc: "Export everything, or delete your account and every trace of it, any time you like.",
    },
  ];

  return (
    <section className="privacy-section max-width">
      <div className="privacy-content">
        <h2>Private by design.</h2>

        <p className="privacy-text">
          Housemait is where your family lives: plans, paperwork, little notes
          home.
          <br />
          We treat that with the care it deserves.
        </p>

        <div className="privacy-grid">
          {items.map((item, index) => (
            <div className="privacy-card" key={index}>
              <div className="icon-box">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
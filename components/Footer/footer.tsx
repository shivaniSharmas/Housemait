export default function Footer() {
  return (
    <section className="footer-cta max-width">
      <div className="footer-banner">
        <div className="overlay"></div>

        <div className="banner-content">
          <h2>Ready for calmer weeks?</h2>

          <p>
            Set Housemait up in just a few minutes. Free to get
            <br />
            started. The kettle will still be warm.
          </p>

          <div className="store-buttons">
            <a href="#" className="store-btn">
              <img
                src="/img/apple.png"
                alt="App Store"
              />
            </a>

            <a href="#" className="store-btn">
              <img
                src="/img/google.webp"
                alt="Google Play"
              />
            </a>
          </div>

          <a href="#" className="web-link">
            or try Housemait on the web →
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <img
            src="/img/imgi_1_housemait-logo-web.svg"
            alt="Housemait"
          />

          <span>© 2026 Housemait</span>
        </div>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </section>
  );
}
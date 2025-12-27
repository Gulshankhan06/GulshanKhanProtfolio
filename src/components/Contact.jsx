import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p className="contact-intro">
          I'm open to job opportunities, freelance projects, and collaborations.
          Feel free to connect with me using the details below.
        </p>

        <div className="info-item">
          📧
          <a href="mailto:gulshansaidkhan@email.com">
          gulshansaidkhan@email.com
          </a>
        </div>

        <div className="info-item">
          📞 <span>+8120035177</span>
        </div>

        <div className="info-item">
          💬
          <a href="https://wa.me/8120035177" target="_blank">
            Chat on WhatsApp
          </a>
        </div>

        <div className="info-item">
          📍 <span>India</span>
        </div>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/gulshan-khan-2ba177262" target="_blank">LinkedIn</a>
          <a href="https://github.com/Gulshankhan06" target="_blank">GitHub</a>
                    <a href="https://x.com/KhanGulshan06" target="_blank">Twitter</a>

        </div>
      </div>
    </section>
  );
}

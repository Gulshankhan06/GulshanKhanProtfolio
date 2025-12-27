import "../styles/hero.css";
import profileImg from "../assets/my-image.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Gulshan Khan</span> 👋
        </h1>

        <h2>Web Developer | React.js | Node.js</h2>

        <p>
          I’m a passionate Web Developer who enjoys creating clean, responsive,
          and user-friendly web applications. I specialize in React, Node.js,
          Express, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={profileImg} alt="Gulshan Khan" />
      </div>
    </section>
  );
}

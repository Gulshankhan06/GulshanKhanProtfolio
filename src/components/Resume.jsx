import "../styles/resume.css";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>My Resume</h2>

      <p className="resume-subtitle">
        Download my resume to learn more about my skills, experience, and projects.
      </p>

      <div className="resume-card">
        <h3>Gulshan Khan</h3>
        <p className="role">
          Web Developer | React.js | Node.js | MongoDB
        </p>
        <a
  href="/Gulshan-khan-FlowCV-Resume-20251227.pdf"
  target="_blank"
  className="resume-btn"
>
  View Resume
</a>


        <a
          href="/Gulshan-khan-FlowCV-Resume-20251227.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

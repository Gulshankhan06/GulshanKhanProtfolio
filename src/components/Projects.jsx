import "../styles/projects.css";
import calculator from "../assets/calculator.png";
import clockImg from "../assets/digital-clock.png";
import tttImg from "../assets/tictactoe.png";
import agencyImg from "../assets/digital-marketing.png";



const projects = [
  {
    title: "Calculator",
    description:
      "Designed a functional calculator handling complex operations using React, JavaScript, HTML and CSS.",
    live: "https://calculator-qpwt.onrender.com/",
    github: "https://github.com/yourusername/Calculator",
    image: calculator,
    

  },
  {
    title: "Digital Clock",
    description:
      "A real-time digital clock application built with React showing live time updates.",
    live: "https://digital-clock-1y4s.onrender.com/",
    github: "https://github.com/Gulshankhan06/digital-clock",
    image:clockImg ,
  },
  {
    title: "Tic Tac Toe",
    description:
      "Interactive Tic Tac Toe game built to strengthen JavaScript logic and event handling.",
    live: "https://tictactoe-pj53.onrender.com/",
    github: "https://github.com/Gulshankhan06/TicTacToe",
    image: tttImg,
  },
  {
    title: "Kinetic Connect Agency",
    description:
      "A modern and responsive digital marketing agency website built using React, Node.js and Tailwind CSS.",
    live: "https://kinetic-connect-agency.onrender.com/",
    github: "https://github.com/Gulshankhan06/kinetic-connect-agency",
    image: agencyImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <span>Project Image</span>
              )}
            </div>

            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="project-links">
              <a href={p.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

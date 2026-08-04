import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TaskTrack",
    subtitle: "Full-Stack Task Management Application",
    stack:
      "React • FastAPI • MongoDB Atlas • Docker • GitHub Actions",
    highlights: [
       "Full-stack task tracker with secure auth, built on FastAPI + MongoDB.",
       "Reduced ~6-7 manual deployment steps to a single git push, with GitHub Actions handling build, test, and deploy automatically."
    ],
    github: "https://github.com/nachammaisundaram/tasktrack",
    live: "https://tasktrack-one.vercel.app",
  },

  {
    title: "CloudNova",
    subtitle: "End-to-End CI/CD Deployment Pipeline",
    stack:
      "Git • Jenkins • Docker • Vercel • Netlify",
    highlights: [
      "Built complete CI/CD pipeline from Git push to live deployment.",
      "Reduced deployment time from ~10-15 min (manual) to 2-4 min using Jenkins + Docker automation."
    ],
    github: "https://github.com/nachammaisundaram/cloudnova",
    live: ""
  },

  {
    title: "Medical Supply Chain Management System",
    subtitle: "Django Web Application",
    stack:
      "Django • SQLite • Chart.js",
    highlights: [
      "Django-based inventory system tracking medicine stock, orders, and expiry dates in real time.",
      "Built ChartJs dashboards for stock-trend visualization, with automated low-stock alerts to reduce manual checking."
    ],
    github:
      "https://github.com/nachammaisundaram/Medical-Supply-Chain-Management",
    live: ""
  },

  {
    title: "Predictive Maintenance of Industrial Machinery",
    subtitle: "IBM Cloud AI Project",
    stack:
      "IBM Cloud • Watsonx.ai • Machine Learning",
    highlights: [
      "Built an ML model on IBM Watson Studio to predict industrial machine failure from historical sensor data.",
      "Covered the full workflow — data cleaning, feature engineering, model training, and evaluation."
    ],
    github:
      "https://github.com/nachammaisundaram/IBM-Cloud-Predictive-Maintenance-Project",
    live: ""
  },

  {
    title: "E-Book & Audiobook Platform",
    subtitle: "Python Desktop Application",
    stack:
      "Python • Tkinter • Text-to-Speech",
    highlights: [
      "Desktop app converting e-books to audiobooks using Python + Text-to-Speech.",
      "Desktop app converting e-books to audiobooks using Python + Text-to-Speech."
      
    ],
    github:
      "https://github.com/nachammaisundaram/ebook-audiobook-platform",
    live: ""
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.div
              className="project-item"
              style={{ height: "100%" }}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack}
              </div>

              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Project →
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
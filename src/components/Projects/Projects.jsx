
import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SmartHire GenAI",
    subtitle: "RAG-Powered Resume Matching & Career Mentor",
    stack:
      "Python • LangChain • FAISS • Gemini API • Streamlit",
    highlights: [
      "RAG career mentor with source citations and conversation memory; achieved a 10/10 retrieval hit rate across a 10-query evaluation set.",
      "Includes resume parsing, semantic job search across 200 roles, and a CV improvement generator with guardrails; compared Gemini and MiniLM embeddings.",
      "Hosted on Streamlit's free tier, so the first load may take about 30 seconds to wake up.",
    ],
    github: "",
    live:
      "https://smarthiregenai-o2aln6d6ehvvmpnazszzas.streamlit.app/",
    liveLabel: "Live Demo →",
  },

  {
    title: "TaskTrack",
    subtitle: "Full-Stack Task Management Application",
    stack:
      "React • FastAPI • MongoDB Atlas • Docker • GitHub Actions",
    highlights: [
      "Full-stack task tracker with JWT authentication and a drag-and-drop Kanban board, built on FastAPI and MongoDB Atlas.",
      "Reduced approximately 6–7 manual deployment steps to a single Git push, with GitHub Actions handling build, test, and deployment automatically.",
    ],
    github:
      "https://github.com/nachammaisundaram/tasktrack",
    live: "https://tasktrack-one.vercel.app",
    liveLabel: "View Project →",
  },

  {
    title: "CloudNova",
    subtitle: "End-to-End CI/CD Deployment Pipeline",
    stack:
      "Git • Jenkins • Docker • Vercel • Netlify",
    highlights: [
      "Built a complete CI/CD pipeline from Git push to live deployment.",
      "Reduced deployment time from approximately 10–15 minutes manually to 2–4 minutes using Jenkins and Docker automation.",
    ],
    github:
      "https://github.com/nachammaisundaram/cloudnova",
    live: "",
  },

  {
    title: "Medical Supply Chain Management System",
    subtitle: "Django Web Application",
    stack: "Django • SQLite • Chart.js",
    highlights: [
      "Django-based inventory system tracking medicine stock, orders, and expiry dates in real time.",
      "Built Chart.js dashboards for stock-trend visualization, with automated low-stock alerts to reduce manual checking.",
    ],
    github:
      "https://github.com/nachammaisundaram/Medical-Supply-Chain-Management",
    live: "",
  },
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
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <div className="project-stack">
                {project.stack}
              </div>

              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    {project.liveLabel || "View Project →"}
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

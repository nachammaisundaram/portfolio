import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TaskTrack",
    subtitle: "Full-Stack Task Management Application",
    description:
      "A full-stack task-tracking application built as my internship capstone project.",
    stack:
      "FastAPI • React + Vite • MongoDB Atlas • Docker • GitHub Actions",
    highlights: [
      "Containerized with Docker and deployed using a GitHub Actions CI/CD pipeline.",
      "Backend deployed on Render and frontend deployed on Vercel.",
      "Designed with a responsive React interface and RESTful FastAPI backend."
    ],
    github: "https://github.com/nachammaisundaram/tasktrack",
    live: "https://tasktrack-one.vercel.app",
  },

  {
    title: "CloudNova",
    subtitle: "End-to-End CI/CD Deployment Pipeline",
    description:
      "Designed and deployed a complete CI/CD pipeline for a company landing page as my final DevOps internship project.",
    stack:
      "Git • GitHub • Jenkins • Docker • Vercel • Netlify",
    highlights: [
      "Implemented complete CI/CD workflow.",
      "Automated build and deployment process.",
      "Focused on deployment lifecycle and DevOps best practices."
    ],
    github: "https://github.com/nachammaisundaram/cloudnova",
    live: ""
  },

  {
    title: "Medical Supply Chain Management System",
    subtitle: "Django Web Application",
    description:
      "A Django web application automating medicine supply chain operations between a central company, agencies and shops.",
    stack:
      "Django • SQLite • Chart.js",
    highlights: [
      "Role-based dashboards for Admin, Agency and Shop.",
      "Real-time analytics using Chart.js.",
      "Improved supply tracking and order management."
    ],
    github:
      "https://github.com/nachammaisundaram/Medical-Supply-Chain-Management",
    live: ""
  },

  {
    title: "Predictive Maintenance of Industrial Machinery",
    subtitle: "IBM Cloud AI Project",
    description:
      "Machine learning solution developed using IBM Cloud and Watsonx.ai Studio to predict equipment failures before they occur.",
    stack:
      "IBM Cloud • Watsonx.ai • Machine Learning",
    highlights: [
      "Prepared and analysed industrial datasets.",
      "Built and evaluated predictive ML models.",
      "Documented complete implementation workflow."
    ],
    github:
      "https://github.com/nachammaisundaram/IBM-Cloud-Predictive-Maintenance-Project",
    live: ""
  },

  {
    title: "E-Book & Audiobook Platform",
    subtitle: "Python Desktop Application",
    description:
      "Desktop application developed using Python and Tkinter to provide an accessible digital reading experience.",
    stack:
      "Python • Tkinter • Text-to-Speech",
    highlights: [
      "Integrated PDF reader with bookmarking.",
      "Built-in text-to-speech support.",
      "Accessible and user-friendly interface."
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
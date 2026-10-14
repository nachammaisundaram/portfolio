
import "./Experience.css";
import { motion } from "framer-motion";
import brownImage from "../../assets/images/brown.png";

function Experience() {
  const experiences = [
    {
      role: "Generative AI Intern",
      organization: "AENEXZ TECH",
      date: "August 2026 – Present",
      description:
        "Built grounded chatbots and a RAG pipeline using LangChain, FAISS and Gemini embeddings. Designed a reusable prompt library using role-based, few-shot and constraint-based prompting techniques. Delivered the SmartHire GenAI capstone end to end, covering structured resume parsing, semantic job retrieval, guardrails, evaluation and Streamlit deployment.",
      technologies:
        "Python • LangChain • FAISS • Gemini API • RAG • Streamlit",
    },

    {
      role: "Cloud & DevOps Intern",
      organization: "Divine Innovations",
      date: "June 2026 – August 2026",
      description:
        "Built CI/CD pipelines using GitHub Actions and Jenkins with Docker, resolving a 403 workflow permission failure and deploying applications to GitHub Pages, Vercel and Netlify. Deployed the full-stack TaskTrack application on Render and Vercel, troubleshooting CORS errors, MongoDB Atlas network access and a bcrypt/passlib compatibility issue.",
      technologies:
        "Git • GitHub Actions • Jenkins • Docker • CI/CD • React • FastAPI",
    },

    {
      role: "Virtual Intern",
      organization: "IBM SkillsBuild – AICTE",
      date: "June 2025 – August 2025",
      description:
        "Built and deployed machine learning models for industrial predictive maintenance using IBM Cloud and Watsonx.ai Studio. Achieved 98.5% prediction accuracy through data preprocessing, feature engineering and model evaluation.",
      technologies:
        "IBM Cloud • Watsonx.ai • Machine Learning • Predictive Analytics",
    },

    {
      role: "Member",
      organization: "Google Developer Group (GDG) Madurai",
      date: "2026 – Present",
      description:
        "Community member interested in developer technologies and collaborative problem-solving. Participated in the Madurai for Nation Hackathon, exploring solution concepts across Healthcare, Environment, Agriculture and Constituency Planning challenge tracks.",
      technologies:
        "Hackathons • Team Collaboration • Problem Solving",
    },
  ];

  return (
    <section className="experience" id="experience">
      <img
        src={brownImage}
        alt=""
        className="experience-bg-image"
      />

      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="experience-content">
          {experiences.map((item, index) => (
            <motion.div
              className="experience-item"
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              <h3>{item.role}</h3>

              <h4>{item.organization}</h4>

              <span className="experience-date">
                {item.date}
              </span>

              <p>{item.description}</p>

              <div className="experience-tech">
                {item.technologies}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

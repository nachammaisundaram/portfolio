import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm an MCA student at SASTRA University with a 9.5 CGPA,
          focused on building Generative AI applications using LangChain,
          FAISS, and the Gemini API. I'm interested in taking AI projects
          beyond development by exploring deployment and automation with
          Docker, Jenkins, and GitHub Actions.

          {" "}

          With experience as a Cloud & DevOps intern and a GenAI intern,
          I'm working towards an entry-level AI Engineer role where I can
          build practical, useful AI solutions. Outside of coding, I enjoy
          visual design and creative work, which influences how I approach
          user experience and interface design.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
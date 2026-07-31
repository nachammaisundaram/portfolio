import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I am an MCA student with a growing interest in Artificial
          Intelligence, Cloud Computing and Software Engineering. I believe
          technology is a continuous learning journey rather than a
          destination, where every project gives me an opportunity to
          explore new ideas, refine my skills and build solutions with a
          stronger understanding of technology. Beyond development,
          creativity has always been an important part of who I am.
          Creating and exploring visual design, artistic expression and
          thoughtful user experiences influence the way I approach both
          technology and problem-solving.
        </motion.p>

      </div>

    </section>
  );
}

export default About;
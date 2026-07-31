import "./Contact.css";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
      >
          Contact
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>
            Let's Build Something Intelligent Together.
          </h3>

          <p>
            I am always interested in exploring opportunities related to
            Artificial Intelligence, Cloud Computing, Software Engineering,
            and innovative technology solutions.
          </p>

          <div className="contact-links">

            <a
              href="mailto:nachammai1705@gmail.com"
              className="contact-link-btn"
            >
              <FiMail />
              <span>Contact Me</span>
            </a>

            <a
              href="https://github.com/nachammaisundaram"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-btn"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>

            <a
              href="linkedin.com/in/nachammai17"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-btn"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Download Resume →
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
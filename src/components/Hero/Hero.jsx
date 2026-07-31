import "./Hero.css";
import { motion } from "framer-motion";
import profile from "../../assets/images/nachammai_cutout.png";
import wireframe from "../../assets/images/Background (1).png";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* LEFT CONTENT */}

      <div className="hero-left">

        <motion.p
          className="hero-tag"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          NACHAMMAI S
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          Building Intelligent
          <br />
          Software for Tomorrow.
        </motion.h2>

        <motion.div
          className="hero-roles"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
        >
          <span>AI Engineer</span>
          <span>•</span>
          <span>Cloud & DevOps</span>
          <span>•</span>
          <span>Software Developer</span>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
        >
          Passionate about building intelligent AI applications,
          scalable cloud platforms and modern software experiences
          that create real-world impact.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
        >

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Download Resume →
          </a>

          <a
            href="#projects"
            className="secondary-btn"
          >
            View Projects →
          </a>

        </motion.div>

      </div>

      {/* RIGHT CONTENT */}

      <motion.div
        className="hero-right"
        initial={{
          x: 120,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          x: {
            duration: 0.8,
            delay: 0.8,
          },
          opacity: {
            duration: 0.8,
            delay: 0.8,
          },
          scale: {
            duration: 0.8,
            delay: 0.8,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >

        <div className="profile-container">

          <img
            src={profile}
            alt="Nachammai S"
            className="profile-image normal"
          />

          <img
            src={wireframe}
            alt="Wireframe"
            className="profile-image wireframe"
          />

          <div className="tech-overlay">
            <div className="scan-line"></div>
            <div className="glitch-layer"></div>
          </div>

        </div>

      </motion.div>

    </motion.section>
  );
}

export default Hero;
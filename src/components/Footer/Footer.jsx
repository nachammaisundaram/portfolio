import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-name">
          NACHAMMAI S
        </h2>

        <p className="footer-tagline">
          Building Intelligent Software for Tomorrow.
        </p>

        <div className="footer-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/nachammaisundaram"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/nachammai17"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:nachammai1705@gmail.com">
            Email
          </a>

        </div>

        <p className="footer-copy">
          © 2026 Nachammai S. All Rights Reserved.
        </p>

        <p className="footer-built">
          Built with React • Vite • Framer Motion
        </p>

      </div>

    </footer>
  );
}

export default Footer;
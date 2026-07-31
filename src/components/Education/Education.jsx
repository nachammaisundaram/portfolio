import "./Education.css";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "SASTRA Deemed University (Online)",
    duration: "2025 – Present",
    cgpa: "CGPA: 9.62 / 10 (96.2%)",
    description:
      "Currently pursuing a Master of Computer Applications with a focus on Artificial Intelligence, Cloud Computing, Software Engineering, and modern application development while maintaining excellent academic performance.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    college: "Fatima College, Madurai",
    duration: "2022 – 2025",
    cgpa: "CGPA: 8.6 / 10",
    description:
      "Graduated with a strong foundation in programming, database management, software engineering, web technologies, and application development through academic projects and practical learning.",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <motion.h2
           className="education-title"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, amount: 0.3 }}
        >
           EDUCATION
        </motion.h2>

        <motion.p
            className="education-subtitle"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            Building a strong academic foundation while continuously expanding my
            knowledge in Artificial Intelligence, Cloud Computing and Software
            Engineering.
        </motion.p>

        <div className="education-list">
          {education.map((item, index) => (
    
            <motion.div
                  className="education-card"
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
            >
              <div className="education-header">
                <div>
                  <h3>{item.degree}</h3>
                  <h4>{item.college}</h4>
                </div>

                <span>{item.duration}</span>
              </div>

              <div className="cgpa">
                {item.cgpa}
              </div>

              <p>{item.description}</p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
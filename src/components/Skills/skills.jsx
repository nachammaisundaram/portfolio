import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "React", "Responsive Design"],
  },
  {
    category: "Backend Development",
    items: ["FastAPI", "Django", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQLite"],
  },
  {
    category: "Cloud & DevOps",
    items: ["IBM Cloud", "Docker", "Git", "GitHub", "GitHub Actions"],
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "Watsonx.ai", "Data Analysis"],
  },
  {
    category: "Tools",
    items: ["VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          SKILLS
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          A collection of technologies, tools and frameworks that I
          continuously learn and apply while building modern software
          solutions.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
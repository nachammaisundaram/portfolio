import "./Experience.css";
import { motion } from "framer-motion";

function Experience() {

    const experiences = [

        {
            role: "Generative AI Intern",
            organization: "AENEXZ TECH",
            date: "August 2026 – Present",
            description:
                "Incoming role focused on Generative AI applications and workflows. Gaining practical exposure to modern AI technologies, prompt engineering and real-world AI implementation.",
            technologies:
                "Generative AI • Python • Machine Learning",
        },

        {
            role: "Cloud & DevOps Intern",
            organization: "Divine Innovations",
            date: "June 2026 – August 2026",
            description:
                "Completed a 2-month paid internship building CI/CD pipelines and cloud-deployed applications, including the TaskTrack full-stack application and the CloudNova end-to-end deployment pipeline using Git, Jenkins, Docker and cloud hosting platforms.",
            technologies:
                "Git • Jenkins • Docker • CI/CD • React • FastAPI",
        },

        {
            role: "IBM SkillsBuild AICTE Virtual Internship",
            organization: "Predictive Maintenance of Industrial Machinery",
            date: "July 2025 – August 2025",
            description:
                "Developed a machine learning solution using IBM Cloud and Watsonx.ai Studio to analyze industrial equipment performance and predict potential failures through predictive analytics.",
            technologies:
                "IBM Cloud • Watsonx.ai • Machine Learning",
        },

        {
            role: "Member",
            organization: "Google Developer Group (GDG) Madurai",
            date: "2026 – Present",
            description:
                "Active community member who participated in the 'Madurai for Nation' Hackathon, collaborating on solution concepts across Healthcare, Environment, Agriculture and Constituency Planning challenge tracks.",
            technologies:
                "Hackathons • Team Collaboration • Problem Solving",
        },

    ];

    return (

        <section className="experience" id="experience">

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

                    {
                        experiences.map((item, index) => (

                            <motion.div
                                className="experience-item"
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                viewport={{
                                    once: true
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

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default Experience;
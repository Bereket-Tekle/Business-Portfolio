"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Native",
      "Flutter",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export default function SkillSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm font-mono uppercase tracking-widest text-primary mb-4"
        >
          // tech stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 tracking-tight"
        >
          Tools I <span className="text-gradient-cyan">work with</span>
        </motion.h2>
        <div className="grid md:grid-col-2 lg:grid-cols-4 gap-4">
          {skillCategories.map(({ category, skills }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono border border-border rounded-md text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-300 bg-card"
                  >{skill}</span>
                ))}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

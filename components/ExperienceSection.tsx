"use client"
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2025 - Present",
    description: "Delivered 3+ client projects including commercial websites and SaaS dashboards. Full ownership from requirements through deployment.",
    tags: ["Next.js",],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono uppercase tracking-widest text-primary mb-4"
        >
          // experience
        </motion.p>
         <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 tracking-tight"
        >
          Where I've <span className="text-gradient-cyan">contributed</span>
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px] hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-primary text-sm font-mono">{exp.company}</p>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground shrink-0 mt-1">{exp.period}</p>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-3 text-sm">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

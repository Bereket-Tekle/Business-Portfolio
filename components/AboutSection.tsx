"use client";

import { motion, useInView } from "framer-motion";
import { Cloud, Code, Server, Smartphone } from "@deemlol/next-icons";
import { useRef } from "react";

const highlight = [
  { icon: Code, title: "Frontend", desc: "React, Nextjs, TypeScript" },
  { icon: Server, title: "Backend", desc: "Node.js, Python, Go" },
  { icon: Cloud, title: "Cloud", desc: "AWS, Docker, CI/CD" },
  { icon: Smartphone, title: "Mobile", desc: "React Native, Flutter" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              // About me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Building Software that{" "}
              <span className="text-gradient-cyan">scales</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxe">
              <p>
                I'm a Software Engineering graduate with a passion for building
                robust, scalable applications. With hands-on experience across
                the full stack, I bring ideas to life from database architecture
                to pixel-perfect interfaces.
              </p>
              <p>
                My approach combines clean code principles with pragmatic
                problem-solving. I've contributed to open-source projects, built
                production systems handling thousands of users, and continuously
                stay at the cutting edge of web technologies.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlight.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
              >
                <Icon className="h-5 w-5 text-primary mb-4" />
                <p className="w-5 h-5 font-semibold text-sm  mb-1">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

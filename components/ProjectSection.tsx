"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitHub } from "@deemlol/next-icons";

const projects = [
  {
    title: "Interpretation and Translation Service",
    description:
      "A modern, responsive website built with Next.js for an interpretation and conference services company. The platform allows clients to request quotes easily using an embedded Google Form, while ensuring all submissions go directly to the company’s email and Google Sheets — no authentication required.",
    tags: ["Next.js", "Typescript", "Tailwindcss", "Google Form"],
    featured: true,
    githubUrl:
      "https://github.com/BTutd/Interpretation-and-Translation-Service",
    liveUrl: "https://larcenciel-conference.com/",
  },
  {
    title: "Financial Statement Generator",
    description:
      "A modern web application built with Next.js (App Router) for generating financial statements, analyzing transactions, and forecasting future financial trends. Designed to help businesses and individuals visualize, understand, and predict their financial performance.",
    tags: ["Next.js", "Typescript", "Tailwindcss", "OpenAI", "Supabase"],
    featured: true,
    githubUrl: "https://github.com/BTutd/Finnacial-Statement-Generator",
    liveUrl: "https://financial-generator.vercel.app",
  },

  {
    title: "E-commerece",
    description: "Modern application E-commerce application ",
    tags: ["Flutter", "Dartt", "Firebase"],
    featured: true,
    githubUrl: "https://github.com/BTutd/E-commerce",
  },
  {
    title: "Finsight",
    description:
      "Finsight is a financial analysis platform that reads and interprets financial reports, evaluates a company’s financial health, and provides data-driven recommendations. It leverages advanced data processing techniques to extract key financial metrics, generate insights, and help users make informed decisions.",
    tags: ["Next.js", "Typescript", "Tailwindcss", "Python"],
    featured: true,
    githubUrl: "https://github.com/Bigdreamer17/Finsight",
  },
  {
    title: "Smart Task Conflict Resolver",
    description:
      "A Python-based system for detecting and resolving conflicts in task scheduling, including:Circular dependencies among tasksTime overlaps for the same owner Deadline violations The system prioritizes conflicts and suggests fixes automatically, making task scheduling intelligent and robust.",
    tags: ["Python"],
    featured: true,
    githubUrl:"https://github.com/BTutd/Smart-Task-Conflict-Resolver-STCR-"
  },
  {
    title: "Food-Recipe ",
    description:
      "A list of food recipes with more ingredients  and steps of instruction ",
    tags: ["React", "Vite", "Tailwindcss", "Javascript", "RestApi"],
    featured: true,
    githubUrl: "https://github.com/BTutd/Food-Recipe",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono uppercase tracking-widest text-primary mb-4"
        >
          // projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 tracking-tight"
        >
          Things I've <span className="text-gradient-cyan">built</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:glow-cyan transition-all duration-500 cursor-pointer ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  {project.featured && (
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-primary mb-2">
                      Featured
                    </span>
                  )}
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:scale-110 transition-transform"
                    >
                      <GitHub className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

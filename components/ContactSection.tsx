"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, GitHub, LinkedIn, FileText } from "@deemlol/next-icons";
import Link from "next/link";

const links = [
  { icon: Mail, label: "berekettekle57@gmail.com", href: "mailto:berekettekle57@gmail.com" },
  { icon: GitHub, label: "GitHub", href: "https://github.com/BTutd" },
  { icon: LinkedIn, label: "LinkedIn", href: "https://www.linkedin.com/in/bereket-tekle/" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono uppercase tracking-widest text-primary mb-4"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
        >
          Let's <span className="text-gradient-cyan">connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground font-light mb-10 max-w-lg mx-auto"
        >
          I'm actively looking for software engineering opportunities. Whether you have a role,
          a project idea, or just want to chat  I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="mailto:berekettekle57@gmail.com"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:opacity-90 transition-opacity cursor-none"
          >
            Send me an email
          </a>
          <Link
            href="/doc/Bereket Tekle.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border text-sm font-medium rounded-lg text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-none"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-none"
            >
              <Icon className="w-4 h-4" />
              <span className="font-mono text-xs">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

   
      <div className="max-w-6xl mx-auto mt-28 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Bereket Tekle
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js + TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

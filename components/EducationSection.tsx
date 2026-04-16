"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Link } from "lucide-react";

const educationList = [
  {
    degree: "B.S. Software Engineering",
    school: "Addis Ababa University",
    period: "2019 — 2025",
    gpa: "",
    honors: "",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Operating Systems",
      "Cloud Computing",
      "Software Architecture",
      "Machine Learning",
      "and more"
    ],
  },
  {
    degree: "Marketing Management",
    school: "St. Mary University",
    period: "2021 — 2025",
    gpa: "",
    honors: "",
    coursework: [
      "Marketing Strategy",
      "Consumer Behavior",
      "Digital Marketing",
      "Brand Management",
      "Market Research",
      "Business Analytics",
    ],
  },
];

const certifications = [
  {
    name: "ADBI E-Learning", 
    issuer: "Asian Development Bank Institute", 
    year: "2026",
    link: "/doc/Bereket-Tekle–Cybersecurity–Cybersecurity–ADBI-E-Learning.pdf"
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono uppercase tracking-widest text-primary mb-4"
        >
          // education & certs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 tracking-tight"
        >
          Academic <span className="text-gradient-cyan">background</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {educationList.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <GraduationCap className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-mono mb-1">{edu.school}</p>
                <p className="text-xs text-muted-foreground font-mono mb-4">
                  {edu.period}{edu.gpa && ` · GPA: ${edu.gpa}`}
                </p>
                {edu.honors && (
                  <p className="text-xs text-primary/80 font-mono mb-4">{edu.honors}</p>
                )}

                <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="text-[10px] font-mono px-2 py-1 rounded border border-border text-muted-foreground">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            {certifications.map((cert, i) => (
              <a 
                key={i} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-sm">{cert.name}</h4>
                  <Link className="w-3.5 h-3.5 text-muted-foreground opacity-50" />
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  {cert.issuer} · {cert.year}
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

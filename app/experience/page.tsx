"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Building2, Microchip, FlaskConical, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

const EXPERIENCES = [
  {
    id: "vale",
    role: "Full-Stack Developer",
    company: "Vale (Project)",
    period: "2026",
    icon: Building2,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    description: "Development of a web platform to automate the processing and validation of SPED Fiscal files, reducing manual work and improving tax reconciliation workflows.",
    achievements: [
      "Developed a full-stack application using Python and TypeScript.",
      "Automated the processing of approximately 120 SPED files per month.",
      "Integrated reports with Excel and Power BI.",
      "Designed a stateless architecture to avoid unnecessary storage of sensitive fiscal data.",
      "Applied security validation throughout the development process."
    ],
    techs: ["Python", "FastAPI", "TypeScript", "Power BI"]
  },
  {
    id: "basa",
    role: "Automation Developer",
    company: "Banco da Amazônia (BASA)",
    period: "2026",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Development of an internal automation solution to consolidate electricity bills and support financial reporting.",
    achievements: [
      "Automated the consolidation of multiple utility bills into a single spreadsheet.",
      "Standardized financial data for reporting.",
      "Built dashboards and indicators using Power BI.",
      "Reduced repetitive manual work through process automation."
    ],
    techs: ["Python", "Excel", "Power BI"]
  },
  {
    id: "lacos",
    role: "Researcher",
    company: "LACOS — Control and Systems Laboratory",
    period: "2026 – Present",
    icon: Microchip,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    description: "Applied research in embedded systems, control engineering and scientific computing.",
    achievements: [
      "Developed embedded systems using Arduino and ESP32.",
      "Simulated dynamic systems using Webots.",
      "Participated in automation and control research projects.",
      "Built engineering prototypes for experimental validation."
    ],
    techs: ["Arduino", "ESP32", "Webots"]
  },
  {
    id: "pibic",
    role: "Undergraduate Research Fellow (PIBIC)",
    company: "Federal University of Pará",
    period: "2026 – Present",
    icon: FlaskConical,
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    borderColor: "border-slate-400/20",
    description: "Research project focused on the modeling and control of a rocket-pendulum system.",
    achievements: [
      "Developed mathematical models of the system.",
      "Simulated the rocket-pendulum in Webots.",
      "Studied control strategies for stabilization.",
      "Designed an embedded prototype for future implementation."
    ],
    techs: ["Control Systems", "Webots", "Embedded Systems"]
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-20">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-emerald-500">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Practical experience in engineering, software development, process automation and applied research, contributing to real-world projects in the mining, financial and academic sectors.
          </p>
        </motion.div>
      </section>

      {/* LISTA DE EXPERIÊNCIAS */}
      <section className="px-4 max-w-4xl mx-auto space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-${exp.color.split('-')[1]}-500/30 transition-colors shadow-xl`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${exp.bgColor} flex items-center justify-center border ${exp.borderColor} shrink-0`}>
                  <exp.icon className={`w-6 h-6 ${exp.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                  <h3 className={`${exp.color} font-medium mt-1`}>{exp.company}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm whitespace-nowrap h-fit">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              {exp.description}
            </p>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Key Contributions</h4>
              <ul className="list-none space-y-3 text-slate-300">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`${exp.color} mt-1`}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {exp.techs.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ACADEMIC = [
  {
    id: "pibic",
    institution: "Universidade Federal do Pará (UFPA)",
    title: "PIBIC Research Fellowship",
    period: "2026 – Present",
    description: "Research project on modeling and control of a rocket-pendulum system using Webots and embedded systems.",
    tags: ["Webots", "Control Systems", "Embedded Systems"]
  },
  {
    id: "ita",
    institution: "Instituto Tecnológico de Aeronáutica (ITA)",
    title: "EFITA — Engineering & Artificial Intelligence",
    period: "2025",
    description: "Participation in engineering and artificial intelligence courses during the EFITA event.",
    tags: ["Artificial Intelligence", "Engineering"]
  }
];

const PROFESSIONAL_TRAINING = [
  {
    id: "portswigger",
    institution: "PortSwigger",
    title: "Web Security Academy",
    period: "Continuous",
    description: "Practical study and laboratory challenges focusing on server-side and client-side web vulnerabilities.",
    tags: ["SQL Injection", "XSS", "Authentication", "Access Control"]
  }
];

const KNOWLEDGE_AREAS = [
  {
    id: "owasp",
    title: "OWASP Top 10",
    description: "Study and practical application of the main risks affecting modern web applications and their mitigation strategies.",
    tags: ["Application Security", "Vulnerability Assessment", "Secure Coding"]
  }
];

const CONTINUOUS_LEARNING = [
  "Microsoft Learn",
  "Cisco Networking Academy",
  "AWS Skill Builder",
  "Google Cloud Skills Boost",
  "Coursera"
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Certifications
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
            Academic achievements, cybersecurity training and continuous professional development.
          </p>
        </motion.div>
      </section>

      <div className="px-4 max-w-4xl mx-auto space-y-32">
        
        {/* 1. ACADEMIC */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
            Academic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="text-xs font-mono text-emerald-500/70 mb-2 block">{item.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                  <h4 className="text-slate-400 font-medium">{item.title}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. PROFESSIONAL TRAINING */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
            Professional Training
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {PROFESSIONAL_TRAINING.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                    <h4 className="text-slate-400 font-medium">{item.title}</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-500/70">{item.period}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-2xl">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. KNOWLEDGE AREAS */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
            Knowledge Areas
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {KNOWLEDGE_AREAS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-2xl">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. CONTINUOUS LEARNING */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
            Continuous Learning
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {CONTINUOUS_LEARNING.map((platform, index) => (
              <div 
                key={index}
                className="px-6 py-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors text-sm font-medium text-slate-300"
              >
                {platform}
              </div>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  );
}
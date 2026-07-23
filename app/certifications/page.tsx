"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Award, GraduationCap, ShieldCheck, Laptop } from "lucide-react";
import Link from "next/link";

const ACADEMIC_CARDS = [
  {
    id: "pibic",
    emoji: "🚀",
    institution: "UFPA",
    title: "PIBIC Research Fellowship",
    period: "2026 – Present",
    description: "Research project on modeling and control of a rocket-pendulum system using Webots and embedded systems.",
    tags: ["Webots", "Control Systems", "Embedded"],
    borderColor: "hover:border-emerald-500/30",
    textColor: "text-emerald-400"
  },
  {
    id: "ita",
    emoji: "🎓",
    institution: "Instituto Tecnológico de Aeronáutica (ITA)",
    title: "EFITA - Engineering & AI",
    period: "2025",
    description: "Participation in engineering and artificial intelligence courses during EFITA (Encontro de Física do ITA).",
    tags: ["Artificial Intelligence", "Engineering"],
    borderColor: "hover:border-blue-500/30",
    textColor: "text-blue-400"
  }
];

const CYBER_CARDS = [
  {
    id: "portswigger",
    emoji: "🔐",
    institution: "PortSwigger",
    title: "Web Security Academy",
    period: "Continuous",
    description: "Practical study and laboratory challenges focusing on server-side vulnerabilities.",
    tags: ["SQLi", "XSS", "Authentication", "Access Control"],
    borderColor: "hover:border-amber-500/30",
    textColor: "text-amber-400"
  },
  {
    id: "owasp",
    emoji: "🛡️",
    institution: "Cybersecurity Frameworks",
    title: "OWASP Top 10",
    period: "Continuous",
    description: "Practical study of the main web application security risks and mitigation strategies.",
    tags: ["AppSec", "Vulnerability Assessment"],
    borderColor: "hover:border-violet-500/30",
    textColor: "text-violet-400"
  }
];

const TECH_SKILLS = [
  { name: "Cisco", category: "Networking & Security" },
  { name: "Microsoft Learn", category: "Cloud & Development" },
  { name: "Google", category: "Data & Cloud" },
  { name: "AWS", category: "Cloud Architecture" },
  { name: "Azure", category: "Enterprise Cloud" },
  { name: "Coursera", category: "Continuous Learning" }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4" />
            Milestones & Learning
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Certifications & <span className="text-emerald-500">Achievements</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Uma visão estruturada da minha evolução acadêmica, treinamentos em cibersegurança e aprendizado contínuo nas principais plataformas de tecnologia.
          </p>
        </motion.div>
      </section>

      {/* 1. ACADEMIC & RESEARCH */}
      <section className="px-4 max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <GraduationCap className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-white">Academic & Research</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all flex flex-col h-full shadow-xl ${card.borderColor}`}
            >
              <div className="text-5xl mb-6 bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl border border-white/10 shadow-inner">
                {card.emoji}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{card.institution}</h3>
              <h4 className={`${card.textColor} font-medium mb-4`}>{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {card.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. CYBERSECURITY */}
      <section className="px-4 max-w-5xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <ShieldCheck className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-white">Cybersecurity</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CYBER_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all flex flex-col h-full shadow-xl ${card.borderColor}`}
            >
              <div className="text-5xl mb-6 bg-white/5 w-20 h-20 flex items-center justify-center rounded-2xl border border-white/10 shadow-inner">
                {card.emoji}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{card.institution}</h3>
              <h4 className={`${card.textColor} font-medium mb-4`}>{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {card.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS & CONTINUOUS LEARNING */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Laptop className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl font-bold text-white">Technical Skills & Continuous Learning</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {TECH_SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 transition-colors flex flex-col items-center justify-center text-center shadow-md group"
            >
              <span className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors mb-1">{skill.name}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">{skill.category}</span>
            </div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
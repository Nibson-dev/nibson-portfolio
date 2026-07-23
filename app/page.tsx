"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* NAVEGAÇÃO CORPORATIVA */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-tighter">
          NIBSON MULLER
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link href="/certifications" className="hover:text-emerald-400 transition-colors">Credentials</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
        </div>
        <Link href="/contact" className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
          Contact
        </Link>
      </nav>

      {/* 1. HERO (Minimalista) */}
      <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-tight">
            Engineering systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">simplify</span> complex problems.
          </h1>
          <p className="text-sm md:text-base text-slate-500 tracking-[0.2em] uppercase font-medium">
            Software • Automation • Data • Cybersecurity
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. AS QUATRO PALAVRAS (Fade on Scroll) */}
      <section className="py-40 px-4 flex justify-center items-center bg-[#0a0a0a]">
        <div className="flex flex-col text-4xl md:text-7xl font-black tracking-tighter text-center uppercase space-y-2">
          {["Engineering.", "Software.", "Automation.", "Security."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0.1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-white"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 3. A FILOSOFIA (O Fluxo de Valor) */}
      <section className="py-40 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-24 text-center"
          >
            The Methodology
          </motion.h2>

          <div className="relative border-l border-white/10 ml-6 md:mx-auto md:border-l-0">
            {/* Linha central no desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

            {[
              { title: "Complex Problem", desc: "Identificando o gargalo operacional." },
              { title: "Understand", desc: "Mapeamento profundo da regra de negócio." },
              { title: "Design", desc: "Arquitetura stateless, escalável e segura." },
              { title: "Automate", desc: "Implementação através de software robusto." },
              { title: "Measure", desc: "Análise de impacto e resultados via dados." }
            ].map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 md:pl-0 md:w-1/2 mb-16 last:mb-0 md:even:ml-auto md:even:pl-12 md:odd:pr-12 md:odd:text-right flex flex-col md:even:items-start md:odd:items-end group"
              >
                {/* Ponto na linha */}
                <div className="absolute left-[-5px] md:left-auto md:right-[-5px] md:group-even:left-[-5px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform duration-300 group-hover:scale-150" />
                
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A FRASE DE IMPACTO */}
      <section className="py-40 px-4 bg-emerald-950/20 flex justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            I don't build software. <br />
            <span className="text-slate-500">I build systems that reduce complexity.</span>
          </h2>
        </motion.div>
      </section>

      {/* 5. ESTATÍSTICAS (O Impacto Mensurável) */}
      <section className="py-32 px-4 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-6xl font-bold text-white mb-2">120<span className="text-emerald-500">+</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-500 font-semibold">SPED files / month</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="text-6xl font-bold text-white mb-2">4</div>
            <div className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Engineering Areas</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="text-6xl font-bold text-white mb-2">10<span className="text-emerald-500">+</span></div>
            <div className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Technologies</div>
          </motion.div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Motor SPED", desc: "Data processing & compliance engine.", link: "/projects/sped" },
              { title: "ConciliadorVALE", desc: "Corporate fiscal reconciliation platform.", link: "/projects/conciliador" },
              { title: "NavegaRio", desc: "Logistics data architecture & mapping.", link: "/projects/navegario" }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={project.link} className="block p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all h-full group">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-8">{project.desc}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIMELINE COMPACTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">The Journey</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base font-bold text-slate-400">
            <span className="text-white">UFPA</span>
            <span className="text-slate-600">→</span>
            <span className="text-white">LACOS</span>
            <span className="text-slate-600">→</span>
            <span className="text-white">Vale</span>
            <span className="text-slate-600">→</span>
            <span className="text-white">BASA</span>
            <span className="text-slate-600">→</span>
            <span className="text-white">PIBIC</span>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-40 px-4 border-t border-white/5 bg-[#0a0a0a] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-12">
            Let's build something meaningful.
          </h2>
          <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors text-lg">
            Get in Touch
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
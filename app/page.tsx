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
          NIBSON MÜLLER
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link href="/certifications" className="hover:text-emerald-400 transition-colors">Learning</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
        </div>
        <Link href="/contact" className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
          Contact
        </Link>
      </nav>

      {/* 1. HERO (Apenas a essência) */}
      <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-sm md:text-base text-slate-500 tracking-[0.3em] uppercase font-semibold mb-8">
            NIBSON MÜLLER
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
            Building software that solves <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">real engineering problems.</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-slate-600"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. O PRIMEIRO RESPIRO (A Filosofia 1) */}
      <section className="h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-5xl font-medium text-slate-400 max-w-4xl leading-tight tracking-tight"
        >
          I believe software should <span className="text-white">reduce complexity</span>, not create it.
        </motion.h2>
      </section>

      {/* 3. A SEQUÊNCIA (Engineering -> Software -> Automation -> Impact) */}
      <section className="py-40 px-4 bg-[#0a0a0a]">
        <div className="flex flex-col items-center justify-center text-5xl md:text-8xl font-black tracking-tighter uppercase space-y-4">
          {["Engineering.", "Software.", "Automation.", "Impact."].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={i === 3 ? "text-emerald-500" : "text-white"}
            >
              {word}
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-16 text-lg md:text-2xl font-medium text-slate-500 tracking-normal lowercase"
          >
            This is how I build solutions.
          </motion.div>
        </div>
      </section>

      {/* 4. O FLUXO DE PENSAMENTO (Com a linha animada crescendo) */}
      <section className="py-40 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-4xl font-bold text-white text-center mb-32 tracking-tight"
          >
            Every project starts with <span className="text-emerald-500">understanding the problem</span> <br className="hidden md:block" />
            before choosing the technology.
          </motion.h2>

          <div className="relative ml-4 md:mx-auto md:w-full max-w-lg">
            {/* Linha Vertical Animada */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent md:-translate-x-1/2" 
            />

            {/* Os Passos */}
            {[
              { step: "01", title: "Understand", desc: "Mapeamento profundo do gargalo operacional e da regra de negócio." },
              { step: "02", title: "Design", desc: "Desenho da arquitetura de dados e do fluxo de processamento." },
              { step: "03", title: "Automate", desc: "Desenvolvimento do software para substituir rotinas manuais." },
              { step: "04", title: "Measure", desc: "Validação do impacto gerado através de métricas e dashboards." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-10 md:pl-0 md:w-1/2 mb-20 last:mb-0 md:even:ml-auto md:even:pl-12 md:odd:pr-12 md:odd:text-right flex flex-col group"
              >
                {/* Ponto Pulsante */}
                <div className="absolute left-[-4px] md:left-auto md:right-[-4px] md:group-even:left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#050505] border-2 border-emerald-500 z-10 transition-transform duration-300 group-hover:scale-150 group-hover:bg-emerald-500" />
                
                <span className="text-xs font-mono text-emerald-500/70 mb-2">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. O SEGUNDO RESPIRO (A Assinatura) */}
      <section className="h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-emerald-950/10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-tight tracking-tighter"
        >
          Transforming complex processes into <br className="hidden md:block"/>
          <span className="text-emerald-500">reliable systems.</span>
        </motion.h2>
      </section>

      {/* 6. A PROVA (Featured Projects unificados) */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Featured Work</h2>
              <p className="text-slate-400">The application of the methodology in real environments.</p>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors pb-1">
              Explore all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "ConciliadorVALE", 
                subtitle: "Motor SPED",
                desc: "Plataforma corporativa que automatiza a extração e conciliação de mais de 120 arquivos fiscais por mês.", 
                link: "/projects/sped",
                techs: ["Python", "FastAPI", "React"]
              },
              { 
                title: "Project Nexus", 
                subtitle: "Financial Ecosystem",
                desc: "Ecossistema mobile com arquitetura orientada a eventos para garantir consistência de fluxo de caixa.", 
                link: "/projects/nexus",
                techs: ["Flutter", "Dart", "Event-Driven"]
              },
              { 
                title: "NavegaRio", 
                subtitle: "Logistics Data",
                desc: "Arquitetura de dados para mapeamento e otimização de rotas e mobilidade fluvial na região amazônica.", 
                link: "#",
                techs: ["Architecture", "GIS", "Data Modeling"]
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={project.link} className={`block p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all h-full flex flex-col justify-between group ${project.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-3 block">{project.subtitle}</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors tracking-tight">{project.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">{project.desc}</p>
                  </div>
                  <div>
                    <div className="flex gap-2 flex-wrap mb-6">
                       {project.techs.map(tech => (
                         <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 uppercase tracking-wider">{tech}</span>
                       ))}
                    </div>
                    {project.link !== '#' && (
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors">
                        Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA (A Chamada Emocional) */}
      <section className="py-40 px-4 border-t border-white/5 bg-[#0a0a0a] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-10 leading-tight">
            Let's solve complex <br className="hidden md:block"/> engineering problems together.
          </h2>
          <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors text-sm uppercase tracking-widest">
            Contact Me
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Experiência", href: "/experience" },
  { label: "Projetos", href: "/projects" },
  { label: "Formação", href: "/certifications" },
  { label: "Sobre", href: "/about" },
];

const WORKFLOW = [
  { step: "01", title: "Entender", desc: "Compreender o processo, suas limitações e o problema que precisa ser resolvido." },
  { step: "02", title: "Planejar", desc: "Organizar os dados, as etapas do fluxo e a estrutura da solução." },
  { step: "03", title: "Desenvolver", desc: "Construir ferramentas que reduzam tarefas repetitivas e erros manuais." },
  { step: "04", title: "Validar", desc: "Conferir os resultados, medir os ganhos e identificar melhorias." }
];

const FEATURED_PROJECTS = [
  { 
    title: "Automação de SPED Fiscal", 
    subtitle: "Projeto desenvolvido para a Vale",
    desc: "Plataforma web para processar arquivos fiscais e preparar dados para análise, reduzindo uma rotina manual de aproximadamente duas horas para poucos segundos.", 
    link: "/projects/sped",
    techs: ["Python", "FastAPI", "TypeScript", "Power BI"]
  },
  { 
    title: "Nexus", 
    subtitle: "Projeto pessoal",
    desc: "Aplicação mobile para organização financeira, criada para explorar o ecossistema Flutter, gerenciamento de estado e estruturação de dados.", 
    link: "/projects/nexus",
    techs: ["Flutter", "Dart", "State Management"]
  },
  { 
    title: "NavegaRio", 
    subtitle: "Projeto em desenvolvimento",
    desc: "Protótipo de plataforma para reunir dados de maré, clima, alertas e condições de navegação na região amazônica.", 
    link: "", // Vazio = card não clicável
    techs: ["FastAPI", "React", "Leaflet"]
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Trava o scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-[100dvh] bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* NAVEGAÇÃO CORPORATIVA */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-tighter z-50">
          NIBSON MÜLLER
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {NAV_LINKS.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-emerald-400 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block z-50">
          <Link href="/contact" className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 text-lg font-medium text-[#050505] bg-emerald-500 rounded-full transition-colors"
            >
              Contato
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO (Genuíno e Direto) */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 text-center relative pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs md:text-sm text-slate-500 tracking-[0.2em] md:tracking-[0.3em] uppercase font-semibold mb-8">
            Engenharia Elétrica • Software • Automação
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
            Desenvolvo software para resolver <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">problemas reais de engenharia.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estudante de Engenharia Elétrica na UFPA, desenvolvendo projetos em automação, dados, sistemas embarcados e segurança.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-slate-600"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* 2. O RESPIRO (A Filosofia) */}
      <section className="min-h-[60dvh] flex flex-col items-center justify-center px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-slate-400 max-w-4xl leading-tight tracking-tight"
        >
          Para mim, uma boa solução começa pela compreensão do problema — <span className="text-white">não pela escolha da tecnologia.</span>
        </motion.h2>
      </section>

      {/* 3. A SEQUÊNCIA (O Processo) */}
      <section className="py-32 px-4 bg-[#0a0a0a]">
        <div className="flex flex-col items-center justify-center text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase space-y-4">
          {["Engenharia.", "Software.", "Automação.", "Resultado."].map((word, i) => (
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
            className="pt-16 text-lg md:text-xl font-medium text-slate-500 tracking-normal"
          >
            É assim que desenvolvo cada projeto.
          </motion.div>
        </div>
      </section>

      {/* 4. O FLUXO DE TRABALHO */}
      <section className="py-40 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative ml-4 md:mx-auto md:w-full max-w-lg mt-16">
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
            {WORKFLOW.map((item, i) => (
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

      {/* 5. A PROVA (Featured Projects) */}
      <section className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Projetos em destaque</h2>
              <p className="text-slate-400">Alguns projetos em que apliquei software, automação e engenharia a problemas práticos.</p>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors pb-1">
              Ver todos os projetos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project, i) => {
              const CardWrapper = project.link ? Link : "div";
              const wrapperProps = project.link ? { href: project.link } : {};

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <CardWrapper 
                    {...wrapperProps} 
                    className={`block p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 transition-all h-full flex flex-col justify-between group ${project.link ? 'hover:border-white/20 cursor-pointer' : 'cursor-default'}`}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-3 block">{project.subtitle}</span>
                      <h3 className={`text-2xl font-bold text-white mb-4 tracking-tight ${project.link ? 'group-hover:text-emerald-400 transition-colors' : ''}`}>
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.desc}</p>
                    </div>
                    <div>
                      <div className="flex gap-2 flex-wrap mb-6">
                         {project.techs.map(tech => (
                           <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300 tracking-wider">{tech}</span>
                         ))}
                      </div>
                      {project.link && (
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors">
                          Estudo de Caso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-40 px-4 border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-10 leading-tight">
            Aberto a oportunidades de estágio, <br className="hidden md:block"/> pesquisa e novos projetos.
          </h2>
          <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-[#050505] font-bold hover:bg-slate-200 transition-colors text-sm uppercase tracking-widest">
            Entrar em contato
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
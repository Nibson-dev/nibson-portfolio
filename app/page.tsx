"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, Layout, Server, Cloud, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* 1. NAVEGAÇÃO CORPORATIVA */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-tighter">
          NIBSON<span className="text-emerald-500">.DEV</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link href="/certifications" className="hover:text-emerald-400 transition-colors">Certifications</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
        </div>
        <Link href="/contact" className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
          Contact
        </Link>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-48 pb-32 px-4 max-w-5xl mx-auto flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            Software Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building robust solutions <br className="hidden md:block" />
            for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">complex domains.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Sou estudante de Engenharia Elétrica na UFPA e desenvolvedor focado em unir automação, arquitetura de software e análise de dados para resolver problemas reais de negócios.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
              About Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS (Os 3 Pesos Pesados) */}
      <section className="py-24 px-4 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-slate-400">Arquitetura, compliance e automação corporativa.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-1 text-emerald-400 text-sm font-medium hover:text-emerald-300">
              View all projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: SPED */}
            <Link href="/projects/sped" className="group p-8 rounded-3xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between h-[400px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Database className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Motor SPED</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Motor de processamento e análise de arquivos SPED Fiscal. Arquitetura stateless para extração, validação e consolidação de centenas de registros fiscais.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Python</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Pandas</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Power BI</span>
              </div>
            </Link>

            {/* Card 2: ConciliadorVALE */}
            <Link href="/projects/conciliador" className="group p-8 rounded-3xl bg-[#0f1411] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between h-[400px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">ConciliadorVALE</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ferramenta corporativa de reconciliação fiscal automatizada. Integração de rotinas complexas para otimização de tempo e compliance.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">FastAPI</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">React</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Vercel</span>
              </div>
            </Link>

            {/* Card 3: Nexus */}
            <Link href="/projects/nexus" className="group p-8 rounded-3xl bg-[#0f1411] border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between h-[400px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20">
                  <Cloud className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Project Nexus</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ecossistema financeiro autônomo focado em controle e conciliação. Arquitetura orientada a eventos e processamento cross-platform.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Flutter</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Dart</span>
                <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">Event-Driven</span>
              </div>
            </Link>

          </div>
          
          {/* Botão Mobile para ver tudo */}
          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/projects" className="px-6 py-3 rounded-full border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK (Categorizada e Limpa) */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engineering Arsenal</h2>
            <p className="text-slate-400">Tecnologias organizadas por responsabilidade arquitetural.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Code2 className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>Python</li>
                <li>TypeScript / JavaScript</li>
                <li>Dart</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Server className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Backend</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>FastAPI</li>
                <li>Flask / Django Ninja</li>
                <li>Node.js</li>
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Layout className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Frontend & Mobile</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Flutter</li>
                <li>Three.js</li>
              </ul>
            </div>

            {/* Data */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Database className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Data</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>Pandas</li>
                <li>Power BI</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Cloud className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Cloud & Infra</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>Docker</li>
                <li>Microsoft Azure</li>
                <li>Vercel</li>
                <li>Render</li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Shield className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-white">Security</h3>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li>Burp Suite</li>
                <li>Wireshark</li>
                <li>Kali Linux</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER / CALL TO ACTION */}
      <footer className="border-t border-white/5 py-12 px-4 bg-[#0a0a0a] text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's build something impactful.</h2>
        <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors">
          Get in Touch
        </Link>
        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} Nibson Muller C NT. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Shield, Database, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* 1. NAVEGAÇÃO */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Voltar para Home</span>
        </Link>
        <Link href="/" className="text-white font-bold text-lg tracking-tighter">
          NIBSON<span className="text-emerald-500">.DEV</span>
        </Link>
      </nav>

      {/* 2. BIO EXECUTIVE SUMMARY */}
      <section className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            Background & Mindset
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Engenharia elétrica, software e <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">resolução de problemas complexos.</span>
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            <p>
              Sou estudante de Engenharia Elétrica na Universidade Federal do Pará (UFPA) e desenvolvo soluções que unem automação de processos, desenvolvimento de software full-stack e análise de dados para resolver problemas reais e críticos de negócios.
            </p>
            <p>
              Minha trajetória foi construída na interseção entre o rigor acadêmico da engenharia e a agilidade do desenvolvimento de software corporativo. Em vez de apenas escrever código, foco em entender o domínio do problema — seja compliance tributário, conciliação financeira ou modelagem de dados — para arquitetar soluções escaláveis, seguras e com baixo custo de manutenção.
            </p>
            <p>
              Tenho interesse profundo e atuação contínua em arquitetura de sistemas, processamento de dados em larga escala, cybersecurity e aplicações práticas de inteligência artificial.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. A TIMELINE DE EVOLUÇÃO (Estilo Apple) */}
      <section className="py-20 px-4 max-w-4xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Linha do Tempo</h2>
          <p className="text-slate-400">A jornada contínua entre academia, pesquisa e mercado corporativo.</p>
        </div>

        <div className="relative border-l border-emerald-500/30 ml-4 md:ml-32 space-y-16">
          
          {/* Item 1: Hoje */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#050505] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1 md:mb-0">
              Hoje
            </span>
            <h3 className="text-xl font-bold text-white">Engenheiro de Software & Desenvolvedor Full-Stack</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Foco em Arquitetura, Compliance e Automação</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Desenvolvimento contínuo de motores de processamento de dados (como o Motor SPED) e ecossistemas financeiros autônomos (Project Nexus), aplicando clean architecture e zero-trust.
            </p>
          </div>

          {/* Item 2: PIBIC */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0a0f0d] border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors" />
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1 md:mb-0">
              Pesquisa
            </span>
            <h3 className="text-xl font-bold text-white">PIBIC — Pesquisa Científica</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Universidade Federal do Pará</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Aprofundamento na resolução de problemas complexos, modelagem matemática, análise de dados e aplicação de método científico na engenharia de sistemas.
            </p>
          </div>

          {/* Item 3: BASA */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0a0f0d] border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors" />
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1 md:mb-0">
              Corporativo
            </span>
            <h3 className="text-xl font-bold text-white">Banco da Amazônia (BASA)</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Tecnologia, Dados & Rotinas Institucionais</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Vivência corporativa em ambiente financeiro de grande porte. Atuação com análise de dados, rotinas de tecnologia e otimização de fluxos de trabalho institucionais.
            </p>
          </div>

          {/* Item 4: Vale */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0a0f0d] border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors" />
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1 md:mb-0">
              Corporativo
            </span>
            <h3 className="text-xl font-bold text-white">Vale</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Automação de Processos & Compliance Fiscal</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Desenvolvimento de ferramentas de reconciliação fiscal (ConciliadorVALE) utilizando Python e automação de fluxos para otimizar a conferência de arquivos SPED e notas fiscais.
            </p>
          </div>

          {/* Item 5: LACOS */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0a0f0d] border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors" />
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1 md:mb-0">
              Laboratório
            </span>
            <h3 className="text-xl font-bold text-white">LACOS</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Laboratório de Computação Científica</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Desenvolvimento de algoritmos, simulações numéricas e computação aplicada a problemas de engenharia e física.
            </p>
          </div>

          {/* Item 6: UFPA */}
          <div className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-[#0a0f0d] border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors" />
            <span className="md:absolute md:-left-32 top-1 text-xs font-mono uppercase tracking-widest text-slate-500 block mb-1 md:mb-0">
              Graduação
            </span>
            <h3 className="text-xl font-bold text-white">Universidade Federal do Pará (UFPA)</h3>
            <p className="text-sm text-slate-500 mb-2 font-mono">Bacharelado em Engenharia Elétrica</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Formação de base sólida em cálculo avançado, física, circuitos elétricos, sistemas embarcados e computação.
            </p>
          </div>

        </div>
      </section>

      {/* 4. OS QUATRO PILARES DE ATUAÇÃO */}
      <section className="py-20 px-4 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold text-white mb-12">Pilares de Engenharia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#0a0f0d] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Sistemas & Arquitetura</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Foco na construção de sistemas desacoplados, arquiteturas orientadas a eventos (EDA) e processamento em memória para alta performance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0f0d] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Engenharia de Dados & BI</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tradução de grandes volumes de dados brutos (OFX, XML, SPED) em relatórios executivos e dashboards interativos no Power BI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0f0d] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Cybersecurity & Zero-Trust</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Aplicação de princípios de privacidade por design, validação estrita de inputs e redução da superfície de ataque em aplicações web.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0f0d] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Automação de Processos</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Criação de scripts e rotinas em Python para eliminar trabalho manual repetitivo, economizando centenas de horas em operações fiscais e financeiras.
            </p>
          </div>
        </div>
      </section>

      {/* 5. RODAPÉ / CTA */}
      <footer className="border-t border-white/5 py-12 px-4 bg-[#0a0a0a] text-center mt-20">
        <p className="text-slate-400 mb-6">Pronto para conhecer os casos práticos de engenharia?</p>
        <div className="flex justify-center gap-4">
          <Link href="/experience" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
            Ver Experiência Corporativa
          </Link>
          <Link href="/projects" className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold transition-colors">
            Explorar Projetos
          </Link>
        </div>
      </footer>

    </main>
  );
}
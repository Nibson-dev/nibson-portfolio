"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Zap, Brain, Mail } from "lucide-react";
import Link from "next/link";

const MILESTONES = [
  {
    year: "2023 — Atual",
    title: "Engenharia Elétrica",
    company: "Universidade Federal do Pará",
    description: "Formação voltada à integração entre engenharia, software, automação e pesquisa aplicada, com participação em projetos acadêmicos e desenvolvimento de soluções computacionais.",
    icon: "📚",
    color: "text-slate-400",
    borderColor: "hover:border-slate-500/30",
    bgIcon: "bg-slate-800"
  },
  {
    year: "2025 — Atual",
    title: "Pesquisador",
    company: "LACOS (UFPA)",
    description: "Participação em projetos de automação, sistemas embarcados e controle, desenvolvendo protótipos com Arduino, ESP32 e simulações de sistemas dinâmicos no Webots.",
    icon: "🔬",
    color: "text-violet-400",
    borderColor: "hover:border-violet-500/30",
    bgIcon: "bg-violet-900/30"
  },
  {
    year: "2026",
    title: "Desenvolvedor Full-Stack",
    company: "Projeto para a Vale",
    description: "Desenvolvimento de uma plataforma web para automatizar o processamento de arquivos SPED Fiscal, reduzindo atividades manuais por meio de Python, FastAPI, TypeScript e integração com Power BI.",
    icon: "🏭",
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/30",
    bgIcon: "bg-amber-900/30"
  },
  {
    year: "2026",
    title: "Desenvolvedor de Automação",
    company: "Banco da Amazônia (BASA)",
    description: "Criação de uma solução para consolidar automaticamente múltiplas contas de energia em um único relatório, padronizando dados e apoiando análises por meio do Power BI.",
    icon: "🏦",
    color: "text-blue-400",
    borderColor: "hover:border-blue-500/30",
    bgIcon: "bg-blue-900/30"
  },
  {
    year: "2026 — Atual",
    title: "Bolsista PIBIC",
    company: "Universidade Federal do Pará",
    description: "Desenvolvimento de pesquisa voltada à modelagem, simulação e controle de um sistema foguete-pêndulo, utilizando Webots e sistemas embarcados para validação experimental.",
    icon: "🚀",
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/30",
    bgIcon: "bg-emerald-900/30"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-20">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Voltar para Home</span>
        </Link>
      </nav>

      {/* 1. HERO PESSOAL E DIRETO */}
      <section className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Olá, sou o <span className="text-emerald-500">Nibson</span>.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
            Desenvolvedor de Software & Estudante de Engenharia Elétrica.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            Estudo Engenharia Elétrica na Universidade Federal do Pará (UFPA) e atuo desenvolvendo soluções que unem automação, desenvolvimento de software e análise de dados. Meu foco é construir ferramentas que resolvam problemas reais e simplifiquem rotinas complexas, sempre buscando entender a fundo a regra de negócio antes de escrever a primeira linha de código.
          </p>
        </motion.div>
      </section>

      {/* 2. TIMELINE CRONOLÓGICA DE MARCOS */}
      <section className="px-4 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold text-white mb-10 border-b border-white/5 pb-4">Minha Trajetória</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {MILESTONES.map((milestone, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Ícone Emoji Visual */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#0a0a0a] ${milestone.bgIcon} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-lg shadow-xl`}>
                  {milestone.icon}
                </div>
                
                {/* Card de Informação */}
                <div className={`w-[calc(100%-3.5rem)] md:w-[calc(50%-1.5rem)] p-6 rounded-2xl bg-white/5 border border-white/5 ${milestone.borderColor} transition-colors`}>
                  <div className="flex flex-col mb-3">
                    <span className={`${milestone.color} text-sm font-bold tracking-wider mb-1`}>{milestone.year}</span>
                    <h3 className="font-bold text-white text-lg">{milestone.title}</h3>
                    <span className="text-slate-400 text-sm font-medium">{milestone.company}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </motion.div>
      </section>

      {/* 3. ÁREAS DE ATUAÇÃO E INTERESSE */}
      <section className="px-4 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">Áreas de atuação e interesse</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col gap-4">
              <Code2 className="w-8 h-8 text-emerald-500" />
              <h3 className="font-bold text-white">Full-Stack Development</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desenvolvimento de aplicações web e rotinas de backend com foco em Python (FastAPI, Flask) e JavaScript (React).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col gap-4">
              <Zap className="w-8 h-8 text-emerald-500" />
              <h3 className="font-bold text-white">Automação e Dados</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Criação de fluxos para automatizar tarefas operacionais repetitivas e processar dados estruturados para análise no Power BI.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col gap-4">
              <Brain className="w-8 h-8 text-emerald-500" />
              <h3 className="font-bold text-white">Engenharia Aplicada</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Interesse contínuo na interseção entre software e engenharia física, incluindo eletromagnetismo, circuitos e termodinâmica.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CTAs MANTIDOS */}
      <section className="px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
            Ver meus projetos <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Entrar em contato <Mail className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
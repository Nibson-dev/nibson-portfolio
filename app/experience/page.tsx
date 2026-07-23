"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Building2, Microchip, FlaskConical, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-20">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Voltar para Home</span>
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
            Minha vivência em ambientes corporativos e laboratórios de pesquisa, desenvolvendo soluções reais e lidando com rotinas críticas de tecnologia.
          </p>
        </motion.div>
      </section>

      {/* LISTA DE EXPERIÊNCIAS */}
      <section className="px-4 max-w-4xl mx-auto space-y-8">
        
        {/* VALE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 transition-colors shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <Building2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Desenvolvedor Estagiário</h2>
                <h3 className="text-emerald-400 font-medium mt-1">Vale</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm whitespace-nowrap h-fit">
              <Calendar className="w-4 h-4" />
              2023 — Presente
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Atuação direta no desenvolvimento de software e automação de processos internos. Foco na criação de ferramentas que integram análise de dados e rotinas fiscais.
          </p>
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Principais Entregas</h4>
            <ul className="list-none space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Desenvolvimento do ConciliadorVALE, automatizando a validação de arquivos SPED.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Redução drástica no tempo de processamento de dados fiscais através de scripts em Python.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span>Estruturação de dados para geração de relatórios e integração com painéis no Power BI.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Python</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">FastAPI</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Pandas</span>
          </div>
        </motion.div>

        {/* BASA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-colors shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Estagiário de Tecnologia</h2>
                <h3 className="text-blue-400 font-medium mt-1">Banco da Amazônia (BASA)</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm whitespace-nowrap h-fit">
              <Calendar className="w-4 h-4" />
              2022 — 2023
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Experiência prática no setor de TI de uma instituição financeira de grande porte. Acompanhamento e suporte nas rotinas operacionais tecnológicas da matriz.
          </p>
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Principais Entregas</h4>
            <ul className="list-none space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Apoio às equipes internas na sustentação de sistemas e análise de dados bancários.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Automação de processos operacionais para ganho de eficiência do setor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Imersão em práticas corporativas de conformidade e segurança da informação.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Rotinas de TI</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">SQL</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Suporte Corporativo</span>
          </div>
        </motion.div>

        {/* LACOS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-violet-500/30 transition-colors shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0">
                <Microchip className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Pesquisador (Desenvolvedor)</h2>
                <h3 className="text-violet-400 font-medium mt-1">LACOS - Lab. de Computação Científica</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm whitespace-nowrap h-fit">
              <Calendar className="w-4 h-4" />
              2021 — 2022
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Aplicação de conceitos de programação para resolver problemas numéricos e físicos, atuando na interseção entre Ciência da Computação e Engenharia.
          </p>
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Principais Entregas</h4>
            <ul className="list-none space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-violet-500 mt-1">▹</span>
                <span>Desenvolvimento de algoritmos e simuladores baseados em modelagem matemática.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-500 mt-1">▹</span>
                <span>Trabalho colaborativo com foco em pesquisa de alto desempenho.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-500 mt-1">▹</span>
                <span>Otimização de códigos para cálculos numéricos complexos.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Python</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">C/C++</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Cálculo Numérico</span>
          </div>
        </motion.div>

        {/* PIBIC */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-slate-500/30 transition-colors shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center border border-slate-500/20 shrink-0">
                <FlaskConical className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Bolsista de Iniciação Científica (PIBIC)</h2>
                <h3 className="text-slate-400 font-medium mt-1">Universidade Federal do Pará</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm whitespace-nowrap h-fit">
              <Calendar className="w-4 h-4" />
              2020 — 2021
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Iniciação científica no início da graduação, focando no desenvolvimento da metodologia de pesquisa e na base de engenharia elétrica.
          </p>
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Principais Entregas</h4>
            <ul className="list-none space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">▹</span>
                <span>Estudo aprofundado de teorias de eletromagnetismo e física aplicada.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">▹</span>
                <span>Levantamento bibliográfico, tabulação de dados e redação científica.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Pesquisa Acadêmica</span>
            <span className="px-3 py-1 bg-[#050505] border border-white/10 rounded-lg text-xs font-medium text-slate-400">Análise de Dados</span>
          </div>
        </motion.div>

      </section>

    </main>
  );
}
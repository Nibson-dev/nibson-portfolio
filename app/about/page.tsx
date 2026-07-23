"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Zap, Brain, Mail } from "lucide-react";
import Link from "next/link";

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

      {/* 2. TIMELINE CONCRETA COM DATAS */}
      <section className="px-4 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold text-white mb-10 border-b border-white/5 pb-4">Minha Trajetória</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {/* VALE */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0a0a0a] bg-emerald-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.4)] z-10"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-col mb-2">
                  <span className="text-emerald-400 text-sm font-bold tracking-wider">2023 — Presente</span>
                  <h3 className="font-bold text-white text-lg">Desenvolvedor Estagiário</h3>
                  <span className="text-slate-400 text-sm">Vale</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Criação do ConciliadorVALE. Atuei diretamente no desenvolvimento de um sistema em Python e FastAPI para automatizar a leitura e validação de arquivos fiscais (SPED), processando os dados para geração de painéis no Power BI.
                </p>
              </div>
            </div>

            {/* BASA */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0a0a0a] bg-slate-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex flex-col mb-2">
                  <span className="text-slate-400 text-sm font-bold tracking-wider">2022 — 2023</span>
                  <h3 className="font-bold text-white text-lg">Estagiário de Tecnologia</h3>
                  <span className="text-slate-400 text-sm">Banco da Amazônia (BASA)</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Atuação no setor de tecnologia da matriz, apoiando as equipes internas na sustentação de rotinas de TI, análise de sistemas e vivência prática em ambiente corporativo bancário.
                </p>
              </div>
            </div>

            {/* LACOS */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0a0a0a] bg-slate-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex flex-col mb-2">
                  <span className="text-slate-400 text-sm font-bold tracking-wider">2021 — 2022</span>
                  <h3 className="font-bold text-white text-lg">Pesquisador (LACOS)</h3>
                  <span className="text-slate-400 text-sm">Laboratório de Computação Científica</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Desenvolvimento de simuladores e modelagem matemática, unindo conceitos de Ciência da Computação e Engenharia Elétrica para resolver problemas numéricos.
                </p>
              </div>
            </div>

            {/* PIBIC & UFPA */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#0a0a0a] bg-slate-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex flex-col mb-2">
                  <span className="text-slate-400 text-sm font-bold tracking-wider">2020</span>
                  <h3 className="font-bold text-white text-lg">Início na UFPA & PIBIC</h3>
                  <span className="text-slate-400 text-sm">Universidade Federal do Pará</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ingresso no curso de Engenharia Elétrica e atuação como bolsista de Iniciação Científica, focando no estudo de física aplicada e eletromagnetismo.
                </p>
              </div>
            </div>

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
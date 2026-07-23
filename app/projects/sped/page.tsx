"use client";

/**
 * @file SpedPage.tsx
 * @description Apresentação do Motor de Processamento Fiscal.
 * Foco em Negócios, Decisões de Engenharia e Principais Aprendizados.
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, FileText, BarChart, ServerOff, Timer, Layers, Cpu, FileSpreadsheet, CheckCircle2, Zap, BookOpen, Maximize, Blocks } from "lucide-react";
import Link from "next/link";

export default function SpedPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#0a0f0d]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Voltar ao Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full">
          <Zap className="w-3 h-3 text-emerald-500" />
          <span className="text-xs text-emerald-500 font-bold tracking-wider">FISCAL ENGINE</span>
        </div>
      </nav>

      {/* 1. HERO (O Desafio) */}
      <section className="pt-40 pb-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Motor de Processamento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Fiscal SPED</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            A análise de arquivos SPED era realizada manualmente, exigindo leitura, conferência e consolidação de milhares de registros fiscais.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 text-slate-300 border border-white/10">
            <Timer className="w-5 h-5 text-emerald-500" />
            <span>Processo anterior consumia cerca de <strong>1 hora por arquivo</strong>.</span>
          </div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 space-y-40 pb-40">

        {/* 2. FLUXO DE PROCESSAMENTO (Diagrama Estilo Árvore) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-16">Fluxo de Processamento</h2>
          
          <div className="flex flex-col items-center relative font-sans">
            
            {/* Arquivo SPED */}
            <div className="w-80 p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)] flex items-center justify-center gap-3">
              <FileText className="w-6 h-6 text-emerald-400" />
              <span className="font-bold text-white text-lg tracking-wide uppercase">Arquivo SPED</span>
            </div>
            
            <div className="h-10 w-px bg-emerald-500/50" />
            <ArrowDown className="text-emerald-500 w-5 h-5 -mt-2 mb-2" />
            
            {/* Leitura e Interpretação */}
            <div className="w-80 p-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium shadow-md">
              Leitura e Interpretação
            </div>

            <div className="h-10 w-px bg-emerald-500/50" />
            <ArrowDown className="text-emerald-500 w-5 h-5 -mt-2 mb-2" />

            {/* Extração dos Blocos */}
            <div className="w-80 p-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium shadow-md">
              Extração dos Blocos Fiscais
            </div>

            <div className="h-10 w-px bg-emerald-500/50" />
            <ArrowDown className="text-emerald-500 w-5 h-5 -mt-2 mb-2" />

            {/* Consolidação */}
            <div className="w-80 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-white font-bold shadow-md">
              Consolidação das Informações
            </div>

            <div className="h-10 w-px bg-emerald-500/50" />
            
            {/* A Bifurcação (Relatórios vs Dashboard) */}
            <div className="w-full max-w-md relative flex justify-center">
                {/* Linha Horizontal Topo */}
                <div className="absolute top-0 w-64 h-px bg-emerald-500/50" />
                
                <div className="flex w-full justify-between px-10 pt-4">
                    {/* Ramo Esquerdo: Excel */}
                    <div className="flex flex-col items-center relative">
                        <div className="absolute -top-4 w-px h-4 bg-emerald-500/50" />
                        <ArrowDown className="text-emerald-500 w-5 h-5 mb-3 -mt-1" />
                        <div className="w-36 p-4 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 shadow-xl hover:border-emerald-500/30 transition-colors">
                            <FileSpreadsheet className="w-6 h-6 text-slate-300" />
                            <div className="text-center">
                                <p className="font-semibold text-white text-sm">Relatórios</p>
                                <p className="text-xs text-slate-400">Excel</p>
                            </div>
                        </div>
                    </div>

                    {/* Ramo Direito: Power BI */}
                    <div className="flex flex-col items-center relative">
                        <div className="absolute -top-4 w-px h-4 bg-emerald-500/50" />
                        <ArrowDown className="text-emerald-500 w-5 h-5 mb-3 -mt-1" />
                        <div className="w-36 p-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex flex-col items-center justify-center gap-2 shadow-xl hover:border-yellow-500/30 transition-colors">
                            <BarChart className="w-6 h-6 text-yellow-500" />
                            <div className="text-center">
                                <p className="font-semibold text-white text-sm">Dashboard</p>
                                <p className="text-xs text-yellow-500/70">Power BI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </motion.section>

        {/* 3. CONHECIMENTO FISCAL (Tabela) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Conhecimento Fiscal</h2>
             <p className="text-slate-400 text-lg">Estrutura interpretada e mapeamento de domínio.</p>
          </div>

          <div className="bg-[#0f1411] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-semibold text-white w-1/3">Bloco</th>
                  <th className="px-6 py-4 font-semibold text-white">Finalidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { block: "0000", desc: "Dados da empresa" },
                  { block: "0150", desc: "Participantes" },
                  { block: "C100", desc: "Documentos fiscais" },
                  { block: "C170", desc: "Itens dos documentos" },
                  { block: "C190", desc: "Apuração ICMS" },
                  { block: "E100", desc: "Período de apuração" },
                  { block: "E110", desc: "Totais da apuração" },
                ].map((item) => (
                  <tr key={item.block} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-emerald-400 font-bold">{item.block}</td>
                    <td className="px-6 py-4 text-slate-300">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-emerald-500/5 border-t border-emerald-500/20">
               <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
                 O sistema interpreta automaticamente diferentes blocos do arquivo SPED Fiscal, extraindo informações estruturadas para geração de relatórios e apoio à análise técnica.
               </p>
            </div>
          </div>
        </motion.section>

        {/* 4. DECISÕES DE ENGENHARIA */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">Decisões de Engenharia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Stateless */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <ServerOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Processamento Stateless</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Arquivos são processados temporariamente, sem armazenamento persistente, reduzindo riscos relacionados à retenção de dados sensíveis.
                </p>
             </div>

             {/* Escalabilidade */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Maximize className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Escalabilidade</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  A arquitetura foi projetada para processar múltiplos arquivos de forma independente, facilitando futuras expansões.
                </p>
             </div>

             {/* Estrutura Modular */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Blocks className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Estrutura Modular</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Separação clara entre leitura, interpretação, validação e geração de relatórios para facilitar a manutenção e evolução da aplicação.
                </p>
             </div>
          </div>
        </motion.section>

        {/* 5. RESULTADOS GERADOS */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Resultados Gerados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">120<span className="text-emerald-500">+</span></h3>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Arquivos processados / mês</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">120 <span className="text-emerald-500 text-4xl">h</span></h3>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Economizadas por mês</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">100<span className="text-emerald-500">%</span></h3>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Processamento Automatizado</p>
               </div>
          </div>
        </motion.section>

        {/* 6. PRINCIPAIS APRENDIZADOS (Fechamento) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-white/10 pt-16"
        >
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Principais Aprendizados</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Arquitetura de aplicações web para processamento de dados.",
                  "Modelagem de fluxos para documentos fiscais estruturados.",
                  "Desenvolvimento de soluções full stack orientadas à automação.",
                  "Boas práticas de segurança e privacidade no tratamento de dados."
                ].map((aprendizado, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-relaxed">{aprendizado}</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
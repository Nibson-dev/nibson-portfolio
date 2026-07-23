"use client";

/**
 * @file SpedPage.tsx
 * @description Apresentação do Motor de Processamento Fiscal.
 * Foco em Negócios, Fluxo de Processamento, Valor Gerado e Case de Engenharia.
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, FileText, BarChart, ServerOff, Timer, Layers, Cpu, FileSpreadsheet, CheckCircle, Database, Lock, Zap, BookOpen } from "lucide-react";
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

        {/* 2. COMO O SISTEMA ENTENDE O SPED (Fluxo de Interpretação) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-16">Fluxo de Interpretação e Processamento</h2>
          
          <div className="flex flex-col items-center relative font-mono text-sm">
            
            {/* Bloco Inicial: O Arquivo Bruto */}
            <div className="w-80 p-6 rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4 text-slate-300 font-sans font-semibold text-lg">
                <FileText className="w-5 h-5 text-emerald-500" /> Arquivo SPED
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-emerald-400/70">
                <span>0000</span>•<span>0150</span>•<span>0200</span>•<span>C100</span>•<span>C170</span>•<span>C190</span>•<span>E100</span>•<span>E110</span>
              </div>
            </div>
            
            <div className="h-10 w-px bg-emerald-500/50 my-2" />
            <ArrowDown className="text-emerald-500 w-5 h-5 mb-2" />
            
            {/* Pipeline de Processamento */}
            <div className="w-80 space-y-3 font-sans">
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-white font-medium shadow-md">
                Leitura do arquivo textual
              </div>
              <ArrowDown className="text-emerald-500/50 w-4 h-4 mx-auto" />
              
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-white font-medium shadow-md">
                Reconhecimento dos registros
              </div>
              <ArrowDown className="text-emerald-500/50 w-4 h-4 mx-auto" />

              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-white font-medium shadow-md">
                Relacionamento entre blocos
              </div>
              <ArrowDown className="text-emerald-500/50 w-4 h-4 mx-auto" />

              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-white font-medium shadow-md">
                Consolidação de dados
              </div>
            </div>

            <div className="h-10 w-px bg-gradient-to-b from-emerald-500/50 to-white/10 my-2" />
            <ArrowDown className="text-slate-500 w-5 h-5 mb-2" />

            {/* Outputs */}
            <div className="flex gap-6 mt-2 font-sans">
               <div className="w-40 p-5 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 shadow-xl">
                 <div className="p-3 rounded-xl bg-slate-800 text-slate-300"><FileSpreadsheet className="w-6 h-6" /></div>
                 <span className="font-semibold text-white">Relatórios</span>
               </div>
               <div className="w-40 p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex flex-col items-center justify-center gap-3 shadow-xl">
                 <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-500"><BarChart className="w-6 h-6" /></div>
                 <span className="font-semibold text-white">Power BI</span>
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

        {/* 4. RESULTADOS (Números Gigantes) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
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

        {/* 5. DESAFIOS TÉCNICOS (Cards Corporativos) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-10">Desafios Técnicos Solucionados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Processamento */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Processamento de arquivos</h3>
                <p className="text-slate-400 leading-relaxed">
                  Implementação de uma rotina capaz de interpretar arquivos SPED compostos por diferentes blocos fiscais, preservando a hierarquia entre registros durante o processamento.
                </p>
             </div>

             {/* Estrutura */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Estrutura dos dados</h3>
                <p className="text-slate-400 leading-relaxed">
                  Desenvolvimento de uma estratégia para transformar registros textuais soltos em informações solidamente estruturadas para a geração automática de relatórios.
                </p>
             </div>

             {/* Performance */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
                <p className="text-slate-400 leading-relaxed">
                  Otimização severa do fluxo de processamento para reduzir significativamente o tempo de análise dos arquivos, lidando com milhares de linhas em segundos.
                </p>
             </div>

             {/* Segurança */}
             <div className="p-8 rounded-2xl bg-[#0f1411] border border-white/5 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Segurança & Privacidade</h3>
                <p className="text-slate-400 leading-relaxed">
                  Desenho de uma arquitetura <i>stateless</i> com processamento estritamente temporário dos arquivos, evitando a persistência e retenção de dados sensíveis da empresa.
                </p>
             </div>
          </div>
        </motion.section>

        {/* 6. LIÇÕES APRENDIDAS (Fechamento) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-white/10 pt-16"
        >
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Lições Aprendidas</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Durante esse projeto, aprofundei consideravelmente meus conhecimentos em arquitetura de aplicações web, técnicas avançadas de processamento de arquivos estruturados, integração de dados com Power BI, desenvolvimento full-stack robusto e aplicação prática de princípios de segurança no processamento de dados fiscais sigilosos.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
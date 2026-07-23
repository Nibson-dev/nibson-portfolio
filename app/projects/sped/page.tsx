"use client";

/**
 * @file SpedPage.tsx
 * @description Apresentação do Motor de Processamento Fiscal.
 * Foco em Negócios, Fluxo de Processamento e Valor Gerado.
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, FileText, BarChart, ShieldCheck, Zap, CheckCircle2, ServerOff, Timer, ArrowRight, FileSearch, Layers, Cpu, FileSpreadsheet } from "lucide-react";
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

        {/* 2. FLUXO DE PROCESSAMENTO (Diagrama Estilo Figma em Código) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-16">Fluxo de Processamento</h2>
          
          <div className="flex flex-col items-center relative">
            
            {/* Step 1 */}
            <div className="w-72 p-5 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-slate-800 text-slate-300"><FileText className="w-6 h-6" /></div>
              <span className="font-semibold text-white text-lg">Arquivo SPED</span>
            </div>
            
            <div className="h-10 w-px bg-gradient-to-b from-white/10 to-emerald-500/50 my-2" />
            <ArrowDown className="text-emerald-500 w-5 h-5 mb-2" />
            
            {/* Step 2 */}
            <div className="w-72 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400"><FileSearch className="w-6 h-6" /></div>
              <span className="font-semibold text-white text-lg text-left leading-tight">Interpretação dos registros fiscais</span>
            </div>

            <div className="h-10 w-px bg-emerald-500/50 my-2" />
            <ArrowDown className="text-emerald-500 w-5 h-5 mb-2" />

            {/* Step 3 */}
            <div className="w-72 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400"><Layers className="w-6 h-6" /></div>
              <span className="font-semibold text-white text-lg text-left leading-tight">Extração dos blocos fiscais</span>
            </div>

            <div className="h-10 w-px bg-emerald-500/50 my-2" />
            <ArrowDown className="text-emerald-500 w-5 h-5 mb-2" />

            {/* Step 4 */}
            <div className="w-72 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4 shadow-xl">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400"><Cpu className="w-6 h-6" /></div>
              <span className="font-semibold text-white text-lg text-left leading-tight">Consolidação dos dados</span>
            </div>

            <div className="h-10 w-px bg-gradient-to-b from-emerald-500/50 to-white/10 my-2" />
            <ArrowDown className="text-slate-500 w-5 h-5 mb-2" />

            {/* Step 5 & 6 (Outputs) */}
            <div className="flex gap-6 mt-2">
               <div className="w-48 p-5 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 shadow-xl">
                 <div className="p-3 rounded-xl bg-slate-800 text-slate-300"><FileSpreadsheet className="w-6 h-6" /></div>
                 <span className="font-semibold text-white">Relatórios</span>
               </div>
               <div className="w-48 p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex flex-col items-center justify-center gap-3 shadow-xl">
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
                 O sistema interpreta automaticamente diferentes blocos do arquivo SPED Fiscal, extraindo informações estruturadas para geração de relatórios e apoio à análise.
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

        {/* 5. SEGURANÇA (Arquitetura orientada à privacidade) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <ServerOff className="w-10 h-10 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Arquitetura orientada à privacidade</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Os arquivos são processados temporariamente, sem armazenamento persistente, reduzindo drasticamente os riscos relacionados à retenção de dados sensíveis da empresa.
            </p>
          </div>
        </motion.section>

        {/* 6. DESAFIOS TÉCNICOS (Checklist) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-white/10 pt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Desafios Técnicos Solucionados</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
             {[
               "Processamento de arquivos de grande porte",
               "Estrutura hierárquica do SPED",
               "Extração de registros fiscais",
               "Geração automática de relatórios",
               "Integração com Power BI",
               "Arquitetura stateless",
               "Segurança dos dados"
             ].map((challenge, i) => (
               <div key={i} className="flex items-center gap-4 p-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-lg">{challenge}</span>
               </div>
             ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
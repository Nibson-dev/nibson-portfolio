"use client";

/**
 * @file SpedPage.tsx
 * @description Apresentação do Motor de Processamento Fiscal.
 * Foco em Arquitetura, Domínio de Negócio e Storytelling.
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, FileText, Cpu, Database, BarChart, ShieldCheck, Zap, CheckCircle2, ServerOff, Timer, ArrowRight } from "lucide-react";
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

      {/* 1. HERO (O Desafio & O Problema) */}
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
            A análise de arquivos SPED era realizada manualmente, exigindo leitura, conferência e consolidação de centenas de milhares de registros fiscais.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
            <Timer className="w-5 h-5" />
            <span>Processo consumia cerca de <strong>1 hora por arquivo</strong>.</span>
          </div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 space-y-40 pb-40">

        {/* 2. ARQUITETURA DA SOLUÇÃO */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-16">Arquitetura da Solução</h2>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-64 p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center gap-3">
              <FileText className="text-emerald-400" /> <span className="font-mono text-white">Arquivo SPED (.txt)</span>
            </div>
            <ArrowDown className="text-slate-600 w-6 h-6 animate-bounce" />
            
            <div className="w-64 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <Cpu className="text-emerald-400" /> <span className="font-bold text-white">Parser & Extrator</span>
            </div>
            <ArrowDown className="text-slate-600 w-6 h-6" />

            <div className="w-64 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <ShieldCheck className="text-emerald-400" /> <span className="font-bold text-white">Motor de Validação</span>
            </div>
            <ArrowDown className="text-slate-600 w-6 h-6" />

            <div className="flex gap-4">
               <div className="w-48 p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2">
                 <Database className="text-slate-400 w-5 h-5" />
                 <span className="text-sm text-slate-300">Dataframes (Pandas)</span>
               </div>
               <div className="w-48 p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2">
                 <BarChart className="text-yellow-400 w-5 h-5" />
                 <span className="text-sm text-slate-300">Power BI Dashboard</span>
               </div>
            </div>
          </div>
        </motion.section>

        {/* 3. ENTENDIMENTO DO DOMÍNIO (Blocos SPED) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold text-white mb-4">Mapeamento de Domínio</h2>
             <p className="text-slate-400">Compreensão profunda da estrutura de blocos do SPED Fiscal.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#0f1411] border border-emerald-500/20 rounded-2xl p-8 font-mono shadow-2xl">
            {[
              { block: "0000", desc: "Abertura e Informações da Empresa", color: "text-slate-300" },
              { block: "0150", desc: "Cadastro de Participantes (Clientes/Fornecedores)", color: "text-slate-400" },
              { block: "C100", desc: "Notas Fiscais (Cabeçalho)", color: "text-emerald-400 font-bold" },
              { block: "C170", desc: "Itens da Nota Fiscal", color: "text-emerald-300" },
              { block: "C190", desc: "Registro Analítico (Apuração ICMS)", color: "text-teal-400" },
              { block: "E100", desc: "Período de Apuração", color: "text-slate-400" },
              { block: "E110", desc: "Valores Finais e Saldos", color: "text-amber-400" },
            ].map((item, index) => (
              <div key={item.block} className="flex flex-col relative">
                <div className="flex items-center gap-6 py-4 z-10 bg-[#0f1411]">
                  <div className={`w-16 text-right text-xl ${item.color}`}>{item.block}</div>
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex-shrink-0" />
                  <div className={`text-sm md:text-base ${item.color}`}>{item.desc}</div>
                </div>
                {/* Linha conectora */}
                {index < 6 && <div className="absolute left-[87px] top-[40px] bottom-[-20px] w-px bg-emerald-500/20" />}
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. SEGURANÇA (Stateless) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
              <ServerOff className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Arquitetura Zero-Trust & Stateless</h2>
            <p className="text-slate-400 text-lg mb-8">
              Dados fiscais são extremamente sensíveis. O motor foi desenhado para processar em memória, garantindo que nenhum dado de cliente seja persistido em banco de dados.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
            {[
              "Processamento 100% em memória RAM",
              "Arquitetura Stateless (Sem Banco de Dados)",
              "Não armazena arquivos pós-processamento",
              "Validação estrita de input/output",
              "Redução drástica da superfície de ataque"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. PERFORMANCE (Antes vs Depois) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-emerald-900/40 to-[#0a0f0d] border border-emerald-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Impacto em Performance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto">
               <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <p className="text-slate-500 mb-2 uppercase tracking-wider text-sm">Antes</p>
                  <p className="text-4xl font-bold text-red-400">1 hora</p>
                  <p className="text-xs text-red-400/50 mt-2">Por arquivo (Manual)</p>
               </div>

               <div className="flex justify-center hidden md:flex">
                  <ArrowRight className="w-10 h-10 text-emerald-500/50" />
               </div>

               <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                  <p className="text-emerald-500 mb-2 uppercase tracking-wider text-sm font-bold">Depois</p>
                  <p className="text-5xl font-bold text-white">20 seg</p>
                  <p className="text-xs text-emerald-400 mt-2">Processamento Autônomo</p>
               </div>
            </div>

            <div className="mt-12 inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300">
              Escala provada: <strong>120 SPEDs</strong> processados em lote = <strong>120 horas economizadas</strong>.
            </div>
          </div>
        </motion.section>

        {/* 6. LIÇÕES APRENDIDAS */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-white/10 pt-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Engineering Takeaways</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {[
               "Otimização em O(n) para arquivos grandes",
               "Gestão de memória com Pandas/Chunking",
               "Clean Architecture em Python",
               "Segurança By Design (Stateless)",
               "Modelagem de Dados para BI",
               "Tradução de Regras de Negócio para Código"
             ].map((lesson, i) => (
               <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-400 flex items-start gap-3 hover:bg-white/10 transition-colors">
                  <span className="text-emerald-500 font-mono">{`0${i+1}`}</span>
                  {lesson}
               </div>
             ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
"use client";

/**
 * @file NexusPage.tsx
 * @description Interface do Sistema Nexus - Inteligência Financeira e Fiscal.
 */

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Brain, CheckCircle2, Bot, Sparkles, MessageSquare, ShieldAlert, Database, Code2, Box } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Importante para carregar a foto

const AGENT_CONFIG = {
  FISCAL_BOT: { id: "agent_fisc_01", task: "Cross-check NF-e vs SPED", status: "active" },
  BANK_BOT: { id: "agent_bank_02", task: "OFX Statement Reconciliation", status: "active" },
  AUDIT_BOT: { id: "agent_audit_03", task: "Anomaly Detection (Isolation Forest)", status: "idle" }
};

export default function NexusPage() {
  return (
    <main className="min-h-screen bg-black text-violet-400 font-sans selection:bg-violet-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Voltar ao Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 border border-violet-500/30 bg-violet-500/10 rounded-full">
          <Brain className="w-3 h-3 text-violet-500" />
          <span className="text-xs text-violet-500 font-bold tracking-wider">AI FINANCIAL CORE</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
        
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs mb-8">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Event-Driven Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Nexus</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ecossistema financeiro autônomo. Agentes inteligentes conciliam extratos bancários e obrigações fiscais.
          </p>
        </motion.div>

        {/* (SCREENSHOTS)  */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-32"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-white/10 flex-1" />
                <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">Live Production Interface</span>
                <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* MOLDURA DO MONITOR */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c] group">
                {/* Header da Janela */}
                <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    <div className="ml-4 px-3 py-0.5 rounded-md bg-black/50 text-[10px] text-slate-500 font-mono flex-1 text-center">
                        nexus-dashboard-v2.prod.internal
                    </div>
                </div>

                {/* A IMAGEM REAL DO SISTEMA */}
                <div className="relative aspect-video bg-slate-900 w-full">
                    {/* IMPORTANTE: 
                       1. Certifique-se que o arquivo 'nexus-dashboard.png' está na pasta PUBLIC.
                       2. Se o nome for diferente, mude no 'src' abaixo.
                    */}
                    <Image 
                        src="/nexus-dashboard.png" 
                        alt="Nexus Financial Dashboard Interface"
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Overlay caso a imagem não carregue (Fallback visual) */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <span className="text-slate-600 text-sm">Carregando preview do sistema...</span>
                    </div>
                </div>
            </div>
        </motion.div>


        {/* ARCHITECTURE DIAGRAM (Mantivemos pois dá credibilidade técnica) */}
        <div className="relative mb-32 p-8 border border-white/10 rounded-3xl bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-20" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Microservice 1 */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
                        <Database className="w-8 h-8 text-violet-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Data Ingestion</h3>
                    <p className="text-xs text-slate-500">ETL Pipelines<br/>OFX & XML Parsers</p>
                </div>

                {/* Microservice 2 (Core) */}
                <div className="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/20 flex flex-col items-center text-center relative">
                    <div className="absolute -top-3 px-3 py-1 bg-violet-500 text-white text-[10px] font-bold rounded-full">CORE LOGIC</div>
                    <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-8 h-8 text-violet-300" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Nexus Brain</h3>
                    <div className="mt-4 w-full space-y-2">
                        {Object.entries(AGENT_CONFIG).map(([key, agent]) => (
                             <div key={key} className="flex justify-between text-[10px] font-mono text-slate-400 border-b border-white/5 pb-1">
                                <span>{agent.id}</span>
                                <span className={agent.status === 'active' ? 'text-emerald-400' : 'text-amber-400'}>{agent.status}</span>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Microservice 3 */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-fuchsia-500/10 rounded-full flex items-center justify-center mb-4">
                        <ShieldAlert className="w-8 h-8 text-fuchsia-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Risk Report</h3>
                    <p className="text-xs text-slate-500">Fiscal Consistency Check<br/>Real-time Alerts</p>
                </div>
            </div>
        </div>

        {/* FEATURES LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
                { icon: Box, title: "Containerized", desc: "Deploy via Docker & Kubernetes para escalabilidade horizontal." },
                { icon: Bot, title: "AI Agents", desc: "Agentes autônomos para leitura de layouts bancários complexos." },
                { icon: Lock, title: "Zero-Trust", desc: "Segurança de dados financeiros com criptografia em repouso." },
                { icon: Code2, title: "Clean Architecture", desc: "Separação estrita entre regras de negócio e infraestrutura." }
             ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                    <div className="mt-1">
                        <item.icon className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
                </div>
             ))}
        </div>

      </section>
    </main>
  );
}
"use client";

/**
 * @file NexusPage.tsx
 * @description Interface do Sistema Nexus - Inteligência Financeira e Fiscal.
 * * SYSTEM DESIGN NOTE:
 * O Nexus opera sob uma Arquitetura Orientada a Eventos (Event-Driven).
 * Utilizamos o padrão "Saga" para garantir consistência entre os microserviços.
 */

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Brain, CheckCircle2, Bot, Sparkles, MessageSquare, ShieldAlert, Database, Code2, Box, Cpu, Server } from "lucide-react";
import Link from "next/link";

// Configuração dos Agentes Autônomos (Simulação de Estado)
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
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs mb-8">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Event-Driven Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Nexus</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ecossistema financeiro autônomo. Agentes inteligentes conciliam extratos bancários e obrigações fiscais, detectando anomalias antes do fechamento contábil.
          </p>
        </motion.div>

        {/* ARCHITECTURE DIAGRAM (OS 3 BLOCOS) */}
        <div className="relative mb-32 p-8 border border-white/10 rounded-3xl bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-20" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                
                {/* Microservice 1: Ingestion */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-violet-500/30 transition-colors"
                >
                    <div className="w-16 h-16 bg-violet-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Database className="w-8 h-8 text-violet-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Data Ingestion</h3>
                    <p className="text-xs text-slate-500">ETL Pipelines<br/>OFX & XML Parsers</p>
                    <div className="mt-4 text-[10px] font-mono text-slate-600 bg-black px-2 py-1 rounded border border-white/5">
                        Status: <span className="text-emerald-500">Listening...</span>
                    </div>
                </motion.div>

                {/* Microservice 2: Nexus Brain (CORE) */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/20 flex flex-col items-center text-center relative"
                >
                    <div className="absolute -top-3 px-3 py-1 bg-violet-500 text-white text-[10px] font-bold rounded-full">CORE LOGIC</div>
                    <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <Brain className="w-8 h-8 text-violet-300" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Nexus Brain</h3>
                    <p className="text-xs text-slate-400">Anomaly Detection Models<br/>Cross-Validation Rules</p>
                    <div className="mt-4 w-full space-y-2">
                        {Object.entries(AGENT_CONFIG).map(([key, agent]) => (
                             <div key={key} className="flex justify-between text-[10px] font-mono text-slate-400 border-b border-white/5 pb-1">
                                <span>{agent.id}</span>
                                <span className={agent.status === 'active' ? 'text-emerald-400' : 'text-amber-400'}>{agent.status}</span>
                             </div>
                        ))}
                    </div>
                </motion.div>

                {/* Microservice 3: Risk Report */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-violet-500/30 transition-colors"
                >
                    <div className="w-16 h-16 bg-fuchsia-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ShieldAlert className="w-8 h-8 text-fuchsia-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Risk Report</h3>
                    <p className="text-xs text-slate-500">Fiscal Consistency Check<br/>Real-time Alerts</p>
                    <div className="mt-4 text-[10px] font-mono text-slate-600 bg-black px-2 py-1 rounded border border-white/5">
                        Output: JSON/Dashboard
                    </div>
                </motion.div>

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
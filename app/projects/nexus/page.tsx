"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, BrainCircuit, Code2, Container, Database, ShieldAlert, CheckCircle2, Bot, Sparkles, MessageSquareText } from "lucide-react";
import Link from "next/link";

// --- ÍCONES HARDCODED (AQUELES QUE NÃO SOMEM NUNCA) ---
const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-violet-400">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconBrain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-violet-300">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-fuchsia-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
  </svg>
);

// Configuração dos Agentes (Para o diagrama)
const AGENT_CONFIG = {
  FISCAL_BOT: { id: "agent_fisc_01", task: "Cross-check NF-e vs SPED", status: "active" },
  BANK_BOT: { id: "agent_bank_02", task: "OFX Statement Reconciliation", status: "active" },
  AUDIT_BOT: { id: "agent_audit_03", task: "Anomaly Detection", status: "idle" }
};

export default function NexusPage() {
  return (
    <main className="min-h-screen bg-black text-slate-300 selection:bg-blue-500/30 font-sans">
      
      {/* NAV: Botão Voltar & Status */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Voltar para Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
          <Lock className="w-3 h-3 text-slate-400" />
          <span className="text-xs font-mono text-slate-400">Private Repository</span>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-10 px-4 max-w-5xl mx-auto text-center">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
            <BrainCircuit className="w-4 h-4" />
            Fiscal & Financial Intelligence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Nexus</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Muito mais que um ERP. Um ecossistema que cruza dados bancários com <span className="text-white">obrigações fiscais</span>, criando uma <span className="text-white font-medium">blindagem contra multas</span> e inconsistências tributárias.
          </p>
        </motion.div>
      </section>

      {/* 2. ARCHITECTURE DIAGRAM (OS BLOCOS QUE VOCÊ GOSTOU) */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="relative p-8 border border-white/10 rounded-3xl bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-20" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                
                {/* 1. Data Ingestion */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-violet-500/30 transition-colors"
                >
                    <div className="w-20 h-20 bg-violet-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconDatabase />
                    </div>
                    <h3 className="text-white font-bold mb-2">Data Ingestion</h3>
                    <p className="text-xs text-slate-500">ETL Pipelines<br/>OFX & XML Parsers</p>
                    <div className="mt-4 text-[10px] font-mono text-slate-600 bg-black px-2 py-1 rounded border border-white/5">
                        Status: <span className="text-emerald-500">Listening...</span>
                    </div>
                </motion.div>

                {/* 2. Nexus Brain (CORE) */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-violet-500/5 border border-violet-500/20 flex flex-col items-center text-center relative"
                >
                    <div className="absolute -top-3 px-3 py-1 bg-violet-500 text-white text-[10px] font-bold rounded-full">CORE LOGIC</div>
                    <div className="w-20 h-20 bg-violet-500/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <IconBrain />
                    </div>
                    <h3 className="text-white font-bold mb-2">Nexus Brain</h3>
                    <p className="text-xs text-slate-400">Anomaly Detection Models</p>
                    <div className="mt-4 w-full space-y-2">
                        {Object.entries(AGENT_CONFIG).map(([key, agent]) => (
                             <div key={key} className="flex justify-between text-[10px] font-mono text-slate-400 border-b border-white/5 pb-1">
                                <span>{agent.id}</span>
                                <span className={agent.status === 'active' ? 'text-emerald-400' : 'text-amber-400'}>{agent.status}</span>
                             </div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. Risk Report */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-violet-500/30 transition-colors"
                >
                    <div className="w-20 h-20 bg-fuchsia-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconShield />
                    </div>
                    <h3 className="text-white font-bold mb-2">Risk Report</h3>
                    <p className="text-xs text-slate-500">Fiscal Consistency Check<br/>Real-time Alerts</p>
                    <div className="mt-4 text-[10px] font-mono text-slate-600 bg-black px-2 py-1 rounded border border-white/5">
                        Output: JSON/Dashboard
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. SHOWCASE (AS FOTOS LINDAS) */}
      <section className="py-20 px-4 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* FEATURE 1: DASHBOARD */}
          <div className="flex flex-col gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 text-white">Visão Holística do Fluxo de Caixa</h2>
              <p className="text-slate-400 text-lg">
                O desafio não era apenas mostrar números, mas contar a história do dinheiro. 
                Desenvolvi um dashboard executivo que unifica múltiplas fontes (Bancos, ERPs) para uma tomada de decisão instantânea.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0a0a] flex items-center px-4 gap-2 border-b border-white/5 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="w-full h-full pt-8 bg-black">
                  {/* FOTO 1 - Se não aparecer, verifique se 'nexus-dashboard.png' está em public */}
                 <img src="/nexus-dashboard.png" alt="Dashboard Nexus" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>

          {/* FEATURE 2: AUDITORIA FISCAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group"
            >
               <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0a0a] flex items-center px-4 gap-2 border-b border-white/5 z-10">
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
               </div>
              <div className="w-full h-full pt-8 bg-black">
                 {/* FOTO 2 */}
                <img src="/nexus-conciliacao.png" alt="Conciliação Nexus" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Auditoria Fiscal em Tempo Real</h2>
              <p className="text-slate-400 text-lg mb-6">
                O maior risco para o empresário não é perder dinheiro, é pagar multa. 
                O Nexus cruza o <span className="text-white">Extrato Bancário (Realidade)</span> com as <span className="text-white">Declarações Oficiais</span>, alertando preventivamente sobre omissões.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Cruzamento OFX vs. Notas Fiscais
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Prevenção de Malha Fina
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Sugestão de correção automática
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 3: CFO INTELIGENTE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                CFO Inteligente <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono">AI AGENT</span>
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Transformei a complexidade do banco de dados em conversas simples. 
                O módulo de IA atua como um analista financeiro 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-400">
                  <Sparkles className="w-5 h-5 text-purple-400" /> Consultas em Linguagem Natural (NLP)
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <MessageSquareText className="w-5 h-5 text-purple-400" /> Contexto financeiro profundo
                </li>
              </ul>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group"
            >
               <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0a0a] flex items-center px-4 gap-2 border-b border-white/5 z-10">
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
                   <div className="w-3 h-3 rounded-full bg-zinc-700" />
               </div>
              <div className="w-full h-full pt-8 bg-black">
                 {/* FOTO 3 */}
                <img src="/nexus-ai.png" alt="IA Nexus" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK RENOVADA */}
      <section className="py-24 px-4 bg-black border-t border-white/5">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center text-white">Arsenal <span className="text-slate-500">Tecnológico</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
             {/* Card Backend */}
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Code2 className="w-5 h-5" /></div>
                 <h3 className="text-lg font-semibold text-white">Core & Backend</h3>
               </div>
               <p className="text-slate-400 text-sm mb-4">Processamento de alta performance e APIs tipadas.</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Python 3.12</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Django Ninja</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Pandas</span>
               </div>
             </div>

             {/* Card AI */}
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400"><BrainCircuit className="w-5 h-5" /></div>
                 <h3 className="text-lg font-semibold text-white">Artificial Intelligence</h3>
               </div>
               <p className="text-slate-400 text-sm mb-4">Agentes autônomos e processamento de linguagem natural.</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">OpenAI API</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">LangChain</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">RAG Pipelines</span>
               </div>
             </div>

             {/* Card Infra */}
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400"><Container className="w-5 h-5" /></div>
                 <h3 className="text-lg font-semibold text-white">Infra & Cloud</h3>
               </div>
               <p className="text-slate-400 text-sm mb-4">Arquitetura escalável baseada em containers.</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Docker</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Azure VM</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">CI/CD</span>
               </div>
             </div>

             {/* Card Data */}
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
               <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><Database className="w-5 h-5" /></div>
                 <h3 className="text-lg font-semibold text-white">Data Strategy</h3>
               </div>
               <p className="text-slate-400 text-sm mb-4">Armazenamento relacional e cache distribuído.</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">PostgreSQL</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">Redis</span>
                 <span className="px-2 py-1 rounded bg-white/5 text-xs text-white">SQLAlchemy</span>
               </div>
             </div>

           </div>
         </div>
      </section>
      
      {/* Espaço final */}
      <div className="h-20" />
    </main>
  );
}
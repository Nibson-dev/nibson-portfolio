"use client";

/**
 * @component SpedPage
 * @description Visualização interativa do motor de processamento fiscal (SPED).
 * * ARCHITECTURE NOTE:
 * O processamento real ocorre no backend (Python/Pandas). Esta interface
 * simula o output do terminal para demonstrar ao usuário final a velocidade
 * e as etapas de validação que ocorrem "under the hood".
 */

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Terminal, Cpu, Zap, FileJson, Building2, Timer, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpedPage() {
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation sequence demonstrating the validation pipeline
  useEffect(() => {
    const steps = [
      { text: "Initializing SPED Engine v2.4...", delay: 500 },
      { text: "Loading fiscal schemas (EFD/ECD)... DONE", delay: 1200 },
      { text: "Connecting to Oracle DB [Read-Only]... SUCCESS", delay: 2000 },
      { text: "> Fetching XML batches (Block C, Block H)...", delay: 2800 },
      { text: "WARN: Inconsistency found in invoice #4492 (Value mismatch)", delay: 3500, color: "text-amber-400" },
      { text: "Auto-correction applied (Tolerance < 0.01)", delay: 4000 },
      { text: "Validating Tax Rates (ICMS/IPI) per region...", delay: 4800 },
      { text: "Generating hash consistency check...", delay: 5500 },
      { text: "SUCCESS: Report generated in /outputs/fiscal_2025.pdf", delay: 6500, color: "text-emerald-400" },
    ];

    let timeouts: NodeJS.Timeout[] = [];

    steps.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
      }, step.delay);
      timeouts.push(timeout);
    });

    // Defensive Cleanup
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-emerald-500 font-mono selection:bg-emerald-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-sans">Voltar ao Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span className="text-xs text-emerald-500 font-bold tracking-wider font-sans">FISCAL SECURITY</span>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-white/10 pb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <FileJson className="w-8 h-8 text-emerald-500" />
            </div>
            <span className="text-emerald-500 font-bold tracking-widest text-sm">PYTHON BACKEND ENGINE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 font-sans">
            Conciliador <span className="text-emerald-500">SPED & Fiscal</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
            Sistema de alta performance para validação cruzada de arquivos fiscais (EFD/ECD). 
            Desenvolvido para substituir validações manuais no PVA, reduzindo o tempo de fechamento mensal de dias para minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* TERMINAL SIMULATION */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0c0c0c] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[400px]"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <Terminal className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500">server_logs — python3 main.py</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2 overflow-y-auto flex-1 custom-scrollbar">
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={log.includes("WARN") ? "text-amber-400" : log.includes("SUCCESS") ? "text-emerald-400 font-bold" : "text-slate-300"}
                >
                  <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                  {log}
                </motion.div>
              ))}
              <div className="animate-pulse text-emerald-500">_</div>
            </div>
          </motion.div>

          {/* METRICS & STACK */}
          <div className="space-y-8">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900 rounded-xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
                <Timer className="w-6 h-6 text-emerald-500 mb-4" />
                <div className="text-2xl font-bold text-white mb-1">120x</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Mais Rápido que Humano</div>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
                <Building2 className="w-6 h-6 text-emerald-500 mb-4" />
                <div className="text-2xl font-bold text-white mb-1">Multinacional</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Ambiente de Produção</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-500" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python 3.11", "Pandas", "PyTest", "PostgreSQL", "XML Parsing", "Docker", "CI/CD"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-amber-500/5 rounded-xl border border-amber-500/10">
              <h4 className="text-amber-400 font-bold mb-2 text-sm flex items-center gap-2">
                <Lock className="w-4 h-4" /> Impacto de Negócio
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                A ferramenta eliminou a necessidade de auditoria manual de 3 analistas seniores, permitindo que a equipe focasse em estratégia tributária ao invés de conferência de linhas de texto.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
"use client";

/**
 * @file CloudPage.tsx
 * @description Dashboard de simulação de infraestrutura Azure.
 * * NOTE: Esta página utiliza simulação Client-Side para demonstrar
 * as métricas. Em produção, estes dados viriam via WebSocket
 * de um agente Zabbix ou Azure Monitor instalado na VM.
 */

import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Shield, Activity, Wifi, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Configuração centralizada da simulação (Padrão Clean Code)
const DASHBOARD_CONFIG = {
  REFRESH_RATE_MS: 1000,
  THRESHOLDS: {
    CPU_MAX: 100,
    CPU_MIN: 5,
    RAM_MAX_GB: 64,
    PING_BASE_MS: 18,
  },
  // Variação randômica para dar sensação de "vida" aos gráficos
  JITTER: {
    CPU: 10,  // +/- 5%
    RAM: 4,   // +/- 2GB
    PING: 8   // +/- 4ms
  }
};

export default function CloudPage() {
  // State initialization
  const [cpu, setCpu] = useState(12);
  const [ram, setRam] = useState(45);
  const [ping, setPing] = useState(DASHBOARD_CONFIG.THRESHOLDS.PING_BASE_MS);

  useEffect(() => {
    // Timer para atualização das métricas em tempo real
    const interval = setInterval(() => {
      
      // Simula flutuação de carga da CPU
      setCpu(prev => {
        const variation = Math.random() * DASHBOARD_CONFIG.JITTER.CPU - (DASHBOARD_CONFIG.JITTER.CPU / 2);
        return Math.min(DASHBOARD_CONFIG.THRESHOLDS.CPU_MAX, Math.max(DASHBOARD_CONFIG.THRESHOLDS.CPU_MIN, prev + variation));
      });

      // Simula uso de memória RAM
      setRam(prev => {
        const variation = Math.random() * DASHBOARD_CONFIG.JITTER.RAM - (DASHBOARD_CONFIG.JITTER.RAM / 2);
        return Math.min(DASHBOARD_CONFIG.THRESHOLDS.RAM_MAX_GB, Math.max(30, prev + variation));
      });

      // Simula latência de rede (Parsec Protocol)
      setPing(prev => {
        const variation = Math.random() * DASHBOARD_CONFIG.JITTER.PING - (DASHBOARD_CONFIG.JITTER.PING / 2);
        return Math.min(50, Math.max(10, prev + variation));
      });

    }, DASHBOARD_CONFIG.REFRESH_RATE_MS);

    // Cleanup function para evitar Memory Leaks se o componente desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0f172a] text-cyan-400 font-sans selection:bg-cyan-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Voltar ao Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-full">
          <Cloud className="w-3 h-3 text-cyan-500" />
          <span className="text-xs text-cyan-500 font-bold tracking-wider">AZURE WINDOWS ENV</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
        
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Workstation <span className="text-cyan-500">& Infrastructure</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Provisionamento de máquinas virtuais de alta performance no Microsoft Azure (Windows Server). 
            Configuração de ambiente remoto de baixíssima latência (Parsec) e otimização do sistema operacional para engenharia de dados e desenvolvimento.
          </p>
        </motion.div>

        {/* DASHBOARD MONITORING UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* CARD 1: SERVER STATUS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 bg-[#1e293b] border border-white/10 rounded-xl p-6 relative overflow-hidden"
          >
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-white font-bold text-lg">Azure VM: WinServer_Datacenter_NV6</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-[#0f172a] rounded-lg border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                  <Cpu className="w-4 h-4" /> CPU LOAD
                </div>
                <div className="text-2xl text-white font-mono">{cpu.toFixed(1)}%</div>
                <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${cpu}%` }} />
                </div>
              </div>

              <div className="p-4 bg-[#0f172a] rounded-lg border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                  <Activity className="w-4 h-4" /> MEMORY
                </div>
                <div className="text-2xl text-white font-mono">{ram.toFixed(1)} GB</div>
                <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${(ram/64)*100}%` }} />
                </div>
              </div>

              <div className="p-4 bg-[#0f172a] rounded-lg border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                  <Wifi className="w-4 h-4" /> PARSEC PING
                </div>
                <div className="text-2xl text-emerald-400 font-mono">{ping.toFixed(0)} ms</div>
                <div className="text-[10px] text-slate-500 mt-1">UDP Direct Stream</div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: POWERSHELL TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1 bg-[#0c0c0c] border border-white/10 rounded-xl p-4 font-mono text-xs flex flex-col shadow-2xl"
          >
             <div className="flex justify-between mb-4 pb-2 border-b border-white/10">
               <span className="text-white font-bold">Administrator: PowerShell Core</span>
             </div>
             <div className="space-y-2 text-slate-300 flex-1 overflow-hidden">
               <p><span className="text-cyan-400">PS C:\Azure\Admin&gt;</span> Get-Service Parsec*</p>
               <p className="text-slate-400">Status   Name               DisplayName</p>
               <p className="text-slate-400">------   ----               -----------</p>
               <p><span className="text-green-400">Running</span>  Parsec             Parsec Service</p>
               <br/>
               <p><span className="text-cyan-400">PS C:\Azure\Admin&gt;</span> winget upgrade --all --silent</p>
               <p className="text-slate-500">Found 3 upgrades. Installing...</p>
               <p className="text-green-400">Successfully installed: Python 3.12</p>
               <br/>
               <p><span className="text-cyan-400">PS C:\Azure\Admin&gt;</span> Set-MpPreference -DisableRealtimeMonitoring $false</p>
               <p className="text-cyan-200">Defender Real-time Protection: <span className="text-green-400">ACTIVE</span></p>
             </div>
          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Azure Cloud VM</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gestão de máquinas Windows Server na Azure. Configuração de políticas de segurança (GPO), IP estático e Resource Groups para garantir um ambiente de desenvolvimento persistente e escalável.
            </p>
          </div>

          <div className="group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Parsec Low-Latency</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Configuração avançada do protocolo Parsec para acesso remoto. Permite rodar IDEs pesadas e ferramentas gráficas via streaming UDP com latência imperceptível (&lt;20ms), superior ao RDP.
            </p>
          </div>

          <div className="group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Windows Hardening</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Otimização do sistema (Debloating) removendo telemetria e processos desnecessários para liberar CPU. Configuração de Firewall e Windows Defender para segurança em ambiente cloud exposto.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, FileText, FileSpreadsheet, Zap, CheckCircle2, AlertTriangle, Building, ArrowRight, ScanLine, BarChart4 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function EnergyPage() {
  const [step, setStep] = useState(1);

  // Simula o loop da animação do pipeline
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 2500); // Aumentei levemente o tempo para dar tempo de ler
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-amber-500 font-sans selection:bg-amber-500/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Voltar ao Portfolio</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/10 rounded-full">
          <Building className="w-3 h-3 text-amber-500" />
          <span className="text-xs text-amber-500 font-bold tracking-wider">BANKING PRODUCTION</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
        
        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs mb-6">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>Target: <span className="text-white font-bold">250+ Agências (PDFs & Fotos)</span></span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Energy <span className="text-amber-500">Audit Pipeline</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Sistema de inteligência financeira que processa faturas (PDFs e Fotos) de 250 agências bancárias. 
            Além de extrair os dados para pagamento, o motor realiza um <strong>balanço analítico</strong> comparando o preço do kW/h por região versus o valor cobrado, identificando discrepâncias automaticamente.
          </p>
        </motion.div>

        {/* VISUAL PIPELINE DEMO */}
        <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 md:p-12 mb-24 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* STEP 1: INPUT (PDF/SCAN) */}
            <motion.div 
              animate={{ opacity: step === 1 ? 1 : 0.3, scale: step === 1 ? 1.05 : 1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-red-500/10 rounded-2xl border border-red-500/20 flex items-center justify-center relative">
                <FileText className="w-10 h-10 text-red-500" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">PDF + FOTO</div>
              </div>
              <div>
                <h3 className="text-white font-bold">Ingestão Híbrida</h3>
                <p className="text-slate-500 text-xs mt-1">250+ Agências<br/>(Arquivos Desestruturados)</p>
              </div>
            </motion.div>

            {/* ARROW ANIMATION */}
            <div className="hidden md:flex justify-center">
              <ArrowRight className={`w-8 h-8 text-slate-600 transition-colors ${step === 2 ? 'text-amber-500' : ''}`} />
            </div>

            {/* STEP 2: PROCESSING (OCR + REGEX) */}
            <motion.div 
              animate={{ opacity: step === 2 ? 1 : 0.3, scale: step === 2 ? 1.05 : 1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center justify-center">
                <ScanLine className={`w-10 h-10 text-amber-500 ${step === 2 ? 'animate-pulse' : ''}`} />
              </div>
              <div>
                <h3 className="text-white font-bold">OCR & Analytics</h3>
                <p className="text-slate-500 text-xs mt-1">Extração de Valores<br/>+ Cálculo de kW/h</p>
              </div>
            </motion.div>

             {/* ARROW ANIMATION */}
             <div className="hidden md:flex justify-center">
              <ArrowRight className={`w-8 h-8 text-slate-600 transition-colors ${step === 3 ? 'text-emerald-500' : ''}`} />
            </div>

            {/* STEP 3: OUTPUT (EXCEL) */}
            <motion.div 
              animate={{ opacity: step === 3 ? 1 : 0.3, scale: step === 3 ? 1.05 : 1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative">
                <BarChart4 className="w-10 h-10 text-emerald-500" />
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">REPORT</div>
              </div>
              <div>
                <h3 className="text-white font-bold">Auditoria Tarifária</h3>
                <p className="text-slate-500 text-xs mt-1">Balanço: Custo Regional<br/>vs. Valor Cobrado</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* DETALHES TÉCNICOS E IMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-500" /> Desafios & Lógica
            </h2>
            
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Variabilidade & Custo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cada região do Brasil tem um layout de fatura e um custo de kW/h diferente. Processar fotos mal tiradas e validar se o banco estava pagando a tarifa correta manualmente era um desafio.
              </p>
            </div>

            <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <h3 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> A Solução Analítica</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                O pipeline extrai o consumo (kW) via OCR. Em seguida, cruza esse dado com uma base de tarifas regionais atualizada. O relatório final destaca agências onde o <strong>(Consumo × Tarifa)</strong> diverge do valor total da fatura, sugerindo auditoria.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-white/10">
             <h2 className="text-xl font-bold text-white mb-6">Métricas de Produção</h2>
             
             <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm">Escala</span>
                  <span className="text-white font-mono">250+ Agências</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm">Formatos</span>
                  <span className="text-emerald-400 font-mono font-bold">PDF Nativo + Imagens (Scan)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm">Output</span>
                  <span className="text-amber-400 font-mono">Balanço Financeiro (XLSX)</span>
                </div>
             </div>

             <div className="flex flex-wrap gap-2">
               {["Python 3.10", "Tesseract OCR", "Pandas Analytics", "Computer Vision", "Financial Auditing", "Excel Automation"].map((tech) => (
                 <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs text-slate-300 border border-white/5">
                   {tech}
                 </span>
               ))}
             </div>
          </div>

        </div>

      </section>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, FileText, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* Background Sutil */}
      <div className="absolute top-[-20%] left-0 w-full h-[500px] bg-spotlight opacity-30 blur-[100px] pointer-events-none" />

      <div className="z-10 text-center px-4 max-w-3xl">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-secondary uppercase tracking-widest">Open to Work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary"
        >
          Engenharia Elétrica & <br />
          <span className="text-metal">Arquitetura de Sistemas.</span>
        </motion.h1>

        {/* Pitch */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Estudante com foco em automação, dados e software aplicado.
          Desenvolvo soluções para <span className="text-white font-medium">automatizar processos manuais</span>, 
          tratar grandes volumes de dados e modelar sistemas confiáveis.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex gap-4 w-full sm:w-auto justify-center">
            {/* Link do GitHub */}
            <a 
              href="https://github.com/Nibson-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors backdrop-blur-md"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            {/* Link do Currículo (PDF na pasta public) */}
            <a 
              href="/curriculo.pdf" 
              target="_blank" 
              rel="noopener noreferrer" // Abre em nova aba
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors backdrop-blur-md"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Currículo</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-white/20"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}''
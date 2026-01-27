"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 border-b border-white/5">
      
      {/* 1. COLUNA DA FOTO */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 relative sticky top-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface aspect-[3/4] group">
          <img 
            src="/itafoto.jpeg" 
            alt="Nibson Muller"
            className="object-cover w-full h-full grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          
          {/* Overlay com Nome e Info */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
            {/* NOME EM DESTAQUE */}
            <h3 className="text-white font-bold text-2xl mb-1 tracking-tight">Nibson Muller</h3>
            
            {/* Universidade e Curso */}
            <p className="text-white/90 font-medium text-sm">Universidade Federal do Pará</p>
            <p className="text-white/50 text-xs mt-1 uppercase tracking-wider">Engenharia Elétrica</p>
          </div>
        </div>
      </motion.div>

      {/* 2. COLUNA DO TEXTO E PILARES */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-2/3 space-y-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Além do <span className="text-metal">Código</span>
          </h2>
          
          <p className="text-lg text-secondary leading-relaxed">
            Minha base na <span className="text-white font-medium">UFPA</span> me ensina diariamente a encarar a engenharia com rigor científico, 
            me levando a lugares que sempre sonhei como a instituição de maior prestígio no Brasil, o <span className="text-white font-medium">ITA</span>.
          </p>
          
          <p className="text-lg text-secondary leading-relaxed mt-4">
            Combino essa formação acadêmica sólida com a agilidade do desenvolvimento de software moderno.
          </p>

          <p className="text-lg text-secondary leading-relaxed mt-4">
            Não busco apenas que o código funcione, mas que a <span className="text-white font-medium">arquitetura sobreviva</span> à escala e ao tempo.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all group">
            <Cpu className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-1">Sistemas & Automação</h3>
            <p className="text-sm text-secondary">Controle lógico, integração hardware-software e otimização de processos críticos.</p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all group">
            <Network className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-1">Engenharia de Dados</h3>
            <p className="text-sm text-secondary">Pipelines ETL complexos, ingestão de SPED/OFX e consistência de dados financeiros.</p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all group">
            <Terminal className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-1">Full Stack Engineering</h3>
            <p className="text-sm text-secondary">Do baixo nível (C/Linux) à nuvem (Next.js/Azure) com foco em performance.</p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all group">
            <BookOpen className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-1">Base Teórica</h3>
            <p className="text-sm text-secondary">Modelagem matemática, cálculo avançado e física aplicada a problemas reais.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
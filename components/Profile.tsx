"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, BookOpen } from "lucide-react";

export default function Profile() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Coluna da Imagem (Esquerda) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 relative"
      >
        {/* Moldura Tech */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20" />
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface aspect-[3/4]">
          {/* PLACEHOLDER DA FOTO - Substitua depois pelo <Image /> do Next.js */}
          <div className="w-full h-full bg-[#111] flex items-center justify-center text-secondary">
             {/* Aqui virá sua foto. Por enquanto, um ícone de user */}
             <span className="text-sm">Foto Profissional Aqui</span>
          </div>
          
          {/* Overlay Tecnológico na foto */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              SYSTEM_ONLINE
            </div>
          </div>
        </div>
      </motion.div>

      {/* Coluna do Texto (Direita) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-2/3 space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Engenharia <span className="text-secondary">&</span> Arquitetura
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Estudante de <span className="text-white font-medium">Engenharia Elétrica</span> com foco em automação, sistemas e software aplicado. 
            Meu interesse não é apenas código, mas a <span className="text-white font-medium">arquitetura de sistemas complexos</span> e o fluxo de dados.
          </p>
        </div>

        {/* Grid de "PILARES" (Mentalidade de Engenheiro) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Cpu className="w-6 h-6 text-accent mb-2" />
            <h3 className="text-white font-medium mb-1">Sistemas & Automação</h3>
            <p className="text-sm text-secondary">Controle lógico, integração hardware-software e processos críticos.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Network className="w-6 h-6 text-accent mb-2" />
            <h3 className="text-white font-medium mb-1">Arquitetura de Dados</h3>
            <p className="text-sm text-secondary">Pipelines ETL, ingestão de eventos e consistência de dados.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <Terminal className="w-6 h-6 text-accent mb-2" />
            <h3 className="text-white font-medium mb-1">Full Stack Engineering</h3>
            <p className="text-sm text-secondary">Do hardware (C/C++) à nuvem (Python/Azure/Next.js).</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <BookOpen className="w-6 h-6 text-accent mb-2" />
            <h3 className="text-white font-medium mb-1">Base Teórica</h3>
            <p className="text-sm text-secondary">Modelagem matemática, cálculo avançado e física aplicada.</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
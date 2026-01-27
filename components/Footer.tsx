"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "nibson.neto@itec.ufpa.br"; // <--- E-mail institucional atualizado

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-20 px-4 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Luz de fundo final */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Vamos construir o <br />
            <span className="text-metal">Impossível?</span>
          </h2>
          <p className="text-secondary text-lg mb-10 max-w-xl mx-auto">
            Estou disponível para projetos de engenharia que desafiem os limites entre hardware, software e inteligência artificial.
          </p>

          {/* O Botão de Email Mágico */}
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={handleCopy}
              className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface border border-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-medium text-white tracking-wide">{email}</span>
              
              {/* Tooltip de Copiado */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5 text-secondary" />}
              </div>
            </button>

            {/* Links Sociais */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/Nibson-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <Github className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://br.linkedin.com/in/nibson-m%C3%BCller-3b0829289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright Sutil */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/50">
          <p>© 2026 Nibson Muller. Engineered in Belém, Brazil.</p>
          <p className="mt-2 md:mt-0">Systems & Architecture Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
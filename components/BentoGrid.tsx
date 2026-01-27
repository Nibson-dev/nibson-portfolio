"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, FileText, Terminal, Zap } from "lucide-react"; 
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project Nexus",
    category: "Financial Intelligence & AI",
    description: "Ecossistema financeiro completo com ingestão de dados bancários e agentes autônomos para auditoria de caixa e compliance.",
    size: "md:col-span-2", 
    gradient: "from-indigo-500/20 to-blue-500/20",
    icon: BrainCircuit,
    href: "/projects/nexus",
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    category: "Infrastructure as Code",
    description: "Gestão de ambientes Linux, configuração de VMs na Azure e hardening de segurança para deploy de aplicações críticas.",
    size: "md:col-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: Terminal,
    href: "/projects/cloud", 
  },
  {
    id: 3,
    title: "Energy ETL Pipeline", // Agora PEQUENO
    category: "Banking Automation",
    description: "Sistema em produção (250+ agências). Automação de faturas de energia, convertendo PDFs bancários em dados de pagamento.",
    size: "md:col-span-1", // Tamanho reduzido
    gradient: "from-amber-500/20 to-yellow-500/20",
    icon: Zap,
    href: "/projects/energy", 
  },
  {
    id: 4,
    title: "SPED Engine", // Agora GRANDE (O destaque técnico)
    category: "High-Performance Parsing",
    description: "Motor proprietário que substitui o validador oficial do governo (PVA). Processa gigabytes de arquivos fiscais (EFD/ECD) em segundos usando Streams e Regex, eliminando gargalos manuais do setor fiscal.",
    size: "md:col-span-2", // Tamanho expandido
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: FileText,
    href: "/projects/sped",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BentoGrid() {
  return (
    <section id="projetos" className="py-24 px-4 max-w-6xl mx-auto bg-background">
      {/* Título da Seção */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Engenharia de <span className="text-metal">Projetos</span>
        </h2>
        <div className="h-1 w-20 bg-white/20 rounded-full" />
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={project.href}
            className={`${project.size} block h-full`}
          >
            <motion.div
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-surface border border-white/5 h-full flex flex-col justify-between p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-wider">
                  {project.category}
                </p>

                <p className="text-secondary text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
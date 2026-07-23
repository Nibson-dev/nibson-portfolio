"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Database, Server, Cloud, Beaker, Ship, FolderGit2 } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "sped",
    title: "Motor SPED",
    category: "Fiscal & Data Engineering",
    description: "Motor de processamento e análise de arquivos SPED Fiscal. Automatiza a leitura, validação e consolidação de mais de 120 arquivos por mês, eliminando o trabalho manual e gerando relatórios via Power BI.",
    techs: ["Python", "FastAPI", "TypeScript", "Power BI"],
    icon: Database,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    link: "/projects/sped",
    status: "Production"
  },
  {
    id: "conciliador",
    title: "ConciliadorVALE",
    category: "Corporate Automation",
    description: "Plataforma corporativa full-stack para reconciliação fiscal. Integra rotinas de extração de dados e validação de regras de negócio específicas da área de tributos da companhia.",
    techs: ["FastAPI", "React", "Python", "Vercel"],
    icon: Server,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    link: "/projects/conciliador",
    status: "Production"
  },
  {
    id: "nexus",
    title: "Project Nexus",
    category: "Financial Ecosystem",
    description: "Aplicativo multiplataforma para controle financeiro e conciliação de extratos bancários. Desenvolvido com arquitetura orientada a eventos para garantir a consistência dos dados de fluxo de caixa.",
    techs: ["Flutter", "Dart", "Event-Driven", "Mobile"],
    icon: Cloud,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    link: "/projects/nexus",
    status: "Production"
  },
  {
    id: "explainlab",
    title: "ExplainLab",
    category: "Scientific Computing",
    description: "Simuladores interativos 3D para o ensino de física (termodinâmica, cinemática e planos inclinados). Transforma equações complexas em visualizações web interativas renderizadas no navegador.",
    techs: ["React", "Three.js", "JavaScript", "Física Aplicada"],
    icon: Beaker,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    link: "#", // Se tivermos a página depois, trocamos o link
    status: "Live"
  },
  {
    id: "navegario",
    title: "NavegaRio",
    category: "Logistics & Mobility",
    description: "Projeto em fase de estruturação para o mapeamento e otimização de rotas fluviais. Foco no desenvolvimento da arquitetura de dados e regras de negócio de mobilidade na região amazônica.",
    techs: ["Architecture", "Data Modeling", "GIS"],
    icon: Ship,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    link: "#",
    status: "In Development"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 pb-20">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-bold tracking-widest uppercase">
            <FolderGit2 className="w-4 h-4" />
            Engineering Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-emerald-500">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Uma seleção das principais arquiteturas e soluções de software que desenvolvi para resolver problemas reais nos setores corporativo, financeiro e acadêmico.
          </p>
        </motion.div>
      </section>

      {/* GRID DE PROJETOS */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={project.link}
                className={`group block p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all h-full flex flex-col justify-between shadow-xl ${project.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center border ${project.borderColor}`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400">
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-[#050505] border border-white/10 rounded text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== '#' && (
                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}
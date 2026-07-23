"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CONTACT_LINKS = [
  {
    title: "E-mail",
    value: "nibson.muller27@gmail.com",
    href: "mailto:nibson.muller27@gmail.com",
    icon: Mail,
    color: "group-hover:text-emerald-400",
    bgHover: "hover:border-emerald-500/30"
  },
  {
    title: "LinkedIn",
    value: "Nibson Müller",
    href: "https://www.linkedin.com/in/nibson-m%C3%BCller-3b0829289/",
    icon: Linkedin,
    color: "group-hover:text-blue-400",
    bgHover: "hover:border-blue-500/30"
  },
  {
    title: "WhatsApp",
    value: "(91) 98333-6756",
    href: "https://wa.me/5591983336756",
    icon: MessageCircle,
    color: "group-hover:text-green-400",
    bgHover: "hover:border-green-500/30"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-[100dvh] bg-[#050505] text-slate-300 font-sans selection:bg-emerald-500/30 flex flex-col">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Voltar para Início</span>
        </Link>
      </nav>

      {/* CONTEÚDO CENTRALIZADO */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 pt-32 pb-20">
        <div className="max-w-3xl w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponível para oportunidades
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Vamos construir algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">juntos.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Estou aberto a oportunidades de estágio, parcerias em projetos de pesquisa e novas conexões na área de tecnologia e engenharia.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all ${link.bgHover}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#050505] transition-colors">
                      <link.icon className={`w-5 h-5 text-slate-400 ${link.color} transition-colors`} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{link.title}</h2>
                      <p className="text-lg md:text-xl font-medium text-white tracking-tight">{link.value}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 -translate-x-4">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="py-8 text-center text-sm font-medium text-slate-600">
        © {new Date().getFullYear()} Nibson Müller. Belém, Pará, Brasil.
      </footer>
    </main>
  );
}
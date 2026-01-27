# Portfolio & Engineering Projects

Bem-vindo ao repositório central dos meus projetos de engenharia de software.
Este portfólio foi construído para demonstrar não apenas código, mas **soluções de arquitetura** para problemas reais nos setores Financeiro, Energia e Fiscal.

 **Live Demo:** [portfolio.nibsondev.vercel.com](https://nibsondev.vercel.app)

---

##  Tech Stack & Engineering Decisions

Este projeto utiliza uma stack moderna focada em performance e experiência do desenvolvedor (DX).

- **Core:** [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first architecture)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) (Declarative animations)
- **Deploy:** [Vercel](https://vercel.com/) (Edge Network & CI/CD)
- **Icons:** Lucide React

> **Nota de Arquitetura:** Optei por utilizar *Client-Side Rendering* (CSR) nas páginas de simulação (SPED/Cloud) para evitar carga desnecessária em Serverless Functions, mantendo a interatividade fluida no navegador do cliente.

---

##  Featured Projects (Deep Dives)

### 1. SPED Engine (High-Performance Fiscal Validation)
**O Problema:** A validação de arquivos fiscais (EFD/ECD) no validador governamental (PVA) é lenta e manual.
**A Solução:** Um motor *headless* em Python que realiza pré-validação de hash e regras de negócio.
- **Destaque:** Redução de tempo de processamento de ~45min para segundos.
- *Visualização interativa disponível na aba "SPED" do portfólio.*

### 2. Energy ETL Pipeline
**O Problema:** Processamento manual de faturas de energia de 250+ agências bancárias.
**A Solução:** Pipeline híbrido (OCR + Parser de PDF) para extração de dados não estruturados.
- **Destaque:** Módulo de auditoria que cruza tarifa regional (kW/h) vs valor cobrado.

### 3. Cloud & DevOps (Azure Infrastructure)
Configuração de ambiente de desenvolvimento remoto de baixa latência utilizando **Parsec** em instâncias Azure (Windows Server), com foco em *Security Hardening*.

---

##  Author

**Nibson Müller**
*Engenharia Elétrica @ UFPA*
*Foco em: Automação, Sistemas Distribuídos e Backend Python.*

- [LinkedIn](https://www.linkedin.com/in/nibson-m%C3%BCller-3b0829289)
- [GitHub](https://github.com/Nibson-dev)
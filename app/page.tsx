"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  MessageCircle,
  ArrowUpRight,
  Code2,
  Globe,
  Zap,
  Menu,
  X,
  Mail,
  Phone,
  ChevronDown,
  Star,
  Monitor,
  Smartphone,
  Database,
  Server,
  Layers,
  Bot,
} from "lucide-react";
import type { Variants } from "framer-motion";
import Image from "next/image";

// ============================================================
// 🔧 SUAS INFORMAÇÕES — edite apenas este bloco
// ============================================================
function Github({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
const ME = {
  nome: "Afonso Fagundes",
  titulo: "Full Stack Developer",
  cidade: "Santa Catarina, Brasil",
  whatsapp: "5511947901270",
  email: "afonsofagundes85@email.com",
  github: "https://github.com/AfonsoFagundes",
  linkedin: "https://linkedin.com/in/afonsofagundes",
  bio: "Desenvolvo sites premium, landing pages de alta conversão e automações que trabalham por você 24 horas por dia. Combinando código limpo com design de nível internacional, entrego resultados reais para clínicas, escritórios, restaurantes e empresas de todo o Brasil.",
  bio2: "Além de sites e landing pages, atuo como desenvolvedor Full Stack — construindo sistemas, APIs, dashboards e soluções digitais completas para empresas que querem crescer com tecnologia séria.",
  stacks: [
    { nome: "JavaScript", icon: "JS", cor: "#F7DF1E", bg: "#1a1800" },
    { nome: "TypeScript", icon: "TS", cor: "#3178C6", bg: "#001229" },
    { nome: "React", icon: "Re", cor: "#61DAFB", bg: "#001920" },
    { nome: "Next.js", icon: "Nx", cor: "#ffffff", bg: "#1a1a1a" },
    { nome: "Node.js", icon: "No", cor: "#68A063", bg: "#091400" },
    { nome: "PostgreSQL", icon: "Pg", cor: "#336791", bg: "#000d1a" },
    { nome: "API REST", icon: "Api", cor: "#9a7d4a", bg: "#1a1200" },
    { nome: "HTML & CSS", icon: "HC", cor: "#E34F26", bg: "#1a0800" },
  ],
  servicos: [
    {
      icon: Globe,
      titulo: "Sites Premium",
      desc: "Sites profissionais com design de nível internacional que geram autoridade, confiança e clientes todos os dias. Resultado do primeiro acesso.",
      itens: [
        "Design exclusivo",
        "Mobile-first",
        "SEO otimizado",
        "Alta velocidade",
      ],
      destaque: "Para qualquer nicho",
    },
    {
      icon: Zap,
      titulo: "Landing Pages",
      desc: "Páginas focadas em uma única missão: converter visitantes em clientes. Copy persuasivo, hierarquia visual e CTAs que vendem.",
      itens: [
        "Copy de alto impacto",
        "A/B testável",
        "Integração WhatsApp",
        "Analytics",
      ],
      destaque: "Foco em conversão",
    },
    {
      icon: Bot,
      titulo: "Automação WhatsApp",
      desc: "Atendimento automático 24h que responde, qualifica e agenda seus clientes mesmo enquanto você dorme. Zero esforço manual.",
      itens: [
        "Respostas automáticas",
        "Qualificação de leads",
        "Agendamento online",
        "Relatórios",
      ],
      destaque: "Vende no automático",
    },
    {
      icon: Server,
      titulo: "Desenvolvimento Full Stack",
      desc: "Sistemas completos, APIs robustas, dashboards e aplicações web do zero. Código limpo, escalável e bem documentado.",
      itens: ["APIs REST", "Banco de dados", "Autenticação", "Deploy em nuvem"],
      destaque: "Software sob medida",
    },
    {
      icon: Layers,
      titulo: "Sites para Advogados",
      desc: "Presença digital que transmite autoridade e credibilidade. Captura leads qualificados e agenda consultas de forma automática.",
      itens: [
        "Design elegante",
        "SEO jurídico",
        "Captação de leads",
        "LGPD compliant",
      ],
      destaque: "Especialidade",
    },
    {
      icon: Monitor,
      titulo: "Sites para Clínicas",
      desc: "Do consultório ao digital. Sites que atraem novos pacientes, geram agendamentos e posicionam sua clínica como referência.",
      itens: [
        "Agendamento online",
        "Google Meu Negócio",
        "Depoimentos",
        "Resultados",
      ],
      destaque: "Especialidade",
    },
  ],
  projetos: [
    {
      titulo: "Landing Page — Advocacia Premium",
      desc: "Redesign completo com foco em captação de leads qualificados e autoridade jurídica.",
      tags: ["Next.js", "Tailwind", "Framer Motion,", "React"],
      cor: "#9a7d4a",
      img: "/assets/templete-lawyer.png",
      link: "https://lawyer-templete-pwwxj2drk-afonsofagundes85-5295s-projects.vercel.app/",
    },
    {
      titulo: "Sistema de Gestão — Restaurante",
      desc: "Cardápio digital, pedidos via WhatsApp e painel CRM administrativo completo.",
      tags: ["TypeScript", "API REST", "PostgreSQL", "React", "TailWind", "Node.js"],
      cor: "#9a7d4a",
      img: "/assets/deliciasmf.png",
    },
  
  ],
  depoimentos: [
    {
      texto:
        "O Afonso entregou muito além do esperado. O site ficou incrível e já recebi vários clientes novos pelo WhatsApp na primeira semana.",
      autor: "Dra. Fernanda Costa",
      cargo: "Advogada — Florianópolis, SC",
    },
    {
      texto:
        "Profissional excepcional. Entende de negócio, não só de código. A landing page dobrou nossa captação de pacientes.",
      autor: "Dr. Ricardo Alves",
      cargo: "Clínica Estética — Joinville, SC",
    },
    {
      texto:
        "A automação do WhatsApp mudou o jogo. Atendo 3x mais sem precisar ficar no celular o dia todo.",
      autor: "Marcos Oliveira",
      cargo: "Empresário — São Paulo, SP",
    },
  ],
  stats: [
    { n: "7+", l: "projetos entregues" },
    { n: "100%", l: "satisfação" },
    { n: "3x", l: "mais leads em média" },
    { n: "24h", l: "suporte ativo" },
  ],
};
// ============================================================

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

function smoothScroll(href: string) {
  document
    .getElementById(href.replace("#", ""))
    ?.scrollIntoView({ behavior: "smooth" });
}

// ── NAVBAR ──
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const WA = `https://wa.me/${ME.whatsapp}?text=Olá! Vi seu portfólio e quero conversar sobre um projeto.`;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-[#0a0a09]/90 backdrop-blur-2xl border-b border-white/6" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-serif text-lg text-white"
          >
            {ME.nome.split(" ")[0]}
            <span className="text-[#9a7d4a]">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => smoothScroll(l.href)}
                className="text-[11px] font-medium tracking-[.15em] uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-medium tracking-[.15em] uppercase bg-[#9a7d4a] hover:bg-[#c4a46b] text-white px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar comigo
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a09] flex flex-col px-6 pt-24 pb-12 gap-4 md:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease }}
                onClick={() => {
                  smoothScroll(l.href);
                  setOpen(false);
                }}
                className="text-left font-serif text-4xl font-normal text-white hover:text-[#9a7d4a] transition-colors py-3 border-b border-white/6"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.35, ease }}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#9a7d4a] text-white text-[11px] font-medium tracking-[.18em] uppercase px-8 py-4"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </motion.a>
            <div className="mt-auto flex gap-4">
              <a
                href={ME.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={ME.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── HERO ──
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const WA = `https://wa.me/${ME.whatsapp}?text=Olá! Vi seu portfólio e quero conversar sobre um projeto.`;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden bg-[#0a0a09]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125[radial-gradient(ellipse_at_50%_0%,rgba(154,125,74,0.12),transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative flex flex-col items-center text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-[10px] font-medium tracking-[.25em] uppercase text-[#9a7d4a] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9a7d4a] animate-pulse" />
          Disponível para projetos
        </motion.div>

        {/* Olá, eu sou */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-white/40 text-lg mb-2 font-light"
        >
          Olá, eu sou
        </motion.p>

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="font-serif text-6xl md:text-8xl font-normal leading-none text-white tracking-tight mb-4"
        >
          {ME.nome.split(" ")[0]}{" "}
          <span className="italic text-[#c4a46b]">{ME.nome.split(" ")[1]}</span>
        </motion.h1>

        {/* Título animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm font-medium tracking-[.12em] uppercase text-white/40"
        >
          <span>Full Stack Developer</span>
          <span className="text-[#9a7d4a]">·</span>
          <span>Sites Premium</span>
          <span className="text-[#9a7d4a]">·</span>
          <span>Automação</span>
          <span className="text-[#9a7d4a]">·</span>
          <span>Landing Pages</span>
        </motion.div>

        {/* Linha dourada */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          style={{ originX: 0.5 }}
          className="w-12 h-px bg-[#9a7d4a] mb-8"
        />

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="text-white/50 text-lg leading-relaxed max-w-2xl mb-10"
        >
          Crio <span className="text-white/80">sites premium</span>,{" "}
          <span className="text-white/80">landing pages de alta conversão</span>{" "}
          e <span className="text-white/80">automações</span> que trabalham por
          você 24 horas. Para clínicas, advogados, restaurantes e empresas que
          querem crescer de verdade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.75 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-[#111110] font-semibold text-sm px-7 py-3.5 hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar projeto
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
          <button
            onClick={() => smoothScroll("#projetos")}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white border border-white/10r-white/30 px-7 py-3.5 transition-all"
          >
            Ver projetos
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.9 }}
          className="flex items-center gap-5"
        >
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[.15em] uppercase text-white/30 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[.15em] uppercase text-white/30 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[.25em] uppercase text-white/20">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── STATS BAR ──
function StatsBar() {
  return (
    <div className="bg-[#0d0d0b] border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/4">
        {ME.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className="bg-[#0d0d0b] py-8 text-center"
          >
            <div className="font-serif text-3xl font-normal text-white mb-1">
              {s.n}
            </div>
            <div className="text-[10px] tracking-[.18em] uppercase text-white/30">
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── SOBRE ──
function Sobre() {
  return (
    <section id="sobre" className="bg-[#111110] py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-4"
          >
            Sobre mim
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-normal leading-[1.1] text-white mb-5"
          >
            Código que <em className="italic text-[#c4a46b]">vende.</em>
            <br />
            Design que <em className="italic text-[#c4a46b]">converte.</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ originX: 0 }}
            className="w-9 h-px bg-[#9a7d4a] mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="text-[15px] leading-[1.9] text-white/50 mb-5"
          >
            {ME.bio}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-[15px] leading-[1.9] text-white/50 mb-8"
          >
            {ME.bio2}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Globe, txt: "Sites & Landing Pages" },
              { icon: Bot, txt: "Automação WhatsApp" },
              { icon: Code2, txt: "Full Stack Dev" },
              { icon: Database, txt: "APIs & Banco de dados" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 border border-white/[0.07] text-[12px] text-white/50 hover:border-[#9a7d4a]/40 hover:text-white/80 transition-all duration-200"
              >
                <t.icon className="w-3.5 h-3.5 text-[#9a7d4a]" />
                {t.txt}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Foto + card */}
        <div className="flex flex-col gap-4">
          <motion.div
  className="w-full aspect-4/5 bg-white/3 border border-white/[0.07] relative overflow-hidden group">
  <Image
    src="/assets/afonso.jpeg"
    alt="Afonso Fagundes"
    fill
    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
  />
</motion.div>

          {/* Card de localização/disponibilidade */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="p-5 border border-white/[0.07] bg-white/2 flex items-center justify-between"
          >
            <div>
              <div className="text-[9px] tracking-[.22em] uppercase text-[#9a7d4a] mb-1">
                Localização
              </div>
              <div className="text-sm text-white/70">{ME.cidade}</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] tracking-[.22em] uppercase text-[#9a7d4a] mb-1">
                Status
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponível
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SERVIÇOS ──
function Servicos() {
  return (
    <section id="servicos" className="bg-[#0d0d0b] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-4"
            >
              O que eu faço
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-normal leading-[1.1] text-white"
            >
              Estrutura digital que{" "}
              <em className="italic text-[#c4a46b]">gera clientes</em> todos os
              dias
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-[14px] leading-[1.85] text-white/40"
          >
            Não entrego só sites bonitos. Entrego sistemas de captação pensados
            para o seu negócio crescer de forma previsível e consistente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
          {ME.servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                className="group bg-[#0d0d0b] hover:bg-[#141412] p-8 relative overflow-hidden transition-colors duration-300 cursor-default"
              >
                {/* linha dourada hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#9a7d4a] group-hover:w-full transition-all duration-500" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 border border-white/8 flex items-center justify-center group-hover:border-[#9a7d4a]/40 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-[#9a7d4a]" />
                  </div>
                  <span className="text-[9px] tracking-[.18em] uppercase text-[#9a7d4a]/60 border border-[#9a7d4a]/20 px-2.5 py-1">
                    {s.destaque}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-white mb-3">
                  {s.titulo}
                </h3>
                <p className="text-[13px] leading-[1.8] text-white/40 mb-5">
                  {s.desc}
                </p>

                <ul className="flex flex-col gap-1.5">
                  {s.itens.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[12px] text-white/35"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#9a7d4a] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── PROJETOS ──
function Projetos() {
  return (
    <section id="projetos" className="bg-[#111110] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-4"
        >
          Portfólio
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-normal leading-[1.1] text-white mb-14"
        >
          Projetos que{" "}
          <em className="italic text-[#c4a46b]">geram resultado</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
          {ME.projetos.map((p, i) => {
            const Wrapper = p.link ? motion.a : motion.div;
            return (
              <Wrapper
                key={i}
                {...(p.link
                  ? {
                      href: p.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="group bg-[#111110] hover:bg-[#161614] transition-colors duration-300 overflow-hidden cursor-default"
              >
                {/* Imagem */}
                <div className="w-full h-56 relative overflow-hidden border-b border-white/5">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/3 flex items-center justify-center">
                      <div className="text-center text-white/15">
                        <Monitor className="w-10 h-10 mx-auto mb-2" />
                        <div className="text-[10px] tracking-[.15em] uppercase">
                          em breve
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        className="text-[10px] tracking-[.12em] uppercase text-[#9a7d4a] border border-[#9a7d4a]/25 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-normal text-white mb-2 group-hover:text-[#c4a46b] transition-colors">
                        {p.titulo}
                      </h3>
                      <p className="text-[13px] leading-[1.8] text-white/40">
                        {p.desc}
                      </p>
                    </div>
                    {/* Ícone de link — só aparece se tiver URL */}
                    {p.link && (
                      <div className="shrink-0 w-8 h-8 border border-white/8 flex items-center justify-center group-hover:border-[#9a7d4a]/50 group-hover:text-[#9a7d4a] text-white/20 transition-all mt-1">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── HABILIDADES ──
function Habilidades() {
  return (
    <section id="habilidades" className="bg-[#0d0d0b] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-4"
        >
          Stack técnica
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-normal leading-[1.1] text-white mb-4"
        >
          Tecnologias que <em className="italic text-[#c4a46b]">domino</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-[14px] leading-relaxed text-white/40 max-w-xl mb-14"
        >
          Do front ao back-end, do banco de dados ao deploy. Entrego soluções
          completas sem depender de terceiros.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/4">
          {ME.stacks.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="group bg-[#0d0d0b] hover:bg-[#131311] p-7 flex flex-col items-center text-center transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center mb-4 font-mono text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: s.bg,
                  color: s.cor,
                  border: `1px solid ${s.cor}25`,
                }}
              >
                {s.icon}
              </div>
              <div className="text-[13px] font-medium text-white/60 group-hover:text-white transition-colors">
                {s.nome}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/4"
        >
          {[
            {
              icon: Zap,
              titulo: "Entrega rápida",
              desc: "Projetos prontos para ir ao ar rapidamente, sem perder qualidade.",
            },
            {
              icon: Star,
              titulo: "Foco em resultados",
              desc: "Cada decisão de design e código visa gerar mais clientes para você.",
            },
            {
              icon: Smartphone,
              titulo: "Mobile-first",
              desc: "Todo projeto é pensado primeiro para mobile, onde está seu cliente.",
            },
          ].map((c, i) => (
            <div key={i} className="bg-[#0d0d0b] p-7 flex gap-4">
              <div className="w-9 h-9 border border-white/[0.07] flex items-center justify-center shrink-0">
                <c.icon className="w-4 h-4 text-[#9a7d4a]" />
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-1.5">
                  {c.titulo}
                </div>
                <div className="text-[12px] text-white/35 leading-relaxed">
                  {c.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── DEPOIMENTOS ──
function Depoimentos() {
  return (
    <section className="bg-[#111110] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-4"
        >
          Depoimentos
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-serif text-4xl font-normal leading-[1.1] text-white mb-14"
        >
          O que meus clientes <em className="italic text-[#c4a46b]">dizem</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
          {ME.depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="bg-[#111110] hover:bg-[#161614] p-8 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3 h-3 fill-[#9a7d4a] text-[#9a7d4a]"
                  />
                ))}
              </div>
              <p className="font-serif text-[15px] italic text-white/60 leading-[1.8] mb-6">
                "{d.texto}"
              </p>
              <div className="text-[11px] tracking-[.15em] uppercase text-[#9a7d4a]">
                {d.autor}
              </div>
              <div className="text-[11px] text-white/25 mt-0.5">{d.cargo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA FINAL ──
function CTAFinal() {
  const WA = `https://wa.me/${ME.whatsapp}?text=Olá! Vi seu portfólio e quero conversar sobre um projeto.`;
  return (
    <section
      id="contato"
      className="bg-[#0a0a09] py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_50%,rgba(154,125,74,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[9px] font-medium tracking-[.28em] uppercase text-[#9a7d4a] mb-6"
        >
          Vamos trabalhar juntos
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-normal leading-[1.05] text-white mb-5"
        >
          Pronto para ter mais{" "}
          <em className="italic text-[#c4a46b]">clientes</em> todos os dias?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          style={{ originX: 0.5 }}
          className="w-10 h-px bg-[#9a7d4a] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="text-[15px] text-white/40 leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Seja um site premium, landing page, automação ou sistema completo —
          vamos conversar. Análise gratuita, sem compromisso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-[#111110] font-semibold text-sm px-8 py-4 hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar projeto agora
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
          <a
            href={`mailto:${ME.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-8 py-4 transition-all"
          >
            <Mail className="w-4 h-4" />
            Enviar e-mail
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-[12px] text-white/25"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#9a7d4a]" />
            {ME.whatsapp}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#9a7d4a]" />
            {ME.email}
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#9a7d4a]" />
            {ME.cidade}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── FOOTER ──
function Footer() {
  const WA = `https://wa.me/${ME.whatsapp}?text=Olá! Vi seu portfólio e quero conversar sobre um projeto.`;
  return (
    <footer className="bg-[#060605] py-10 px-6 border-t border-white/4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg text-white/40">
          {ME.nome.split(" ")[0]}
          <span className="text-[#9a7d4a]">.</span>
        </div>
        <div className="text-[11px] text-white/20">
          © {new Date().getFullYear()} {ME.nome} — Full Stack Developer
        </div>
        <div className="flex items-center gap-5">
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${ME.email}`}
            className="text-white/20 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──
export default function Page() {
  const WA = `https://wa.me/${ME.whatsapp}?text=Olá! Vi seu portfólio e quero conversar sobre um projeto.`;
  return (
    <main className="bg-[#0a0a09] text-[#fafaf8] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Sobre />
      <Servicos />
      <Projetos />
      <Habilidades />
      <Depoimentos />
      <CTAFinal />
      <Footer />

      {/* WhatsApp flutuante */}
      <motion.a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] transition-shadow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </motion.a>
    </main>
  );
}

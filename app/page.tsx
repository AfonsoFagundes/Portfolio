"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/ui/NavBar"

const easeOut = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut, delay: i * 0.12 }
  })
}

const projects = [
  {
    tag: "Clínica estética",
    label: "Landing page para clínica estética em SP",
    accent: "#7c3aed",
    bg: "from-purple-950/30 to-black",
    domain: "clinica-bella.com.br",
    title: "Clínica Bella Estética",
    sub: "Transformando sua beleza com tecnologia",
    cta: "Agendar consulta",
    services: ["✨ Harmonização", "💎 Bioestimulação", "🌿 Skincare"],
  },
  {
    tag: "Escritório de advocacia",
    label: "Site institucional para advogado em Florianópolis",
    accent: "#d4a017",
    bg: "from-yellow-950/20 to-black",
    domain: "advsilva.com.br",
    title: "Dr. Rafael Silva",
    sub: "Advocacia empresarial e trabalhista",
    cta: "Consulta gratuita",
    services: ["⚖️ Trabalhista", "🏢 Empresarial", "📜 Contratos"],
  },
  {
    tag: "Restaurante & delivery",
    label: "Sistema digital + automação para pizzaria em SC",
    accent: "#ea580c",
    bg: "from-orange-950/30 to-black",
    domain: "pizzaria-nona.com.br",
    title: "Pizzaria da Nona",
    sub: "Forno a lenha desde 1978",
    cta: "Pedir agora",
    services: ["🍕 Cardápio digital", "⚡ Delivery", "💬 WhatsApp"],
  },
]

const stats = [
  { value: 47, suffix: "", label: "projetos entregues" },
  { value: 100, suffix: "%", label: "satisfação" },
  { value: 3, suffix: "x", label: "mais leads em média" },
  { value: 24, suffix: "h", label: "suporte ativo" },
]

// Reusable counter hook
function useCounter(target: number, inView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start: number
    const duration = 1400
    const tick = (now: number) => {
      if (!start) start = now
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])
  return count
}

function StatBox({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const count = useCounter(value, inView)
  return (
    <div ref={ref} className="bg-black py-7 text-center">
      <div className="text-4xl font-semibold tracking-tight mb-1.5">{count}{suffix}</div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  )
}

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Carousel auto-play
  useEffect(() => {
    const t = setInterval(() => setSlideIndex(i => (i + 1) % projects.length), 4500)
    return () => clearInterval(t)
  }, [])

  const WA_URL = "https://wa.me/5599999999999?text=Quero%20um%20site%20que%20gera%20clientes"

  return (
    <main className="bg-[#060606] text-white overflow-x-hidden">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden" animate="show"
          className="flex flex-col items-center gap-0"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 text-neutral-400 text-xs font-medium uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponível para novos projetos
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.06] max-w-4xl mb-6"
          >
            Sites que transformam<br />
            visitantes em{" "}
            <span className="bg-linear-to-br from-white to-white/40 bg-clip-text text-transparent">
              clientes
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp} custom={2}
            className="text-lg text-neutral-400 max-w-md leading-relaxed mb-10"
          >
            Design premium + automação no WhatsApp.<br />
            Estrutura digital completa para seu negócio crescer.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3 justify-center">
            <motion.a href={WA_URL} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3.5 rounded-xl transition-shadow hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <a href="#servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 border border-white/10 px-6 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Ver serviços
            </a>
          </motion.div>
        </motion.div>

        {/* MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
          style={{ y: mockupY, opacity: mockupOpacity }}
          className="mt-16 w-full max-w-3xl rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_80px_rgba(255,255,255,0.015)]"
        >
          {/* Browser bar */}
          <div className="h-10 bg-[#111] border-b border-white/6 flex items-center px-3.5 gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-3 h-5 bg-[#1a1a1a] rounded flex items-center justify-center">
              <span className="text-[11px] text-[#444]">Afonso.Fagundes/dashboard</span>
            </div>
          </div>
          {/* Dashboard body */}
          <div className="grid grid-cols-[180px_1fr] bg-[#0d0d0d]">
            <div className="border-r border-white/6 p-3 hidden sm:flex flex-col gap-1">
              {["Visão geral", "Clientes", "Conversões", "WhatsApp", "Relatórios"].map((item, i) => (
                <div key={item} className={`h-8 rounded-md flex items-center px-2.5 text-xs gap-2 cursor-default transition-colors ${i === 0 ? "bg-white/[0.07] text-white" : "text-neutral-500 hover:text-white hover:bg-white/5"}`}>
                  <span className={`w-1.5 h-1.5 rounded-sm ${i === 0 ? "bg-white" : "bg-neutral-600"}`} />
                  {item}
                </div>
              ))}
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Leads hoje", value: "24", green: true },
                  { label: "Conversão", value: "73%" },
                  { label: "Faturamento", value: "R$ 4.800" },
                ].map(s => (
                  <div key={s.label} className="bg-[#111] border border-white/6 rounded-xl p-3.5">
                    <div className="text-[10px] text-neutral-500 mb-1.5">{s.label}</div>
                    <div className={`text-xl font-semibold tracking-tight ${s.green ? "text-green-400" : ""}`}>{s.value}</div>
                  </div>
                ))}
              </div>
              {/* Mini chart */}
              <div className="bg-[#111] border border-white/6 rounded-xl p-3 h-24 flex items-end gap-1.5">
                {[35,55,42,70,58,80,65,90,72,85,95,88].map((h, i) => (
                  <motion.div key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: easeOut }}
                    className={`flex-1 rounded-t ${[2,5,7,10].includes(i) ? "bg-white" : "bg-[#1e1e1e]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicos" className="max-w-5xl mx-auto px-6 py-24">
        <SectionHeader label="O que eu faço" title="Estrutura digital para vender todos os dias"
          sub="Não vendo só sites bonitos. Entrego sistemas de captação que trabalham 24h pelo seu negócio."
        />
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid md:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden"
        >
          {[
            { icon: "🎯", title: "Sites premium", desc: "Design de alto nível que transmite autoridade e converte visitantes em leads qualificados." },
            { icon: "💬", title: "Automação WhatsApp", desc: "Atendimento automático 24 horas que responde, qualifica e agenda consultas." },
            { icon: "⚡", title: "Landing pages", desc: "Páginas focadas em conversão com copy persuasivo e CTAs que geram resultado real." },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="group bg-[#060606] p-9 relative overflow-hidden hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="text-2xl mb-5">{s.icon}</div>
              <h3 className="font-semibold mb-2.5 tracking-tight">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-0 bg-white/25 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader label="Sobre mim"
              title="Desenvolvedor focado em resultado, não só em código"
              sub="Trabalho com clínicas, advogados, restaurantes e negócios locais criando presença digital que gera clientes de forma previsível."
            />
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mt-7 flex flex-col gap-2.5"
            >
              {[
                { icon: "📍", text: "Atendendo clientes em todo o Brasil" },
                { icon: "⚡", text: "Projetos prontos para gerar resultado desde o dia 1" },
                { icon: "💬", text: "Contato direto e rápido via WhatsApp" },
              ].map((p, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-center gap-3 text-sm text-neutral-400 px-3.5 py-2.5 rounded-lg border border-white/6 hover:border-white/20 hover:text-white transition-all"
                >
                  <span className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-sm">{p.icon}</span>
                  {p.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            whileHover={{ rotateY: -6, rotateX: 3 }}
            style={{ transformStyle: "preserve-3d", perspective: 600 }}
            className="max-w-xs mx-auto w-full"
          >
            <div className="aspect-3/4 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] overflow-hidden relative flex flex-col items-center justify-center gap-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-neutral-700 to-neutral-900 border border-white/10 flex items-center justify-center text-3xl font-semibold text-white/40">A</div>
              <div className="font-semibold text-white/70">Afonso Fagundes</div>
              <div className="text-xs text-neutral-500">Desenvolvedor & Designer</div>
              {/* Replace img src with your photo */}
              {/* <img src="/perfil.png" className="absolute inset-0 w-full h-full object-cover" alt="Afonso" /> */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/3 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <StatBox key={i} {...s} />
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projetos" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/6">
        <SectionHeader label="Projetos" title="Resultados reais para negócios reais"
          sub="Exemplos de sites e sistemas entregues a clientes em todo o Brasil."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="mt-10 bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={slideIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: easeOut }}
                className="p-8 md:p-10 flex flex-col items-center gap-5"
              >
                <span className="text-xs font-semibold text-neutral-500 border border-white/[0.07] px-3 py-1 rounded-full uppercase tracking-widest">
                  {projects[slideIndex].tag}
                </span>

                {/* Screen mockup */}
                <div className="w-full max-w-lg rounded-xl border border-white/[0.07] overflow-hidden">
                  <div className="h-8 bg-[#111] border-b border-white/6 flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="flex-1 text-center text-[10px] text-[#444]">{projects[slideIndex].domain}</span>
                  </div>
                  <div className={`p-5 bg-linear-to-br ${projects[slideIndex].bg} flex flex-col gap-3`}>
                    <div className="rounded-xl p-5 border border-white/6 text-center flex flex-col items-center gap-2"
                      style={{ background: `${projects[slideIndex].accent}14` }}>
                      <div className="font-bold text-base">{projects[slideIndex].title}</div>
                      <div className="text-xs text-neutral-400">{projects[slideIndex].sub}</div>
                      <div className="text-[11px] font-semibold px-4 py-1.5 rounded-lg mt-1 text-black"
                        style={{ background: projects[slideIndex].accent }}>
                        {projects[slideIndex].cta} →
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {projects[slideIndex].services.map(svc => (
                        <div key={svc} className="rounded-lg p-2.5 border border-white/5 text-center text-[11px] text-neutral-400">
                          {svc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="font-medium text-sm text-neutral-300">{projects[slideIndex].label}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="border-t border-white/6 p-4 flex items-center justify-center gap-4">
            <button onClick={() => setSlideIndex(i => (i - 1 + projects.length) % projects.length)}
              className="w-8 h-8 rounded-lg border border-white/8 text-neutral-400 hover:text-white hover:bg-white/6 flex items-center justify-center transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? "w-5 bg-white" : "w-1.5 bg-neutral-600"}`}
                />
              ))}
            </div>
            <button onClick={() => setSlideIndex(i => (i + 1) % projects.length)}
              className="w-8 h-8 rounded-lg border border-white/8 text-neutral-400 hover:text-white hover:bg-white/6 flex items-center justify-center transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-36 text-center overflow-hidden border-t border-white/6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_50%,rgba(255,255,255,0.04),transparent)]" />
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.08] mb-5"
          >
            Pronto para ter{" "}
            <span className="bg-linear-to-br from-white to-white/40 bg-clip-text text-transparent">
              mais clientes
            </span>{" "}
            todos os dias?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-400 text-lg mb-10">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem enrolação.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.a href={WA_URL} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-8 py-4 rounded-xl text-base hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)] transition-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              Falar comigo agora
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/6 py-8 px-6 flex items-center justify-between flex-wrap gap-4">
        <span className="text-sm text-neutral-500">© 2026 Afonso Fagundes — Santa Catarina, Brasil</span>
        <a href={WA_URL} className="text-sm text-neutral-500 hover:text-white transition-colors">
          WhatsApp <ArrowUpRight className="w-3 h-3 inline" />
        </a>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a href={WA_URL} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full bg-[#25d366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-shadow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </motion.a>
    </main>
  )
}

function SectionHeader({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <motion.div
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div variants={fadeUp} className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
        {label}
      </motion.div>
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] mb-3">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="text-neutral-500 leading-relaxed max-w-lg">
        {sub}
      </motion.p>
    </motion.div>
  )
}
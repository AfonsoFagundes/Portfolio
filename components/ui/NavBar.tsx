"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"

const links = [
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Sobre", href: "#sobre" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      links.forEach(link => {
        const sec = document.querySelector(link.href)
        if (!sec) return
        const r = sec.getBoundingClientRect()
        if (r.top <= 120 && r.bottom >= 120) setActive(link.href)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
      scrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.07]" : "bg-transparent"
    }`}>
      <span className="text-sm font-semibold tracking-tight">
        Afonso<span className="text-neutral-500"> Fagundes </span>
      </span>

      <nav className="hidden md:flex items-center gap-7">
        {links.map(link => (
          <a key={link.href} href={link.href}
            className={`relative text-sm transition-colors ${active === link.href ? "text-white" : "text-neutral-500 hover:text-white"}`}
          >
            {link.name}
            {active === link.href && (
              <motion.div layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-white rounded-full"
              />
            )}
          </a>
        ))}
      </nav>

      <a href="https://wa.me/5599999999999?text=Quero%20um%20site%20que%20gera%20clientes"
        className="hidden md:inline-flex items-center text-sm font-medium bg-white text-black px-4 py-1.5 rounded-lg hover:bg-white/90 transition-colors"
      >
        Falar comigo ↗
      </a>

      <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/[0.07] p-6 flex flex-col gap-5"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-neutral-300 hover:text-white transition-colors text-base font-medium"
              >
                {l.name}
              </a>
            ))}
            <a href="https://wa.me/5599999999999"
              className="bg-white text-black text-center font-semibold py-3 rounded-xl mt-2"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
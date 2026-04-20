import type { Metadata } from "next"
import { Playfair_Display, Outfit } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

// ============================================================
// 🔧 SEO — edite apenas este bloco
// ============================================================
const SEO = {
  nome:        "Afonso Fagundes",
  titulo:      "Afonso Fagundes | Desenvolvedor Full Stack & Sites Premium",
  descricao:   "Desenvolvedor Full Stack especializado em sites premium, landing pages de alta conversão e automação WhatsApp. Atendo clínicas, advogados, restaurantes e empresas em todo o Brasil. JavaScript, TypeScript, React, Next.js, Node.js e PostgreSQL.",
  url:         "https://afonsofagundes.vercel.app",
  imagem:      "/assets/og-image.jpg",
  cidade:      "Santa Catarina, Brasil",
  keywords:    [
    "desenvolvedor full stack",
    "sites premium",
    "landing page alta conversão",
    "automação whatsapp",
    "site para advogado",
    "site para clínica estética",
    "site para restaurante",
    "criação de sites Santa Catarina",
    "desenvolvedor next.js",
    "desenvolvedor react",
    "freelancer desenvolvimento web",
    "sites que geram clientes",
    "landing page brasil",
    "automação de atendimento",
    "afonso fagundes desenvolvedor",
  ],
}
// ============================================================

export const metadata: Metadata = {
  // ── Título e descrição ──
  title: {
    default: SEO.titulo,
    template: `%s | ${SEO.nome}`,
  },
  description: SEO.descricao,
  keywords: SEO.keywords,

  // ── Autor e criador ──
  authors: [{ name: SEO.nome, url: SEO.url }],
  creator: SEO.nome,
  publisher: SEO.nome,

  // ── Canonical URL ──
  metadataBase: new URL(SEO.url),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp) ──
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SEO.url,
    siteName: SEO.nome,
    title: SEO.titulo,
    description: SEO.descricao,
    images: [
      {
        url: SEO.imagem,
        width: 1200,
        height: 630,
        alt: `${SEO.nome} — Desenvolvedor Full Stack & Sites Premium`,
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title: SEO.titulo,
    description: SEO.descricao,
    images: [SEO.imagem],
    creator: "@afonsofagundes",
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verificação Google Search Console ──
  // verification: {
  //   google: "SEU_CODIGO_AQUI",
  // },

  // ── Ícones ──
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  // ── Manifest PWA ──
  manifest: "/site.webmanifest",

  // ── Categoria ──
  category: "technology",
}

// ── JSON-LD — Schema estruturado para o Google ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SEO.url}/#person`,
      name: SEO.nome,
      url: SEO.url,
      description: SEO.descricao,
      jobTitle: "Full Stack Developer",
      knowsAbout: [
        "JavaScript", "TypeScript", "React", "Next.js",
        "Node.js", "PostgreSQL", "API REST", "HTML", "CSS",
        "Web Design", "Landing Pages", "WhatsApp Automation",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "SC",
        addressCountry: "BR",
        addressLocality: "Santa Catarina",
      },
      sameAs: [
        "https://github.com/AfonsoFagundes",
        "https://linkedin.com/in/afonsofagundes",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SEO.url}/#website`,
      url: SEO.url,
      name: SEO.nome,
      description: SEO.descricao,
      publisher: { "@id": `${SEO.url}/#person` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${SEO.url}/#webpage`,
      url: SEO.url,
      name: SEO.titulo,
      description: SEO.descricao,
      isPartOf: { "@id": `${SEO.url}/#website` },
      about: { "@id": `${SEO.url}/#person` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SEO.url}/#service`,
      name: `${SEO.nome} — Desenvolvimento Web`,
      url: SEO.url,
      description: "Desenvolvimento de sites premium, landing pages de alta conversão, automação WhatsApp e sistemas Full Stack para empresas de todo o Brasil.",
      provider: { "@id": `${SEO.url}/#person` },
      areaServed: "BR",
      availableLanguage: "Portuguese",
      serviceType: [
        "Web Development",
        "Landing Page Design",
        "WhatsApp Automation",
        "Full Stack Development",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme color mobile */}
        <meta name="theme-color" content="#0a0a09" />
        <meta name="color-scheme" content="dark" />

        {/* Geo tags */}
        <meta name="geo.region"   content="BR-SC" />
        <meta name="geo.placename" content="Santa Catarina" />
        <meta name="geo.position" content="-27.5954;-48.548" />
        <meta name="ICBM"        content="-27.5954, -48.548" />

        {/* Idioma */}
        <meta httpEquiv="content-language" content="pt-BR" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-[#0a0a09] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
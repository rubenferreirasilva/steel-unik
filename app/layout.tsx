import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Steel Unik — Bastidores para Linhas de Pintura Industrial",
    template: "%s | Steel Unik",
  },
  description:
    "Steel Unik — 30 anos a fabricar bastidores para linhas de pintura industrial. Prototipagem rápida, produção de 1 a 1.000 unidades. Fornecedor Tier 1 em Portugal e Espanha.",
  keywords: [
    "bastidores pintura industrial",
    "jigs pintura automóvel Portugal",
    "suportes pintura industrial Porto",
    "rack pintura pó automóvel",
    "prototipagem bastidores industriais",
    "fabricante jigs pintura Maia",
    "bastidores líneas de pintura industrial España",
    "jigs pintura automoción Portugal",
  ],
  authors: [{ name: "Steel Unik" }],
  creator: "Steel Unik",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://steel-unik.vercel.app",
    siteName: "Steel Unik",
    title: "Steel Unik — Bastidores para Linhas de Pintura Industrial",
    description:
      "30 anos a fabricar bastidores para linhas de pintura industrial. Prototipagem rápida, produção de 1 a 1.000 unidades. Tier 1.",
    images: [
      {
        url: "https://steel-unik.vercel.app/images/hero/hero-bastidores-01.jpg",
        width: 1200,
        height: 630,
        alt: "Steel Unik — Bastidores para Pintura Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Unik — Bastidores para Linhas de Pintura Industrial",
    description:
      "30 anos a fabricar bastidores para linhas de pintura industrial.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.steelunik.com",
    languages: {
      "pt-PT": "https://www.steelunik.com",
      "es-ES": "https://www.steelunik.com/es",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics GA4 — activar adicionando NEXT_PUBLIC_GA_ID em Vercel Environment Variables */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-steel-dark text-steel-light antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-steel-darker">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,111,232,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,111,232,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-darker via-transparent to-steel-darker/80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-steel-accent/5 to-transparent" />

      {/* Accent line esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-steel-accent to-transparent" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Esquerda — Texto */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-steel-accent/10 border border-steel-accent/30 px-4 py-2 rounded-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-steel-accent animate-pulse" />
              <span className="text-steel-accent text-xs font-semibold uppercase tracking-[0.2em]">
                Fornecedor Tier 1 — Portugal & Espanha
              </span>
            </div>

            {/* Headline principal */}
            <h1
              className="font-heading font-black text-white leading-[0.9] mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              BASTIDORES
              <br />
              QUE NÃO
              <br />
              <span className="text-steel-accent">FALHAM.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-steel-metal text-xl leading-relaxed mb-4 max-w-xl">
              Linhas de pintura que não param.
            </p>
            <p className="text-steel-muted text-base leading-relaxed mb-10 max-w-xl">
              30 anos a fabricar bastidores de precisão para as maiores
              linhas de pintura industrial de Portugal e Espanha. Da prototipagem
              à série — sem subcontratação, sem atrasos.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contacto" className="btn-primary">
                Solicitar Orçamento
                <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Ver os Nossos Trabalhos
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-steel-border">
              {[
                { value: "30+", label: "Anos de Experiência" },
                { value: "1–1000", label: "Unidades por Série" },
                { value: "24h", label: "Tempo de Resposta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-heading font-black text-steel-accent"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-steel-muted text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — Foto real da fábrica */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Foto principal */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-steel-border shadow-deep">
                <Image
                  src="/images/hero/hero-fabrica.jpg"
                  alt="Interior da fábrica SteelUnik — linha de produção de bastidores industriais"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay suave no fundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-steel-darker/60 via-transparent to-transparent" />
              </div>

              {/* Badges flutuantes */}
              <div className="absolute -top-4 -right-4 bg-steel-accent text-white px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider shadow-accent">
                30+ Anos
              </div>
              <div className="absolute -bottom-4 -left-4 bg-steel-card border border-steel-border px-4 py-3 rounded-sm text-xs shadow-card">
                <span className="text-steel-accent font-bold">Tier 1</span>
                <span className="text-steel-muted ml-1">Automóvel</span>
              </div>

              {/* Miniatura secundária */}
              <div className="absolute -right-8 top-1/3 w-32 aspect-square rounded-sm overflow-hidden border-2 border-steel-accent/40 shadow-accent">
                <Image
                  src="/images/hero/hero-bastidores-01.jpg"
                  alt="Bastidor industrial SteelUnik"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-steel-muted text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-steel-accent" />
      </div>
    </section>
  );
}

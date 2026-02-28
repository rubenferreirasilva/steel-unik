"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-steel-darker">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-darker via-transparent to-steel-darker/80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-steel-orange/5 to-transparent" />

      {/* Orange accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-steel-orange to-transparent" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-steel-orange/10 border border-steel-orange/30 px-4 py-2 rounded-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-steel-orange animate-pulse" />
              <span className="text-steel-orange text-xs font-semibold uppercase tracking-[0.2em]">
                Fornecedor Tier 1 — Portugal & Espanha
              </span>
            </div>

            {/* Main Headline */}
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
              <span className="text-steel-orange">FALHAM.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-steel-metal text-xl leading-relaxed mb-4 max-w-xl">
              Linhas de pintura que não param.
            </p>
            <p className="text-steel-muted text-base leading-relaxed mb-10 max-w-xl">
              30 anos a fabricar jigs e bastidores de precisão para as maiores
              linhas de pintura industrial de Portugal e Espanha. Da prototipagem
              à série — sem outsourcing, sem atrasos.
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

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-steel-border">
              {[
                { value: "30+", label: "Anos de Experiência" },
                { value: "1–1000", label: "Unidades por Série" },
                { value: "24h", label: "Tempo de Resposta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-heading font-black text-steel-orange"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "2rem",
                    }}
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

          {/* Right — Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main image placeholder */}
            <div className="relative w-full aspect-square max-w-lg">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-steel-border opacity-30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-steel-orange/20 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Center block */}
              <div className="absolute inset-12 bg-steel-gray border border-steel-border rounded-sm flex items-center justify-center overflow-hidden">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,107,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.5) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Icon — represents industrial jig */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Jig/rack silhouette */}
                    <rect x="10" y="20" width="8" height="80" fill="#FF6B35" rx="1" />
                    <rect x="102" y="20" width="8" height="80" fill="#FF6B35" rx="1" />
                    <rect x="10" y="20" width="100" height="6" fill="#FF6B35" rx="1" />
                    <rect x="10" y="94" width="100" height="6" fill="#FF6B35" rx="1" />
                    {/* Horizontal rails */}
                    <rect x="18" y="44" width="84" height="4" fill="#8a9aaa" rx="1" opacity="0.8" />
                    <rect x="18" y="60" width="84" height="4" fill="#8a9aaa" rx="1" opacity="0.8" />
                    <rect x="18" y="76" width="84" height="4" fill="#8a9aaa" rx="1" opacity="0.8" />
                    {/* Hooks */}
                    <circle cx="35" cy="38" r="4" stroke="#FF6B35" strokeWidth="2" fill="none" />
                    <circle cx="60" cy="38" r="4" stroke="#FF6B35" strokeWidth="2" fill="none" />
                    <circle cx="85" cy="38" r="4" stroke="#FF6B35" strokeWidth="2" fill="none" />
                    <line x1="35" y1="34" x2="35" y2="26" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="60" y1="34" x2="60" y2="26" stroke="#FF6B35" strokeWidth="2" />
                    <line x1="85" y1="34" x2="85" y2="26" stroke="#FF6B35" strokeWidth="2" />
                  </svg>
                  <div className="text-center">
                    <p className="text-steel-orange font-semibold text-sm uppercase tracking-wider">
                      Jigs & Bastidores
                    </p>
                    <p className="text-steel-muted text-xs">Precisão Industrial</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-steel-orange text-white px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-wider">
                30+ Anos
              </div>
              <div className="absolute -bottom-4 -left-4 bg-steel-card border border-steel-border px-3 py-2 rounded-sm text-xs">
                <span className="text-steel-orange font-bold">Tier 1</span>
                <span className="text-steel-muted ml-1">Automóvel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-steel-muted text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} className="text-steel-orange" />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Anos de Experiência", detail: "desde 1994" },
  { value: 50, suffix: "+", label: "Clientes Ativos", detail: "Portugal e Espanha" },
  { value: 10000, suffix: "+", label: "Bastidores Produzidos", detail: "e a contar" },
  { value: 2, suffix: "", label: "Países Servidos", detail: "Portugal & Espanha" },
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {count.toLocaleString("pt-PT")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-steel-accent py-20 relative overflow-hidden"
    >
      {/* Textura de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-steel-dark/60 text-xs uppercase tracking-[0.3em] font-semibold mb-2">
            Em números
          </p>
          <h2
            className="text-steel-dark font-black text-4xl md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            30 ANOS DE RESULTADOS REAIS
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-heading font-black text-steel-dark leading-none mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} active={isVisible} />
              </div>
              <div
                className="text-steel-dark font-bold text-base uppercase tracking-wider mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {stat.label}
              </div>
              <div className="text-steel-dark/60 text-xs">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

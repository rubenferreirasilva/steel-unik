"use client";

import { FileText, Cpu, CheckCircle, Package } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Receção da Especificação",
    description:
      "Envie-nos a peça física, o ficheiro CAD (DXF, STEP, STP), uma foto ou uma descrição. Analisamos e respondemos em menos de 24 horas.",
    detail: "CAD / Foto / Peça física",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Desenvolvimento do Protótipo",
    description:
      "Os nossos técnicos desenvolvem o bastidor em SolidWorks 3D. O cliente recebe o modelo digital para validação antes de qualquer produção física.",
    detail: "SolidWorks 3D + CAD 2D",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Validação com o Cliente",
    description:
      "Produzimos o protótipo físico. O cliente valida in loco ou recebe-o para teste na linha de produção. Zero surpresas em série.",
    detail: "Protótipo físico incluído",
  },
  {
    icon: Package,
    number: "04",
    title: "Produção em Série",
    description:
      "Aprovado o protótipo, arrancamos com a produção. De 1 unidade a 1.000 — totalmente internos, com prazos cumpridos.",
    detail: "1 a 1.000 unidades",
  },
];

export default function Process() {
  return (
    <section className="bg-steel-darker py-24 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label mb-3">Como Trabalhamos</p>
          <h2
            className="section-title text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            DO PROJETO À
            <br />
            <span className="text-steel-accent">PRODUÇÃO EM 4 PASSOS</span>
          </h2>
          <p className="text-steel-muted text-base leading-relaxed">
            Um processo testado e validado ao longo de 30 anos, concebido para
            eliminar riscos e garantir que o bastidor funciona à primeira.
          </p>
        </div>

        {/* Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-accent/30 to-transparent" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative p-8 group">
              <div className="relative mb-8">
                <div className="w-12 h-12 rounded-full bg-steel-accent flex items-center justify-center relative z-10">
                  <step.icon size={20} className="text-steel-dark" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 w-full h-px bg-steel-border" />
                )}
              </div>

              <span
                className="font-heading font-black text-6xl text-steel-border group-hover:text-steel-accent/20 transition-colors block mb-4 -mt-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {step.number}
              </span>

              <h3
                className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-steel-accent transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-steel-muted text-sm leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-steel-accent/10 px-3 py-1 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-steel-accent" />
                <span className="text-steel-accent text-xs font-semibold">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-steel-muted text-sm mb-4">
            Sem custos de maquetagem. Sem surpresas. Sem paragens de linha.
          </p>
          <a href="/contacto" className="btn-primary">
            Iniciar o Processo →
          </a>
        </div>
      </div>
    </section>
  );
}

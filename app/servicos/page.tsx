import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços — Desenvolvimento de Bastidores, Soldadura, Laser Corte",
  description:
    "Capacidades técnicas da Steel Unik: desenvolvimento de bastidores, prototipagem CAD/SolidWorks, soldadura especializada, laser corte, fresagem, quinagem e torno.",
};

const services = [
  {
    id: "bastidores",
    title: "Desenvolvimento de Bastidores",
    subtitle: "O nosso core — 30 anos de especialização",
    description: `O desenvolvimento de bastidores industriais é a nossa especialidade principal. Com 30 anos de experiência acumulada, desenvolvemos bastidores para qualquer processo de tratamento de superfície — pintura líquida, powder coating, cromagem, anodização e cataforese.

Cada bastidor é desenvolvido com base nas especificações exatas do cliente: geometria da peça, pontos de suspensão, capacidade de carga, compatibilidade com o processo químico e requisitos de condutividade elétrica quando aplicável.`,
    specs: [
      "Materiais: aço carbono, alumínio, aço inoxidável, titânio",
      "Capacidade: bastidores simples a sistemas multi-peça complexos",
      "Série: 1 unidade (protótipo) a 1.000 unidades",
      "Processos: pintura líquida, powder coating, cromagem, anodização, cataforese",
    ],
    cta: "Solicitar desenvolvimento de jig",
  },
  {
    id: "cad",
    title: "Prototipagem Digital — CAD & SolidWorks 3D",
    subtitle: "Validação antes da produção — zero surpresas",
    description: `Antes de qualquer produção física, desenvolvemos o protótipo digital completo em SolidWorks 3D. O cliente recebe o modelo 3D para validação interna — dimensões, pontos de fixação, interferências com a linha de produção — antes de qualquer investimento em material.

Trabalhamos com todos os formatos técnicos: DXF, STEP, STP, DWG, IGES e PDF técnico. Aceitamos também especificações por foto ou peça física.`,
    specs: [
      "Software: SolidWorks 3D + AutoCAD 2D",
      "Formatos aceites: DXF, STEP, STP, DWG, IGES, PDF",
      "Entrega: protótipo digital 3D antes da produção física",
      "Validação: cliente aprova antes do arranque da série",
    ],
    cta: "Enviar ficheiro CAD",
  },
  {
    id: "soldadura",
    title: "Soldadura Especializada",
    subtitle: "MIG/MAG e TIG — ferro, alumínio e inox",
    description: `A soldadura é o coração da produção de bastidores industriais. Contamos com soldadores experientes em soldadura MIG/MAG e TIG, especializados em estruturas de precisão que exigem qualidade de cordão e geometria rigorosa.

A qualidade da soldadura determina diretamente a vida útil do bastidor e a sua capacidade de manter a geometria após centenas de ciclos de banho. A nossa experiência neste domínio é um dos principais fatores de diferenciação.`,
    specs: [
      "Processos: MIG/MAG (GMAW) e TIG (GTAW)",
      "Materiais: aço carbono, alumínio e ligas, aço inoxidável",
      "Aplicação: estruturas de precisão, geometrias complexas",
      "Controlo: inspeção visual + dimensional após soldadura",
    ],
    cta: "Solicitar orçamento",
  },
  {
    id: "laser",
    title: "Laser Corte",
    subtitle: "Corte próprio — sem outsourcing, sem atrasos",
    description: `Dispomos de equipamento de laser corte interno para chapa de ferro e alumínio. Isto significa prazos mais curtos, custos controlados e zero dependência de fornecedores externos para esta operação crítica.

O laser corte permite tolerâncias de ±0.1mm e acabamentos de corte que reduzem o trabalho subsequente de rebarbagem. Peças prontas a soldar saem diretamente do laser.`,
    specs: [
      "Materiais: chapa de ferro e alumínio",
      "Espessuras: até 20mm em aço, até 15mm em alumínio",
      "Tolerância: ±0.1mm",
      "Formatos de entrada: DXF, DWG, STEP",
    ],
    cta: "Solicitar corte laser",
  },
  {
    id: "fresagem",
    title: "Fresagem, Quinagem & Torno",
    subtitle: "Maquinagem completa — todas as operações internas",
    description: `Para além do laser e da soldadura, dispomos de equipamentos de fresagem, quinagem e torno convencional — todas as operações de maquinagem necessárias para completar um bastidor complexo sem sair das nossas instalações.

A fresagem permite maquinar componentes de precisão: platines, adaptadores, suportes específicos. A quinagem dobra chapas com ângulos precisos. O torno produz peças de revolução: eixos, bucins, pinos e adaptadores.`,
    specs: [
      "Fresagem: peças de precisão, platines, suportes",
      "Quinagem: chapa até 3m de comprimento, ângulos precisos",
      "Torno: peças de revolução — eixos, bucins, pinos",
      "100% produção interna — sem subcontratação",
    ],
    cta: "Solicitar orçamento",
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-steel-dark pt-20">
      {/* Hero */}
      <section className="bg-steel-darker py-20 border-b border-steel-border relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-custom relative z-10">
          <p className="section-label mb-3">Serviços</p>
          <h1
            className="font-heading font-black text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            CAPACIDADES TÉCNICAS
            <br />
            <span className="text-steel-accent">100% INTERNAS</span>
          </h1>
          <p className="text-steel-muted text-lg max-w-2xl leading-relaxed">
            Desde o CAD até à peça final — sem outsourcing, sem intermediários.
            Cada operação acontece nas nossas instalações na Maia.
          </p>
        </div>
      </section>

      {/* Services */}
      <div>
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 border-b border-steel-border ${
              index % 2 === 0 ? "bg-steel-dark" : "bg-steel-darker"
            }`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Content */}
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <p className="section-label mb-3">0{index + 1}</p>
                  <h2
                    className="text-white font-black text-4xl md:text-5xl mb-2 leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-steel-accent font-semibold text-sm uppercase tracking-wider mb-6">
                    {service.subtitle}
                  </p>
                  <div className="text-steel-muted text-base leading-relaxed mb-8 whitespace-pre-line">
                    {service.description}
                  </div>
                  <Link href="/contacto" className="btn-primary">
                    {service.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Specs */}
                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="card-dark p-8 h-full">
                    <h3
                      className="text-steel-accent font-bold text-lg mb-6 uppercase tracking-wider"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Especificações Técnicas
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {service.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-start gap-3 text-steel-muted text-sm"
                        >
                          <span className="text-steel-accent font-bold mt-0.5 flex-shrink-0">
                            →
                          </span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Visual placeholder */}
                    <div className="mt-8 aspect-video bg-steel-gray border border-steel-border rounded-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-steel-accent text-4xl mb-2">⚙</div>
                        <p className="text-steel-muted text-xs">
                          Foto do processo em breve
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Bottom */}
      <section className="bg-steel-accent py-16">
        <div className="container-custom text-center">
          <h2
            className="text-white font-black text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            PRONTO PARA COMEÇAR?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Envie-nos a especificação e receba proposta em 24 horas. Sem
            compromisso, sem burocracia.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-steel-accent font-bold px-8 py-4 rounded-sm hover:bg-steel-light transition-colors inline-flex items-center gap-2 uppercase tracking-wider text-sm"
          >
            Solicitar Orçamento
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

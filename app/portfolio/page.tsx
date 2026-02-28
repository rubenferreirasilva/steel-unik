"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const filters = ["Todos", "Automóvel", "Powder Coating", "Cromagem", "Anodização", "Cataforese"];

const projects = [
  {
    id: 1,
    title: "Bastidor para linha de powder coating — série de 200 unidades",
    client: "Cliente Tier 1 — Setor Automóvel",
    category: "Powder Coating",
    material: "Aço carbono tratado",
    quantity: "200 unidades",
    description: "Bastidor modular para linha de pintura a pó de para-choques. Design otimizado para cobertura uniforme e resistência à temperatura de polimerização de 200°C.",
    tags: ["Aço carbono", "Powder Coating", "200 un.", "Automóvel"],
  },
  {
    id: 2,
    title: "Jig de suspensão para peças de grande dimensão",
    client: "Cliente Tier 1 — Pintura líquida",
    category: "Automóvel",
    material: "Alumínio + aço",
    quantity: "50 unidades",
    description: "Sistema de suspensão para peças de grande formato em linha de pintura líquida. Capacidade de carga até 15kg por posição, com 4 peças por bastidor.",
    tags: ["Alumínio", "Pintura líquida", "50 un.", "Grande dimensão"],
  },
  {
    id: 3,
    title: "Rack de cromagem para componentes interiores automóvel",
    client: "Cliente Tier 1 — Cromagem decorativa",
    category: "Cromagem",
    material: "Aço inoxidável + cobre",
    quantity: "500 unidades",
    description: "Rack de alta condutividade para cromagem decorativa de componentes interiores. Contactos em cobre para distribuição uniforme da corrente.",
    tags: ["Inox", "Cromagem", "500 un.", "Interior automóvel"],
  },
  {
    id: 4,
    title: "Bastidor modular para anodização de perfis",
    client: "Setor caixilharia — Produção contínua",
    category: "Anodização",
    material: "Titânio",
    quantity: "100 unidades",
    description: "Sistema modular em titânio para anodização de perfis de alumínio. Design que elimina marcas de contacto nas zonas visíveis.",
    tags: ["Titânio", "Anodização", "100 un.", "Caixilharia"],
  },
  {
    id: 5,
    title: "Jig de pintura para para-choques — grande série",
    client: "Cliente Automóvel — Tier 2",
    category: "Automóvel",
    material: "Aço carbono galvanizado",
    quantity: "1.000 unidades",
    description: "Produção de 1.000 jigs para linha de pintura de para-choques. Projeto de maior volume realizado — entregue dentro do prazo acordado.",
    tags: ["Aço", "1.000 un.", "Grande série", "Para-choques"],
  },
  {
    id: 6,
    title: "Suporte multipeça para cataforese — 12 peças/ciclo",
    client: "Cliente Tier 1 — Estruturas metálicas",
    category: "Cataforese",
    material: "Aço carbono",
    quantity: "300 unidades",
    description: "Bastidor de alta capacidade para cataforese, com 12 posições por ciclo. Geometria que garante cobertura total incluindo cavidades internas.",
    tags: ["Aço", "Cataforese", "300 un.", "Alta capacidade"],
  },
  {
    id: 7,
    title: "Bastidor de urgência — protótipo em 48 horas",
    client: "Cliente Automotive — Linha parada",
    category: "Automóvel",
    material: "Aço carbono",
    quantity: "1 unidade + série",
    description: "Protótipo desenvolvido e entregue em 48 horas para resolver paragem de linha de produção em cliente Tier 1. Série de 50 unidades a seguir.",
    tags: ["Urgência", "48h", "Protótipo", "Tier 1"],
  },
  {
    id: 8,
    title: "Sistema de jigs para peças de motores",
    client: "Fornecedor Tier 1 — Grupo automóvel",
    category: "Automóvel",
    material: "Alumínio anodizado",
    quantity: "150 unidades",
    description: "Sistema completo de jigs para linha de powder coating de componentes de motor. Desenvolvimento em SolidWorks, validação com cliente antes da série.",
    tags: ["Alumínio", "Motor", "150 un.", "Powder Coating"],
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group card-dark overflow-hidden hover:border-steel-orange/40 transition-all duration-300">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-steel-gray relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="8" y="12" width="4" height="56" fill="#FF6B35" rx="1" opacity="0.8"/>
            <rect x="68" y="12" width="4" height="56" fill="#FF6B35" rx="1" opacity="0.8"/>
            <rect x="8" y="12" width="64" height="4" fill="#FF6B35" rx="1"/>
            <rect x="8" y="64" width="64" height="4" fill="#FF6B35" rx="1"/>
            <rect x="12" y="28" width="56" height="2" fill="#8a9aaa" rx="1" opacity="0.6"/>
            <rect x="12" y="40" width="56" height="2" fill="#8a9aaa" rx="1" opacity="0.6"/>
            <rect x="12" y="52" width="56" height="2" fill="#8a9aaa" rx="1" opacity="0.6"/>
            <circle cx="24" cy="20" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none"/>
            <circle cx="40" cy="20" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none"/>
            <circle cx="56" cy="20" r="3" stroke="#FF6B35" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-steel-card via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-steel-orange text-white text-xs px-2 py-1 rounded-sm font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-white font-bold text-lg mb-1 leading-tight group-hover:text-steel-orange transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-steel-orange text-xs font-semibold mb-3">{project.client}</p>
        <p className="text-steel-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-steel-gray p-2 rounded-sm">
            <p className="text-steel-muted text-xs">Material</p>
            <p className="text-white text-xs font-semibold">{project.material}</p>
          </div>
          <div className="bg-steel-gray p-2 rounded-sm">
            <p className="text-steel-muted text-xs">Quantidade</p>
            <p className="text-white text-xs font-semibold">{project.quantity}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-steel-gray text-steel-metal text-xs px-2 py-0.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
          <p className="section-label mb-3">Portfólio</p>
          <h1
            className="font-heading font-black text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            TRABALHOS
            <br />
            <span className="text-steel-orange">REALIZADOS</span>
          </h1>
          <p className="text-steel-muted text-lg max-w-xl leading-relaxed">
            A melhor forma de avaliar um fornecedor é ver o trabalho que já fez.
            Aqui estão alguns dos projetos que mais nos orgulham.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-steel-orange border-steel-orange text-white"
                    : "border-steel-border text-steel-muted hover:border-steel-orange/50 hover:text-white"
                }`}
              >
                {filter}
                <span className="ml-2 text-[10px] opacity-60">
                  ({filter === "Todos" ? projects.length : projects.filter(p => p.category === filter).length})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-steel-muted">
              Nenhum projeto encontrado para este filtro.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-steel-darker border-t border-steel-border py-20">
        <div className="container-custom text-center">
          <h2
            className="text-white font-black text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            QUER UM PROJETO{" "}
            <span className="text-steel-orange">COMO ESTE?</span>
          </h2>
          <p className="text-steel-muted text-base mb-8 max-w-xl mx-auto">
            Envie-nos a especificação e receba proposta em 24 horas. O protótipo
            digital está incluído na primeira proposta.
          </p>
          <Link href="/contacto" className="btn-primary">
            Solicitar Orçamento
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

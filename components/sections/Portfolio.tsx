"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const filters = ["Todos", "Automóvel", "Powder Coating", "Cromagem", "Anodização"];

const projects = [
  {
    id: 1,
    title: "Bastidor para linha de powder coating",
    subtitle: "Série de 200 unidades — Cliente Tier 1 Automóvel",
    category: "Powder Coating",
    tags: ["Aço carbono", "200 un.", "Série"],
  },
  {
    id: 2,
    title: "Bastidor de suspensão para peças de grande dimensão",
    subtitle: "Linha de pintura líquida — Setor Automóvel",
    category: "Automóvel",
    tags: ["Alumínio", "50 un.", "Protótipo+Série"],
  },
  {
    id: 3,
    title: "Bastidor de cromagem para componentes interiores",
    subtitle: "Cliente de referência — Setor Automóvel Tier 1",
    category: "Cromagem",
    tags: ["Inox", "500 un.", "Série"],
  },
  {
    id: 4,
    title: "Bastidor modular para anodização de perfis",
    subtitle: "Setor de caixilharia — Produção contínua",
    category: "Anodização",
    tags: ["Titânio/Al", "100 un.", "Modular"],
  },
  {
    id: 5,
    title: "Bastidor de pintura para para-choques",
    subtitle: "Linha de pintura automóvel — Rotação de 1.000 un.",
    category: "Automóvel",
    tags: ["Aço", "1.000 un.", "Grande série"],
  },
  {
    id: 6,
    title: "Bastidor multipeça para cataforese",
    subtitle: "Capacidade 12 peças/ciclo — Cliente Tier 1",
    category: "Automóvel",
    tags: ["Aço galv.", "300 un.", "Série"],
  },
];

function ProjectPlaceholder({ id }: { id: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-steel-gray">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="15" width="4" height="50" fill="#E8510A" rx="1" opacity="0.8"/>
        <rect x="66" y="15" width="4" height="50" fill="#E8510A" rx="1" opacity="0.8"/>
        <rect x="10" y="15" width="60" height="3" fill="#E8510A" rx="1"/>
        <rect x="10" y="62" width="60" height="3" fill="#E8510A" rx="1"/>
        <rect x="14" y="30" width="52" height="2" fill="#E8510A" rx="1" opacity="0.5"/>
        <rect x="14" y="42" width="52" height="2" fill="#E8510A" rx="1" opacity="0.5"/>
        <circle cx="25" cy="23" r="3" stroke="#E8510A" strokeWidth="1.5" fill="none"/>
        <circle cx="40" cy="23" r="3" stroke="#E8510A" strokeWidth="1.5" fill="none"/>
        <circle cx="55" cy="23" r="3" stroke="#E8510A" strokeWidth="1.5" fill="none"/>
        <line x1="25" y1="20" x2="25" y2="15" stroke="#E8510A" strokeWidth="1.5"/>
        <line x1="40" y1="20" x2="40" y2="15" stroke="#E8510A" strokeWidth="1.5"/>
        <line x1="55" y1="20" x2="55" y2="15" stroke="#E8510A" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-steel-darker py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="section-label mb-3">Portfólio</p>
            <h2
              className="section-title text-5xl md:text-6xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              TRABALHOS
              <br />
              <span className="text-steel-accent">REALIZADOS</span>
            </h2>
          </div>
          <p className="text-steel-muted text-sm max-w-xs">
            A melhor prova social no setor industrial são os bastidores que já
            entregámos e as linhas que nunca pararam.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-steel-accent border-steel-accent text-steel-dark"
                  : "border-steel-border text-steel-muted hover:border-steel-accent/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grelha */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group card-dark overflow-hidden hover:border-steel-accent/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ProjectPlaceholder id={project.id} />
                <div className="absolute top-3 right-3">
                  <span className="bg-steel-darker/80 text-steel-accent text-xs px-2 py-1 rounded-sm border border-steel-accent/30 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="text-white font-bold text-lg mb-1 leading-tight group-hover:text-steel-accent transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-steel-muted text-xs mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-steel-gray text-steel-metal text-xs px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-secondary">
            Ver Portfólio Completo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

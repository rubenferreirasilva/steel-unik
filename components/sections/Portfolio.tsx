"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const filters = ["Todos", "CAD", "Soldadura", "Laser Corte", "Fresagem", "Quinagem", "Torno"];

const projects = [
  {
    id: 1,
    title: "Prototipagem CAD",
    subtitle: "Desenvolvimento técnico em SolidWorks — validação digital antes do protótipo físico",
    category: "CAD",
    tags: ["SolidWorks", "3D", "Projeto"],
    image: "/images/portfolio/bastidor-01.jpg",
  },
  {
    id: 2,
    title: "Soldadura Industrial",
    subtitle: "Soldadura MIG/TIG por operadores especializados — estruturas de alta resistência",
    category: "Soldadura",
    tags: ["MIG/TIG", "Aço", "Inox"],
    image: "/images/portfolio/bastidor-02.jpg",
  },
  {
    id: 3,
    title: "Laser Corte",
    subtitle: "Corte laser de precisão milimétrica em chapa — tolerâncias rigorosas garantidas",
    category: "Laser Corte",
    tags: ["Laser", "Chapa", "Precisão"],
    image: "/images/portfolio/bastidor-03.jpg",
  },
  {
    id: 4,
    title: "Fresagem CNC",
    subtitle: "Maquinagem CNC para geometrias complexas — acabamentos de alta qualidade",
    category: "Fresagem",
    tags: ["CNC", "Fresagem", "Multi-eixo"],
    image: "/images/portfolio/bastidor-04.jpg",
  },
  {
    id: 5,
    title: "Quinagem de Precisão",
    subtitle: "Dobragem de chapa metálica com quinadeira — tolerâncias apertadas em série",
    category: "Quinagem",
    tags: ["Quinadeira", "Chapa", "Série"],
    image: "/images/portfolio/bastidor-05.jpg",
  },
  {
    id: 6,
    title: "Torneamento",
    subtitle: "Torno CNC para componentes cilíndricos — acabamento superficial de precisão",
    category: "Torno",
    tags: ["Torno CNC", "Aço", "Componentes"],
    image: "/images/portfolio/bastidor-06.jpg",
  },
];


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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-darker/40 to-transparent" />
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

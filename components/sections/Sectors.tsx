import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    name: "Indústria Automóvel",
    badge: "Principal",
    description:
      "Fornecedor Tier 1 e Tier 2 para as maiores linhas de pintura automóvel ibéricas. Experiência com todos os principais OEMs e fornecedores.",
    clients: "Caetano Coating, SMP, Aludec, Prettl, Preh",
    href: "/setores#automovel",
    featured: true,
  },
  {
    name: "Powder Coating",
    badge: null,
    description:
      "Bastidores para pintura a pó — resistência à temperatura até 220°C, geometrias otimizadas para cobertura uniforme.",
    clients: "Múltiplos setores",
    href: "/setores#powder-coating",
    featured: false,
  },
  {
    name: "Cromagem Industrial",
    badge: null,
    description:
      "Racks para banhos de cromagem — materiais compatíveis, condutividade garantida, resistência química aos eletrólitos.",
    clients: "Decorativo e funcional",
    href: "/setores#cromagem",
    featured: false,
  },
  {
    name: "Anodização",
    badge: null,
    description:
      "Jigs em titânio e alumínio para processos de anodização — contacto elétrico perfeito, sem marcas nas peças.",
    clients: "Alumínio e perfis",
    href: "/setores#anodizacao",
    featured: false,
  },
  {
    name: "Cataforese",
    badge: null,
    description:
      "Bastidores para imersão em cataforese — geometrias que garantem cobertura total, incluindo cavidades internas.",
    clients: "Automóvel e industrial",
    href: "/setores#cataforese",
    featured: false,
  },
  {
    name: "Outros Setores",
    badge: "Sob Consulta",
    description:
      "Eletrodomésticos, mobiliário metálico, equipamento hospitalar — qualquer setor que necessite de fixação precisa em tratamento de superfície.",
    clients: "Projetos especiais",
    href: "/setores#outros",
    featured: false,
  },
];

export default function Sectors() {
  return (
    <section className="bg-steel-dark py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3">Setores de Atuação</p>
          <h2
            className="section-title text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SERVIMOS MÚLTIPLOS
            <br />
            <span className="text-steel-orange">SETORES INDUSTRIAIS</span>
          </h2>
          <p className="text-steel-muted text-base leading-relaxed">
            A nossa experiência no automóvel garante o rigor técnico que todos
            os setores exigem. Capacidade de adaptação a qualquer processo de
            tratamento de superfície.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <Link
              key={sector.name}
              href={sector.href}
              className={`group card-dark p-6 hover:border-steel-orange/40 transition-all duration-300 block ${
                sector.featured ? "lg:col-span-1 border-steel-orange/30 bg-steel-orange/5" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-white font-bold text-xl group-hover:text-steel-orange transition-colors leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {sector.name}
                </h3>
                {sector.badge && (
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm flex-shrink-0 ml-2 ${
                      sector.featured
                        ? "bg-steel-orange text-white"
                        : "bg-steel-gray text-steel-muted border border-steel-border"
                    }`}
                  >
                    {sector.badge}
                  </span>
                )}
              </div>

              <p className="text-steel-muted text-sm leading-relaxed mb-4">
                {sector.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-steel-metal text-xs">{sector.clients}</span>
                <ArrowRight
                  size={16}
                  className="text-steel-orange opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

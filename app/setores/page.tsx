import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Setores — Automóvel, Powder Coating, Cromagem, Anodização, Cataforese",
  description:
    "Steel Unik serve múltiplos setores industriais: automóvel (Tier 1), powder coating, cromagem, anodização, cataforese e outros. Bastidores adaptados a cada processo.",
};

const sectors = [
  {
    id: "automovel",
    name: "Indústria Automóvel",
    badge: "Principal",
    headline: "O setor que nos define. O rigor que todos os outros beneficiam.",
    description:
      "A indústria automóvel exige o mais alto nível de precisão, repetibilidade e fiabilidade nos bastidores de pintura. Somos fornecedor de referência para empresas Tier 1 em Portugal e Espanha — o nosso know-how neste setor é o que diferencia a Steel Unik.",
    challenges: [
      "Tolerâncias dimensionais extremamente apertadas",
      "Repetibilidade em ciclos de produção contínuos",
      "Compatibilidade com sistemas de transporte automático",
      "Rastreabilidade e documentação técnica completa",
    ],
    solution:
      "30 anos de experiência exclusiva no automóvel. Processo de prototipagem validado. Clientes que não mudam de fornecedor porque não querem arriscar.",
    clients: ["Caetano Coating", "SMP", "Novacoating", "Fesht Componentes", "Aludec Portugal", "Doureca", "Prettl", "Preh Portugal"],
    color: "steel-orange",
  },
  {
    id: "powder-coating",
    name: "Powder Coating",
    badge: null,
    headline: "Bastidores para pintura a pó — resistência e cobertura perfeita.",
    description:
      "O powder coating exige bastidores que resistam às temperaturas de cura (160-220°C) durante centenas de ciclos, mantendo a geometria exata. O design do bastidor é crítico para garantir cobertura uniforme e ausência de sombras.",
    challenges: [
      "Resistência a ciclos térmicos repetidos (até 220°C)",
      "Design que evita zonas de sombra na cobertura de pó",
      "Conexão elétrica eficiente para aterramento das peças",
      "Facilidade de limpeza após acumulação de pó",
    ],
    solution:
      "Bastidores em aço carbono tratado, design otimizado por CFD conceptual, pontos de contacto elétrico certificados. Testados e aprovados em produção real.",
    clients: ["Múltiplos setores", "Mobiliário metálico", "Eletrodomésticos"],
    color: "blue-400",
  },
  {
    id: "cromagem",
    name: "Cromagem Industrial",
    badge: null,
    headline: "Racks de cromagem — condutividade garantida, sem marcas nas peças.",
    description:
      "A cromagem exige racks com condutividade elétrica perfeita e resistência química aos banhos ácidos e alcalinos do processo. A localização dos contactos determina a qualidade do depósito crómico.",
    challenges: [
      "Condutividade elétrica perfeita em toda a estrutura",
      "Resistência química a banhos ácidos e alcalinos",
      "Localização precisa dos contactos para distribuição uniforme",
      "Remoção fácil do depósito de crómio após utilização",
    ],
    solution:
      "Materiais compatíveis com os eletrólitos de cromagem. Contactos em cobre ou bronze. Design validado com o cliente antes da produção.",
    clients: ["Cromagem decorativa", "Cromagem funcional", "Setor automóvel"],
    color: "blue-300",
  },
  {
    id: "anodizacao",
    name: "Anodização",
    badge: null,
    headline: "Jigs em titânio — sem marcas, contacto elétrico perfeito.",
    description:
      "A anodização do alumínio exige jigs em titânio ou alumínio de alta pureza, com contactos que garantem corrente uniforme sem deixar marcas nas zonas visíveis das peças.",
    challenges: [
      "Ausência de marcas nas zonas visíveis das peças",
      "Distribuição uniforme da corrente elétrica",
      "Resistência ao ácido sulfúrico do processo de anodização",
      "Reutilização eficiente — custo por ciclo controlado",
    ],
    solution:
      "Jigs em titânio (material nobre para anodização) com design de contactos otimizado. Geometria que oculta as marcas em zonas não críticas.",
    clients: ["Caixilharia de alumínio", "Componentes aeronáuticos", "Design industrial"],
    color: "purple-400",
  },
  {
    id: "cataforese",
    name: "Cataforese (E-Coat)",
    badge: null,
    headline: "Bastidores para imersão — cobertura total, sem zonas cegas.",
    description:
      "A cataforese por imersão exige bastidores que garantam que a tinta epóxi atinge todas as superfícies internas e externas das peças — incluindo cavidades e zonas de difícil acesso.",
    challenges: [
      "Cobertura completa incluindo cavidades internas",
      "Resistência ao banho de cataforese e temperatura de cura",
      "Fixação segura para imersão e rotação completa",
      "Design que facilita a drenagem após imersão",
    ],
    solution:
      "Análise da geometria da peça e simulação de fluxo. Design de bastidor que garante exposição total. Validado com protótipo antes da série.",
    clients: ["Estruturas metálicas automóvel", "Subconjuntos de carroçaria", "Peças de suspensão"],
    color: "green-400",
  },
  {
    id: "outros",
    name: "Outros Setores",
    badge: "Sob Consulta",
    headline: "Qualquer setor que precise de fixação precisa em tratamento de superfície.",
    description:
      "O nosso know-how em bastidores não se limita ao automóvel. Qualquer indústria que trate superfícies metálicas pode beneficiar da nossa experiência — desde eletrodomésticos a mobiliário metálico, equipamento hospitalar a componentes aeronáuticos.",
    challenges: [
      "Geometrias específicas de cada setor e produto",
      "Processos de tratamento variados e exigências específicas",
      "Volumes de produção diversificados",
      "Prazos de lançamento muitas vezes apertados",
    ],
    solution:
      "Abordagem caso a caso — analisamos a peça, o processo e os requisitos do cliente. Desenvolvemos a solução ideal com a mesma metodologia que aplicamos no automóvel.",
    clients: ["Eletrodomésticos", "Mobiliário metálico", "Hospitalar", "Aeronáutico"],
    color: "yellow-400",
  },
];

export default function SetoresPage() {
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
          <p className="section-label mb-3">Setores de Atuação</p>
          <h1
            className="font-heading font-black text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            SERVIMOS MÚLTIPLOS
            <br />
            <span className="text-steel-orange">SETORES INDUSTRIAIS</span>
          </h1>
          <p className="text-steel-muted text-lg max-w-2xl leading-relaxed">
            O rigor do setor automóvel é o nosso standard mínimo — e aplicamos-o
            a todos os setores que servimos.
          </p>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, index) => (
        <section
          key={sector.id}
          id={sector.id}
          className={`py-20 border-b border-steel-border ${
            index % 2 === 0 ? "bg-steel-dark" : "bg-steel-darker"
          }`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <p className="section-label">0{index + 1}</p>
                  {sector.badge && (
                    <span className="bg-steel-orange text-white text-xs px-2 py-1 rounded-sm font-bold uppercase tracking-wider">
                      {sector.badge}
                    </span>
                  )}
                </div>
                <h2
                  className="text-white font-black text-4xl md:text-5xl mb-3 leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {sector.name.toUpperCase()}
                </h2>
                <p className="text-steel-orange font-semibold text-base mb-6">
                  {sector.headline}
                </p>
                <p className="text-steel-muted text-base leading-relaxed mb-8">
                  {sector.description}
                </p>

                {/* Clients */}
                <div className="mb-8">
                  <p className="text-steel-metal text-xs uppercase tracking-wider mb-3">
                    Clientes / Setores referência:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sector.clients.map((client) => (
                      <span
                        key={client}
                        className="bg-steel-gray border border-steel-border text-steel-metal text-xs px-3 py-1.5 rounded-sm"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contacto" className="btn-primary">
                  Solicitar Proposta
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6">
                {/* Challenges */}
                <div className="card-dark p-6">
                  <h3
                    className="text-white font-bold text-lg mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Desafios do Setor
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {sector.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3 text-steel-muted text-sm">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-steel-orange/10 border border-steel-orange/30 p-6 rounded-sm">
                  <h3
                    className="text-steel-orange font-bold text-lg mb-3 uppercase tracking-wider"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    A Nossa Solução
                  </h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-steel-orange mt-0.5 flex-shrink-0" />
                    <p className="text-steel-muted text-sm leading-relaxed">
                      {sector.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-steel-orange py-16">
        <div className="container-custom text-center">
          <h2
            className="text-white font-black text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            O SEU SETOR NÃO ESTÁ AQUI?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Contacte-nos — desenvolvemos bastidores para qualquer processo de
            tratamento de superfície. Analisamos o seu caso sem compromisso.
          </p>
          <Link
            href="/contacto"
            className="bg-white text-steel-orange font-bold px-8 py-4 rounded-sm hover:bg-steel-light transition-colors inline-flex items-center gap-2 uppercase tracking-wider text-sm"
          >
            Falar com um Técnico
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

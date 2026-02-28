"use client";

const capabilities = [
  {
    title: "Soldadura Especializada",
    description:
      "MIG/MAG e TIG sobre ferro, alumínio e aço inoxidável. Soldadores com décadas de experiência em estruturas de precisão.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 32L20 12L32 32" stroke="#2acbd2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="12" r="3" fill="#2acbd2"/>
        <path d="M12 26h16" stroke="#2acbd2" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Laser Corte",
    description:
      "Corte laser próprio em chapa de ferro e alumínio. Sem subcontratação — tolerâncias de ±0,1 mm, prazos controlados internamente.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <line x1="8" y1="8" x2="32" y2="32" stroke="#2acbd2" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="4" fill="#2acbd2"/>
        <path d="M8 8L14 14M20 20L26 26" stroke="#2acbd2" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Fresagem CNC",
    description:
      "Fresagem de precisão para componentes críticos. Maquinagem de peças complexas com acabamento de alta qualidade.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="10" y="10" width="20" height="20" rx="2" stroke="#2acbd2" strokeWidth="2.5"/>
        <circle cx="20" cy="20" r="4" fill="#2acbd2"/>
        <path d="M20 10v-4M20 34v-4M10 20H6M34 20h-4" stroke="#2acbd2" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Quinagem",
    description:
      "Quinagem de chapa de ferro e alumínio até espessuras industriais. Ângulos precisos para geometrias complexas de bastidores.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 30L20 12L32 30" stroke="#2acbd2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 24h12" stroke="#2acbd2" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Torneamento",
    description:
      "Torno convencional para peças de revolução: veios, bucins, adaptadores e componentes de fixação específicos para cada projeto.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" stroke="#2acbd2" strokeWidth="2.5"/>
        <circle cx="20" cy="20" r="5" fill="#2acbd2"/>
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="#2acbd2" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "CAD & SolidWorks 3D",
    description:
      "Desenvolvimento completo em CAD 2D e SolidWorks 3D. Protótipo digital antes de qualquer produção — validação sem riscos.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="#2acbd2" strokeWidth="2.5"/>
        <path d="M8 16h24M16 8v24" stroke="#2acbd2" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="18" y="18" width="10" height="8" fill="#2acbd2" fillOpacity="0.3" stroke="#2acbd2" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="bg-steel-dark py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p className="section-label mb-3">Capacidades Técnicas</p>
            <h2
              className="section-title text-5xl md:text-6xl leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              PRODUÇÃO
              <br />
              <span className="text-steel-accent">100% INTERNA</span>
            </h2>
          </div>
          <div>
            <p className="text-steel-muted text-base leading-relaxed mb-4">
              Sem dependência de fornecedores externos. Sem atrasos por
              subcontratação. Todo o processo — do corte à soldadura, do
              protótipo à série — acontece nas nossas instalações na Maia.
            </p>
            <div className="flex items-center gap-3 text-steel-light">
              <div className="w-2 h-2 rounded-full bg-steel-accent flex-shrink-0" />
              <span className="text-sm font-semibold">
                Prazos cumpridos. Qualidade controlada. Custo previsível.
              </span>
            </div>
          </div>
        </div>

        {/* Grelha de capacidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group card-dark p-6 hover:border-steel-accent/40 transition-all duration-300 hover:bg-steel-gray"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-sm bg-steel-accent/10 border border-steel-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-steel-accent/20 transition-colors">
                  {cap.icon}
                </div>
                <div className="pt-2">
                  <h3
                    className="text-white font-bold text-lg leading-tight group-hover:text-steel-accent transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {cap.title}
                  </h3>
                </div>
              </div>
              <p className="text-steel-muted text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destaques */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { label: "6 Operadores", detail: "de produção especializados" },
            { label: "Maia — Porto", detail: "resposta rápida em todo o país" },
            { label: "Sem Subcontratação", detail: "100% produção própria" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-steel-accent/5 border border-steel-accent/20 p-4 rounded-sm text-center"
            >
              <div
                className="text-steel-accent font-black text-xl mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.label}
              </div>
              <div className="text-steel-muted text-xs">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

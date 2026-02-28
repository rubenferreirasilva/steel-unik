export default function TrustBar() {
  const clients = [
    "Caetano Coating",
    "Aludec Portugal",
    "Prettl",
    "Preh Portugal",
    "SMP",
    "Novacoating",
    "Fesht Componentes",
    "Doureca",
    "Aludec España",
  ];

  return (
    <section className="bg-steel-gray border-y border-steel-border py-10 overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-steel-muted text-xs uppercase tracking-[0.3em]">
          Fornecedor de confiança para os líderes do setor automóvel
        </p>
      </div>

      {/* Scrolling logos — animation via Tailwind keyframes in globals.css */}
      <div className="relative flex overflow-hidden">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "trustbar-scroll 30s linear infinite" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-16 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-steel-orange flex-shrink-0" />
                <span
                  className="text-steel-metal font-semibold uppercase tracking-wider text-sm whitespace-nowrap"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

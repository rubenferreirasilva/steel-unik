"use client";

import { AlertTriangle, Clock, Layers } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Bastidores mal adaptados que danificam peças",
    description:
      "Um bastidor genérico pode gerar retrabalho, peças rejeitadas e paragens de linha que custam milhares de euros por hora. A precisão não é opcional neste setor.",
  },
  {
    icon: Clock,
    title: "Fornecedores sem capacidade de prototipagem rápida",
    description:
      "Esperar semanas por um protótipo e descobrir que não funciona na linha. Perdas de tempo e de produção que podiam ter sido evitadas logo no início.",
  },
  {
    icon: Layers,
    title: "Falta de flexibilidade para pequenas e grandes séries",
    description:
      "Fornecedores que só trabalham grandes volumes — ou produções artesanais sem controlo de qualidade. O mercado exige ambas as realidades em simultâneo.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-steel-dark py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-3">O Problema</p>
          <h2
            className="section-title text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            O QUE CUSTA CARO
            <br />
            <span className="text-steel-accent">AO SEU NEGÓCIO</span>
          </h2>
          <p className="text-steel-muted text-base leading-relaxed">
            Engenheiros e responsáveis de produção confrontam-se diariamente
            com os mesmos desafios nos bastidores das suas linhas de pintura.
          </p>
        </div>

        {/* Cards de problema */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group card-dark p-8 hover:border-steel-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon size={20} className="text-red-400" />
                </div>
                <span
                  className="text-steel-accent font-heading font-bold text-4xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  0{index + 1}
                </span>
              </div>
              <h3
                className="text-white font-bold text-xl mb-3 leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {problem.title}
              </h3>
              <p className="text-steel-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transição */}
        <div className="bg-steel-gray border border-steel-accent/20 rounded-sm p-8 text-center accent-glow">
          <p className="text-steel-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            A Nossa Resposta
          </p>
          <h3
            className="text-white font-black text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            A Steel Unik foi construída para resolver exatamente isto.
          </h3>
          <p className="text-steel-muted text-base max-w-2xl mx-auto">
            30 anos de know-how, produção 100% interna e um processo de
            prototipagem validado — para que as suas linhas nunca parem
            por causa de um bastidor.
          </p>
        </div>
      </div>
    </section>
  );
}

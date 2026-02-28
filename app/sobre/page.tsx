import type { Metadata } from "next";
import { MapPin, Users, Award, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós — 30 Anos de Know-How em Bastidores Industriais",
  description:
    "Conheça a Steel Unik — fundada por Rui Azevedo Silva, com 30+ anos de experiência em bastidores para linhas de pintura industrial. Maia, Porto.",
};

const values = [
  {
    icon: Target,
    title: "Rigor Técnico",
    description:
      "Cada bastidor é desenvolvido com precisão milimétrica. Não produzimos peças em série sem validação do protótipo físico.",
  },
  {
    icon: Award,
    title: "Rapidez de Resposta",
    description:
      "Orçamento em 24 horas. Protótipo físico em dias. Produção em série no prazo acordado — sempre.",
  },
  {
    icon: Users,
    title: "Proximidade com o Cliente",
    description:
      "Não somos um fornecedor anónimo. Conhecemos as linhas dos nossos clientes e os seus problemas específicos.",
  },
  {
    icon: MapPin,
    title: "Flexibilidade Total",
    description:
      "De 1 unidade de urgência a 1.000 em série. De simples ganchos a bastidores multi-peça de geometria complexa.",
  },
];

const team = [
  {
    name: "Rui Azevedo Silva",
    role: "Fundador & Diretor Técnico",
    bio: "Com mais de 30 anos de experiência em bastidores industriais, Rui Azevedo Silva fundou a Steel Unik com um objetivo claro: resolver um problema que a indústria automóvel enfrentava todos os dias.",
  },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-steel-dark pt-20">
      {/* Hero */}
      <section className="bg-steel-darker py-24 border-b border-steel-border relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-custom relative z-10">
          <p className="section-label mb-3">Sobre a Steel Unik</p>
          <h1
            className="font-heading font-black text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            30 ANOS A CONSTRUIR
            <br />
            <span className="text-steel-accent">BASTIDORES QUE SUSTENTAM</span>
            <br />
            AS MAIORES LINHAS DE PINTURA
            <br />
            DE PORTUGAL.
          </h1>
          <p className="text-steel-muted text-lg max-w-2xl leading-relaxed">
            Não somos um fabricante genérico. Somos o parceiro técnico que os
            engenheiros chamam quando os bastidores têm de funcionar à primeira.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">A Nossa História</p>
              <h2
                className="text-white font-black text-4xl md:text-5xl mb-8 leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                DE EMPRESA UNIPESSOAL
                <br />
                <span className="text-steel-accent">À REFERÊNCIA DO SETOR</span>
              </h2>
              <div className="flex flex-col gap-6 text-steel-muted text-base leading-relaxed">
                <p>
                  A Steel Unik nasceu da experiência acumulada de Rui Azevedo
                  Silva ao longo de décadas na indústria de bastidores e
                  prototipagem industrial. O que começou como uma operação
                  unipessoal, construída sobre o know-how técnico de quem
                  passou a vida a resolver problemas nas linhas de pintura, foi
                  crescendo organicamente à medida que os clientes reconheciam
                  uma diferença clara.
                </p>
                <p>
                  Hoje, a Steel Unik opera a partir da Maia com uma equipa de{" "}
                  <strong className="text-white">
                    6 operadores de produção especializados
                  </strong>{" "}
                  e 2 administrativos, servindo clientes Tier 1 do setor
                  automóvel em Portugal e Espanha.
                </p>
                <p>
                  A nossa vantagem não está nos equipamentos — está nos 30 anos
                  de know-how acumulado que nos permite desenvolver bastidores
                  que outros não conseguem, nos prazos que outros não cumprem.
                </p>
              </div>
            </div>

            {/* Timeline visual */}
            <div className="card-dark p-8">
              <h3
                className="text-steel-accent font-bold text-xl mb-8 uppercase tracking-wider"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Linha do Tempo
              </h3>
              <div className="relative flex flex-col gap-0">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-steel-border" />
                {[
                  { year: "1994", event: "Fundação da Steel Unik por Rui Azevedo Silva" },
                  { year: "2000", event: "Primeiros contratos com clientes Tier 1 automóvel" },
                  { year: "2008", event: "Expansão das capacidades — Laser corte e CNC" },
                  { year: "2015", event: "Adoção do SolidWorks 3D para prototipagem digital" },
                  { year: "2020", event: "Entrada no mercado espanhol — Aludec España" },
                  { year: "2024", event: "30 anos. +50 clientes. +10.000 bastidores produzidos." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-8 pb-8 relative">
                    <div className="w-10 h-10 rounded-full bg-steel-accent flex items-center justify-center flex-shrink-0 relative z-10 text-white font-bold text-xs">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <div className="pt-1">
                      <div
                        className="text-steel-accent font-black text-2xl leading-none"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.year}
                      </div>
                      <div className="text-steel-muted text-sm mt-1">
                        {item.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-steel-darker py-24 border-y border-steel-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Os Nossos Valores</p>
            <h2
              className="text-white font-black text-4xl md:text-5xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              O QUE NOS{" "}
              <span className="text-steel-accent">DEFINE</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-dark p-6 hover:border-steel-accent/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-sm bg-steel-accent/10 border border-steel-accent/20 flex items-center justify-center mb-4">
                  <value.icon size={20} className="text-steel-accent" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-steel-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="section-label mb-3">A Nossa Equipa</p>
            <h2
              className="text-white font-black text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              PESSOAS REAIS,{" "}
              <span className="text-steel-accent">RESULTADOS REAIS</span>
            </h2>
            <p className="text-steel-muted text-base leading-relaxed">
              6 operadores de produção + 2 administrativos. Uma equipa pequena,
              focada e altamente especializada.
            </p>
          </div>

          {/* Team placeholder */}
          <div className="card-dark p-12 text-center max-w-xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-steel-accent/20 border-2 border-steel-accent/40 mx-auto mb-6 flex items-center justify-center">
              <Users size={36} className="text-steel-accent" />
            </div>
            <h3
              className="text-white font-black text-2xl mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {team[0].name}
            </h3>
            <p className="text-steel-accent text-sm font-semibold uppercase tracking-wider mb-4">
              {team[0].role}
            </p>
            <p className="text-steel-muted text-sm leading-relaxed">
              {team[0].bio}
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-steel-darker py-24 border-t border-steel-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Localização</p>
              <h2
                className="text-white font-black text-4xl md:text-5xl mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                MAIA — PORTO
                <br />
                <span className="text-steel-accent">NO CORAÇÃO INDUSTRIAL</span>
                <br />
                DE PORTUGAL
              </h2>
              <div className="flex flex-col gap-3 text-steel-muted">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="text-steel-accent mt-0.5 flex-shrink-0" />
                  Rua António da Silva Torres 100, 4475-455 Nogueira, Maia
                </p>
                <p className="text-sm leading-relaxed">
                  Estrategicamente situados no grande Porto, a menos de 20km da
                  maioria dos nossos clientes do setor automóvel. Resposta rápida
                  em caso de urgência — entrega no próprio dia quando necessário.
                </p>
              </div>
              <Link href="/contacto" className="btn-primary mt-8 inline-flex">
                Contactar Agora
              </Link>
            </div>
            {/* Map placeholder */}
            <div className="aspect-video bg-steel-gray border border-steel-border rounded-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-steel-accent mx-auto mb-3" />
                <p className="text-steel-muted text-sm">
                  Rua António da Silva Torres 100
                </p>
                <p className="text-steel-muted text-sm">Maia, Porto</p>
                <a
                  href="https://maps.google.com/?q=Rua+António+da+Silva+Torres+100+Maia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-accent text-sm mt-2 inline-block hover:underline"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

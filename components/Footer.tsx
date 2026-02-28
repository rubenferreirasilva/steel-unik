import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const services = [
  { label: "Desenvolvimento de Jigs", href: "/servicos#jigs" },
  { label: "Prototipagem CAD/SolidWorks", href: "/servicos#cad" },
  { label: "Soldadura Especializada", href: "/servicos#soldadura" },
  { label: "Laser Corte", href: "/servicos#laser" },
  { label: "Fresagem & Quinagem", href: "/servicos#fresagem" },
];

const sectors = [
  { label: "Indústria Automóvel", href: "/setores#automovel" },
  { label: "Powder Coating", href: "/setores#powder-coating" },
  { label: "Cromagem Industrial", href: "/setores#cromagem" },
  { label: "Anodização", href: "/setores#anodizacao" },
  { label: "Cataforese", href: "/setores#cataforese" },
];

export default function Footer() {
  return (
    <footer className="bg-steel-darker border-t border-steel-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span
                className="font-heading font-black text-3xl text-white uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                STEEL<span className="text-steel-orange">UNIK</span>
              </span>
            </Link>
            <p className="text-steel-muted text-sm leading-relaxed mb-6">
              30 anos a fabricar bastidores e jigs de precisão para as maiores
              linhas de pintura industrial de Portugal e Espanha.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-steel-orange mt-0.5 flex-shrink-0" />
                <span className="text-steel-muted text-sm">
                  Rua António da Silva Torres 100<br />
                  4475-455 Nogueira, Maia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-steel-orange flex-shrink-0" />
                <a
                  href="tel:+351229000000"
                  className="text-steel-muted text-sm hover:text-white transition-colors"
                >
                  +351 229 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-steel-orange flex-shrink-0" />
                <a
                  href="mailto:geral@steelunik.com"
                  className="text-steel-muted text-sm hover:text-white transition-colors"
                >
                  geral@steelunik.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-steel-orange flex-shrink-0" />
                <span className="text-steel-muted text-sm">
                  Seg–Sex: 8h30–17h30
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-heading font-bold text-white uppercase tracking-wider text-lg mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Serviços
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-steel-muted hover:text-steel-orange transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3
              className="font-heading font-bold text-white uppercase tracking-wider text-lg mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Setores
            </h3>
            <ul className="flex flex-col gap-3">
              {sectors.map((sector) => (
                <li key={sector.label}>
                  <Link
                    href={sector.href}
                    className="text-steel-muted hover:text-steel-orange transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Block */}
          <div>
            <h3
              className="font-heading font-bold text-white uppercase tracking-wider text-lg mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Tem um Projeto?
            </h3>
            <p className="text-steel-muted text-sm leading-relaxed mb-6">
              Envie-nos a especificação — CAD, foto ou descrição. Respondemos com
              proposta em menos de 24 horas úteis.
            </p>
            <Link href="/contacto" className="btn-primary text-xs px-6 py-3 w-full justify-center">
              Solicitar Orçamento
            </Link>
            <div className="mt-4 p-4 bg-steel-card border border-steel-border rounded-sm">
              <p className="text-steel-orange text-xs font-semibold uppercase tracking-wider mb-1">
                Resposta Garantida
              </p>
              <p className="text-steel-muted text-xs">
                ✓ Menos de 24 horas úteis
              </p>
              <p className="text-steel-muted text-xs">
                ✓ Protótipo digital incluído
              </p>
              <p className="text-steel-muted text-xs">
                ✓ Sem compromisso inicial
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-muted text-xs">
              © {new Date().getFullYear()} Steel Unik, Lda. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/politica-privacidade"
                className="text-steel-muted hover:text-white text-xs transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-steel-muted hover:text-white text-xs transition-colors"
              >
                Termos de Uso
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-steel-orange hover:text-steel-orange-light text-xs font-semibold transition-colors"
                >
                  PT
                </Link>
                <span className="text-steel-border">|</span>
                <Link
                  href="/es"
                  className="text-steel-muted hover:text-white text-xs transition-colors"
                >
                  ES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

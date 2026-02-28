"use client";

import { useState } from "react";
import { Send, Upload, CheckCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone Direto",
    value: "+351 229 000 000",
    href: "tel:+351229000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "geral@steelunik.com",
    href: "mailto:geral@steelunik.com",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: "Rua António da Silva Torres 100, 4475-455 Nogueira, Maia",
    href: "https://maps.google.com/?q=Rua+António+da+Silva+Torres+100+Maia",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda–Sexta: 8h30–17h30",
    href: null,
  },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

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
          <p className="section-label mb-3">Contacto</p>
          <h1
            className="font-heading font-black text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            VAMOS TRABALHAR
            <br />
            <span className="text-steel-accent">JUNTOS.</span>
          </h1>
          <p className="text-steel-muted text-lg max-w-xl leading-relaxed">
            Pode enviar-nos a peça por CAD, foto ou descrição. Respondemos com
            proposta em menos de 24 horas úteis.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Contact info */}
            <div>
              <h2
                className="text-white font-black text-3xl mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                INFORMAÇÕES DE CONTACTO
              </h2>

              <div className="flex flex-col gap-4 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="card-dark p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-steel-accent/10 border border-steel-accent/20 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-steel-accent" />
                    </div>
                    <div>
                      <p className="text-steel-muted text-xs uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white font-semibold hover:text-steel-accent transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="card-dark aspect-video flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin size={40} className="text-steel-accent mx-auto mb-3" />
                  <p className="text-white font-semibold mb-1">Steel Unik</p>
                  <p className="text-steel-muted text-sm">
                    Rua António da Silva Torres 100
                  </p>
                  <p className="text-steel-muted text-sm mb-3">4475-455 Nogueira, Maia</p>
                  <a
                    href="https://maps.google.com/?q=Rua+António+da+Silva+Torres+100+Maia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-accent text-sm hover:underline"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/351229000000?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 p-4 rounded-sm hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp Business</p>
                  <p className="text-steel-muted text-xs">
                    Resposta imediata em horário laboral
                  </p>
                </div>
              </a>
            </div>

            {/* Right — Form */}
            <div className="card-dark p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle size={64} className="text-steel-accent mx-auto mb-6" />
                  <h3
                    className="text-white font-black text-3xl mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Mensagem Recebida!
                  </h3>
                  <p className="text-steel-muted text-base leading-relaxed max-w-sm mx-auto">
                    A nossa equipa irá analisar o seu pedido e contactá-lo em
                    menos de 24 horas úteis. Obrigado pelo contacto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-steel-accent text-sm hover:underline"
                  >
                    Enviar outro pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3
                      className="text-white font-black text-2xl mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Solicitar Orçamento
                    </h3>
                    <p className="text-steel-muted text-sm">
                      Preencha o formulário e respondemos em 24h úteis.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors placeholder:text-steel-muted"
                        placeholder="João Silva"
                      />
                    </div>
                    <div>
                      <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors placeholder:text-steel-muted"
                        placeholder="Empresa, S.A."
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors placeholder:text-steel-muted"
                        placeholder="joao@empresa.pt"
                      />
                    </div>
                    <div>
                      <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors placeholder:text-steel-muted"
                        placeholder="+351 9XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                      Setor / Processo
                    </label>
                    <select className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors">
                      <option value="">Selecione o setor...</option>
                      <option>Indústria Automóvel</option>
                      <option>Powder Coating</option>
                      <option>Cromagem Industrial</option>
                      <option>Anodização</option>
                      <option>Cataforese</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                      Descrição do Projeto *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-accent transition-colors placeholder:text-steel-muted resize-none"
                      placeholder="Descreva o bastidor que necessita — tipo de peça, processo de pintura, quantidade estimada, prazo, requisitos especiais..."
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                      Ficheiro Técnico (CAD, DXF, STEP, STP, PDF, Foto)
                    </label>
                    <label className="flex items-center gap-3 w-full bg-steel-gray border border-dashed border-steel-border text-steel-muted px-4 py-4 text-sm rounded-sm hover:border-steel-accent hover:text-white transition-colors cursor-pointer">
                      <Upload size={18} className="flex-shrink-0" />
                      <span>
                        {selectedFile ? (
                          <span className="text-steel-accent">{selectedFile}</span>
                        ) : (
                          "Clique para anexar ficheiro técnico"
                        )}
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".dxf,.step,.stp,.pdf,.jpg,.jpeg,.png,.dwg,.iges,.igs"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setSelectedFile(file.name);
                        }}
                      />
                    </label>
                    <p className="text-steel-muted text-xs mt-1">
                      Formatos aceites: DXF, STEP, STP, DWG, IGES, PDF, JPG, PNG
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        A enviar...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Pedido de Orçamento
                      </>
                    )}
                  </button>

                  <p className="text-steel-muted text-xs text-center">
                    ✓ Resposta em menos de 24 horas úteis &nbsp;·&nbsp; ✓ Sem compromisso
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

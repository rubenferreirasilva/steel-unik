"use client";

import { useState } from "react";
import { Send, Upload, CheckCircle, Phone, Mail, Clock } from "lucide-react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-steel-darker py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <p className="section-label mb-3">Contacto</p>
            <h2
              className="section-title text-5xl md:text-6xl mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              TEM UM
              <br />
              <span className="text-steel-orange">PROJETO?</span>
              <br />
              FALE CONNOSCO.
            </h2>
            <p className="text-steel-muted text-base leading-relaxed mb-8">
              Pode enviar-nos a peça por CAD, foto ou descrição. Analisamos e
              respondemos com proposta em menos de 24 horas úteis.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 card-dark p-4">
                <div className="w-10 h-10 rounded-sm bg-steel-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-steel-orange" />
                </div>
                <div>
                  <p className="text-steel-muted text-xs uppercase tracking-wider mb-0.5">
                    Telefone Direto
                  </p>
                  <a
                    href="tel:+351229000000"
                    className="text-white font-semibold hover:text-steel-orange transition-colors"
                  >
                    +351 229 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 card-dark p-4">
                <div className="w-10 h-10 rounded-sm bg-steel-orange/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-steel-orange" />
                </div>
                <div>
                  <p className="text-steel-muted text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:geral@steelunik.com"
                    className="text-white font-semibold hover:text-steel-orange transition-colors"
                  >
                    geral@steelunik.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 card-dark p-4">
                <div className="w-10 h-10 rounded-sm bg-steel-orange/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-steel-orange" />
                </div>
                <div>
                  <p className="text-steel-muted text-xs uppercase tracking-wider mb-0.5">
                    Horário
                  </p>
                  <p className="text-white font-semibold">
                    Segunda–Sexta: 8h30–17h30
                  </p>
                </div>
              </div>
            </div>

            {/* Promise */}
            <div className="bg-steel-orange/10 border border-steel-orange/30 p-5 rounded-sm">
              <p className="text-steel-orange font-bold text-sm uppercase tracking-wider mb-2">
                ✓ Garantia de Resposta
              </p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Resposta em menos de 24 horas úteis",
                  "Orçamento sem compromisso",
                  "Protótipo digital incluído na proposta",
                  "Aceitamos CAD, DXF, STEP, STP, PDF e fotos",
                ].map((item) => (
                  <li key={item} className="text-steel-muted text-sm flex items-center gap-2">
                    <span className="text-steel-orange">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="card-dark p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={60} className="text-steel-orange mx-auto mb-4" />
                <h3
                  className="text-white font-black text-3xl mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Mensagem Recebida!
                </h3>
                <p className="text-steel-muted text-sm">
                  A nossa equipa irá contactá-lo em menos de 24 horas úteis.
                  Obrigado pelo contacto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3
                  className="text-white font-black text-2xl mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Solicitar Orçamento
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-orange transition-colors placeholder:text-steel-muted"
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
                      className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-orange transition-colors placeholder:text-steel-muted"
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
                      className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-orange transition-colors placeholder:text-steel-muted"
                      placeholder="joao@empresa.pt"
                    />
                  </div>
                  <div>
                    <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-orange transition-colors placeholder:text-steel-muted"
                      placeholder="+351 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                    Descrição do Projeto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-steel-gray border border-steel-border text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-steel-orange transition-colors placeholder:text-steel-muted resize-none"
                    placeholder="Descreva o bastidor que necessita — tipo de peça, processo de pintura, quantidade estimada, prazo..."
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className="text-steel-muted text-xs uppercase tracking-wider block mb-1.5">
                    Ficheiro Técnico (CAD, DXF, STEP, PDF, Foto)
                  </label>
                  <label className="flex items-center gap-3 w-full bg-steel-gray border border-dashed border-steel-border text-steel-muted px-4 py-3 text-sm rounded-sm hover:border-steel-orange hover:text-white transition-colors cursor-pointer">
                    <Upload size={16} />
                    <span>Clique para anexar ficheiro</span>
                    <input type="file" className="hidden" accept=".dxf,.step,.stp,.pdf,.jpg,.jpeg,.png,.dwg" />
                  </label>
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
                  Respondemos em menos de 24 horas úteis. Sem compromisso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Sobre Nós", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Desenvolvimento de Jigs", href: "/servicos#jigs" },
      { label: "Prototipagem CAD", href: "/servicos#cad" },
      { label: "Soldadura", href: "/servicos#soldadura" },
      { label: "Laser Corte", href: "/servicos#laser" },
      { label: "Fresagem & Quinagem", href: "/servicos#fresagem" },
    ],
  },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Setores", href: "/setores" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-darker/95 backdrop-blur-sm border-b border-steel-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className="font-heading font-black text-2xl text-white uppercase tracking-tight leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                STEEL<span className="text-steel-orange">UNIK</span>
              </span>
              <span className="text-[9px] text-steel-metal uppercase tracking-[0.25em] leading-none mt-0.5">
                Bastidores Industriais
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 text-steel-metal hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-steel-metal hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-steel-gray border border-steel-border rounded-sm shadow-xl py-2"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-steel-metal hover:text-white hover:bg-steel-card transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contacto"
              className="btn-primary text-xs px-6 py-3"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-steel-light p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-steel-darker border-t border-steel-border">
          <div className="container-custom py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-steel-metal hover:text-white transition-colors font-medium uppercase tracking-wider text-sm border-b border-steel-border/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-steel-muted hover:text-white transition-colors text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contacto"
                className="btn-primary mt-4 justify-center"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

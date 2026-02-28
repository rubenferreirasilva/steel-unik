import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-steel-dark flex items-center justify-center">
      <div className="text-center px-4">
        <div
          className="font-heading font-black text-steel-accent leading-none mb-4"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(6rem, 20vw, 15rem)",
          }}
        >
          404
        </div>
        <h1
          className="text-white font-black text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          PÁGINA NÃO ENCONTRADA
        </h1>
        <p className="text-steel-muted text-base mb-8 max-w-md mx-auto">
          A página que procura não existe ou foi movida. Volte à homepage ou
          contacte-nos diretamente.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Voltar à Homepage
          </Link>
          <Link href="/contacto" className="btn-secondary">
            Contactar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

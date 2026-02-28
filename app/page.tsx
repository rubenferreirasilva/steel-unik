import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PainPoints from "@/components/sections/PainPoints";
import Process from "@/components/sections/Process";
import Capabilities from "@/components/sections/Capabilities";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import Sectors from "@/components/sections/Sectors";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Steel Unik — Bastidores para Linhas de Pintura Industrial",
  description:
    "30 anos a fabricar bastidores para linhas de pintura industrial. Prototipagem rápida, produção de 1 a 1.000 unidades. Fornecedor Tier 1 em Portugal e Espanha.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <Process />
      <Capabilities />
      <Portfolio />
      <Stats />
      <Sectors />
      <ContactCTA />
    </>
  );
}

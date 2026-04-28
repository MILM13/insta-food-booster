import { createFileRoute } from "@tanstack/react-router";
import { Users, Filter } from "lucide-react";

export const Route = createFileRoute("/poblacion")({
  head: () => ({
    meta: [
      { title: "Población — 1eos Fast Food" },
      { name: "description", content: "Segmentación y estimación cuantitativa de la población objetivo de 1eos Fast Food." },
      { property: "og:title", content: "Población objetivo — 1eos Fast Food" },
      { property: "og:description", content: "Cálculo de población finita por embudo de segmentación." },
    ],
  }),
  component: Poblacion,
});

const embudo = [
  { l: "Población total zona de influencia", v: "3.500.000", n: "Habitantes del área metropolitana cercana." },
  { l: "% rango etario 16–45 años", v: "≈ 1.890.000", n: "Foco demográfico principal del fast food (54%)." },
  { l: "% NSE C2-C3 (target)", v: "≈ 1.040.000", n: "Segmento medio sensible al precio-valor (55%)." },
  { l: "% consumidores de fast food", v: "≈ 728.000", n: "Consume comida rápida al menos 1 vez/mes (70%)." },
  { l: "% que pide por delivery / redes", v: "≈ 620.304", n: "Población finita estimada para 1eos Fast Food (85%)." },
];

function Poblacion() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Capítulo 04</p>
      <h1 className="mt-2 font-display text-6xl md:text-7xl">Población</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Definición del público objetivo y cálculo de la población finita siguiendo la metodología
        de embudo de segmentación vista en clase 5.
      </p>

      {/* Perfil */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-8">
          <Users className="h-7 w-7 text-accent" />
          <h2 className="mt-4 font-display text-3xl">Perfil del público objetivo</h2>
          <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
            {[
              ["Edad", "16 a 45 años (foco 18–35)"],
              ["Género", "Indistinto"],
              ["NSE", "C2 – C3 (medio / medio-bajo)"],
              ["Ubicación", "Zona local + radio de delivery"],
              ["Estilo de vida", "Urbano, digital, vida social activa"],
              ["Hábito de consumo", "Pide delivery 1+ vez por semana"],
              ["Canal preferido", "Instagram, WhatsApp, apps de delivery"],
              ["Sensibilidad", "Precio-valor y velocidad de entrega"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground uppercase text-xs tracking-wider">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-accent/40 bg-gradient-to-br from-accent/15 to-card p-8 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Población finita</p>
          <p className="mt-3 font-display text-6xl text-accent leading-none">≈ 620.304</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Personas con potencial real de convertirse en clientes de 1eos Fast Food.
          </p>
        </div>
      </div>

      {/* Embudo */}
      <h2 className="mt-20 font-display text-4xl md:text-5xl flex items-center gap-3">
        <Filter className="h-8 w-8 text-primary" />
        Embudo de segmentación
      </h2>
      <div className="mt-8 space-y-3">
        {embudo.map((e, i) => {
          const pct = 100 - i * 16;
          return (
            <div key={e.l} className="rounded-xl border border-border bg-card overflow-hidden">
              <div
                className="p-5 md:p-6 grid md:grid-cols-[1fr_180px] gap-4 items-center"
                style={{ width: `${pct}%`, marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent">Paso {i + 1}</p>
                  <p className="mt-1 font-medium">{e.l}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.n}</p>
                </div>
                <p className="font-display text-3xl md:text-4xl text-right text-foreground">{e.v}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-muted-foreground italic">
        * Cifras estimadas con datos públicos y supuestos del rubro. Pueden ajustarse al confirmar
        ubicación exacta y zona efectiva de delivery.
      </p>
    </div>
  );
}

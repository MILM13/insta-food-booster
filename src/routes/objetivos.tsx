import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";

export const Route = createFileRoute("/objetivos")({
  head: () => ({
    meta: [
      { title: "Objetivos — 1eos Fast Food" },
      { name: "description", content: "Objetivos generales y específicos SMART para 1eos Fast Food." },
      { property: "og:title", content: "Objetivos — 1eos Fast Food" },
      { property: "og:description", content: "Plan de objetivos comerciales y de marketing." },
    ],
  }),
  component: Objetivos,
});

const especificos = [
  { t: "Ventas", d: "Aumentar las ventas mensuales un 25% en los próximos 6 meses mediante combos y promociones de mediodía." },
  { t: "Comunidad", d: "Crecer +50% de seguidores en Instagram en 6 meses, llegando a un mínimo de 5.000 followers activos." },
  { t: "Fidelización", d: "Implementar un programa de cliente frecuente y alcanzar 30% de pedidos de clientes recurrentes." },
  { t: "Canales", d: "Sumar al menos 1 app de delivery (PedidosYa o Rappi) en los próximos 3 meses para ampliar cobertura." },
];

function Objetivos() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Capítulo 03</p>
      <h1 className="mt-2 font-display text-6xl md:text-7xl">Objetivos</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Norte estratégico de 1eos Fast Food para los próximos 6 a 12 meses, formulado bajo criterio SMART.
      </p>

      <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-card p-10">
        <Target className="h-8 w-8 text-accent" />
        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-accent">Objetivo general</p>
        <p className="mt-3 font-display text-3xl md:text-4xl leading-tight">
          Consolidar a 1eos Fast Food como una marca local de referencia en fast food por delivery,
          aumentando facturación, comunidad digital y fidelización de clientes en el plazo de un año.
        </p>
      </div>

      <h2 className="mt-16 font-display text-4xl md:text-5xl">Objetivos específicos</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {especificos.map((o, i) => (
          <div key={o.t} className="rounded-xl border border-border bg-card p-7 relative overflow-hidden">
            <span className="absolute right-4 top-4 font-display text-6xl text-muted/30">0{i + 1}</span>
            <p className="text-xs uppercase tracking-wider text-accent">{o.t}</p>
            <p className="mt-3 text-base leading-relaxed">{o.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

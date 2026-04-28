import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, AlertTriangle, Sparkles, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico — FODA y Porter | 1eos Fast Food" },
      { name: "description", content: "Análisis FODA y 5 fuerzas de Porter aplicadas a 1eos Fast Food." },
      { property: "og:title", content: "Diagnóstico — 1eos Fast Food" },
      { property: "og:description", content: "FODA y Porter del fast food 1eos." },
    ],
  }),
  component: Diagnostico,
});

const foda = {
  fortalezas: [
    "Identidad de marca clara y joven en Instagram.",
    "Estructura ágil: bajos costos fijos vs cadenas.",
    "Cercanía con el cliente (DM directo, atención personal).",
    "Producto diferenciado (recetas propias / sello casero).",
  ],
  oportunidades: [
    "Crecimiento sostenido del delivery post-pandemia.",
    "Auge de comunidades foodies en redes locales.",
    "Alianzas con apps de delivery (PedidosYa, Rappi).",
    "Combos, promos y eventos para fidelizar Gen Z.",
  ],
  debilidades: [
    "Único canal: dependencia total de Instagram.",
    "Sin web ni e-commerce propio.",
    "Capacidad productiva limitada en horarios pico.",
    "Métricas y datos del cliente poco sistematizados.",
  ],
  amenazas: [
    "Alta competencia local y de cadenas globales.",
    "Inflación en insumos (carne, papa, packaging).",
    "Cambios de algoritmo de Instagram = caída de alcance.",
    "Regulaciones bromatológicas y municipales.",
  ],
};

const porter = [
  {
    t: "Rivalidad entre competidores",
    n: "ALTA",
    color: "text-primary",
    d: "Mercado fast food saturado: hamburgueserías locales, cadenas internacionales y dark kitchens compiten por el mismo público.",
  },
  {
    t: "Amenaza de nuevos entrantes",
    n: "ALTA",
    color: "text-primary",
    d: "Barreras de entrada bajas: cualquier emprendedor puede abrir un Instagram y vender desde casa.",
  },
  {
    t: "Poder de los proveedores",
    n: "MEDIA",
    color: "text-accent",
    d: "Insumos commodities (carne, pan, papa) con múltiples proveedores, pero sensibles a la inflación.",
  },
  {
    t: "Poder de los compradores",
    n: "ALTA",
    color: "text-primary",
    d: "Cliente con muchas opciones, baja fidelidad y alta sensibilidad al precio y a las reseñas.",
  },
  {
    t: "Amenaza de sustitutos",
    n: "MEDIA-ALTA",
    color: "text-accent",
    d: "Pizza, sushi, comida saludable, vianda casera y supermercado son sustitutos directos.",
  },
];

function Diagnostico() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Capítulo 02</p>
      <h1 className="mt-2 font-display text-6xl md:text-7xl">Diagnóstico</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Lectura del entorno interno y externo de 1eos Fast Food a través de FODA y las 5 fuerzas de Porter.
      </p>

      {/* FODA */}
      <h2 className="mt-16 font-display text-4xl md:text-5xl">FODA</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <FodaCard icon={TrendingUp} title="Fortalezas" tone="accent" items={foda.fortalezas} />
        <FodaCard icon={Sparkles} title="Oportunidades" tone="accent" items={foda.oportunidades} />
        <FodaCard icon={ShieldAlert} title="Debilidades" tone="primary" items={foda.debilidades} />
        <FodaCard icon={AlertTriangle} title="Amenazas" tone="primary" items={foda.amenazas} />
      </div>

      {/* Porter */}
      <h2 className="mt-20 font-display text-4xl md:text-5xl">5 Fuerzas de Porter</h2>
      <div className="mt-8 space-y-3">
        {porter.map((p, i) => (
          <div
            key={p.t}
            className="grid md:grid-cols-[80px_1fr_140px] gap-4 items-start rounded-xl border border-border bg-card p-6"
          >
            <p className="font-display text-5xl text-muted-foreground">0{i + 1}</p>
            <div>
              <h3 className="font-display text-2xl">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
            <p className={`font-display text-2xl text-right ${p.color}`}>{p.n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FodaCard({
  icon: Icon,
  title,
  tone,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tone: "accent" | "primary";
  items: string[];
}) {
  const color = tone === "accent" ? "text-accent" : "text-primary";
  return (
    <div className="rounded-xl border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <Icon className={`h-6 w-6 ${color}`} />
        <h3 className={`font-display text-3xl ${color}`}>{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${tone === "accent" ? "bg-accent" : "bg-primary"}`} />
            <span className="text-muted-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

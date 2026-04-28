import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Target, Users, BarChart3, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1eos Fast Food — Brief Estratégico" },
      { name: "description", content: "Diagnóstico estratégico, FODA, Porter, objetivos y población de 1eos Fast Food." },
      { property: "og:title", content: "1eos Fast Food — Brief Estratégico" },
      { property: "og:description", content: "Análisis completo de la pyme @1eosfast_food para Comercialización I." },
    ],
  }),
  component: Home,
});

const sections = [
  { to: "/empresa", icon: Flame, title: "Empresa", desc: "Ficha, historia y propuesta de valor." },
  { to: "/diagnostico", icon: BarChart3, title: "Diagnóstico", desc: "FODA y 5 fuerzas de Porter." },
  { to: "/objetivos", icon: Target, title: "Objetivos", desc: "Generales y específicos SMART." },
  { to: "/poblacion", icon: Users, title: "Población", desc: "Segmentación y estimación cuantitativa." },
  { to: "/conclusiones", icon: Lightbulb, title: "Conclusiones", desc: "Hallazgos clave y recomendaciones." },
] as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-28 md:pt-32 md:pb-40">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Brief — Primera entrega
          </p>
          <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
            1EOS<br />
            <span className="text-primary">FAST FOOD</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Análisis estratégico de la pyme <span className="text-foreground font-semibold">@1eosfast_food</span>:
            sabor, velocidad y comunidad. Diagnóstico, FODA, Porter, objetivos y población — todo en un solo lugar.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/empresa"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition shadow-[0_10px_40px_-10px_var(--primary)]"
            >
              Ver brief
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/diagnostico"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-card transition"
            >
              Diagnóstico
            </Link>
          </div>

          {/* KPIs */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "≈620k", l: "Población estimada" },
              { v: "5", l: "Fuerzas analizadas" },
              { v: "4", l: "Objetivos SMART" },
              { v: "100%", l: "Foco delivery" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-border bg-card/40 p-5">
                <p className="font-display text-4xl text-accent">{k.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Contenido</p>
            <h2 className="mt-2 font-display text-5xl md:text-6xl">El brief, sección por sección</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition" />
              <s.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-display text-3xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
                Ver sección <ArrowRight className="h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

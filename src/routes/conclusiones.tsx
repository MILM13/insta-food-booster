import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/conclusiones")({
  head: () => ({
    meta: [
      { title: "Conclusiones — 1eos Fast Food" },
      { name: "description", content: "Hallazgos clave y recomendaciones estratégicas para 1eos Fast Food." },
      { property: "og:title", content: "Conclusiones — 1eos Fast Food" },
      { property: "og:description", content: "Próximos pasos del brief estratégico." },
    ],
  }),
  component: Conclusiones,
});

const hallazgos = [
  "Marca con identidad joven y digital, pero con dependencia crítica de un único canal (Instagram).",
  "Mercado de fast food altamente competitivo: la diferenciación por producto y servicio es clave.",
  "Existe una población finita relevante (≈620k) con hábitos compatibles con la propuesta.",
  "Bajo costo de ampliar canales (apps de delivery, WhatsApp Business, web simple) versus impacto esperado.",
];

const recomendaciones = [
  { t: "Diversificar canales", d: "Sumar PedidosYa/Rappi y un sitio simple con menú y pedido por WhatsApp." },
  { t: "Programa de fidelización", d: "Combo frecuente + descuento por referidos para subir clientes recurrentes al 30%." },
  { t: "Contenido sistemático", d: "Calendario de Reels/Stories 4x/semana con producto, behind the scenes y UGC." },
  { t: "Métricas básicas", d: "Trackear ticket promedio, recompra y costo de adquisición por canal." },
];

function Conclusiones() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Cierre</p>
      <h1 className="mt-2 font-display text-6xl md:text-7xl">Conclusiones</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Síntesis del diagnóstico y próximos pasos sugeridos para 1eos Fast Food.
      </p>

      <h2 className="mt-16 font-display text-4xl">Hallazgos clave</h2>
      <ul className="mt-6 space-y-3">
        {hallazgos.map((h) => (
          <li key={h} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm md:text-base">{h}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-4xl">Recomendaciones</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {recomendaciones.map((r, i) => (
          <div key={r.t} className="rounded-xl border border-border bg-card p-7 relative overflow-hidden">
            <span className="absolute right-5 top-3 font-display text-6xl text-muted/30">0{i + 1}</span>
            <p className="text-xs uppercase tracking-wider text-primary">{r.t}</p>
            <p className="mt-2">{r.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 to-card p-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Próximo paso</p>
        <p className="mt-3 font-display text-4xl">De diagnóstico a plan táctico</p>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Con el brief validado, el siguiente entregable es el plan de marketing operativo:
          mix, presupuesto y cronograma.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
        >
          Volver al inicio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Utensils, Clock } from "lucide-react";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa — 1eos Fast Food" },
      { name: "description", content: "Ficha de 1eos Fast Food: identidad, propuesta de valor y misión." },
      { property: "og:title", content: "Empresa — 1eos Fast Food" },
      { property: "og:description", content: "Conocé la pyme detrás de @1eosfast_food." },
    ],
  }),
  component: Empresa,
});

function Empresa() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">Capítulo 01</p>
      <h1 className="mt-2 font-display text-6xl md:text-7xl">La empresa</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Pyme gastronómica del rubro fast food. Comunicación 100% digital a través de Instagram,
        modelo de venta directa al consumidor con fuerte foco en delivery y take-away.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-8">
          <h2 className="font-display text-3xl mb-6">Ficha técnica</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
            {[
              ["Razón social", "1eos Fast Food"],
              ["Nombre comercial", "1eos"],
              ["Rubro", "Gastronomía — Fast food"],
              ["Modelo", "B2C — Delivery / Take-away"],
              ["Canal principal", "Instagram @1eosfast_food"],
              ["Año de fundación", "Por confirmar"],
              ["Ubicación", "Por confirmar"],
              ["Tamaño", "Microemprendimiento / Pyme"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground uppercase text-xs tracking-wider">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/20 to-card p-8">
          <Instagram className="h-7 w-7 text-accent" />
          <p className="mt-4 font-display text-3xl">@1eosfast_food</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Único punto de contacto digital relevado. Catálogo, pedidos y comunicación de marca.
          </p>
          <a
            href="https://www.instagram.com/1eosfast_food/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent hover:underline"
          >
            Visitar perfil →
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { icon: Utensils, t: "Propuesta de valor", d: "Comida rápida casera, sabor intenso y porciones generosas a precio accesible." },
          { icon: Clock, t: "Promesa de servicio", d: "Tiempos de entrega cortos y comunicación directa por DM/WhatsApp." },
          { icon: MapPin, t: "Alcance", d: "Zona local — radio acotado de delivery propio o tercerizado." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-card p-6">
            <c.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-2xl">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="font-display text-2xl text-accent">Misión</h3>
          <p className="mt-3 text-muted-foreground">
            Ofrecer una experiencia de fast food honesta, rápida y sabrosa, accesible para el público joven
            de la zona, construyendo comunidad a través de redes sociales.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="font-display text-2xl text-accent">Visión</h3>
          <p className="mt-3 text-muted-foreground">
            Convertirse en una marca local de referencia en fast food, con identidad propia y presencia
            sostenida tanto en delivery como en un eventual local físico.
          </p>
        </div>
      </div>
    </div>
  );
}

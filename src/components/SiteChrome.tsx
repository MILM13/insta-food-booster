import { Link } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/empresa", label: "Empresa" },
  { to: "/diagnostico", label: "Diagnóstico" },
  { to: "/objetivos", label: "Objetivos" },
  { to: "/poblacion", label: "Población" },
  { to: "/conclusiones", label: "Conclusiones" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-[0_0_24px_-4px_var(--primary)]">
            <Flame className="h-5 w-5" />
          </span>
          <div className="leading-none">
            <p className="font-display text-2xl tracking-wide">1EOS</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">fast food</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-5 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-3xl text-accent">1EOS FAST FOOD</p>
          <p className="mt-2 text-muted-foreground">Brief estratégico — Comercialización I.</p>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-muted-foreground mb-2">Contacto</p>
          <p>@1eosfast_food</p>
          <p className="text-muted-foreground">Instagram oficial</p>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-muted-foreground mb-2">Documento</p>
          <p>Primera entrega — Diagnóstico</p>
          <p className="text-muted-foreground">2026</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © 2026 — Trabajo académico
      </div>
    </footer>
  );
}

import { getExecutiveSummary } from "@/lib/generatePlan";

const summary = getExecutiveSummary();

export function ExecutiveSummary() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <header className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-primary/70">
          Plan Directeur
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-primary">
          Stratégie de Lancement Social Media
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Offre : écrans d&apos;étiquetage électronique &amp; vitrines promotionnelles – Cible retail urbain, grande distribution et commerces de proximité en France.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Positionnement clé" items={summary.positioning} />
        <Card title="Objectifs business" items={summary.objectives} />
        <Card title="Messages prioritaires" items={summary.keyMessages} />
        <Card title="KPI de campagne" items={summary.kpis} />
        <Card title="Moments forts" items={summary.campaignHighlights} />
      </div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

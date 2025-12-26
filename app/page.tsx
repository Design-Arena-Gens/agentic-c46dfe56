import { DownloadExcelButton } from "@/components/DownloadExcelButton";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { PlanTable } from "@/components/PlanTable";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-10">
      <ExecutiveSummary />

      <section className="rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center">
        <h2 className="text-xl font-semibold text-primary">
          Téléchargez le plan éditorial complet en Excel
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Inclut 30 jours de programmation, 3 posts par jour et par plateforme, hooks, copywriting, concepts créatifs et prompts IA.
        </p>
        <div className="mt-4 flex justify-center">
          <DownloadExcelButton />
        </div>
      </section>

      <PlanTable channel="Facebook" />
      <PlanTable channel="Instagram" />
      <PlanTable channel="TikTok" />
    </main>
  );
}

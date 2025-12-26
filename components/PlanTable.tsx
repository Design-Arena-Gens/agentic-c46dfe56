import { generatePlatformPlan } from "@/lib/generatePlan";
import type { Channel } from "@/lib/types";

interface PlanTableProps {
  channel: Channel;
}

const HEADERS = [
  "Jour",
  "Date",
  "Heure",
  "Persona",
  "Format",
  "Thème",
  "Objectif / Problème",
  "Hook",
  "Copywriting",
  "Concept visuel",
  "Idée Reel / Vidéo",
  "CTA",
  "Angle témoignage",
  "Prompt image (EN)",
  "Prompt vidéo (EN)",
];

export function PlanTable({ channel }: PlanTableProps) {
  const plan = generatePlatformPlan(channel);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">{channel}</h2>
          <p className="text-sm text-slate-600">
            30 jours · 3 publications par jour · Heure France (CET)
          </p>
        </div>
      </header>
      <div className="table-container">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-primary text-left text-xs uppercase tracking-wide text-white">
              {HEADERS.map((header) => (
                <th key={header} className="px-3 py-3 align-top">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.slots.map((slot) => (
              <tr
                key={`${slot.channel}-${slot.dayNumber}-${slot.postingTime}-${slot.format}`}
                className="border-b border-slate-200 text-xs text-slate-700"
              >
                <td className="px-3 py-3 font-semibold text-slate-900">{slot.dayNumber}</td>
                <td className="px-3 py-3">{slot.dateLabel}</td>
                <td className="px-3 py-3 font-mono text-slate-900">{slot.postingTime}</td>
                <td className="px-3 py-3">{slot.persona}</td>
                <td className="px-3 py-3">{slot.format}</td>
                <td className="px-3 py-3">{slot.theme}</td>
                <td className="px-3 py-3">{slot.objective}</td>
                <td className="px-3 py-3 font-semibold text-slate-900">{slot.hook}</td>
                <td className="px-3 py-3 whitespace-pre-line text-slate-800">{slot.copywriting}</td>
                <td className="px-3 py-3 whitespace-pre-line">{slot.visualConcept}</td>
                <td className="px-3 py-3 whitespace-pre-line">{slot.videoConcept}</td>
                <td className="px-3 py-3 font-semibold text-primary">{slot.cta}</td>
                <td className="px-3 py-3">{slot.testimonialAngle}</td>
                <td className="px-3 py-3 whitespace-pre-line text-slate-600">
                  {slot.promptImageEn}
                </td>
                <td className="px-3 py-3 whitespace-pre-line text-slate-600">
                  {slot.promptVideoEn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

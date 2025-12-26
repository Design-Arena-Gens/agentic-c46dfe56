import { generateAllPlans, getExecutiveSummary } from "@/lib/generatePlan";
import type { ContentIdea } from "@/lib/types";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export const runtime = "nodejs";

export async function GET() {
  const workbook = XLSX.utils.book_new();
  const summary = getExecutiveSummary();
  const plans = generateAllPlans();

  const summarySheetData = [
    ["Positionnement"],
    ...summary.positioning.map((item) => [item]),
    [],
    ["Objectifs"],
    ...summary.objectives.map((item) => [item]),
    [],
    ["Messages clés"],
    ...summary.keyMessages.map((item) => [item]),
    [],
    ["KPI"],
    ...summary.kpis.map((item) => [item]),
    [],
    ["Moments forts"],
    ...summary.campaignHighlights.map((item) => [item]),
  ];

  const summarySheet = XLSX.utils.aoa_to_sheet(summarySheetData);
  XLSX.utils.book_append_sheet(workbook, summarySheet, "Executive_Summary");

  plans.forEach((plan) => {
    const headers = [
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

    const rows = plan.slots.map((slot: ContentIdea) => [
      slot.dayNumber,
      slot.dateLabel,
      slot.postingTime,
      slot.persona,
      slot.format,
      slot.theme,
      slot.objective,
      slot.hook,
      slot.copywriting,
      slot.visualConcept,
      slot.videoConcept,
      slot.cta,
      slot.testimonialAngle,
      slot.promptImageEn,
      slot.promptVideoEn,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    XLSX.utils.book_append_sheet(workbook, worksheet, plan.channel);
  });

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "buffer",
  });

  return new NextResponse(excelBuffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition":
        'attachment; filename="plan-contenu-ecrans-digitales.xlsx"',
    },
  });
}

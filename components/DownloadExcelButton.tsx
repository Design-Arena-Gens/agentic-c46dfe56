"use client";

import { useState } from "react";

export function DownloadExcelButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/export", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Export impossible");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "plan-contenu-ecrans-digitales.xlsx";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Erreur pendant l'export. Merci de réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {loading ? "Export en cours..." : "Télécharger le plan au format Excel"}
    </button>
  );
}

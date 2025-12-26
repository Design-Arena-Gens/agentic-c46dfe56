import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan de Contenu Digital",
  description:
    "Plan de contenu 360° pour lancer une offre d'écrans d'étiquetage électronique dans la distribution et le retail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

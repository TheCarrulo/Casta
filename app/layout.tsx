import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casta — Catálogo de Castas Portuguesas",
  description: "Explorar e descobrir castas portuguesas — perfis sensoriais, aromas, harmonizações e vinhos de referência.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

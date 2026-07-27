import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Julián Vasquez | Analista de Datos & Ingeniero de Sistemas",
  description: "Portafolio de Julián Vasquez Ojeda. Analista de Datos e Ingeniero de Sistemas especializado en Power BI, Python, SQL y desarrollo web con React y Next.js.",
  keywords: ["Julián Vasquez", "Analista de Datos", "Ingeniero de Sistemas", "Power BI", "Python", "SQL", "React", "Next.js", "Bogotá"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

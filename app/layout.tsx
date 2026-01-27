import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nibson Muller | Systems Engineer", // <--- AQUI
  description: "Portfólio de Engenharia Elétrica e Arquitetura de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
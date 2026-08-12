import type { Metadata } from "next";
import { Archivo_Black, Fraunces, Karla } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adobo'Zon — Free Recipe Guide",
  description:
    "Get 5 Abuela-Approved Recipes Using Adobo'Zon, free. The natural seasoning that combines adobo and sazón in one easy step.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${fraunces.variable} ${karla.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vaibhav Sengar | Software Developer",
  description: "Portfolio of Vaibhav Sengar, a software developer focused on full-stack engineering, Generative AI, RAG systems, and deep learning applications.",
  keywords: ["Vaibhav Sengar", "Software Developer", "Generative AI", "React", "FastAPI", "RAG", "Deep Learning"],
  authors: [{ name: "Vaibhav Sengar" }],
  openGraph: {
    title: "Vaibhav Sengar | Software Developer",
    description: "Full-stack developer building AI-powered products, RAG agents, and deep learning systems.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={manrope.variable + " " + sora.variable + " font-sans antialiased"}>{children}</body>
    </html>
  );
}

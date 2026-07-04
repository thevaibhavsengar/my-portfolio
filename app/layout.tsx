import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vaibhav Sengar | Software Developer",
  description: "Portfolio of Vaibhav Sengar,Software Developer passionate about building scalable full-stack applications and AI-powered solutions. Interested in Generative AI, RAG workflows, and deep learning, with a commitment to creating practical, efficient, and user-focused software while continuously learning and growing as an engineer.",
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
      <body className={inter.variable + " font-sans antialiased"}>{children}</body>
    </html>
  );
}
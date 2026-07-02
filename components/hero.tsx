"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const orbitItems = [
  { label: "React", className: "left-[89%] top-1/2" },
  { label: "FastAPI", className: "left-[70%] top-[84%]" },
  { label: "RAG", className: "left-[30%] top-[84%]" },
  { label: "ViT", className: "left-[11%] top-1/2" },
  { label: "Docker", className: "left-[30%] top-[16%]" },
  { label: "Node.js", className: "left-[70%] top-[16%]" }
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:px-10">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" /> Open to full-time software roles
          </div>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Vaibhav Sengar builds intelligent software with product-grade polish.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Software Developer from Nagpur, India focused on full-stack systems, Generative AI, RAG workflows, and deep learning applications that solve practical problems with clarity and speed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild><a href="#projects">View Projects <ArrowDownRight className="ml-2 h-4 w-4" /></a></Button>
            <Button asChild variant="outline"><a href="mailto:vaibhavsengar74@gmail.com"><Mail className="mr-2 h-4 w-4" /> vaibhavsengar74@gmail.com</a></Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Nagpur, India</span>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/thevaibhavsengar" target="_blank"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://www.linkedin.com/in/thevaibhavsengar/" target="_blank"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute inset-0 rounded-full border border-cyan-200/10" />
          <div className="absolute inset-10 rounded-full border border-violet-300/10" />
          <div className="absolute inset-20 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20 bg-white/[0.08] shadow-glow backdrop-blur-xl">
            <BrainCircuit className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-cyan-200" />
          </div>
          {orbitItems.map((item, index) => (
            <motion.div key={item.label} className={"absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#071326]/[0.85] px-4 py-2 text-sm text-slate-100 shadow-panel backdrop-blur-xl " + item.className} animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}>
              {item.label}
            </motion.div>
          ))}
          <div className="absolute bottom-8 left-8 right-8 overflow-hidden rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-20 bg-cyan-300/10 blur-2xl animate-scan" />
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">model output</p>
            <p className="mt-2 font-display text-2xl text-white">92% DFU accuracy</p>
            <p className="mt-1 text-sm text-slate-300">Vision Transformer inference with clinical decision support UI.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

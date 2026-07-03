"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Canvas needs the browser (WebGL/window), so disable SSR for it
const Laptop3D = dynamic(() => import("@/components/laptop-3d").then((m) => m.Laptop3D), {
  ssr: false,
});

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
          <h1 className="text-balance font-inter text-xl font-semibold leading-[0.95] text-white sm:text-xl lg:text-6xl">
            Hey There! I am Vaibhav Sengar.
          </h1>
          <p className="mt-7 max-w-2xl text-md font-inter leading-8 text-slate-300 sm:text-md">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center sm:h-[520px]"
        >
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative h-full w-full">
            <Laptop3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
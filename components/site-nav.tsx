"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = ["About", "Skills", "Projects", "Experience", "Contact"];

export function SiteNav() {
  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#020714]/[0.70] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-9 lg:px-10">
        <a href="#home" className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-white">Vaibhav</a>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a key={item} href={"#" + item.toLowerCase()} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.08] hover:text-white">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="icon" variant="ghost" aria-label="GitHub"><a href="https://github.com/thevaibhavsengar" target="_blank"><Github className="h-4 w-4" /></a></Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn"><a href="https://www.linkedin.com/in/thevaibhavsengar/" target="_blank"><Linkedin className="h-4 w-4" /></a></Button>
          <Button asChild className="hidden sm:inline-flex"><a href="mailto:vaibhavsengar74@gmail.com"><Mail className="mr-2 h-4 w-4" /> Contact</a></Button>
        </div>
      </div>
    </motion.header>
  );
}

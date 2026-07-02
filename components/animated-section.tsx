"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedSection({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10", className)}
    >
      {children}
    </motion.section>
  );
}

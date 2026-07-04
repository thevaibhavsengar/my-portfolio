import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("liquid-glass rounded-lg border border-white/10 bg-white/[0.045] text-card-foreground shadow-panel backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-cyan-300/30 hover:bg-white/[0.065] hover:shadow-glow", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
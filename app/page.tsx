import { ArrowUpRight, BookOpen, BriefcaseBusiness, Calendar, CheckCircle2, GraduationCap, Mail, ServerCog, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteNav } from "@/components/site-nav";
import { techIcons } from "@/components/tech-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java"] },
  { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Flask", "RESTful APIs"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Streamlit"] },
  { group: "AI / Generative AI", items: ["RAG", "LLMs", "LangChain", "Hugging Face", "Prompt Engineering", "Semantic Search"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Vector Databases"] },
  { group: "DevOps & Tools", items: ["Docker", "GitHub", "Git", "Postman"] }
];

const projects = [
  {
    title: "DFU Detection System using Vision Transformer",
    type: "Deep Learning",
    summary: "A multimodal Diabetic Foot Ulcer detection system for wound image analysis, built to support early-stage clinical screening and hospital discovery.",
    metrics: ["92% accuracy", "91% precision", "93% sensitivity"],
    stack: ["PyTorch", "Vision Transformer", "FastAPI", "React", "OpenStreetMap", "Leaflet"],
    points: [
      "Compared ViT, CNN, and YOLO pipelines across imbalanced medical image data, with ViT producing the strongest sensitivity and precision.",
      "Built a sub-second inference endpoint and a React interface for predictions with location-based hospital suggestions."
    ]
  },
  {
    title: "AI-Powered Multilingual Customer Support RAG Agent",
    type: "Generative AI",
    summary: "An end-to-end RAG assistant that answers enterprise document questions with citation-backed, context-aware responses.",
    metrics: ["Citation-backed answers", "Semantic search", "Dockerized app"],
    stack: ["Python", "LangChain", "Gemini API", "FAISS", "FastAPI", "Streamlit", "Docker"],
    points: [
      "Implemented document ingestion with recursive chunking, embeddings, vector retrieval, prompt templates, and conversation memory.",
      "Designed a modular backend and Streamlit interface for PDF upload, conversational querying, and scalable query handling."
    ]
  },
  {
    title: "Internship Management System",
    type: "Full Stack",
    summary: "A role-aware management platform for interns and mentors, created during internship work at Info Origin Technologies.",
    metrics: ["10+ REST APIs", "RBAC security", "MVC architecture"],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Postman"],
    points: [
      "Created dedicated Intern and Mentor login flows with access control to protect sensitive records and dashboard actions.",
      "Tested API flows in Postman and structured the application for maintainability, reliability, and smoother data movement."
    ]
  }
];

const highlights = [
  { icon: ServerCog, label: "Full-stack systems", value: "React, Node.js, FastAPI, MySQL" },
  { icon: Sparkles, label: "AI specialization", value: "RAG agents, ViT models, Gemini workflows" },
  { icon: ShieldCheck, label: "Product thinking", value: "Secure RBAC, clean APIs, practical UX" }
];

const experienceHighlights = [
  { icon: ServerCog, label: "Stack Used", value: "React, Node.js, Express.js, MySQL" },
  { icon: ShieldCheck, label: "Security", value: "Secure, role-based access control" },
  { icon: CheckCircle2, label: "Delivered", value: "10+ REST APIs, MVC architecture" }
];

const educationHighlights = [
  { icon: BookOpen, label: "Degree", value: "B.Tech, Computer Science and Engineering" },
  { icon: Calendar, label: "Duration", value: "2021 - 2025" },
  { icon: GraduationCap, label: "Institution", value: "G.H. Raisoni College of Engineering" }
];

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <AnimatedSection id="about" className="section-glow section-glow-cyan pt-10">
        <SectionHeading eyebrow="About" title="A Bit About Me" copy="I am a Computer Science graduate with a strong full-stack foundation and a growing specialization in Generative AI and deep learning systems." />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="gradient-border"><CardContent className="p-7 sm:p-8"><p className="text-base leading-7 text-slate-300">I work best at the intersection of software engineering and AI: designing clean system architecture, shaping model pipelines, and shipping complete applications that turn complex ideas into usable products. My recent work spans medical image analysis, Retrieval-Augmented Generation, secure role-based dashboards, and API-first backend systems.</p></CardContent></Card>
          <div className="grid gap-5">{highlights.map((item) => <Card key={item.label} className="gradient-border"><CardContent className="flex items-start gap-4 p-5"><item.icon className="mt-1 h-5 w-5 text-cyan-300" /><div><p className="font-display text-base text-white">{item.label}</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.value}</p></div></CardContent></Card>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="skills" className="section-glow section-glow-violet">
        <SectionHeading eyebrow="Skills" title="Tools I Work With" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skills.map((skill) => <Card key={skill.group} className="gradient-border"><CardContent><h3 className="font-display text-lg text-white">{skill.group}</h3><div className="mt-5 flex flex-wrap gap-2">{skill.items.map((item) => { const Icon = techIcons[item]; return <span key={item} className="liquid-glass inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.10] hover:text-white">{Icon ? <Icon className="h-3.5 w-3.5 text-cyan-300" /> : null}{item}</span>; })}</div></CardContent></Card>)}</div>
      </AnimatedSection>
      <AnimatedSection id="projects" className="section-glow section-glow-emerald">
        <SectionHeading eyebrow="Projects" title="Things I&apos;ve Built" copy="Each project is framed around practical outcomes: accuracy, retrieval quality, secure access, and maintainable architecture." />
        <div className="grid gap-6">{projects.map((project) => <Card key={project.title} className="group gradient-border overflow-hidden"><CardContent className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm uppercase tracking-[0.28em] text-cyan-300/[0.80]">{project.type}</p><h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3><p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric} className="liquid-glass rounded-lg border border-cyan-200/10 bg-cyan-200/[0.08] px-4 py-3 text-sm text-cyan-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-cyan-200/[0.14]">{metric}</div>)}</div></div><div className="rounded-lg border border-white/10 bg-[#04101f] p-5"><div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">Project Description</span><ArrowUpRight className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><ul className="space-y-4">{project.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{point}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="liquid-glass cursor-default rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.14] hover:text-white">{tech}</span>)}</div></div></CardContent></Card>)}</div>
      </AnimatedSection>
      <AnimatedSection id="experience" className="section-glow section-glow-rose">
        <SectionHeading eyebrow="Experience" title="Where I&apos;ve Worked" />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="gradient-border"><CardContent className="p-7"><BriefcaseBusiness className="mb-5 h-6 w-6 text-cyan-300" /><p className="text-sm uppercase tracking-[0.28em] text-slate-500">Former Intern</p><h3 className="mt-3 font-display text-xl text-white">Info Origin Technologies Pvt Ltd</h3><p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">Built a full-stack internship management system with React, Node.js, Express.js, and MySQL. Delivered secure role-based access, scalable REST APIs, MVC structure, and reliable backend testing workflows.</p></CardContent></Card>
          <div className="grid gap-5">{experienceHighlights.map((item) => <Card key={item.label} className="gradient-border"><CardContent className="flex items-start gap-4 p-5"><item.icon className="mt-1 h-5 w-5 text-cyan-300" /><div><p className="font-display text-base text-white">{item.label}</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.value}</p></div></CardContent></Card>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="education" className="section-glow section-glow-cyan">
        <SectionHeading eyebrow="Education" title="What I Studied" />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="gradient-border"><CardContent className="p-7"><GraduationCap className="mb-5 h-6 w-6 text-cyan-300" /><p className="text-sm uppercase tracking-[0.28em] text-slate-500">Education</p><h3 className="mt-3 font-display text-xl text-white">B.Tech, Computer Science and Engineering</h3><p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">G.H. Raisoni College of Engineering<br />2021 - 2025</p></CardContent></Card>
          <div className="grid gap-5">{educationHighlights.map((item) => <Card key={item.label} className="gradient-border"><CardContent className="flex items-start gap-4 p-5"><item.icon className="mt-1 h-5 w-5 text-cyan-300" /><div><p className="font-display text-base text-white">{item.label}</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.value}</p></div></CardContent></Card>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection id="contact" className="section-glow section-glow-violet pb-12">
        <Card className="gradient-border overflow-hidden border-cyan-200/20 bg-cyan-200/[0.055]"><CardContent className="p-8 sm:p-12"><BookOpen className="mb-6 h-7 w-7 text-cyan-200" /><h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s Connect</h2><p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">I am open to full-time opportunities where I can build reliable software, learn fast, and contribute to teams solving meaningful technical problems.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild><a href="mailto:vaibhavsengar74@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Vaibhav</a></Button><Button asChild variant="outline"><a href="https://www.linkedin.com/in/thevaibhavsengar/" target="_blank">Connect on LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button></div></CardContent></Card>
      </AnimatedSection>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><p>Copyright 2026 Vaibhav Sengar. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.</p><p>Software Developer - AI and problem-solving.</p></footer>
    </main>
  );
}
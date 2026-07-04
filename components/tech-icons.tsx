import type { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiVercel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiDocker,
  SiPostman,
  SiGithub,
  SiGit,
  SiPytorch,
  SiGooglegemini,
  SiLangchain,
  SiPython,
  SiOpenjdk,
  SiFlask,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiStreamlit,
  SiHuggingface,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";

// Only technologies with an actual brand/logo icon are listed here.
// Skill labels that are concepts (e.g. "RESTful APIs", "Prompt Engineering") intentionally
// have no icon and just render as plain text chips.
export const techIcons: Record<string, IconType> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk, // no official "Java" mark in Simple Icons; OpenJDK is the closest brand icon
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  HTML5: SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  Streamlit: SiStreamlit,
  LangChain: SiLangchain,
  "Hugging Face": SiHuggingface,
  "Google Gemini API": SiGooglegemini,
  PyTorch: SiPytorch,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  GitHub: SiGithub,
  Git: SiGit,
  Postman: SiPostman,
  Vercel: SiVercel
};
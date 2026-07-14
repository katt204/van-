import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiDocker,
  SiElasticsearch,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const brandIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiNodedotjs,
  Express: SiNodedotjs,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  AWS: Cloud as IconType,
  Vercel: SiVercel,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "GitHub Actions": SiGithubactions,
  Terraform: SiTerraform,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  "OpenAI API": Sparkles as IconType,
  Python: SiPython,
};

export function getTechIcon(name: string): IconType {
  return brandIcons[name] ?? (Code2 as IconType);
}

export const skillCategoryIcons = {
  frontend: Layers,
  backend: Server,
  cloud: Cloud,
  devops: Workflow,
  databases: Database,
  ai: Brain,
} as const;

export const aiIcons = {
  sparkles: Sparkles,
  search: Brain,
  bot: Bot,
  cloud: Cloud,
} as const;

export const socialIcons = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
} as const;

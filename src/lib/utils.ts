import { type ClassValue, clsx } from "clsx";
import { unstable_noStore as noStore } from "next/cache";
import { type IconType } from "react-icons";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiCircleci,
  SiExpress,
  SiGithubactions,
  SiGoland,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export function getSkillIcon(skill: string): IconType | null {
  const icons: Record<string, IconType> = {
    React: FaReact,
    "Next.js": TbBrandNextjs,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    "Node.js": FaNodeJs,
    Linux: FaLinux,
    Git: FaGit,
    Express: SiExpress,
    NestJS: SiNestjs,
    Python: FaPython,
    Go: FaGolang,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    Java: FaJava,
    "Spring Boot": BiLogoSpringBoot,
    CircleCI: SiCircleci,
    "Gin-Gonic": SiGoland,
    "Go-Fiber": SiGoland,
    AWS: FaAws,
    Azure: VscAzure,
    "GitHub Actions": SiGithubactions,
    TailwindCSS: SiTailwindcss,
  };

  return icons[skill] || null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // {
  //   id: "portfolio",
  //   title: "Personal Portfolio",
  //   description:
  //     "Modern and minimalist portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design.",
  //   image: "/images/projects/portfolio.png",
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   liveUrl: "https://asifzulfiqar.pro",
  //   githubUrl: "https://github.com/asifzulfiqar8/portfolio",
  //   featured: true,
  // },
  {
    id: "ai-callcenter-platform",
    title: "TeloAI Dashboard",
    description:
      "An AI-powered outbound calling platform built on Vapi, enabling users to create campaigns, generate leads, and manage calls with real-time analytics.",
    image: "/images/teloai.png",
    tags: ["React", "TypeScript", "Zustand", "Node.js", "Vapi.ai",],
    githubUrl: "https://dashboard.teloai.app/",
    featured: true,
  },
  {
    id: "restroom",
    title: "Restroom Management System",
    description:
      "An IoT-powered platform where managers can add buildings, connect restroom sensors, and monitor real-time usage, alerts, and performance through a centralized dashboard.",
    image: "/images/restroom.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://restroom-next.vercel.app/",
  },
];

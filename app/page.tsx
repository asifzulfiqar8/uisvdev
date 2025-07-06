import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/sections/hero";
import { ProjectsSection } from "./components/sections/projects";
import { SkillsSection } from "./components/sections/skills";
import ContactSection from "./components/sections/contact";

// This enables Static Site Generation
export const dynamic = "force-static";
export const revalidate = false; // This ensures the page is fully static

// Static metadata for better SEO
export const metadata = {
  title: "Asif Zulfiqar - Software Engineer 👨🏻‍💻",
  description:
    "Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/sections/hero";
import { ProjectsSection } from "./components/sections/projects";
import { SkillsSection } from "./components/sections/skills";
import ContactSection from "./components/sections/contact";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Asif Zulfiqar - Software Engineer 👨🏻‍💻",
  description:
    "Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* SEO Text for crawlers */}
        <section className="sr-only">
          <h1>Asif Zulfiqar - Software Engineer 👨🏻‍💻</h1>
          <p>
            Explore the world of web development with Asif Zulfiqar, a
            passionate Software Engineer skilled in React.js, Next.js, Tailwind
            CSS, TypeScript, and building scalable backends with Node.js,
            Express, MongoDB, and PostgreSQL.
          </p>
        </section>

        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

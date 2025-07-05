import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./components/providers/root-provider";
import { SmoothScroll } from "./components/smooth-scroll";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif Zulfiqar - Software Engineer",
  description:
    "Hi, I'm Asif Zulfiqar, a passionate Software Engineer with expertise in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions.",
  keywords: [
    "Software Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "TanStack",
    "Node.js",
    "Express",
    "MongoDB",
    "WordPress",
    "Git/GitHub",
    "Full Stack Developer",
    "Web Development",
    "Frontend Developer",
  ],
  metadataBase: new URL("https://www.asifzulfiqar.pro"),
  openGraph: {
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    url: "https://www.asifzulfiqar.pro",
    siteName: "Asif Zulfiqar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/asif.png",
        width: 1200,
        height: 630,
        alt: "Asif Zulfiqar - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    images: ["/images/asif.png"],
    site: "@asifzulfiqar",
    creator: "@asifzulfiqar",
  },
  authors: [
    {
      name: "Asif Zulfiqar",
      url: "https://www.asifzulfiqar.pro",
    },
  ],
  alternates: {
    canonical: "https://www.asifzulfiqar.pro",
    types: {
      "application/x-github": "https://github.com/asifzulfiqar8",
      "application/x-linkedin": "https://www.linkedin.com/in/asifzulfiqar8/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${geist.className} antialiased min-h-screen bg-bgColor flex flex-col`}
      >
        <RootProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </RootProvider>
      </body>
    </html>
  );
}

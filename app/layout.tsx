import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./components/providers/root-provider";
import { SmoothScroll } from "./components/smooth-scroll";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif Zulfiqar - Software Engineer",
  description:
    "Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions.",
  metadataBase: new URL("https://asifzulfiqar.pro"),
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
  openGraph: {
    type: "website",
    url: "https://asifzulfiqar.pro",
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL.",
    siteName: "Asif Zulfiqar",
    images: [
      {
        url: "https://asifzulfiqar.pro/images/asif.png",
        width: 800,
        height: 800,
        alt: "Asif Zulfiqar",
      },
    ],
  },
  other: {
    "og:image:type": "image/png",
    "og:image:width": "800",
    "og:image:height": "800",
    "og:locale": "en_US",
    "og:site_name": "Asif Zulfiqar",
    "twitter:card": "summary_large_image",
    "twitter:image": "https://asifzulfiqar.pro/images/asif.png",
    "twitter:image:type": "image/png",
    "twitter:image:width": "800",
    "twitter:image:height": "800",
  },
  verification: {
    google: "google-site-verification",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
      <head>
        <title>Asif Zulfiqar - Software Engineer</title>

        {/* Standard Meta */}
        <meta
          name="description"
          content="Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions."
        />
        <meta
          name="keywords"
          content="Software Engineer, React.js, Next.js, TypeScript, TanStack, Node.js, Express, MongoDB, WordPress, Git/GitHub, Full Stack Developer, Web Development, Frontend Developer"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asifzulfiqar.pro" />
        <meta property="og:title" content="Asif Zulfiqar - Software Engineer" />
        <meta
          property="og:description"
          content="Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions."
        />
        <meta
          property="og:image"
          content="https://asifzulfiqar.pro/images/asif.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:site_name" content="Asif Zulfiqar" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Asif Zulfiqar - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore the world of web development with Asif Zulfiqar, a passionate Software Engineer skilled in React.js, Next.js, Tailwind CSS, and TypeScript, and experienced in building scalable backends with Node.js, Express, MongoDB, and PostgreSQL. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions."
        />
        <meta
          name="twitter:image"
          content="https://asifzulfiqar.pro/images/asif.png"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </head>
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

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./components/providers/root-provider";
import { SmoothScroll } from "./components/smooth-scroll";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://asifzulfiqar.pro"),
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
  openGraph: {
    type: "website",
    url: "https://asifzulfiqar.pro",
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Hi, I'm Asif Zulfiqar, a passionate Software Engineer with expertise in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript.",
    siteName: "Asif Zulfiqar",
    images: [
      {
        url: "/images/asif.png",
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
    "twitter:image": "/images/asif.png",
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

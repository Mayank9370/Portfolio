import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Self-hosted Inter font via next/font — eliminates external Google Fonts
 * request, prevents FOIT/FOUT, and enables automatic subsetting.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

/**
 * Next.js Metadata API — generates proper <head> tags for SEO,
 * Open Graph, Twitter cards, and more. Far superior to the old
 * manual <meta> approach in the Vite SPA.
 */
export const metadata: Metadata = {
  title: "Mayank Kumar | AI Full-Stack Developer & Software Engineer",
  description:
    "AI Full-Stack Developer & Software Engineer — React, Node.js, System Design, Docker, AWS, LangChain, and RAG. Building scalable full-stack applications and AI-powered solutions.",
  keywords: [
    "Mayank Kumar",
    "AI Full-Stack Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "System Design",
    "Docker",
    "AWS",
    "Redis",
    "LangChain",
    "RAG",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Mayank Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mayank Kumar | AI Full-Stack Developer & Software Engineer",
    description:
      "Building scalable full-stack applications, reliable backend systems, and AI-powered solutions. React, Node.js, System Design, Docker, AWS, LangChain.",
    siteName: "Mayank Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Kumar | AI Full-Stack Developer & Software Engineer",
    description:
      "AI Full-Stack Developer & Software Engineer building scalable systems and intelligent applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-zinc-400 bg-[#0B1120]">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayank Kumar",
              jobTitle: "AI Full-Stack Developer & Software Engineer",
              url: "https://mayank-kumar.dev",
              sameAs: [
                "https://github.com/Mayank9370",
                "https://www.linkedin.com/in/mayank-kumar-079b42302/",
              ],
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Next.js",
                "System Design",
                "Docker",
                "AWS",
                "LangChain",
                "AI Engineering",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

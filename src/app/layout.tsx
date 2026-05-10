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
  title: "Mayank Kumar | Full Stack Developer",
  description:
    "Full Stack Developer portfolio — MERN Stack, React, Node.js, TypeScript, System Design, and more. Building scalable and impactful web applications.",
  keywords: [
    "Mayank Kumar",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Mayank Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mayank Kumar | Full Stack Developer",
    description:
      "Full Stack Developer passionate about creating amazing digital experiences. MERN Stack, React, Node.js, TypeScript.",
    siteName: "Mayank Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Kumar | Full Stack Developer",
    description:
      "Full Stack Developer passionate about creating amazing digital experiences.",
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
              jobTitle: "Full Stack Developer",
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
                "Full Stack Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

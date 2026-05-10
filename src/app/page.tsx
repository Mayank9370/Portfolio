import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Certificates } from "@/sections/certificates";
import { Contact } from "@/sections/contact";

/**
 * Home page — composes all portfolio sections.
 *
 * Each section is a self-contained component with its own
 * data imports. The page itself is a Server Component,
 * while interactive sections opt into client rendering
 * individually via "use client" directives.
 *
 * This architecture gives us:
 * - Server-side rendering for instant FCP
 * - Minimal client-side JS (only interactive parts hydrate)
 * - Clean component boundaries
 * - Easy to add/remove/reorder sections
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

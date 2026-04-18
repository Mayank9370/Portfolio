import React, { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-fold sections for performance
const About = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/About')), 200)));
const Skills = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Skills')), 200)));
const Experience = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Experience')), 200)));
const Projects = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Projects')), 200)));
const Certificates = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Certificates')), 200)));
const Contact = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Contact')), 200)));
const Footer = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./components/Footer')), 200)));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
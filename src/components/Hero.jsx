import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import { personal } from '../data/personal';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const Hero = () => {
  const typedText = useTypingEffect(personal.roles, 80, 50, 2200);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={childVariants} className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div variants={childVariants} className="mb-6 h-8 sm:h-9">
          <span className="text-lg sm:text-xl text-gray-300 font-light">
            {typedText}
          </span>
          <span className="inline-block w-0.5 h-5 sm:h-6 bg-blue-400 ml-1 animate-pulse align-middle" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.subtitle}
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={childVariants}
          className="flex justify-center gap-8 sm:gap-12 mb-10"
        >
          {personal.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10"
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href={personal.resumeUrl}
            download="Mayank_Kumar_Resume.pdf"
            className="flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-7 py-3 rounded-xl font-medium hover:bg-white/5 hover:border-gray-600 transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={childVariants} className="flex justify-center gap-4">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gray-600" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
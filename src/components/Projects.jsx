import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

const ProjectCard = memo(({ project, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -5 }}
    className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300 ${
      isFeatured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
    }`}
  >
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ${
          isFeatured ? 'h-full min-h-[240px]' : 'h-48'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
          <Star size={12} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Category tag */}
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
        {project.category}
      </div>

      {/* Hover action buttons */}
      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={15} className="text-gray-700" />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Source code"
        >
          <Github size={15} className="text-gray-700" />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className={`p-5 ${isFeatured ? 'sm:p-6 flex flex-col justify-center' : ''}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className={`font-bold text-gray-900 ${isFeatured ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <span className="flex items-center gap-1 text-gray-400 text-xs">
          <Calendar size={12} />
          {project.date}
        </span>
      </div>

      <p className={`text-gray-500 mb-4 leading-relaxed ${isFeatured ? 'text-sm' : 'text-sm line-clamp-3'}`}>
        {project.description}
      </p>

      {/* Highlights for featured */}
      {isFeatured && project.highlights && (
        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
              <ArrowUpRight size={12} className="text-blue-500 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-md hover:shadow-purple-500/20 transition-all duration-200"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            project.liveUrl && project.liveUrl !== '#' ? 'flex-1' : 'flex-1'
          } text-center py-2 px-4 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all duration-200`}
        >
          Source Code
        </a>
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Projects that showcase my skills in building real-world applications
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isFeatured={project.featured && activeCategory === 'All'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

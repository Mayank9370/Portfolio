import React from 'react';

import { Code, Database, Globe, Wrench, Cpu } from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIcons = {
  'Frontend Development': Globe,
  'Backend Development': Database,
  Database: Database,
  'Tools & DevOps': Wrench,
  'Core CS': Cpu,
};

const categoryThemeColors = {
  'Frontend Development': 'bg-blue-500',
  'Backend Development': 'bg-emerald-500',
  Database: 'bg-purple-500',
  'Tools & DevOps': 'bg-orange-500',
  'Core CS': 'bg-indigo-500',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.title] || Code;
            const themeBg = categoryThemeColors[category.title] || 'bg-blue-500';

            return (
              <div
                key={category.title}
                className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${themeBg} p-3.5 rounded-full shadow-lg shadow-black/20`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-full bg-gray-800/80 text-gray-300 text-sm font-medium border border-gray-700/30 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

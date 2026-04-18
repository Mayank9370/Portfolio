import React from 'react';

import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Professional experience building production-grade web applications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-gray-50 shadow-md" />

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Briefcase size={18} className="text-blue-500 shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

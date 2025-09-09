import React from "react";
import { Code, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Context API",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Python", "Express.js", "Java"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Mongoose"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools & Others",
    icon: Code,
    skills: ["Git/GitHub", "Supabase", "AWS", "Postman"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-500 hover:scale-105 transform shadow-lg flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon + Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}
                    aria-hidden="true"
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills as badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

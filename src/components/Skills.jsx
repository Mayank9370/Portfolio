import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Context API', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 80 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 70 },
        { name: 'Express.js', level: 80 },
        { name: 'Java', level: 75 },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      icon: Smartphone,
      skills: [
        { name: 'MySql', level: 80 },
        { name: 'MongoDb', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Mongoose', level: 80 },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Others',
      icon: Code,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Supabase', level: 70 },
        { name: 'AWS', level: 60 },
        // { name: 'Figma', level: 85 },
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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
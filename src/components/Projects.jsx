import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
      {
      title: 'Heal Zone',
      description:
        'Developed a full-stack Doctor Appointment Booking System using React, Node.js, Express, and MongoDB, enabling patients to book and manage doctor consultations online.',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Express', 'Tailwind', 'MONGODB', 'Razorpay'],
      liveUrl: 'https://heal-zone.onrender.com',
      githubUrl: 'https://github.com/Mayank9370/Heal-Zone',
      date: '2025',
    },
    {
      title: 'Hirred',
      description:
        'Hirred is a full-stack job portal web app that lets users browse jobs, with secure login. Built using React (frontend) and Node.js/Express with MongoDB (backend), it offers admin and user functionality with a clean UI.',
      image:
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Express', 'Node', 'Supabase','Clerk','Shadcn'],
      liveUrl: 'https://hirred-6jbt.onrender.com',
      githubUrl: 'https://github.com/Mayank9370/Hirred',
      date: '2024',
    },
    {
      title: 'Nutrition Tracking Application',
      description:
        'Built a full-stack nutrition tracking platform with React.js, Node.js, Express.js, MongoDB, Supabase (PostgreSQL), and Socket.io, enabling users to log meals, track nutritional intake, and monitor progress in real time. Implemented authentication, interactive dashboards, and responsive design.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
      liveUrl: 'https://nutrition-tracking-app-frontend-eahv.onrender.com',
      githubUrl: 'https://github.com/Mayank9370/Nutrition-Tracking-App',
      date: '2025',
    },
    {
      title: 'PokeDex',
      description:
        'A dynamic and interactive Pokédex web application built with React, leveraging the PokéAPI to display detailed Pokémon information with search and filter functionality.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Axios', 'API', 'PokeDex App'],
      liveUrl: 'https://poke-dex-lovat-six.vercel.app/',
      githubUrl: 'https://github.com/Mayank9370/PokeDex',
      date: '2024',
    },
    {
      title: 'Coffee Website Application',
      description:
        'A visually appealing and fully responsive coffee shop website designed using pure HTML and CSS, showcasing menu items, featured brews, and elegant layouts.',
      image:
        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      liveUrl:
        'https://vercel.com/mayanks-projects-45458f5b/coffee-website',
      githubUrl: 'https://github.com/Mayank9370/Coffee-Website',
      date: '2023',
    },
    {
      title: 'Tic Tac',
      description:
        'Tic Tac App is a simple two-player Tic-Tac-Toe game built with React, featuring turn-based gameplay, win detection, and a responsive UI for fun and learning.',
      image:
        'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node', 'Context API'],
      liveUrl: 'https://tic-tac-three-mocha.vercel.app/',
      githubUrl: 'https://github.com/Mayank9370/Tic-Tac',
      date: '2024',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-50 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

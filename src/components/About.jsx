import React from 'react';
import { MapPin, Download } from 'lucide-react';
import image from '../assets/image.png'; // Adjust the path as needed


const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Proficient in JavaScript, React.js, Node.js, Express, MongoDB / PostgreSQL, and REST APIs. Experienced with modern frameworks like Next.js, Tailwind CSS, and tools like Git, and Postman.

              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
              Experienced with modern frameworks like Next.js, Tailwind CSS, and tools like Git, and Postman.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="text-blue-500" size={20} />
                  <span className="font-semibold text-gray-900">Location</span>
                </div>
                <p className="text-gray-600">Delhi, India</p>
              </div>
            </div> */}

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 transform flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl p-1">
              <img
                src={image}
                alt="Profile"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

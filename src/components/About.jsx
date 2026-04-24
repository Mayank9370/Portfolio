import React from "react";

import {
  MapPin,
  Download,
  GraduationCap,
  Sparkles,
  Code2,
  Server,
  BookOpen,
} from "lucide-react";
import image from "../assets/image.png";
import { personal } from "../data/personal";

const highlights = [
  { icon: Code2, text: "Full Stack Developer — MERN Stack" },
  { icon: Server, text: "Built scalable production apps (Resume Builder)" },
  { icon: BookOpen, text: "Strong in DSA & System Design" },
];

const infoCards = [
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: personal.education.degree,
    sub: personal.education.institution,
  },
  {
    icon: Sparkles,
    label: "Status",
    value: personal.availability,
  },
];

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personal.resumeUrl;
    link.download = "Mayank_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                What I Do
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                        <Icon size={18} className="text-blue-500" />
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-purple-500" />
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        {card.label}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">
                      {card.value}
                    </p>
                    {card.sub && (
                      <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 z-10 pointer-events-none" />
              <img
                src={image}
                alt="Mayank Kumar — Developer"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl py-4 px-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {personal.stats[1].value}
                </div>
                <div className="text-xs text-gray-500">
                  {personal.stats[1].label}
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

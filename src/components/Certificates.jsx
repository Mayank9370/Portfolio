import React, { memo } from 'react';

import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/certificates';

const CertificateCard = memo(({ cert }) => (
  <div
    className="bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1"
  >
    {/* Image */}
    <div className="relative h-28 overflow-hidden">
      <img
        src={cert.image}
        alt={cert.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent" />
      <div className="absolute top-3 left-3 p-2 bg-white/10 backdrop-blur-sm rounded-full">
        <Award className="text-white" size={16} />
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-base font-semibold text-white mb-1 line-clamp-2 leading-snug">
        {cert.title}
      </h3>
      <p className="text-blue-400 text-sm font-medium mb-2">{cert.issuer}</p>

      <div className="flex items-center text-gray-500 text-xs mb-3">
        <Calendar size={12} className="mr-1.5" />
        {cert.date}
      </div>

      {cert.credentialId && (
        <p className="text-gray-500 text-xs mb-3 truncate">
          <span className="font-medium text-gray-400">ID:</span> {cert.credentialId}
        </p>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cert.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-md hover:shadow-purple-500/20 transition-all duration-200"
      >
        <ExternalLink size={14} />
        Verify
      </a>
    </div>
  </div>
));

CertificateCard.displayName = 'CertificateCard';

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Certificates & Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Professional certifications validating my expertise and continuous learning
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
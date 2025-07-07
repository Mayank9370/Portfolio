import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Development',
      issuer: 'PW Skills',
      date: '2025',
      credentialId: 'e3fc0bb2-61de-4b8d-9612-178e0ab2c341',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://pwskills.com/learn/certificate/8a5d5415-09ff-4b04-a1ac-388eade2aa40/',
      skills: ['Web Developer', 'Full Stack Developer', 'MERN Stack', 'Scalability'],
    },
    {
      title: 'JAVA WITH DSA AND SYSTEM DESIGN 2.0',
      issuer: 'PW Skills',
      date: '2025',
      credentialId: ': b528bd59-9556-4b38-9441-f5ad3a0ae671',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://pwskills.com/learn/certificate/b528bd59-9556-4b38-9441-f5ad3a0ae671/',
      skills: ['Java', 'DSA', 'System Design'],
    },
    {
      title: 'Web Development-HTML CSS JAVASCRIPT',
      issuer: 'Softpro India',
      date: '2023',
      credentialId: '',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://drive.google.com/file/d/1J06rYpm429k88nJBd8uLgGFjkd0AtEXs/view',
      skills: ['HTML','CSS', 'JavaScript', 'Responsive Design'],
    },
    {
      title: 'Web Development-JSP Servlet MySql',
      issuer: 'CRC Training',
      date: '2024',
      credentialId: '',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://drive.google.com/file/d/1-9iD8l_kyCWyhVTT_S-tkfoeXLrZgSO7/view',
      skills: ['Java','JSP','Servlet' ,'Database Design', 'MySql', ],
    },
    {
      title: 'System Design',
      issuer: 'PW Skills',
      date: '2024',
      credentialId: 'e3fc0bb2-61de-4b8d-9612-178e0ab2c341',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://pwskills.com/learn/certificate/e3fc0bb2-61de-4b8d-9612-178e0ab2c341/',
      skills: ['System Design', 'Java', 'Networking', 'Security'],
    },
    {
      title: 'AKTU AI Tech Hackathon 2025 ',
      issuer: 'AKTU',
      date: '2025',
      credentialId: 'iA4004q29p38771uT4',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
      verifyUrl: 'https://www.guvi.in/share-certificate/iA4004q29p38771uT4',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Analysis', 'Network Security'],
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certificates & Credentials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 transform group"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Award className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
                
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  {cert.date}
                </div>

                <div className="text-gray-400 text-sm mb-4">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.verifyUrl}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 w-full justify-center"
                >
                  <ExternalLink size={16} />
                  <span>Verify Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
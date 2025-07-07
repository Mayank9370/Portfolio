import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form and notify user
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mayank701130@gmail.com',
      link: '',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7011300316',
      link: 'tel: 7011300316',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi,India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Mayank9370',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mayank-kumar-079b42302/',
      color: 'hover:text-blue-600',
    },
    // {
    //   icon: Twitter,
    //   name: 'Twitter',
    //   url: 'https://twitter.com',
    //   color: 'hover:text-blue-400',
    // },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or partnerships.
            Let's create something amazing together!
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div className="space-y-8">
            <div >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-200">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.title}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 ${social.color} hover:scale-110 transform`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Response</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I typically respond to messages within 24 hours. Whether you're looking to hire,
                collaborate, or just want to say hello, I'd love to hear from you!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
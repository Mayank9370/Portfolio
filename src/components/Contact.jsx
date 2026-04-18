import React, { useState } from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
} from 'lucide-react';
import { personal } from '../data/personal';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = personal.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      action: copyEmail,
      actionLabel: copied ? 'Copied!' : 'Copy',
      actionIcon: copied ? Check : Copy,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: personal.social.github,
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: personal.social.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            I'm always open to discussing new opportunities and creative projects.
            Let's build something amazing together!
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Main Contact Content Centerized */}
          <div
            className="w-full space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const Wrapper = info.href ? 'a' : 'div';
                const wrapperProps = info.href ? { href: info.href } : {};

                return (
                  <Wrapper
                    key={index}
                    {...wrapperProps}
                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/10">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 mb-4 break-all">
                      {info.value}
                    </div>
                    {info.action && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          info.action();
                        }}
                        className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
                      >
                        <info.actionIcon size={14} />
                        {info.actionLabel}
                      </button>
                    )}
                  </Wrapper>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
              {/* Quick Response */}
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100/50 text-center md:text-left">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Quick Response
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  I typically respond within 24 hours. Whether you're looking to hire,
                  collaborate, or just say hello — I'd love to hear from you!
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 text-gray-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
                        aria-label={social.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
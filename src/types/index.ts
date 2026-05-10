// ─── Portfolio Type Definitions ───────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  roles: string[];
  tagline: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  availability: string;
  social: {
    github: string;
    linkedin: string;
  };
  stats: Stat[];
  resumeUrl: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  date: string;
  category: string;
  featured: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
  skills: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

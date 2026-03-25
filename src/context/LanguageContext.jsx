import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Calculate years of experience dynamically from August 2023
const getYearsOfExperience = () => {
  const startDate = new Date(2023, 7, 1); // August 2023 (month is 0-indexed)
  const today = new Date();
  const years = ((today - startDate) / (365.25 * 24 * 60 * 60 * 1000)).toFixed(1);
  return years;
};

const getCurrentYear = () => new Date().getFullYear();

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'DevOps & Systems Engineer',
      subtitle: 'I build and operate production systems focused on automation, scalability, and zero-downtime deployments.\nI also work on backend development and application improvements, bridging the gap between code and infrastructure.',
      cta: 'Explore My Work',
    },
    about: {
      title: 'About Me',
      description: 'Specialist with formal role as Level 1 Technical Support, with practical experience in operating production environments and a strong focus on DevOps practices, automation, and systems administration. I work in managing Linux-based infrastructure, deploying and maintaining web applications, and resolving production incidents.',
      experience: 'I have an integral vision that connects development, infrastructure, and support, allowing me to diagnose complex problems and propose efficient, scalable, and secure solutions across the entire stack.',
    },
    skills: {
      title: 'Tech Stack',
      infrastructure: {
        name: 'Infrastructure & Cloud',
        items: ['Kubernetes', 'Docker', 'Linode', 'Linux Administration', 'Self-hosted', 'DigitalOcean'],
      },
      backend: {
        name: 'Backend & Frameworks',
        items: ['WordPress', 'Drupal', 'Django', 'Python', 'PHP', 'JAVA', 'C++', 'PostgreSQL', 'MySQL'],
      },
      devops: {
        name: 'DevOps & Automation',
        items: ['GitHub Actions', 'Bash Scripting', 'NGINX', 'Terraform', 'ArgoCD', 'Helm', 'SSL/TLS'],
      },
      languages: {
        name: 'Programming Languages',
        items: ['Python', 'Bash', 'Java', 'C++', 'PHP', 'JavaScript'],
      },
    },
    projects: {
      title: 'Key Projects',
      viewMore: 'View More',
      viewAll: 'View all repositories',
      project1: {
        name: 'GitHub Self-Hosted Runner (Docker)',
        description: 'Built and deployed a self-hosted GitHub Actions runner using Docker, enabling custom CI/CD execution environments and local workflow testing',
        tags: ['Docker', 'GitHub Actions', 'CI/CD', 'DevOps', 'Self-Hosted'],
        link: 'https://github.com/zer0-sh/gh-runner-selfhosted-docker',
      },
      project2: {
        name: 'RESTful API with Spring Boot',
        description: 'Designed and implemented a RESTful API using Spring Boot, featuring layered architecture, JPA-based persistence, and unit testing to ensure code quality',
        tags: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Development'],
        link: 'https://github.com/zer0-sh/crud-java'
      },
      project3: {
        name: 'K3s Dev Platform Lab (In progress)',
        description: 'Built a Kubernetes-based development platform using K3s, implementing GitOps with ArgoCD, and integrating observability with Prometheus, Grafana, and Loki to simulate a cloud-native environment for DevOps practices',
        tags: ['Kubernetes', 'K3s', 'ArgoCD', 'GitOps', 'Grafana', 'Prometheus', 'Loki', 'DevOps'],
        link: 'https://github.com/zer0-sh/k3s-lab'
      },
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let\'s work together. Connect with me through:',
      email: 'Email',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      copyright: `© ${getCurrentYear()} Steven Muñoz | ↄ Licensed under GPL v3`,
      madewith: 'Made with React & Tailwind CSS',
      yearsExp: `${getYearsOfExperience()} years experience`,
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      title: 'Especialista DevOps & Sistemas',
      subtitle: 'Construyo y opero sistemas en producción enfocados en automatización, escalabilidad y despliegues sin downtime.\nTambién trabajo en desarrollo backend y mejora continua de aplicaciones, conectando el desarrollo con la infraestructura.',
      cta: 'Explora mi trabajo',
    },
    about: {
      title: 'Sobre mí',
      description: 'Especialista de TI con rol formal de Soporte Técnico Nivel 1, con experiencia práctica en la operación de entornos productivos y un fuerte enfoque en prácticas DevOps, automatización y administración de sistemas. Trabajo en la gestión de infraestructura basada en Linux, despliegue y mantenimiento de aplicaciones web, así como en la resolución de incidentes en producción.',
      experience: 'Tengo una visión integral que conecta desarrollo, infraestructura y soporte, lo que me permite diagnosticar problemas complejos y proponer soluciones eficientes, escalables y seguras. Mi experiencia abarca desde soporte técnico hasta automatización de procesos, orquestación de contenedores y mantenimiento de plataformas en entornos reales.',
    },
    skills: {
      title: 'Stack Tecnológico',
      infrastructure: {
        name: 'Infraestructura & Cloud',
        items: ['Kubernetes', 'Docker', 'Linode', 'Administración Linux', 'Self-hosted', 'DigitalOcean'],
      },
      backend: {
        name: 'Backend & Frameworks',
        items: ['WordPress', 'Drupal', 'Django', 'Python', 'PHP', 'PostgreSQL', 'MySQL'],
      },
      devops: {
        name: 'DevOps & Automatización',
        items: ['GitHub Actions', 'Bash Scripting', 'NGINX', 'Terraform', 'ArgoCD', 'Helm', 'SSL/TLS'],
      },
      languages: {
        name: 'Lenguajes de Programación',
        items: ['Python', 'Bash', 'Java', 'C++', 'PHP', 'JavaScript'],
      },
    },
    projects: {
      title: 'Proyectos Principales',
      viewMore: 'Ver más',
      viewAll: 'Ver todos los repositorios',
      project1: {
        name: 'Runner Autohosteado de GitHub (Docker)',
        description: 'Construcción y despliegue de un runner autoalojado de GitHub Actions usando Docker, permitiendo entornos de ejecución personalizados y pruebas locales de flujos de trabajo',
        tags: ['Docker', 'GitHub Actions', 'CI/CD', 'DevOps', 'Self-Hosted'],
        link: 'https://github.com/zer0-sh/gh-runner-selfhosted-docker'
      },
      project2: {
        name: 'API RESTful con Spring Boot',
        description: 'Diseño e implementación de una API RESTful usando Spring Boot, con arquitectura en capas, persistencia basada en JPA y pruebas unitarias para asegurar la calidad del código',
        tags: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Development'],
        link: 'https://github.com/zer0-sh/crud-java'
      },
      project3: {
        name: 'K3s Dev Platform Lab (In progress)',
        description: 'Diseño e implementación de una plataforma cloud-native basada en Kubernetes con K3s, incorporando flujos GitOps con ArgoCD, monitoreo centralizado y logging, y despliegues automatizados de aplicaciones',
        tags: ['Kubernetes', 'K3s', 'ArgoCD', 'GitOps', 'Grafana', 'Prometheus', 'Loki', 'DevOps'],
        link: 'https://github.com/zer0-sh/k3s-lab'
      },
    },
    contact: {
      title: 'Contacto',
      description: 'Trabajemos juntos. Conecta conmigo a través de:',
      email: 'Correo',
      discord: 'Discord',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      copyright: `© ${getCurrentYear()} Steven Muñoz | ↄ Licensed under GPL v3`,
      madewith: 'Hecho con React & Tailwind CSS',
      yearsExp: `${getYearsOfExperience()} años de experiencia`,
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) || '';
  };

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://zer0-sh.github.io/',
  title: 'Zer0sh',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Johann M',
  role: 'Backend Dev - SysAdmin - Geek',
  description:
    "Hey everyone! I'm a software developer on a quest to become the ultimate code ninja, a gaming fanatic, and a Linux lover rolled into one! I live for tech and never back down from a challenge. I'm embarking on a covert mission to tap into my inner Diogenes and fully adopt the philosophy of cynicism in today's digital era, all while championing the cause of open-source software. Because in a world of proprietary solutions, I believe in the power of freedom, transparency, and community-driven innovation that comes with embracing the ethos of free software. I'm discovering my passion for DevOps and sysadmin, exploring the tools and technologies that allow me to automate, streamline, and enhance workflows in software development and IT operations.",
  resume: 'https://www.linkedin.com/in/steven-munozl/',
  social: {
    linkedin: 'https://www.linkedin.com/in/steven-munozl/',
    github: 'https://github.com/zer0-sh/',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '',
    description: 'GitHub Self-Hosted Runner con Docker!',
    stack: ['Docker', 'Bash', 'GitHub Actions'],
    sourceCode:
      'https://https://github.com/zer0-sh/gh-runner-selfhosted-docker?tab=readme-ov-file#-github-self-hosted-runner-en-docker.com',
  },
  {
    name: 'Cooming soon!',
    description:
      'In this section, I will showcase my projects. Stay tuned for updates!',
    stack: ['New!!!', 'Working'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'PostgreSQL',
  'Gnu/Linux',
  'Docker',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'CI/CD',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'steven.jm357@gmail.com',
};

export { header, about, projects, skills, contact };

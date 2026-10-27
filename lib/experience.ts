export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  confirmationNote?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: string;
  highlights: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'chadura-tech',
    role: 'Mobile Application Developer',
    company: 'Chadura Tech',
    location: 'Musiri / India',
    period: 'Apr 2026 – Present',
    type: 'Professional Mobile Engineering',
    description:
      'Engineer production Flutter mobile applications, managing full feature lifecycles from UI design to backend REST API consumption, secure session persistence, and multi-module business workflows.',
    responsibilities: [
      'Engineer production Flutter applications, managing full feature lifecycles from UI design to backend REST API consumption.',
      'Integrate secure RESTful APIs, JWT token-based authentication workflows, and persistent session storage.',
      'Collaborate with backend developers and project leads using Git and GitLab for branch management, code reviews, and issue resolution.',
      'Resolve platform-specific bugs and refactor UI components into modular, reusable widgets for consistent rendering across screen sizes.',
      'Implement business workflows, dynamic forms, and notification integrations across enterprise modules.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Provider',
      'RESTful APIs',
      'JWT Authentication',
      'Firebase (FCM)',
      'Git',
      'GitLab',
    ],
  },
  {
    id: 'coreverse',
    role: 'Flutter Developer Intern',
    company: 'Coreverse',
    location: 'Remote / On-site',
    period: 'Dec 2024 – Feb 2025',
    type: 'Mobile Engineering Internship',
    description:
      'Contributed to the DOCORE SaaS school management platform by constructing responsive client-side Flutter modules and administrative views backed by Firebase.',
    responsibilities: [
      'Built responsive mobile UI components in Flutter for the DOCORE SaaS school management platform.',
      'Assisted in implementing student attendance tracking and administrative record views backed by Firebase.',
      'Collaborated on widget component modularity and layout adaptability across Android device form factors.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'State Management',
      'Responsive UI',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'ksrct-it',
    degree: 'B.Tech',
    field: 'Information Technology',
    institution: 'K S Rangasamy College of Technology',
    location: 'Tiruchengode, Tamil Nadu, India',
    graduationYear: '2025',
    highlights: [
      'Specialized in Mobile Computing, Object-Oriented Software Design, and Relational Databases (MySQL, SQLite).',
      'Hands-on engineering projects focused on Flutter mobile development, RESTful API integration, and clean Provider architecture.',
      'Completed in 2025 with strong foundations in scalable mobile architecture and software engineering principles.',
    ],
  },
];

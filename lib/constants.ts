export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  heroRoles: string[];
  bio: string;
  location: string;
  education: {
    degree: string;
    field: string;
    year: string;
    institution: string;
  };
  socialLinks: {
    github: string;
    gitlab: string;
    linkedin: string; // Verified LinkedIn profile from Kevin T resume
    email: string;
  };
  resumeUrl: string;
  coreSkillsRow: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Kevin T',
  fullName: 'Kevin T',
  title: 'Flutter Developer | Mobile Application Developer',
  heroRoles: [
    'Flutter Developer',
    'Mobile App Developer',
    'Application Developer',
    'Software Developer',
  ],
  // EXACT Hero Bio as specified by master prompt
  bio: 'I build responsive, reliable mobile applications using Flutter and Dart, integrating APIs, authentication, and scalable state management to deliver practical solutions for real-world problems.',
  location: 'Trichy, Tamil Nadu, India',
  education: {
    degree: 'B.Tech',
    field: 'Information Technology',
    year: '2025',
    institution: 'K S Rangasamy College of Technology',
  },
  socialLinks: {
    github: 'https://github.com/kevinJoshva',
    gitlab: 'https://gitlab.com/kevinjesus2162004',
    linkedin: 'https://linkedin.com/in/kevin-t-59629227b/',
    email: 'kevinjoshva.dev@gmail.com',
  },
  resumeUrl: '/resume.pdf',
  // EXACT Compact Technology line: Flutter · Dart · REST APIs · Provider · Firebase
  coreSkillsRow: [
    'Flutter',
    'Dart',
    'REST APIs',
    'Provider',
    'Firebase',
  ],
};

export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Contact', href: '#contact' },
];

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Understand the Requirement',
    description: 'Break the feature into screens, states, data requirements, and expected behavior.',
    icon: 'Search',
    details: ['Screen hierarchy mapping', 'Data contract identification', 'Edge-case behavior analysis'],
  },
  {
    step: '02',
    title: 'Design the Application Structure',
    description: 'Organize UI components, models, services, and state management.',
    icon: 'Layout',
    details: ['Modular widget tree', 'Strongly-typed DTO models', 'Provider / ChangeNotifier bindings'],
  },
  {
    step: '03',
    title: 'Integrate Backend APIs',
    description: 'Connect endpoints, parse responses, handle loading states, and manage errors.',
    icon: 'Cpu',
    details: ['HTTP client & interceptors', 'JSON serialization & safety', 'JWT token storage & renewal'],
  },
  {
    step: '04',
    title: 'Implement and Debug',
    description: 'Build the feature, test application flows, and resolve issues.',
    icon: 'Bug',
    details: ['Responsive layout validation', 'Physical device testing', 'State synchronization fixes'],
  },
  {
    step: '05',
    title: 'Refine and Deliver',
    description: 'Verify behavior, review UI responsiveness, and prepare the application for release.',
    icon: 'CheckCircle2',
    details: ['Smooth animation & 60fps checks', 'Code review & refactoring', 'Release APK / App bundle build'],
  },
];

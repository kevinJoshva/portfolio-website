export interface SkillItem {
  name: string;
  description: string;
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'Smartphone' | 'Layers' | 'Server' | 'Flame' | 'Globe' | 'Wrench';
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Cross-platform mobile engineering with responsive widget hierarchies, smooth 60fps rendering, and clean separation of concerns.',
    iconName: 'Smartphone',
    skills: [
      {
        name: 'Flutter',
        description: 'Multi-screen mobile apps with native compilation, custom painters, and composable widget architecture.',
        isPrimary: true,
      },
      {
        name: 'Dart',
        description: 'Object-oriented programming, sound null-safety, asynchronous streams, and futures.',
        isPrimary: true,
      },
      {
        name: 'Responsive UI',
        description: 'Adaptive layouts across phone and tablet viewports with LayoutBuilder, MediaQuery, and flexible constraints.',
      },
      {
        name: 'Navigation & Screen Architecture',
        description: 'Declarative and imperative routing, deep route handling, argument passing, and stack management.',
      },
    ],
  },
  {
    id: 'state-management',
    title: 'State Management',
    description: 'Predictable, reactive application state architectures that decouple business logic from user interface presentation.',
    iconName: 'Layers',
    skills: [
      {
        name: 'Provider',
        description: 'ChangeNotifier, ChangeNotifierProvider, and Consumer widgets for reactive UI rebuilding.',
        isPrimary: true,
      },
      {
        name: 'Service-Provider-UI Architecture',
        description: 'Three-tier architecture isolating network callers, business state managers, and presentation layers.',
        isPrimary: true,
      },
      {
        name: 'Shared Application State',
        description: 'Global session data, user profiles, theme states, and multi-screen synchronized data stores.',
      },
    ],
  },
  {
    id: 'backend-integration',
    title: 'Backend Integration',
    description: 'Resilient networking layers connecting mobile clients with backend REST APIs and secure authentication flows.',
    iconName: 'Server',
    skills: [
      {
        name: 'REST APIs',
        description: 'HTTP client integration (GET, POST, PUT, DELETE) with headers, query params, and timeouts.',
        isPrimary: true,
      },
      {
        name: 'HTTP Requests & Interceptors',
        description: 'Centralized request/response interceptors for logging, bearer injection, and error trapping.',
      },
      {
        name: 'JSON Parsing & Serialization',
        description: 'Strongly-typed model classes, factory constructors (fromJson / toJson), and null-safe data mapping.',
      },
      {
        name: 'API Error Handling',
        description: 'Graceful handling of 4xx/5xx responses, connectivity loss, timeout fallbacks, and user feedback.',
      },
      {
        name: 'Authentication Flows',
        description: 'Email/password, OTP validation, registration workflows, session persistence, and logout teardown.',
      },
      {
        name: 'Access & Refresh Token Handling',
        description: 'Automated token refreshing via interceptors when access tokens expire without interrupting user session.',
      },
    ],
  },
  {
    id: 'firebase-device',
    title: 'Firebase & Device Features',
    description: 'Integration of cloud backend services and hardware device capabilities into client applications.',
    iconName: 'Flame',
    skills: [
      {
        name: 'Firebase Integrations',
        description: 'Firebase Core, Firebase Auth, and backend cloud service integration where implemented.',
      },
      {
        name: 'Firebase Cloud Messaging (FCM)',
        description: 'FCM token registration, push notification handling in foreground/background, and badge counts.',
      },
      {
        name: 'Secure Local Storage',
        description: 'Encrypted token and credentials storage using flutter_secure_storage and secure preferences.',
        isPrimary: true,
      },
      {
        name: 'Local Authentication',
        description: 'Biometric and PIN-based quick login flows utilizing device security APIs.',
      },
      {
        name: 'Location-Based Features',
        description: 'Geolocator integration for geofenced attendance clocking and proximity venue discovery.',
      },
    ],
  },
  {
    id: 'web-fundamentals',
    title: 'Web Fundamentals',
    description: 'Strong foundational web standards supporting cross-platform understanding and responsive design principles.',
    iconName: 'Globe',
    skills: [
      {
        name: 'HTML5',
        description: 'Semantic document structure, accessible element trees, and standards-compliant markup.',
      },
      {
        name: 'CSS3',
        description: 'Modern styling systems, Flexbox, CSS Grid, media queries, and transition animations.',
      },
      {
        name: 'JavaScript',
        description: 'ES6+ syntax, asynchronous promises, async/await, array manipulation, and DOM APIs.',
      },
      {
        name: 'React Fundamentals',
        description: 'Component lifecycles, React hooks (useState, useEffect), JSX, and virtual DOM concepts.',
      },
    ],
  },
  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    description: 'Data persistence, industry-standard version control, and production developer tooling.',
    iconName: 'Wrench',
    skills: [
      {
        name: 'MySQL',
        description: 'Relational database schema modeling, SQL queries, table joins, foreign keys, and indexing.',
      },
      {
        name: 'Git',
        description: 'Branch management, feature branch workflows, rebase, merge conflict resolution, and commit hygiene.',
        isPrimary: true,
      },
      {
        name: 'GitHub',
        description: 'Remote repositories, pull requests, code reviews, issues, and open-source collaboration.',
      },
      {
        name: 'GitLab',
        description: 'Enterprise repository collaboration, merge requests, issue tracking, and CI/CD pipelines.',
      },
      {
        name: 'VS Code & Android Studio',
        description: 'Primary IDEs with Flutter/Dart analysis tools, DevTools inspector, and hot-reload optimization.',
      },
      {
        name: 'Android Testing & Debugging Tools',
        description: 'ADB command line, Android logcat inspection, network profiling, and release APK signing.',
      },
    ],
  },
];

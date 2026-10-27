export interface ProjectFeature {
  text: string;
  isImplemented: boolean;
}

export interface ProjectArchitecture {
  statePattern: string;
  networkLayer: string;
  storage: string;
  securityNotice?: string;
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  ownerRole: string;
  verifiedTechnologies: string[];
  specificContributions: string[];
  keyFeatures: ProjectFeature[];
  isProfessionalWork: boolean;
  organization?: string;
  githubUrl?: string; // Configurable: populated only when public repository is verified
  gitlabUrl?: string; // Configurable: populated only when public repository is verified
  liveDemoUrl?: string; // Configurable: populated only when public demo is verified
  mockupType: 'invoice' | 'filing' | 'hrms' | 'turftime';
  accentColor: string;
  themeGradient: string;
  architecture: ProjectArchitecture;
  confidentialityNote?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'billcostro',
    title: 'BillCostro',
    category: 'Mobile Application',
    tagline: 'Practical mobile invoicing and commercial transaction workflow interface',
    overview:
      'A business-oriented mobile application project demonstrating Flutter application development, practical UI implementation, and structured data handling for managing commercial billing, transactions, and invoice items.',
    ownerRole: 'Mobile Application Developer',
    isProfessionalWork: true,
    organization: 'Commercial Mobile Application',
    verifiedTechnologies: ['Flutter', 'Dart', 'Provider', 'Django REST', 'Firebase (FCM)', 'SharedPreferences'],
    specificContributions: [
      'Built enterprise Flutter application for operational services including asset workflows, leave management, and ticketing.',
      'Integrated Django REST APIs via HTTP using Bearer/JWT token authentication and session persistence with SharedPreferences.',
      'Architected responsive screens and state management using Provider across multi-step requests and complex form validations.',
      'Implemented real-time push notifications using Firebase Cloud Messaging (FCM) along with secure in-app document upload and access.',
      'Defined strongly-typed data models and JSON serialization logic for line items and billing totals.',
    ],
    keyFeatures: [
      { text: 'Responsive transaction & invoice viewing screens', isImplemented: true },
      { text: 'Structured data models for billing line items and totals', isImplemented: true },
      { text: 'REST API integration for commercial data fetching', isImplemented: true },
      { text: 'Client-side input validation and error feedback states', isImplemented: true },
      { text: 'Advanced offline caching and background sync', isImplemented: false },
    ],
    mockupType: 'invoice',
    accentColor: '#4F46E5',
    themeGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    architecture: {
      statePattern: 'Provider (ChangeNotifier) for invoice line-item state and subtotal math',
      networkLayer: 'Decoupled HTTP service with timeout handling and JSON DTO parsing',
      storage: 'SharedPreferences for session persistence and user preferences',
      securityNotice: 'Client enterprise data protected. Screenshots represent illustrative mockups of UI patterns.',
      codeSnippet: {
        filename: 'invoice_model.dart',
        language: 'dart',
        code: `class InvoiceItem {
  final String id;
  final String description;
  final double quantity;
  final double unitPrice;

  InvoiceItem({
    required this.id,
    required this.description,
    required this.quantity,
    required this.unitPrice,
  });

  double get lineTotal => quantity * unitPrice;

  factory InvoiceItem.fromJson(Map<String, dynamic> json) {
    return InvoiceItem(
      id: json['id'] as String,
      description: json['description'] as String,
      quantity: (json['quantity'] as num).toDouble(),
      unitPrice: (json['unit_price'] as num).toDouble(),
    );
  }
}`,
      },
    },
    confidentialityNote: 'Developed as part of commercial mobile applications. Codebase is private/proprietary.',
  },
  {
    id: 'efiling360',
    title: 'eFiling360',
    category: 'Business & Compliance Mobile Application',
    tagline: 'Secure organizational document and statutory filing compliance interface',
    overview:
      'A Flutter mobile application connected to backend services for business-oriented workflows, organizational directory management, compliance tracking, and secure document operations.',
    ownerRole: 'Flutter Developer',
    isProfessionalWork: true,
    organization: 'Chadura Tech',
    verifiedTechnologies: [
      'Flutter',
      'Dart',
      'Provider',
      'REST APIs',
      'Firebase Cloud Messaging',
      'Secure Storage',
    ],
    specificContributions: [
      'Connected mobile interfaces to backend REST APIs using modular service classes.',
      'Built organization listing interface with dynamic directory navigation and search filters.',
      'Implemented application state management using Provider (ChangeNotifier / Consumer).',
      'Engineered authentication flows with secure token storage via flutter_secure_storage.',
      'Integrated Firebase Cloud Messaging (FCM) token registration for compliance push alerts.',
      'Implemented error handling states, shimmer loading skeletons, and session expiration traps.',
    ],
    keyFeatures: [
      { text: 'Organization listing and dynamic directory navigation', isImplemented: true },
      { text: 'REST API integration with structured service-layer architecture', isImplemented: true },
      { text: 'Provider-based state management for active organization profiles', isImplemented: true },
      { text: 'Authentication flows with secure token storage', isImplemented: true },
      { text: 'Firebase Cloud Messaging (FCM) token integration for alerts', isImplemented: true },
      { text: 'Multi-party document cryptographic signing', isImplemented: false },
    ],
    mockupType: 'filing',
    accentColor: '#06B6D4',
    themeGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    architecture: {
      statePattern: 'Provider architecture separating OrganizationProvider from UI widgets',
      networkLayer: 'Centralized API client with Bearer token injection and error handling',
      storage: 'flutter_secure_storage for auth tokens and user session data',
      securityNotice: 'Statutory compliance details and company credentials omitted for enterprise security.',
      codeSnippet: {
        filename: 'fcm_service.dart',
        language: 'dart',
        code: `class FCMNotificationService {
  final FirebaseMessaging _fcm = FirebaseMessaging.instance;

  Future<void> initializeFCM(String authToken) async {
    NotificationSettings settings = await _fcm.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      String? token = await _fcm.getToken();
      if (token != null) {
        await _registerDeviceTokenWithBackend(token, authToken);
      }
    }
  }
}`,
      },
    },
    confidentialityNote: 'Professional enterprise project for Chadura Tech. Private repository and proprietary APIs.',
  },
  {
    id: 'hrms-payrollpro',
    title: 'HRMS / PayrollPro',
    category: 'Human Resources Mobile Application',
    tagline: 'Employee self-service, daily attendance & confidential payroll portal',
    overview:
      'A comprehensive human resources mobile application built to streamline employee-facing workflows including attendance recording, leave management, break tracking, and secure payslip distribution.',
    ownerRole: 'Mobile Application Developer',
    isProfessionalWork: true,
    organization: 'Chadura Tech',
    verifiedTechnologies: ['Flutter', 'Dart', 'Provider', 'REST API', 'Location Services', 'PDF Viewer'],
    specificContributions: [
      'Implemented location-based geo-fenced attendance tracking allowing employees to clock in and out accurately.',
      'Built leave request submission and tracking modules with dynamic status updates via backend APIs.',
      'Integrated secure payslip and document management, including in-app PDF viewing and file storage workflows.',
      'Managed authentication lifecycles with token auto-refresh and protected route navigation.',
      'Engineered break management workflows tracking intervals and cumulative working hours.',
    ],
    keyFeatures: [
      { text: 'Employee attendance with clock-in and clock-out tracking', isImplemented: true },
      { text: 'Break management and interval recording', isImplemented: true },
      { text: 'Leave requests submission with categorical balance counts', isImplemented: true },
      { text: 'Payslip viewing interface and PDF sharing capability', isImplemented: true },
      { text: 'Location-based geo-fenced attendance verification hooks', isImplemented: true },
      { text: 'Backend REST API integration with token handling', isImplemented: true },
      { text: 'Automated biometric geofenced clocking', isImplemented: false },
    ],
    mockupType: 'hrms',
    accentColor: '#8B5CF6',
    themeGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    architecture: {
      statePattern: 'AttendanceProvider and LeaveProvider with reactive UI updates via Consumer',
      networkLayer: 'Authenticated REST API client with auto-refresh token capability',
      storage: 'Secure storage for employee credentials and cached offline profile',
      securityNotice: 'Private employee records, payroll numbers, and internal endpoints are strictly sanitized.',
      codeSnippet: {
        filename: 'attendance_notifier.dart',
        language: 'dart',
        code: `class AttendanceNotifier extends ChangeNotifier {
  final AttendanceService _service;
  bool _isClockedIn = false;
  DateTime? _clockInTime;

  bool get isClockedIn => _isClockedIn;
  DateTime? get clockInTime => _clockInTime;

  Future<void> punchAttendance({required double lat, required double lng}) async {
    final response = await _service.postPunch(lat: lat, lng: lng);
    if (response.isSuccess) {
      _isClockedIn = response.status == 'CLOCKED_IN';
      _clockInTime = response.timestamp;
      notifyListeners();
    }
  }
}`,
      },
    },
    confidentialityNote: 'Professional client application. Company-confidential information protected.',
  },
  {
    id: 'turftime',
    title: 'Turftime',
    category: 'Sports & Venue Booking Mobile Application',
    tagline: 'Sports venue discovery, court availability booking & slot reservation mobile client',
    // Exact description specified by user prompt:
    overview:
      'Turftime is a sports-focused mobile application project involving authentication, venue discovery, and mobile application workflows. The project showcases Flutter development, API integration, and structured state management.',
    ownerRole: 'Mobile Application Developer',
    isProfessionalWork: true,
    organization: 'Mobile Application Project',
    verifiedTechnologies: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'Secure Storage'],
    specificContributions: [
      'Developed sports venue discovery and court availability booking interfaces with interactive filtering.',
      'Handled end-to-end user authentication, venue detail rendering, and slot reservation API integration.',
      'Built access-token and refresh-token handling with auto-refresh on token expiration.',
      'Architected Provider-based state management for venue discovery, slot selection, and user sessions.',
      'Integrated venue REST API endpoints with paginated response handling and data-driven screens.',
      'Optimized widget tree rebuilding and modularized custom UI components for smooth transitions and performance.',
    ],
    keyFeatures: [
      { text: 'User registration and login flows with validation', isImplemented: true },
      { text: 'Access-token and refresh-token handling', isImplemented: true },
      { text: 'Sports venue listing with category filtering', isImplemented: true },
      { text: 'Venue API integration and paginated response handling', isImplemented: true },
      { text: 'Provider-based state management and data-driven mobile UI', isImplemented: true },
      { text: 'Integrated payment gateway checkout', isImplemented: false },
    ],
    mockupType: 'turftime',
    accentColor: '#10B981',
    themeGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    architecture: {
      statePattern: 'Provider-based state management for venues, booking selections, and user sessions',
      networkLayer: 'REST API client with token interceptor, pagination handling, and automated token renewal',
      storage: 'flutter_secure_storage for encrypted authentication tokens and local user preferences',
      securityNotice: 'Auth lifecycle protects user session tokens with proactive refresh logic.',
      codeSnippet: {
        filename: 'auth_interceptor.dart',
        language: 'dart',
        code: `class TokenInterceptor {
  final FlutterSecureStorage _storage = const FlutterSecureStorage();

  Future<String?> getValidAccessToken() async {
    final expiry = await _storage.read(key: 'token_expiry');
    if (_isExpired(expiry)) {
      return await _performTokenRefresh();
    }
    return await _storage.read(key: 'access_token');
  }

  Future<String?> _performTokenRefresh() async {
    final refreshToken = await _storage.read(key: 'refresh_token');
    final response = await http.post(
      Uri.parse('/api/v1/auth/refresh'),
      body: {'refresh_token': refreshToken},
    );
    return _handleNewTokens(response);
  }
}`,
      },
    },
    confidentialityNote: 'Sports venue mobile client showcasing authentication, venue discovery, and API integration.',
  },
];

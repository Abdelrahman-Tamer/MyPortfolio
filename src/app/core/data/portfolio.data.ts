import type { PortfolioData } from '../models/portfolio.models';

const liveDemoAction = {
  label: {
    en: 'Live Demo',
    ar: 'معاينة مباشرة',
  },
};

const githubAction = {
  label: {
    en: 'GitHub',
    ar: 'GitHub',
  },
};

export const portfolioData = {
  personal: {
    name: {
      en: 'Abdelrahman Emam',
      ar: 'عبدالرحمن إمام',
    },
    role: {
      en: 'Frontend Developer | Angular Developer',
      ar: 'مطور واجهات أمامية | Angular Developer',
    },
    location: {
      en: 'Cairo, Egypt',
      ar: 'القاهرة، مصر',
    },
    email: 'abdelrahmanacc84@gmail.com',
    phone: '+20 1122615864',
    resumeUrl: '/cv',
    resumePdfUrl: '/Abdelrahman-Emam-CV.pdf',
    resumeAvailable: true,
  },
  navLinks: [
    {
      id: 'home',
      label: {
        en: 'Home',
        ar: 'الرئيسية',
      },
      href: '/',
    },
    {
      id: 'about',
      label: {
        en: 'About',
        ar: 'عني',
      },
      href: '/about',
    },
    {
      id: 'services',
      label: {
        en: 'Services',
        ar: 'الخدمات',
      },
      href: '/services',
    },
    {
      id: 'projects',
      label: {
        en: 'Projects',
        ar: 'المشاريع',
      },
      href: '/projects',
    },
    {
      id: 'skills',
      label: {
        en: 'Skills',
        ar: 'المهارات',
      },
      href: '/skills',
    },
    {
      id: 'contact',
      label: {
        en: 'Contact',
        ar: 'تواصل',
      },
      href: '/contact',
    },
  ],
  hero: {
    badge: {
      en: 'Available for client projects',
      ar: 'متاح لمشاريع العملاء',
    },
    description: {
      en: 'I build fast, polished Angular interfaces for businesses that need reliable frontend work, clean UX, and API-connected workflows.',
      ar: 'أبني واجهات Angular سريعة ومصقولة للشركات التي تحتاج Frontend موثوقًا وتجربة استخدام واضحة وربطًا عمليًا بالبيانات.',
    },
    clientLine: {
      en: 'You can trust me with responsive UI, clear communication, and careful handling of private client work.',
      ar: 'يمكنك الاعتماد علي في واجهات متجاوبة، تواصل واضح، وتعامل محترم مع تفاصيل المشاريع الخاصة.',
    },
    primaryCta: {
      en: 'View Projects',
      ar: 'شاهد المشاريع',
    },
    secondaryCta: {
      en: 'Let’s Work Together',
      ar: 'لنبدأ العمل معًا',
    },
    scrollLabel: {
      en: 'Scroll to explore',
      ar: 'مرر للاستكشاف',
    },
  },
  featuredSkills: [
    'Angular',
    'TypeScript',
    'REST APIs',
    'Tailwind CSS',
    'Bootstrap',
    'Firebase',
    'JWT',
    'GitHub',
    'Postman',
    'Responsive Design',
  ],
  stats: [
    {
      id: 'real-client-project',
      label: {
        en: 'Live Client Work',
        ar: 'عمل عميل فعلي',
      },
      detail: {
        en: 'Production web apps with clean UX, fast flows, and maintainable frontend code.',
        ar: 'أنفذ تطبيقات ويب موثوقة بتجربة واضحة، أداء قوي، وكود قابل للتطوير.',
      },
    },
    {
      id: 'angular-experience',
      label: {
        en: 'Angular Experience',
        ar: 'خبرة Angular',
      },
      detail: {
        en: 'Angular SPAs with routing, auth flows, forms, and API integration.',
        ar: 'تطبيقات SPA تشمل Routing وتسجيل دخول ونماذج وربط APIs.',
      },
    },
    {
      id: 'frontend-projects',
      label: {
        en: '5+ Projects Shipped',
        ar: '5+ مشاريع منفذة',
      },
      detail: {
        en: 'E-commerce, healthcare, tourism, productivity tools, and landing pages.',
        ar: 'تجارة إلكترونية، رعاية صحية، سياحة، إنتاجية، وصفحات هبوط.',
      },
    },
    {
      id: 'bilingual-en-ar',
      label: {
        en: 'Bilingual EN/AR',
        ar: 'ثنائي اللغة EN/AR',
      },
      detail: {
        en: 'Responsive LTR and RTL interfaces for English and Arabic users.',
        ar: 'واجهات متجاوبة تدعم LTR و RTL للمستخدمين بالعربية والإنجليزية.',
      },
    },
  ],
  sectionHeadings: {
    about: {
      label: {
        en: 'About',
        ar: 'عني',
      },
    },
    services: {
      label: {
        en: 'Services',
        ar: 'الخدمات',
      },
      title: {
        en: 'What I offer',
        ar: 'ماذا أقدم؟',
      },
    },
    projects: {
      label: {
        en: 'Projects',
        ar: 'المشاريع',
      },
      title: {
        en: 'Selected work',
        ar: 'أعمال مختارة',
      },
    },
    moreProjects: {
      label: {
        en: 'More Projects',
        ar: 'أعمال مبكرة',
      },
      title: {
        en: 'Smaller practice projects focused on JavaScript, landing pages, and responsive layouts.',
        ar: 'مشاريع تدريبية أصغر تظهر بشكل ثانوي بعد أعمال العميل ومشاريع Angular.',
      },
    },
    testimonials: {
      label: {
        en: 'Testimonials',
        ar: 'آراء العملاء',
      },
      title: {
        en: 'Client feedback will be added only after permission.',
        ar: 'سيتم إضافة آراء العملاء بعد الحصول على إذن فقط.',
      },
    },
    skills: {
      label: {
        en: 'Skills',
        ar: 'المهارات',
      },
      title: {
        en: 'Technologies & tools',
        ar: 'التقنيات والأدوات',
      },
    },
    process: {
      label: {
        en: 'How I Work',
        ar: 'طريقة عملي',
      },
      title: {
        en: 'A clear workflow from first message to delivery.',
        ar: 'خطوات واضحة من أول تواصل حتى التسليم.',
      },
    },
    contact: {
      label: {
        en: 'Contact',
        ar: 'تواصل',
      },
    },
  },
  about: {
    heading: {
      en: 'A frontend developer clients can rely on for polished Angular interfaces.',
      ar: 'مطور واجهات يمكن للعملاء الاعتماد عليه لبناء واجهات Angular مصقولة.',
    },
    paragraph: {
      en: 'I am Abdelrahman Emam, a Cairo-based Frontend and Angular Developer. I build responsive web interfaces, dashboards, and API-connected product experiences. Clients enjoy working with me because I keep the UI clear, communicate honestly, and respect project details and confidentiality.',
      ar: 'أنا عبدالرحمن إمام، مطور Frontend و Angular من القاهرة. أبني واجهات ويب متجاوبة ولوحات تحكم وتجارب منتجات مرتبطة بالبيانات. يفضل العملاء العمل معي لأنني أحافظ على وضوح الواجهة، أتواصل بصدق، وأحترم تفاصيل وسرية المشروع.',
    },
  },
  timeline: [
    {
      id: 'route-academy',
      title: {
        en: 'Frontend Developer Trainee',
        ar: 'متدرب Frontend Developer',
      },
      place: {
        en: 'Route Academy, Cairo, Egypt',
        ar: 'Route Academy، القاهرة، مصر',
      },
      date: {
        en: 'Mar 2025 – Jul 2026',
        ar: 'مارس 2025 – يوليو 2026',
      },
      description: {
        en: 'Delivered 4+ frontend projects including Angular e-commerce and healthcare platform.',
        ar: 'نفذت 4+ مشاريع Frontend منها متجر إلكتروني Angular ومنصة رعاية صحية.',
      },
    },
    {
      id: 'cib-egypt',
      title: {
        en: 'Internship Trainee',
        ar: 'متدرب',
      },
      place: {
        en: 'CIB Egypt, Cairo, Egypt',
        ar: 'CIB Egypt، القاهرة، مصر',
      },
      date: {
        en: 'Sep 2025',
        ar: 'سبتمبر 2025',
      },
      description: {
        en: 'Completed a structured internship at Commercial International Bank (CIB), gaining exposure to banking operations, documentation workflows, collaboration practices, and professional business processes.',
        ar: 'أكملت تدريبًا منظمًا في Commercial International Bank (CIB) مع التعرف على عمليات مصرفية، سير عمل التوثيق، أساليب التعاون، والإجراءات المهنية.',
      },
    },
    {
      id: 'elevvo-pathways',
      title: {
        en: 'Frontend Web Developer',
        ar: 'Frontend Web Developer',
      },
      place: {
        en: 'Elevvo Pathways, Cairo, Egypt',
        ar: 'Elevvo Pathways، القاهرة، مصر',
      },
      date: {
        en: 'Aug 2025 – Sep 2025',
        ar: 'أغسطس 2025 – سبتمبر 2025',
      },
      description: {
        en: 'Built 5+ responsive pages and improved UI consistency before delivery.',
        ar: 'نفذت 5+ صفحات متجاوبة وحسّنت تناسق الواجهات قبل التسليم.',
      },
    },
    {
      id: 'eelu',
      title: {
        en: 'B.Sc. Computer and Information Technology',
        ar: 'بكالوريوس الحاسبات وتكنولوجيا المعلومات',
      },
      place: {
        en: 'Egyptian E-Learning University, Cairo, Egypt',
        ar: 'الجامعة المصرية للتعلم الإلكتروني، القاهرة، مصر',
      },
      date: {
        en: 'Feb 2022 – Jul 2026',
        ar: 'فبراير 2022 – يوليو 2026',
      },
      description: {
        en: 'Relevant coursework: Web Development, Data Structures, Algorithms, Operating Systems, Databases.',
        ar: 'مواد مرتبطة: Web Development، Data Structures، Algorithms، Operating Systems، Databases.',
      },
    },
  ],
  services: [
    {
      id: 'responsive-interfaces',
      title: {
        en: 'Responsive Interfaces',
        ar: 'واجهات متجاوبة',
      },
      description: {
        en: 'Pages that work smoothly across mobile, tablet, and desktop.',
        ar: 'صفحات تعمل بسلاسة على الموبايل والتابلت والديسكتوب.',
      },
    },
    {
      id: 'angular-development',
      title: {
        en: 'Angular Development',
        ar: 'تطوير Angular',
      },
      description: {
        en: 'Building structured Angular components, routing, guards, and reactive forms.',
        ar: 'بناء Components منظمة، Routing، Guards، و Reactive Forms.',
      },
    },
    {
      id: 'api-integration',
      title: {
        en: 'API Integration',
        ar: 'ربط APIs',
      },
      description: {
        en: 'Connecting frontend pages to REST APIs and handling dynamic data.',
        ar: 'ربط الواجهات بـ REST APIs والتعامل مع البيانات الديناميكية.',
      },
    },
    {
      id: 'backend-api-contribution',
      title: {
        en: 'Backend API Contribution',
        ar: 'مساهمة Backend APIs',
      },
      description: {
        en: 'Contributing to backend APIs, admin features, reports, and authentication-related flows.',
        ar: 'المساهمة في Backend APIs، صفحات Admin، التقارير، و Authentication flows.',
      },
    },
  ],
  featuredProjects: [
    {
      id: 'receipta-pro',
      imageUrl: '/images/rec.webp',
      imageAlt: {
        en: 'Receipta Pro receipt management dashboard preview',
        ar: 'معاينة لوحة إدارة إيصالات Receipta Pro',
      },
      imagePosition: 'center top',
      title: {
        en: 'Receipta Pro - Electronic Receipt Management System',
        ar: 'Receipta Pro - نظام إدارة إيصالات إلكتروني',
      },
      type: {
        en: 'Confidential Client Project - Waad Rent Cars',
        ar: 'مشروع عميل خاص - Waad Rent Cars',
      },
      description: {
        en: 'Private Arabic receipt management system built for a real car rental client.',
        ar: 'نظام عربي خاص لإدارة الإيصالات تم تنفيذه لعميل حقيقي في مجال تأجير السيارات.',
      },
      problem: {
        en: 'The client needed searchable Arabic receipts, payment status tracking, and printable documents in one place.',
        ar: 'كان العميل يحتاج إدارة إيصالات عربية قابلة للبحث مع تتبع حالة الدفع وإمكانية الطباعة من مكان واحد.',
      },
      solution: {
        en: 'Built create, edit, delete, search, Firebase cloud sync, offline fallback, and PDF export workflows.',
        ar: 'نفذت إنشاء وتعديل وحذف وبحث ومزامنة Firebase وتخزين Offline وتصدير PDF.',
      },
      outcome: {
        en: 'The business can manage receipts through a focused internal tool while the code and demo remain private.',
        ar: 'أصبح لدى النشاط أداة داخلية مركزة لإدارة الإيصالات مع الحفاظ على خصوصية الكود والعرض.',
      },
      tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Firebase', 'jsPDF', 'html2canvas'],
      actions: [
        {
          label: {
            en: 'Private Demo',
            ar: 'عرض خاص',
          },
          isPrivate: true,
        },
        {
          label: {
            en: 'Private Code',
            ar: 'كود خاص',
          },
          isPrivate: true,
        },
      ],
      note: {
        en: 'Code and demo are private due to client confidentiality.',
        ar: 'الكود والعرض خاصان بسبب سرية مشروع العميل.',
      },
    },
    {
      id: 'nileguide',
      imageUrl: '/images/nileguide.webp',
      imageAlt: {
        en: 'NileGuide tourism platform interface preview',
        ar: 'معاينة واجهة منصة NileGuide السياحية',
      },
      imagePosition: 'center top',
      title: {
        en: 'NileGuide Tourism Platform',
        ar: 'NileGuide - منصة سياحية',
      },
      type: {
        en: 'Graduation Project | Backend & Frontend Contributor',
        ar: 'مشروع تخرج | مساهم في Backend و Frontend',
      },
      description: {
        en: 'Graduation project for tourism activity discovery and trip planning, presented accurately as contributor work.',
        ar: 'مشروع تخرج لاكتشاف الأنشطة السياحية وتنظيم الرحلات، مع توضيح دوري كمساهم في المشروع.',
      },
      problem: {
        en: 'The team needed connected discovery, planning, profile, reporting, and admin-related flows.',
        ar: 'احتاج الفريق إلى ربط تدفقات الاكتشاف والتخطيط والبروفايل والتقارير وصفحات مرتبطة بالإدارة.',
      },
      solution: {
        en: 'Contributed backend APIs and frontend features across auth, activity management, reports, profile integration, and API wiring.',
        ar: 'ساهمت في Backend APIs وأجزاء Frontend تشمل Auth وإدارة الأنشطة والتقارير وربط البروفايل والواجهات بالـ APIs.',
      },
      outcome: {
        en: 'Demonstrates practical API collaboration and Angular integration without presenting the project as solo work.',
        ar: 'يوضح خبرة عملية في التعاون على APIs وربط Angular بدون تقديم المشروع كعمل فردي.',
      },
      roleLine: {
        en: 'My role: Backend APIs, Reports, Admin features, Auth flow, API integration.',
        ar: 'دوري: Backend APIs، التقارير، صفحات Admin، Auth flow، وربط APIs.',
      },
      tags: [
        'ASP.NET Core',
        'Entity Framework',
        'SQL Server',
        'Angular',
        'TypeScript',
        'REST APIs',
        'JWT',
      ],
      actions: [
        {
          label: {
            en: 'View Project',
            ar: 'عرض المشروع',
          },
          url: 'https://www.nileguide.online/',
        },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/NileGuideAngular.git' },
      ],
    },
    {
      id: 'freshcart',
      imageUrl: '/images/freshcart.webp',
      imageAlt: {
        en: 'FreshCart e-commerce product page preview',
        ar: 'معاينة صفحة منتجات FreshCart',
      },
      imagePosition: 'center top',
      title: {
        en: 'FreshCart E-commerce',
        ar: 'FreshCart - متجر إلكتروني',
      },
      type: {
        en: 'Route Academy Final Project',
        ar: 'مشروع Route Academy النهائي',
      },
      description: {
        en: 'Full Angular e-commerce SPA with a complete shopping flow.',
        ar: 'تطبيق متجر إلكتروني Angular SPA يحتوي على تدفق شراء كامل.',
      },
      problem: {
        en: 'The project needed product discovery, protected user flows, cart actions, and checkout in one SPA.',
        ar: 'احتاج المشروع إلى اكتشاف المنتجات وتدفقات مستخدم محمية وإجراءات السلة والدفع داخل SPA واحد.',
      },
      solution: {
        en: 'Built catalog, search, filters, cart, wishlist, checkout, JWT authentication, route guards, Stripe, and lazy loading.',
        ar: 'نفذت عرض المنتجات والبحث والفلاتر والسلة والمفضلة والدفع و JWT Authentication و Route Guards و Stripe و Lazy Loading.',
      },
      outcome: {
        en: 'Shows production-style Angular structure across a realistic e-commerce experience.',
        ar: 'يعرض هيكلة Angular قريبة من المشاريع العملية داخل تجربة تجارة إلكترونية واقعية.',
      },
      tags: ['Angular 22', 'TypeScript', 'Bootstrap 5', 'REST APIs', 'JWT', 'Stripe'],
      actions: [
        { ...liveDemoAction, url: 'https://fresh-cart-roan-seven.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/FreshCart.git' },
      ],
    },
  ],
  moreProjects: [
    {
      id: 'doccure',
      imageUrl: '/images/docc.webp',
      imageAlt: {
        en: 'Doccure healthcare appointment platform preview',
        ar: 'معاينة منصة مواعيد Doccure الطبية',
      },
      imagePosition: 'center top',
      title: {
        en: 'Doccure - Healthcare Appointment Platform',
        ar: 'Doccure - منصة مواعيد طبية',
      },
      type: {
        en: 'NTI Final Project',
        ar: 'مشروع NTI النهائي',
      },
      description: {
        en: 'Responsive healthcare interface with dashboard, profile, appointments, and patient records.',
        ar: 'واجهة طبية متجاوبة تشمل Dashboard وبروفايل ومواعيد وسجلات مرضى.',
      },
      problem: {
        en: 'The UI needed several healthcare pages to stay organized and usable across screen sizes.',
        ar: 'احتاجت الواجهة إلى تنظيم عدة صفحات طبية بشكل واضح وقابل للاستخدام على مختلف الشاشات.',
      },
      solution: {
        en: 'Built doctor dashboard, doctor profile, settings, appointment sections, patient records, Bootstrap layouts, and carousel UI.',
        ar: 'نفذت Doctor Dashboard و Doctor Profile و Settings وأقسام المواعيد وسجلات المرضى وتصميم Bootstrap و Carousel.',
      },
      outcome: {
        en: 'Demonstrates structured multi-page implementation and responsive UI discipline.',
        ar: 'يوضح القدرة على تنفيذ واجهات متعددة الصفحات بتنسيق متجاوب ومنظم.',
      },
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery', 'Font Awesome'],
      actions: [
        { ...liveDemoAction, url: 'https://doccure-psi.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/Doccure.git' },
      ],
    },
    {
      id: 'bookmarker',
      imageUrl: '/images/bookmark.webp',
      imageAlt: {
        en: 'Bookmarker link manager interface preview',
        ar: 'معاينة واجهة مدير روابط Bookmarker',
      },
      imagePosition: 'center top',
      title: {
        en: 'Bookmarker',
        ar: 'Bookmarker - مدير روابط',
      },
      description: {
        en: 'CRUD bookmark manager with create, update, delete, search, RegEx URL validation, localStorage persistence, and responsive UI.',
        ar: 'تطبيق لإدارة الروابط يشمل إضافة وتعديل وحذف وبحث، RegEx URL Validation، حفظ البيانات في localStorage، وواجهة متجاوبة.',
      },
      tags: ['JavaScript ES6+', 'Bootstrap 5', 'RegEx', 'localStorage'],
      actions: [
        { ...liveDemoAction, url: 'https://bookmark-manager-em.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/Bookmark-Manager.git' },
      ],
    },
    {
      id: 'luxestate',
      imageUrl: '/images/luxestate.webp',
      imageAlt: {
        en: 'Luxestate real estate landing page preview',
        ar: 'معاينة صفحة عقارات Luxestate',
      },
      imagePosition: 'center top',
      title: {
        en: 'Luxestate - Real Estate Landing Page',
        ar: 'Luxestate - صفحة عقارات',
      },
      description: {
        en: 'Responsive real estate landing page with sections for property discovery, services, agents, and contact information.',
        ar: 'صفحة عقارات متجاوبة تضم أقسام عرض العقارات، الخدمات، الوكلاء، ومعلومات التواصل.',
      },
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design'],
      actions: [
        { ...liveDemoAction, url: 'https://luxestate-em.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/luxestate.git' },
      ],
    },
    {
      id: 'axit',
      imageUrl: '/images/axit.webp',
      imageAlt: {
        en: 'Axit landing page template preview',
        ar: 'معاينة صفحة هبوط Axit',
      },
      imagePosition: 'center top',
      title: {
        en: 'Axit - Landing Page Template',
        ar: 'Axit - صفحة هبوط',
      },
      description: {
        en: 'Responsive multi-section landing page with hero form, features, pricing, reviews, and contact sections.',
        ar: 'صفحة هبوط متجاوبة متعددة الأقسام تشمل Hero Form، Features، Pricing، Reviews، و Contact.',
      },
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design'],
      actions: [
        { ...liveDemoAction, url: 'https://axit-rose.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/Axit-Task.git' },
      ],
    },
  ],
  testimonials: [],
  skills: [
    {
      id: 'frontend',
      title: {
        en: 'Frontend',
        ar: 'الواجهة الأمامية',
      },
      items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'Angular', 'RxJS'],
    },
    {
      id: 'angular-ecosystem',
      title: {
        en: 'Angular Ecosystem',
        ar: 'بيئة Angular',
      },
      items: ['Angular Router', 'Guards', 'Reactive Forms', 'HttpClient', 'Components', 'SPA'],
    },
    {
      id: 'styling',
      title: {
        en: 'Styling',
        ar: 'التنسيق',
      },
      items: ['Bootstrap 5', 'Tailwind CSS', 'Responsive Design', 'Flexbox', 'CSS Grid'],
    },
    {
      id: 'apis-data',
      title: {
        en: 'APIs & Data',
        ar: 'APIs والبيانات',
      },
      items: ['REST APIs', 'JSON', 'JWT Authentication', 'Firebase Firestore', 'SQL Server'],
    },
    {
      id: 'tools',
      title: {
        en: 'Tools',
        ar: 'الأدوات',
      },
      items: ['Git', 'GitHub', 'npm', 'Postman', 'Chrome DevTools', 'localStorage', 'RegEx'],
    },
  ],
  processSteps: [
    {
      id: 'discovery',
      title: {
        en: 'Discovery',
        ar: 'الاكتشاف',
      },
      description: {
        en: 'Clarify the goal, audience, scope, existing assets, and what success should look like.',
        ar: 'توضيح الهدف والجمهور والنطاق والمواد المتاحة وشكل النجاح المطلوب.',
      },
    },
    {
      id: 'planning-ui',
      title: {
        en: 'Planning & UI',
        ar: 'التخطيط والواجهة',
      },
      description: {
        en: 'Map the key screens, content structure, responsive behavior, and interaction states before building.',
        ar: 'تحديد الشاشات الأساسية وهيكل المحتوى والاستجابة وحالات التفاعل قبل التنفيذ.',
      },
    },
    {
      id: 'development',
      title: {
        en: 'Development',
        ar: 'التطوير',
      },
      description: {
        en: 'Build clean, accessible frontend code with clear components, real data flows, and careful testing.',
        ar: 'تنفيذ كود Frontend نظيف وسهل الوصول بمكونات واضحة وتدفقات بيانات حقيقية واختبار دقيق.',
      },
    },
    {
      id: 'delivery-support',
      title: {
        en: 'Delivery & Support',
        ar: 'التسليم والدعم',
      },
      description: {
        en: 'Review the finished work, handle feedback, document what matters, and support final handoff.',
        ar: 'مراجعة العمل النهائي وتنفيذ الملاحظات وتوثيق المهم ودعم التسليم النهائي.',
      },
    },
  ],
  certifications: [
    {
      id: 'nti-web-designer',
      title: {
        en: 'NTI Web Designer',
        ar: 'NTI Web Designer',
      },
    },
    {
      id: 'alx-aice',
      title: {
        en: 'ALX AiCE - AI Career Essentials',
        ar: 'ALX AiCE - AI Career Essentials',
      },
    },
  ],
  contact: {
    heading: {
      en: 'Let’s start your project together.',
      ar: 'لنبدأ مشروعك معًا.',
    },
    paragraph: {
      en: 'Got a website idea or need a professional frontend interface? Send me your project details and I will reply within 24 hours.',
      ar: 'عندك فكرة موقع أو محتاج واجهة Frontend احترافية؟ ابعت تفاصيل مشروعك وسأرد خلال 24 ساعة.',
    },
    email: 'abdelrahmanacc84@gmail.com',
    phone: '+20 1122615864',
    location: {
      en: 'Cairo, Egypt',
      ar: 'القاهرة، مصر',
    },
    formLabels: {
      name: {
        en: 'Name',
        ar: 'الاسم',
      },
      email: {
        en: 'Email',
        ar: 'البريد الإلكتروني',
      },
      message: {
        en: 'Message',
        ar: 'الرسالة',
      },
      submit: {
        en: 'Send project details',
        ar: 'ابعت تفاصيل مشروعك',
      },
    },
  },
  footer: {
    text: {
      en: 'Built with Angular',
      ar: 'تم بناء الموقع باستخدام Angular',
    },
    copyright: {
      en: '© 2026 Abdelrahman Emam. All rights reserved.',
      ar: '© 2026 عبدالرحمن إمام. جميع الحقوق محفوظة.',
    },
    socialLinks: [
      {
        id: 'linkedin',
        label: {
          en: 'LinkedIn',
          ar: 'LinkedIn',
        },
        href: 'https://www.linkedin.com/in/abd-el-rahman-emam',
      },
      {
        id: 'github',
        label: {
          en: 'GitHub',
          ar: 'GitHub',
        },
        href: 'https://github.com/Abdelrahman-Tamer',
      },
      {
        id: 'email',
        label: {
          en: 'Email',
          ar: 'Email',
        },
        href: 'mailto:abdelrahmanacc84@gmail.com',
      },
    ],
  },
} as const satisfies PortfolioData;

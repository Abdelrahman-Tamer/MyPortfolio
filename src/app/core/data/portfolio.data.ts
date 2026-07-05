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
      en: 'Available for work',
      ar: 'متاح للعمل',
    },
    description: {
      en: 'I build responsive, user-focused web interfaces using Angular, TypeScript, REST APIs, and modern frontend tools.',
      ar: 'أبني واجهات ويب متجاوبة وسهلة الاستخدام باستخدام Angular و TypeScript وربط REST APIs وأدوات الويب الحديثة.',
    },
    clientLine: {
      en: 'I help turn ideas into clean, fast, and responsive web interfaces that work smoothly across all devices.',
      ar: 'أساعدك في تحويل فكرتك إلى واجهة ويب نظيفة، سريعة، ومتجاوبة تعمل بسلاسة على كل الأجهزة.',
    },
    primaryCta: {
      en: 'View Projects',
      ar: 'شاهد المشاريع',
    },
    secondaryCta: {
      en: 'Message me now',
      ar: 'راسلني الآن',
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
      id: 'frontend-projects',
      label: {
        en: '5+ Frontend Projects',
        ar: '5+ مشاريع Frontend',
      },
    },
    {
      id: 'projects-completed',
      label: {
        en: '7+ Projects Completed',
        ar: '7+ مشاريع مكتملة',
      },
    },
    {
      id: 'angular-rest-apis',
      label: {
        en: 'Angular + REST APIs',
        ar: 'Angular + REST APIs',
      },
    },
    {
      id: 'responsive-ui',
      label: {
        en: 'Responsive UI Focus',
        ar: 'واجهات متجاوبة',
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
        en: 'More projects',
        ar: 'مشاريع إضافية',
      },
      title: {
        en: 'Smaller practice projects focused on JavaScript, landing pages, and responsive layouts.',
        ar: 'مشاريع تدريبية أصغر تركز على JavaScript، صفحات الهبوط، والتصميم المتجاوب.',
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
    contact: {
      label: {
        en: 'Contact',
        ar: 'تواصل',
      },
    },
  },
  about: {
    heading: {
      en: 'A frontend developer focused on clean UI and real-world integration.',
      ar: 'مطور واجهات يركز على الواجهات النظيفة والربط الحقيقي.',
    },
    paragraph: {
      en: 'Frontend Developer specializing in Angular and responsive web development. Experienced in building SPAs with authentication, REST API integration, route guards, reactive forms, Firebase Firestore, and client-side storage. Delivered projects across e-commerce, healthcare, productivity, landing pages, and a live client receipt management system. Also contributed to backend APIs and admin-related features in a graduation project using ASP.NET Core.',
      ar: 'مطور واجهات أمامية متخصص في Angular وتطوير الواجهات المتجاوبة. لدي خبرة في بناء Single Page Applications تشمل تسجيل الدخول، ربط REST APIs، Route Guards، Reactive Forms، Firebase Firestore، والتخزين داخل المتصفح. نفذت مشاريع في التجارة الإلكترونية، الرعاية الصحية، الإنتاجية، صفحات الهبوط، بالإضافة إلى مشروع عميل فعلي لإدارة الإيصالات. كما ساهمت في تطوير Backend APIs وبعض أجزاء Admin في مشروع التخرج باستخدام ASP.NET Core.',
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
      id: 'freshcart',
      imageUrl: '/images/freshcart.png',
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
        en: 'Full Angular e-commerce SPA with product catalog, search, category and brand filters, cart, wishlist, checkout flow, JWT authentication, route guards, Stripe payment, and lazy loading.',
        ar: 'تطبيق متجر إلكتروني Angular SPA يشمل عرض المنتجات، البحث، فلاتر التصنيفات والماركات، السلة، المفضلة، الدفع، JWT Authentication، Route Guards، Stripe، و Lazy Loading.',
      },
      tags: ['Angular 17', 'TypeScript', 'Bootstrap 5', 'REST APIs', 'JWT', 'Stripe'],
      actions: [
        { ...liveDemoAction, url: 'https://fresh-cart-roan-seven.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/FreshCart.git' },
      ],
    },
    {
      id: 'receipta-pro',
      imageUrl: '/images/rec.png',
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
        en: 'Arabic receipt management system for Waad Rent Cars with create, edit, delete, search, payment status tracking, Firebase cloud sync, offline fallback, and PDF export.',
        ar: 'نظام عربي لإدارة إيصالات Waad Rent Cars يشمل إنشاء وتعديل وحذف وبحث وتتبع حالة الدفع، مع مزامنة Firebase، تخزين Offline، وتصدير PDF.',
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
      imageUrl: '/images/nileguide.png',
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
        en: 'Graduation project for tourism activity discovery and trip planning. Contributed to backend APIs and frontend features including authentication flow, activity management, reports, profile integration, admin-related pages, and API integration.',
        ar: 'مشروع تخرج لاكتشاف الأنشطة السياحية وتنظيم الرحلات. ساهمت في تطوير Backend APIs وبعض أجزاء Frontend مثل Authentication flow، إدارة الأنشطة، التقارير، ربط البروفايل، صفحات مرتبطة بالـ Admin، وربط الواجهات بالـ APIs.',
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
        { ...liveDemoAction, url: 'https://www.nileguide.online/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/NileGuideAngular.git' },
      ],
    },
  ],
  moreProjects: [
    {
      id: 'doccure',
      imageUrl: '/images/docc.png',
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
        en: 'Multi-page healthcare platform with doctor dashboard, doctor profile, profile settings, appointment sections, patient records, responsive Bootstrap layouts, and Slick Carousel.',
        ar: 'منصة طبية متعددة الصفحات تشمل Doctor Dashboard، Doctor Profile، Profile Settings، أقسام المواعيد، سجلات المرضى، تصميم متجاوب Bootstrap، و Slick Carousel.',
      },
      tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery', 'Font Awesome'],
      actions: [
        { ...liveDemoAction, url: 'https://doccure-psi.vercel.app/' },
        { ...githubAction, url: 'https://github.com/Abdelrahman-Tamer/Doccure.git' },
      ],
    },
    {
      id: 'bookmarker',
      imageUrl: '/images/bookmark.png',
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
      imageUrl: '/images/luxestate.png',
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
      imageUrl: '/images/axit.png',
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
  certifications: [
    {
      id: 'nti-web-designer',
      title: {
        en: 'NTI Web Designer - Score 100%',
        ar: 'NTI Web Designer - درجة 100%',
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
      en: 'Got a website idea or need a professional frontend interface? Send me your project details and I’ll get back to you as soon as possible.',
      ar: 'عندك فكرة موقع أو محتاج واجهة Frontend احترافية؟ ابعتلي تفاصيل مشروعك وهرد عليك في أقرب وقت.',
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
        href: 'https://linkedin.com/in/abd-elrahman-emam',
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

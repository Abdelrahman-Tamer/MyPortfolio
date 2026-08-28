import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioData } from '../../core/data/portfolio.data';
import { GITHUB_URL, LINKEDIN_URL } from '../../core/seo/seo.config';
import { LanguageService } from '../../core/services/language.service';
import { IconComponent, IconName } from '../../shared/components/icon/icon';

interface CvLink {
  readonly label: string;
  readonly href: string;
}

interface CvIconLink extends CvLink {
  readonly icon: IconName;
}

interface CvSkillLine {
  readonly category: string;
  readonly items: string;
}

interface CvEntry {
  readonly title: string;
  readonly meta: string;
  readonly date?: string;
  readonly dateTime?: string;
  readonly bullets: readonly string[];
  readonly links?: readonly CvLink[];
}

@Component({
  selector: 'app-cv',
  imports: [IconComponent, RouterLink],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  private readonly languageService = inject(LanguageService);

  readonly isArabic = computed(() => this.languageService.isArabic());
  readonly direction = computed(() => this.languageService.direction());

  readonly backLabel = computed(() => (this.isArabic() ? 'الرئيسية' : 'Back'));
  readonly backAriaLabel = computed(() =>
    this.isArabic() ? 'رجوع إلى الصفحة الرئيسية' : 'Back to portfolio home',
  );

  readonly downloadPdfLabel = computed(() => (this.isArabic() ? 'تحميل PDF' : 'Download PDF'));
  readonly downloadPdfAriaLabel = computed(() =>
    this.isArabic() ? 'تحميل السيرة الذاتية بصيغة PDF' : 'Download CV in PDF format',
  );

  readonly languageToggleText = computed(() => (this.isArabic() ? 'English' : 'العربية'));
  readonly languageToggleAriaLabel = computed(() =>
    this.isArabic() ? 'Switch language to English' : 'التحويل إلى العربية',
  );

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  readonly resumePdfUrl = portfolioData.personal.resumePdfUrl;
  readonly emailHref = `mailto:${portfolioData.personal.email}`;
  readonly phoneHref = `tel:${portfolioData.personal.phone.replaceAll(' ', '')}`;

  readonly name = computed(() =>
    this.isArabic() ? portfolioData.personal.name.ar : portfolioData.personal.name.en,
  );
  readonly role = computed(() =>
    this.isArabic() ? portfolioData.personal.role.ar : portfolioData.personal.role.en,
  );

  readonly socialLinks: readonly CvIconLink[] = [
    { label: 'Portfolio Website', href: '/', icon: 'globe' },
    { label: 'LinkedIn', href: LINKEDIN_URL, icon: 'linkedin' },
    { label: 'GitHub', href: GITHUB_URL, icon: 'github' },
  ];

  readonly contactLines = computed<readonly CvLink[]>(() => [
    {
      label: this.isArabic() ? portfolioData.personal.location.ar : portfolioData.personal.location.en,
      href: '',
    },
    { label: portfolioData.personal.phone, href: this.phoneHref },
    { label: portfolioData.personal.email, href: this.emailHref },
  ]);

  readonly headings = computed(() =>
    this.isArabic()
      ? {
          summary: 'الملخص المهني',
          skills: 'المهارات التقنية',
          projects: 'المشاريع',
          experience: 'الخبرات والتدريب',
          education: 'التعليم',
          certifications: 'الشهادات',
          softSkills: 'المهارات الشخصية',
        }
      : {
          summary: 'Professional Summary',
          skills: 'Technical Skills',
          projects: 'Projects',
          experience: 'Experience',
          education: 'Education',
          certifications: 'Certifications',
          softSkills: 'Soft Skills',
        },
  );

  readonly summary = computed(() =>
    this.isArabic()
      ? 'مطور واجهات أمامية متخصص في Angular وتطوير الويب المتجاوب. خبرة في بناء وتطوير تطبيقات SPA مع أنظمة التوثيق، وربط REST APIs، و Route Guards، و Reactive Forms. نفذت أكثر من 5 مشاريع في مجالات التجارة الإلكترونية، الرعاية الصحية، وأدوات الإنتاجية، تشمل مشروعاً حقيقياً لعميل. أسعى للمساهمة ضمن فرق تطوير برمجية محترفة في أدوار Frontend / Angular.'
      : 'Frontend Developer specializing in Angular and responsive web development. Experienced in building SPAs with authentication, REST API integration, route guards, and reactive forms. Delivered 5+ projects across e-commerce, healthcare, and productivity domains, including a live client project. Seeking a frontend or Angular role to contribute to real-world product teams.',
  );

  readonly skillLines = computed<readonly CvSkillLine[]>(() =>
    this.isArabic()
      ? [
          {
            category: 'Frontend',
            items: 'HTML5, CSS3, JavaScript ES6+, TypeScript, Angular, RxJS, Angular Router, Guards, Reactive Forms',
          },
          {
            category: 'Styling',
            items: 'Bootstrap 5, Tailwind CSS, Responsive Design, Flexbox, CSS Grid',
          },
          {
            category: 'API & Data',
            items: 'REST APIs, JSON, JWT Authentication, HttpClient, Firebase Firestore',
          },
          {
            category: 'Browser & Storage',
            items: 'DOM, RegEx, Form Validation, localStorage',
          },
          {
            category: 'Tools',
            items: 'Git, GitHub, npm, Chrome DevTools, Postman',
          },
        ]
      : [
          {
            category: 'Frontend',
            items: 'HTML5, CSS3, JavaScript ES6+, TypeScript, Angular, RxJS, Angular Router, Guards, Reactive Forms',
          },
          {
            category: 'Styling',
            items: 'Bootstrap 5, Tailwind CSS, Responsive Design, Flexbox, CSS Grid',
          },
          {
            category: 'API & Data',
            items: 'REST APIs, JSON, JWT Authentication, HttpClient, Firebase Firestore',
          },
          {
            category: 'Browser & Storage',
            items: 'DOM, RegEx, Form Validation, localStorage',
          },
          {
            category: 'Tools',
            items: 'Git, GitHub, npm, Chrome DevTools, Postman',
          },
        ],
  );

  readonly projects = computed<readonly CvEntry[]>(() =>
    this.isArabic()
      ? [
          {
            title: 'Receipta Pro - نظام إدارة إيصالات إلكتروني',
            meta: 'HTML5, CSS3, JavaScript ES6+, Firebase, jsPDF | مشروع عميل خاص - Waad Rent Cars | الكود والعرض خاصان',
            bullets: [
              'بناء نظام عربي متكامل لإدارة الإيصالات لشركة Waad Rent Cars، يشمل إنشاء وتعديل وحذف وبحث وتتبع حالة الدفع.',
              'ربط Firebase Firestore للمزامنة السحابية اللحظية بين الأجهزة بمفتاح شركة مميز، مع دعم التخزين المحلي Offline.',
              'تطوير ميزة تصدير وطباعة الإيصالات بصيغة PDF عالية الجودة باستخدام jsPDF و html2canvas.',
              'تسليم واجهة متجاوبة بالكامل باتجاه RTL تدعم الهواتف والتابلت والديسكتوب.',
            ],
          },
          {
            title: 'Milano Travel - موقع لعرض الفنادق وتسهيل التواصل عبر واتساب',
            meta: 'Angular 22, TypeScript, SSR & Prerender, Technical SEO | موقع لمكتب سياحي | الكود خاص',
            links: [
              { label: 'Live Demo', href: 'https://milanotravel.vercel.app/' },
            ],
            bullets: [
              'بناء موقع ويب عربي متكامل لمكتب سياحي لعرض الفنادق الفاخرة في مصر مع معمارية Angular 22 SSR و Prerendering لأكثر من 38 مساراً.',
              'تطوير بحث وفلاتر للفنادق حسب الموقع والمميزات مع درج تفاعلي من 3 خطوات لتجهيز وإرسال طلب الحجز إلى واتساب المكتب مباشرة.',
              'تحسين شامل لسرعة التصفح ومعالجة الصور المتجاوبة ومعايير الـ Technical SEO و JSON-LD.',
            ],
          },
          {
            title: 'NileGuide - منصة سياحية',
            meta: 'ASP.NET Core, Angular, SQL Server | مشروع تخرج (مساهم Backend و Frontend)',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/NileGuideAngular.git' },
              { label: 'Live Demo', href: 'https://www.nileguide.online/' },
            ],
            bullets: [
              'المساهمة في بناء منصة سياحية لاكتشاف الأنشطة وتخطيط الرحلات وربط واجهات Angular بـ REST APIs.',
              'تطوير ميزات المصادقة وإدارة الأنشطة والتقارير ولوحات التحكم.',
            ],
          },
          {
            title: 'FreshCart - متجر إلكتروني',
            meta: 'Angular 22, TypeScript, Bootstrap 5 | مشروع Route Academy النهائي',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/FreshCart.git' },
              { label: 'Live Demo', href: 'https://fresh-cart-roan-seven.vercel.app/' },
            ],
            bullets: [
              'بناء تطبيق متجر إلكتروني Angular SPA متكامل يشمل كتالوج المنتجات، البحث، الفلاتر، السلة، المفضلة، وتدفق الدفع.',
              'ربط REST APIs للمنتجات والطلبات وتطبيق JWT Authentication مع Route Guards لحماية المسارات.',
              'دمج تدفق دفع Stripe مع معالجة الحالات وإعادة حساب إجمالي السلة فورياً.',
              'تطبيق Lazy Loading لموديولات الميزات لتقليل حجم الحزمة المبدئي وتسريع التحميل.',
            ],
          },
          {
            title: 'Bookmarker - مدير الروابط',
            meta: 'JavaScript ES6+, Bootstrap 5 | Route Academy',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Bookmark-Manager.git' },
              { label: 'Live Demo', href: 'https://bookmark-manager-em.vercel.app/' },
            ],
            bullets: [
              'بناء تطبيق CRUD متكامل لإدارة الروابط والمفضلة مع التحقق من صحة عناوين URL باستخدام RegEx.',
              'حفظ البيانات واستمرارها عبر الجلسات باستخدام localStorage مع واجهة متجاوبة.',
            ],
          },
          {
            title: 'Doccure - منصة مواعيد طبية',
            meta: 'HTML5, CSS3, Bootstrap 5, jQuery, Font Awesome | مشروع NTI النهائي',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Doccure.git' },
              { label: 'Live Demo', href: 'https://doccure-psi.vercel.app/' },
            ],
            bullets: [
              'بناء منصة طبية متعددة الصفحات تشمل Doctor Dashboard، Doctor Profile، و Profile Settings.',
              'تنسيق الواجهات المتجاوبة باستخدام Bootstrap 5 grid و Slick Carousel لعرض الأطباء المميزين.',
              'تصميم واجهة لوحة تحكم منظمة لإدارة المواعيد وسجلات المرضى.',
            ],
          },
          {
            title: 'Luxestate - صفحة عقارات',
            meta: 'HTML5, CSS3, Bootstrap 5',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/luxestate.git' },
              { label: 'Live Demo', href: 'https://luxestate-em.vercel.app/' },
            ],
            bullets: [
              'بناء صفحة هبوط عقارية متجاوبة بأقسام منظمة لاكتشاف العقارات والخدمات والوكلاء والتواصل.',
              'تطبيق أنماط واجهة مستخدم قابلة لإعادة الاستخدام مع تباعد متجاوب للهواتف.',
            ],
          },
        ]
      : [
          {
            title: 'Receipta Pro - Electronic Receipt Management System',
            meta: 'HTML5, CSS3, JavaScript ES6+, Firebase, jsPDF | Confidential Client Project - Waad Rent Cars | Code & Demo Private',
            bullets: [
              'Built a full Arabic receipt management system for Waad Rent Cars, covering create, edit, delete, search, and payment status tracking.',
              'Integrated Firebase Firestore for real-time cloud sync across devices using a unique company key, with localStorage offline fallback.',
              'Implemented PDF export using jsPDF and html2canvas for high-quality printable receipts.',
              'Delivered a fully responsive RTL UI supporting mobile, tablet, and desktop.',
            ],
          },
          {
            title: 'Milano Travel - Hotel Showcase & WhatsApp Enquiry Platform',
            meta: 'Angular 22, TypeScript, SSR & Prerender, Technical SEO | Travel Agency Platform | Private Code',
            links: [
              { label: 'Live Demo', href: 'https://milanotravel.vercel.app/' },
            ],
            bullets: [
              'Engineered an Arabic-first hotel showcase platform for a travel agency using Angular 22 SSR with full static prerendering across 38+ routes.',
              'Built fast hotel search and location filters with an interactive 3-step enquiry drawer formatting requests directly to the agency WhatsApp.',
              'Optimized responsive image delivery and implemented technical JSON-LD SEO schemas with zero layout shift.',
            ],
          },
          {
            title: 'NileGuide Tourism Platform',
            meta: 'ASP.NET Core, Angular, SQL Server | Graduation Project (Contributor)',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/NileGuideAngular.git' },
              { label: 'Live Demo', href: 'https://www.nileguide.online/' },
            ],
            bullets: [
              'Contributed to building a tourism trip planning platform, implementing backend REST APIs and Angular UI integration.',
              'Implemented user authentication, admin reporting flows, and dynamic activity booking views.',
            ],
          },
          {
            title: 'FreshCart E-commerce',
            meta: 'Angular 22, TypeScript, Bootstrap 5 | Route Academy Final Project',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/FreshCart.git' },
              { label: 'Live Demo', href: 'https://fresh-cart-roan-seven.vercel.app/' },
            ],
            bullets: [
              'Built a full-featured Angular SPA with product catalog, search, category/brand filters, cart, wishlist, and checkout flow.',
              'Integrated REST APIs for products, cart, and orders; implemented JWT authentication with Angular route guards.',
              'Integrated Stripe payment flow with success/failure state handling and real-time cart total recalculation.',
              'Applied lazy loading for feature modules to reduce initial bundle size.',
            ],
          },
          {
            title: 'Bookmarker',
            meta: 'JavaScript ES6+, Bootstrap 5 | Route Academy',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Bookmark-Manager.git' },
              { label: 'Live Demo', href: 'https://bookmark-manager-em.vercel.app/' },
            ],
            bullets: [
              'Built a full CRUD bookmark manager with create, read, update, delete, search, and RegEx URL validation.',
              'Persisted entries across sessions using localStorage; delivered a fully responsive UI.',
            ],
          },
          {
            title: 'Doccure - Healthcare Appointment Platform',
            meta: 'HTML5, CSS3, Bootstrap 5, jQuery, Font Awesome | NTI Final Project',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Doccure.git' },
              { label: 'Live Demo', href: 'https://doccure-psi.vercel.app/' },
            ],
            bullets: [
              'Built a multi-page healthcare platform with Doctor Dashboard, Doctor Profile, and Profile Settings views.',
              'Implemented responsive layouts using Bootstrap 5 grid with Slick Carousel for featured doctor listings.',
              'Designed a clean dashboard UI with appointment management sections and patient record views.',
            ],
          },
          {
            title: 'Luxestate - Real Estate Landing Page',
            meta: 'HTML5, CSS3, Bootstrap 5',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/luxestate.git' },
              { label: 'Live Demo', href: 'https://luxestate-em.vercel.app/' },
            ],
            bullets: [
              'Built a responsive real estate landing page with structured sections for property discovery, services, agents, and contact information.',
              'Implemented clean section-based layouts, reusable UI patterns, and mobile-friendly spacing across screen sizes.',
            ],
          },
          {
            title: 'Axit - Landing Page Template',
            meta: 'HTML5, CSS3, Bootstrap 5',
            links: [
              { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Axit-Task.git' },
              { label: 'Live Demo', href: 'https://axit-rose.vercel.app/' },
            ],
            bullets: [
              'Built a responsive multi-section landing page: Hero with free-trial form, Features, Pricing, Reviews, and Contact.',
              'Applied consistent layout patterns and media queries for mobile-first responsive behavior.',
            ],
          },
        ],
  );

  readonly experience = computed<readonly CvEntry[]>(() =>
    this.isArabic()
      ? [
          {
            title: 'متدرب تطوير واجهات أمامية (Frontend Developer Trainee)',
            meta: 'Route Academy، القاهرة، مصر',
            date: 'مارس 2025 – حتى الآن',
            dateTime: '2025-03',
            bullets: [
              'تنفيذ 4+ مشاريع واجهات أمامية تشمل متجر Angular SPA متكامل ومنصة رعاية صحية متعددة الصفحات.',
              'تطبيق التحقق من صحة المدخلات Form Validation لأكثر من 10 حقول بـ RegEx مع رسائل واضحة للمستخدم.',
              'بناء مكونات Angular قابلة لإعادة الاستخدام وتوحيد التصميم لتقليل تكرار الكود.',
              'إدارة وتوثيق الكود على GitHub باستخدام الـ Branching وسجل Commit منظم.',
            ],
          },
          {
            title: 'مطور واجهات ويب (Frontend Web Developer)',
            meta: 'Elevvo Pathways، القاهرة، مصر',
            date: 'أغسطس 2025 – سبتمبر 2025',
            dateTime: '2025-08/2025-09',
            bullets: [
              'بناء 5+ صفحات ومكونات واجهة مستخدم متجاوبة بتنسيق موحد على الموبايل والديسكتوب.',
              'معالجة مشاكل التنسيق والتصميم لتحسين اتساق الواجهات قبل التسليم للعملاء.',
            ],
          },
          {
            title: 'متدرب مصرفي (Internship Trainee)',
            meta: 'Commercial International Bank (CIB Egypt)، القاهرة، مصر',
            date: 'سبتمبر 2025',
            dateTime: '2025-09',
            bullets: ['إتمام تدريب مصرفي منظم لمدة أسبوع مع توثيق المهام والتعرف على سير العمل المؤسسي.'],
          },
        ]
      : [
          {
            title: 'Frontend Developer Trainee',
            meta: 'Route Academy, Cairo, Egypt',
            date: 'Mar 2025 – Present',
            dateTime: '2025-03',
            bullets: [
              'Delivered 4+ frontend projects including a full Angular e-commerce SPA and a multi-page healthcare platform.',
              'Implemented client-side form validation for 10+ fields using RegEx with clear user-facing error messages.',
              'Built reusable Angular components and standardized layouts to reduce duplicated code across project pages.',
              'Maintained version-controlled repositories on GitHub with branching and structured commit history.',
            ],
          },
          {
            title: 'Frontend Web Developer',
            meta: 'Elevvo Pathways, Cairo, Egypt',
            date: 'Aug 2025 – Sep 2025',
            dateTime: '2025-08/2025-09',
            bullets: [
              'Built 5+ responsive pages and UI components with consistent layouts across mobile and desktop screens.',
              'Resolved styling and layout issues to improve UI consistency before client delivery.',
            ],
          },
          {
            title: 'Internship Trainee',
            meta: 'CIB Egypt, Cairo, Egypt',
            date: 'Sep 2025',
            dateTime: '2025-09',
            bullets: ['Completed a structured 1-week banking internship with task documentation and review.'],
          },
        ],
  );

  readonly education = computed(() =>
    this.isArabic()
      ? {
          title: 'بكالوريوس الحاسبات وتكنولوجيا المعلومات | الجامعة المصرية للتعلم الإلكتروني (EELU)، القاهرة، مصر',
          date: '2022 – 2026 (تخرج متوقع)',
          dateTime: '2022-02/2026-07',
          coursework:
            'المقررات المرتبطة: تطوير الويب، هياكل البيانات، الخوارزميات، نظم التشغيل، قواعد البيانات.',
        }
      : {
          title:
            'B.Sc. Computer and Information Technology | Egyptian E-Learning University (EELU), Cairo, Egypt',
          date: '2022 – 2026 (Expected Graduation)',
          dateTime: '2022-02/2026-07',
          coursework:
            'Relevant Coursework: Web Development, Data Structures, Algorithms, Operating Systems, Databases',
        },
  );

  readonly certifications: readonly string[] = [
    'Route Academy - Full Stack Web Developer (Angular & .NET)',
    'NTI Web Designer (Digital Egypt Youth) - Score: 100%',
    'ALX AiCE - AI Career Essentials',
  ];

  readonly softSkills = computed(() =>
    this.isArabic()
      ? 'حل المشكلات | التواصل الفعال | العمل الجماعي | إدارة الوقت | الدقة والاهتمام بالتفاصيل | سرعة التعلم'
      : 'Problem Solving | Communication | Teamwork | Time Management | Attention to Detail | Fast Learning',
  );
}

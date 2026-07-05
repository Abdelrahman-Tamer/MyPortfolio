import type { SeoRouteData } from './seo.models';

export const SITE_URL = 'https://abdelrahman-emam-portfolio.vercel.app';
export const SITE_NAME = 'Abdelrahman Emam Portfolio';
export const AUTHOR_NAME = 'Abdelrahman Emam';
export const AUTHOR_EMAIL = 'abdelrahmanacc84@gmail.com';
export const AUTHOR_JOB_TITLE = 'Angular Frontend Developer';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/abd-el-rahman-emam';
export const GITHUB_URL = 'https://github.com/Abdelrahman-Tamer';
export const SOCIAL_IMAGE_PATH = '/og-image.png';
export const LOGO_PATH = '/android-chrome-512x512.png';
export const THEME_COLOR = '#0b0e14';
export const BACKGROUND_COLOR = '#0b0e14';

const baseKeywords =
  'Angular Developer, Frontend Developer, TypeScript, Responsive Web Design, REST API Integration, Cairo Developer, JavaScript Developer';

const socialImage = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;

export const DEFAULT_SEO: SeoRouteData = {
  title: 'Abdelrahman Emam | Angular Frontend Developer',
  description:
    'Angular Frontend Developer in Cairo building responsive web interfaces, REST API integrations, and client-ready projects.',
  keywords: baseKeywords,
  path: '/',
  image: socialImage,
  imageAlt: 'Abdelrahman Emam Angular Frontend Developer portfolio preview',
  robots: 'index, follow, max-image-preview:large',
};

export const ROUTE_SEO = {
  home: DEFAULT_SEO,
  about: {
    title: 'About Abdelrahman Emam | Angular Frontend Developer',
    description:
      'Learn about Abdelrahman Emam, a Cairo-based Angular Frontend Developer focused on clean UI, responsive interfaces, and real-world API integration.',
    keywords: `${baseKeywords}, About Abdelrahman Emam, Angular Portfolio`,
    path: '/about',
    image: socialImage,
    imageAlt: DEFAULT_SEO.imageAlt,
    robots: DEFAULT_SEO.robots,
  },
  services: {
    title: 'Frontend Services | Angular Development and API Integration',
    description:
      'Frontend services from Abdelrahman Emam including responsive interfaces, Angular development, REST API integration, and backend API collaboration.',
    keywords: `${baseKeywords}, Angular Services, API Integration, Frontend Services`,
    path: '/services',
    image: socialImage,
    imageAlt: DEFAULT_SEO.imageAlt,
    robots: DEFAULT_SEO.robots,
  },
  projects: {
    title: 'Projects | Abdelrahman Emam Angular Portfolio',
    description:
      'Explore Abdelrahman Emam frontend projects across e-commerce, healthcare, tourism, receipt management, landing pages, and JavaScript tools.',
    keywords: `${baseKeywords}, Angular Projects, Frontend Portfolio, Web Projects`,
    path: '/projects',
    image: socialImage,
    imageAlt: DEFAULT_SEO.imageAlt,
    robots: DEFAULT_SEO.robots,
  },
  skills: {
    title: 'Skills | Angular, TypeScript, REST APIs, and Frontend Tools',
    description:
      'Review Abdelrahman Emam frontend skills across Angular, TypeScript, JavaScript, REST APIs, Firebase, responsive design, and modern developer tools.',
    keywords: `${baseKeywords}, Angular Skills, TypeScript Skills, Frontend Tools`,
    path: '/skills',
    image: socialImage,
    imageAlt: DEFAULT_SEO.imageAlt,
    robots: DEFAULT_SEO.robots,
  },
  contact: {
    title: 'Contact Abdelrahman Emam | Frontend Developer',
    description:
      'Contact Abdelrahman Emam for Angular frontend development, responsive UI work, REST API integrations, and client-ready web projects.',
    keywords: `${baseKeywords}, Hire Angular Developer, Contact Frontend Developer`,
    path: '/contact',
    image: socialImage,
    imageAlt: DEFAULT_SEO.imageAlt,
    robots: DEFAULT_SEO.robots,
  },
} satisfies Record<string, SeoRouteData>;

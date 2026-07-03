import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from "motion/react";
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Code2,
  Layers,
  Wrench,
  Cpu,
  GraduationCap,
  Briefcase,
  Send,
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  Smartphone,
  Figma,
  Plug,
  Gauge,
  ExternalLink,
  Award,
  Phone,
  Lock,
} from "lucide-react";

/* ─────────────────────────────────────────────
   THEME TOKENS
   ───────────────────────────────────────────── */
type Mode = "dark" | "light";
type Lang = "en" | "ar";

const THEMES: Record<Mode, any> = {
  dark: {
    bg: "#0b0e14", surface: "#121a28", border: "#1e2738",
    text: "#f8fafc", muted: "#94a3b8", strong: "#cbd5e1", faint: "#64748b",
    navBg: "rgba(11,14,20,0.72)", badgeBg: "rgba(30,39,56,0.5)",
    inputBg: "#0b0e14", statBg: "rgba(18,26,40,0.5)", menuBg: "rgba(11,14,20,0.96)",
    gridLine: "#1e273833", onAccent: "#0b0e14", spotAlpha: "12",
  },
  light: {
    bg: "#eef2f9", surface: "#ffffff", border: "#dbe3ef",
    text: "#0f172a", muted: "#475569", strong: "#334155", faint: "#64748b",
    navBg: "rgba(238,242,249,0.78)", badgeBg: "rgba(255,255,255,0.78)",
    inputBg: "#f6f8fc", statBg: "rgba(255,255,255,0.82)", menuBg: "rgba(246,248,252,0.97)",
    gridLine: "#94a3b822", onAccent: "#ffffff", spotAlpha: "1a",
  },
};

const ACCENTS: Record<Mode, Record<string, string>> = {
  dark: { blue: "#60a5fa", purple: "#a78bfa", green: "#34d399", orange: "#fb923c" },
  light: { blue: "#2563eb", purple: "#7c3aed", green: "#0d9488", orange: "#ea580c" },
};

/* ─────────────────────────────────────────────
   TRANSLATIONS
   ───────────────────────────────────────────── */
const T: Record<Lang, any> = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    heroBadge: "Available for work",
    location: "Cairo, Egypt",
    phone: "+20 1122615864",
    heroName: { l1: "Abdelrahman", l2: "Emam" },
    heroTitle: "Frontend Developer",
    heroSubtitle: "I help turn ideas into clean, fast, and responsive web interfaces that work smoothly across all devices — using Angular, TypeScript, and REST APIs.",
    ctaProjects: "View Projects",
    ctaContact: "Message me now",
    scroll: "Scroll to explore",
    aboutHeadingPre: "A frontend developer focused on clean UI and ",
    aboutHeadingAccent: "real-world integration",
    aboutBio: [
      "Junior Frontend Developer specializing in Angular and responsive web development. Experienced in building SPAs with authentication, REST API integration, route guards, reactive forms, Firebase Firestore, and client-side storage.",
      "Delivered projects across e-commerce, healthcare, productivity, landing pages, and a live client receipt management system. Also contributed to backend APIs and admin-related features in a graduation project using ASP.NET Core.",
    ],
    certsTitle: "Certifications",
    certs: ["NTI Web Designer — Score 100%", "ALX AiCE — AI Career Essentials"],
    projectsTitle: "Selected work",
    skillsTitle: "Technologies & tools",
    contactLines: ["Let's start your", "project together"],
    contactInvite: "Got a website idea or need a professional frontend interface? Send me your project details and I'll get back to you as soon as possible.",
    formName: "Name", formEmail: "Email", formMessage: "Message",
    formNamePh: "Your name", formEmailPh: "your@email.com", formMsgPh: "Tell me about your project...",
    formSend: "Send message", formSent: "Message sent!",
    ciEmail: "Email", ciPhone: "Phone", ciLinkedin: "LinkedIn", ciGithub: "GitHub", ciLocation: "Location",
    footerCopy: "© 2026 — built with Angular",
    footerName: "Abdelrahman Emam",
    stats: ["Frontend Projects", "Client Work Delivered", "Angular + REST APIs", "Responsive UI Focus"],
    servicesLabel: "Services",
    servicesTitle: "What I offer",
    services: [
      { title: "Responsive Interfaces", desc: "Pages that work smoothly across mobile, tablet, and desktop." },
      { title: "Angular Development", desc: "Building structured Angular components, routing, guards, and reactive forms." },
      { title: "API Integration", desc: "Connecting frontend pages to REST APIs and handling dynamic data." },
      { title: "Backend API Contribution", desc: "Contributing to backend APIs, admin features, reports, and authentication flows." },
    ],
    skillsSubtitle: "Tools I use to build responsive, connected, and maintainable web interfaces.",
    skillLabels: ["Frontend", "Angular Ecosystem", "Styling", "APIs & Data", "Tools"],
    skillItems: [
      ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Angular", "RxJS"],
      ["Angular Router", "Guards", "Reactive Forms", "HttpClient", "Components", "SPA"],
      ["Bootstrap 5", "Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"],
      ["REST APIs", "JSON", "JWT Authentication", "Firebase Firestore", "SQL Server"],
      ["Git", "GitHub", "npm", "Postman", "Chrome DevTools", "localStorage", "RegEx"],
    ],
    moreTitle: "More projects",
    projects: [
      {
        title: "Receipta Pro — Electronic Receipt Management System",
        type: "Confidential Client Project · Waad Rent Cars",
        desc: "Arabic receipt management system for Waad Rent Cars with create, edit, delete, search, payment status tracking, Firebase cloud sync, offline fallback, and PDF export.",
        demoLabel: "Private Demo", codeLabel: "Private Code",
        note: "Code & demo are private due to client confidentiality.",
      },
      {
        title: "NileGuide Tourism Platform",
        type: "Graduation Project · Backend & Frontend Contributor",
        desc: "Graduation project for tourism activity discovery and trip planning. Contributed to backend APIs and frontend features including authentication flow, activity management, reports, profile integration, admin pages, and API integration.",
        demoLabel: "View Project", codeLabel: "GitHub",
      },
      {
        title: "FreshCart E-commerce",
        type: "Route Academy Final Project",
        desc: "Full Angular e-commerce SPA with product catalog, search, category & brand filters, cart, wishlist, checkout flow, JWT authentication, route guards, Stripe payment, and lazy loading.",
        demoLabel: "Live Demo", codeLabel: "GitHub",
      },
      {
        title: "Doccure — Healthcare Appointment Platform",
        type: "NTI Final Project",
        desc: "Multi-page healthcare platform with doctor dashboard, doctor profile, profile settings, appointment sections, patient records, responsive Bootstrap layouts, and Slick Carousel.",
        demoLabel: "Live Demo", codeLabel: "GitHub",
      },
    ],
    moreProjects: [
      { title: "Bookmarker", desc: "CRUD bookmark manager with create, update, delete, search, RegEx URL validation, localStorage persistence, and responsive UI.", tags: ["JavaScript ES6+", "Bootstrap 5", "RegEx", "localStorage"], demoLabel: "Live Demo", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
      { title: "Luxestate - Real Estate Landing Page", desc: "Responsive real estate landing page with sections for property discovery, services, agents, and contact information.", tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design"], demoLabel: "Live Demo", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
      { title: "Axit - Landing Page Template", desc: "Responsive multi-section landing page with hero form, features, pricing, reviews, and contact sections.", tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design"], demoLabel: "Live Demo", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
    ],
    timeline: [
      { period: "Mar 2025 – Jul 2026", role: "Frontend Developer Trainee", desc: "Delivered 4+ frontend projects including Angular e-commerce and a healthcare platform." },
      { period: "Aug 2025 – Sep 2025", role: "Frontend Web Developer", desc: "Built 5+ responsive pages and improved UI consistency before delivery." },
      { period: "Sep 2025", role: "Internship Trainee", desc: "Completed a structured banking internship with task documentation and review." },
      { period: "Feb 2022 – Jul 2026", role: "B.Sc. Computer and Information Technology", desc: "Coursework: Web Development, Data Structures, Algorithms, Operating Systems, Databases." },
    ],
    menu: "Menu",
  },
  ar: {
    nav: { about: "نبذة", projects: "المشاريع", skills: "المهارات", contact: "تواصل" },
    heroBadge: "متاح للعمل",
    location: "القاهرة، مصر",
    phone: "+20 1122615864",
    heroName: { l1: "عبدالرحمن", l2: "إمام" },
    heroTitle: "مطور واجهات",
    heroSubtitle: "أبني واجهات ويب متجاوبة وسهلة الاستخدام باستخدام Angular و TypeScript وربط REST APIs وأدوات الويب الحديثة.",
    ctaProjects: "شاهد المشاريع",
    ctaContact: "راسلني الآن",
    scroll: "مرر للاستكشاف",
    aboutHeadingPre: "مطور واجهات يركز على الواجهات النظيفة و",
    aboutHeadingAccent: "الربط الحقيقي",
    aboutBio: [
      "مطور واجهات أمامية Junior متخصص في Angular وتطوير الواجهات المتجاوبة. لدي خبرة في بناء Single Page Applications تشمل تسجيل الدخول، ربط REST APIs، Route Guards، Reactive Forms، Firebase Firestore، والتخزين داخل المتصفح.",
      "نفذت مشاريع في التجارة الإلكترونية، الرعاية الصحية، الإنتاجية، صفحات الهبوط، بالإضافة إلى مشروع عميل فعلي لإدارة الإيصالات. كما ساهمت في تطوير Backend APIs وبعض أجزاء Admin في مشروع التخرج باستخدام ASP.NET Core.",
    ],
    certsTitle: "الشهادات",
    certs: ["NTI Web Designer — درجة 100%", "ALX AiCE — AI Career Essentials"],
    projectsTitle: "أعمال مختارة",
    skillsTitle: "التقنيات والأدوات",
    contactLines: ["لنبدأ مشروعك معًا"],
    contactInvite: "عندك فكرة موقع أو محتاج واجهة Frontend احترافية؟ ابعتلي تفاصيل مشروعك وهرد عليك في أقرب وقت.",
    formName: "الاسم", formEmail: "البريد الإلكتروني", formMessage: "الرسالة",
    formNamePh: "اسمك", formEmailPh: "your@email.com", formMsgPh: "حدثني عن مشروعك...",
    formSend: "إرسال الرسالة", formSent: "تم إرسال الرسالة!",
    ciEmail: "البريد", ciPhone: "الهاتف", ciLinkedin: "لينكدإن", ciGithub: "GitHub", ciLocation: "الموقع",
    footerCopy: "© 2026 — تم بناء الموقع باستخدام Angular",
    footerName: "عبدالرحمن إمام",
    stats: ["مشاريع Frontend", "مشروع عميل فعلي", "Angular + REST APIs", "واجهات متجاوبة"],
    servicesLabel: "الخدمات",
    servicesTitle: "ماذا أقدم؟",
    services: [
      { title: "واجهات متجاوبة", desc: "صفحات تعمل بسلاسة على الموبايل والتابلت والديسكتوب." },
      { title: "تطوير Angular", desc: "بناء Components منظمة، Routing، Guards، و Reactive Forms." },
      { title: "ربط APIs", desc: "ربط الواجهات بـ REST APIs والتعامل مع البيانات الديناميكية." },
      { title: "مساهمة Backend APIs", desc: "المساهمة في Backend APIs، صفحات Admin، التقارير، و Authentication flows." },
    ],
    skillsSubtitle: "أدوات أستخدمها لبناء واجهات متجاوبة، مرتبطة بالبيانات، وسهلة التطوير.",
    skillLabels: ["الواجهة الأمامية", "بيئة Angular", "التنسيق", "APIs والبيانات", "الأدوات"],
    skillItems: [
      ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Angular", "RxJS"],
      ["Angular Router", "Guards", "Reactive Forms", "HttpClient", "Components", "SPA"],
      ["Bootstrap 5", "Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"],
      ["REST APIs", "JSON", "JWT Authentication", "Firebase Firestore", "SQL Server"],
      ["Git", "GitHub", "npm", "Postman", "Chrome DevTools", "localStorage", "RegEx"],
    ],
    moreTitle: "مشاريع أخرى",
    projects: [
      {
        title: "Receipta Pro — نظام إدارة إيصالات إلكتروني",
        type: "مشروع عميل خاص · Waad Rent Cars",
        desc: "نظام عربي لإدارة إيصالات Waad Rent Cars يشمل إنشاء وتعديل وحذف وبحث وتتبع حالة الدفع، مع مزامنة Firebase، تخزين Offline، وتصدير PDF.",
        demoLabel: "عرض خاص", codeLabel: "كود خاص",
        note: "الكود والعرض خاصان بسبب سرية مشروع العميل.",
      },
      {
        title: "NileGuide — منصة سياحية",
        type: "مشروع تخرج · مساهم في Backend و Frontend",
        desc: "مشروع تخرج لاكتشاف الأنشطة السياحية وتنظيم الرحلات. ساهمت في تطوير Backend APIs وبعض أجزاء Frontend مثل Authentication flow، إدارة الأنشطة، التقارير، ربط البروفايل، صفحات مرتبطة بالـ Admin، وربط الواجهات بالـ APIs.",
        demoLabel: "عرض المشروع", codeLabel: "GitHub",
      },
      {
        title: "FreshCart — متجر إلكتروني",
        type: "مشروع Route Academy النهائي",
        desc: "تطبيق متجر إلكتروني Angular SPA يشمل عرض المنتجات، البحث، فلاتر التصنيفات والماركات، السلة، المفضلة، الدفع، JWT Authentication، Route Guards، Stripe، و Lazy Loading.",
        demoLabel: "معاينة مباشرة", codeLabel: "GitHub",
      },
      {
        title: "Doccure — منصة مواعيد طبية",
        type: "مشروع NTI النهائي",
        desc: "منصة طبية متعددة الصفحات تشمل Doctor Dashboard، Doctor Profile، Profile Settings، أقسام المواعيد، سجلات المرضى، تصميم متجاوب Bootstrap، و Slick Carousel.",
        demoLabel: "معاينة مباشرة", codeLabel: "GitHub",
      },
    ],
    moreProjects: [
      { title: "Bookmarker - مدير روابط", desc: "تطبيق لإدارة الروابط يشمل إضافة وتعديل وحذف وبحث، RegEx URL Validation، حفظ البيانات في localStorage، وواجهة متجاوبة.", tags: ["JavaScript ES6+", "Bootstrap 5", "RegEx", "localStorage"], demoLabel: "معاينة مباشرة", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
      { title: "Luxestate - صفحة عقارات", desc: "صفحة عقارات متجاوبة تضم أقسام عرض العقارات، الخدمات، الوكلاء، ومعلومات التواصل.", tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design"], demoLabel: "معاينة مباشرة", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
      { title: "Axit - صفحة هبوط", desc: "صفحة هبوط متجاوبة متعددة الأقسام تشمل Hero Form، Features، Pricing، Reviews، و Contact.", tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design"], demoLabel: "معاينة مباشرة", codeLabel: "GitHub", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
    ],
    timeline: [
      { period: "مارس 2025 – يوليو 2026", role: "متدرب Frontend Developer", desc: "نفذت 4+ مشاريع Frontend منها متجر إلكتروني Angular ومنصة رعاية صحية." },
      { period: "أغسطس 2025 – سبتمبر 2025", role: "Frontend Web Developer", desc: "نفذت 5+ صفحات متجاوبة وحسّنت تناسق الواجهات قبل التسليم." },
      { period: "سبتمبر 2025", role: "متدرب", desc: "أكملت تدريبًا مصرفيًا منظمًا مع توثيق المهام والمراجعة." },
      { period: "فبراير 2022 – يوليو 2026", role: "بكالوريوس الحاسبات وتكنولوجيا المعلومات", desc: "مواد مرتبطة: Web Development، Data Structures، Algorithms، Operating Systems، Databases." },
    ],
    menu: "القائمة",
  },
};

/* Language-independent data */
const NAV_KEYS = ["about", "projects", "skills", "contact"] as const;
const MARQUEE_TECH = ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "RxJS", "Git", "REST APIs", "RegEx", "localStorage", "Stripe", "JWT"];
const STAT_VALUES = ["5+", "1", "✦", "100%"];
const PROJECTS = [
  { index: "01", tags: ["HTML5", "CSS3", "JavaScript ES6+", "Firebase", "jsPDF", "html2canvas"], colorKey: "blue", demo: "#", github: "#", private: true },
  { index: "02", tags: ["ASP.NET Core", "Entity Framework", "SQL Server", "Angular", "TypeScript", "REST APIs", "JWT"], colorKey: "purple", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
  { index: "03", tags: ["Angular 17", "TypeScript", "Bootstrap 5", "REST APIs", "JWT", "Stripe"], colorKey: "green", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
  { index: "04", tags: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Font Awesome"], colorKey: "orange", demo: "#", github: "https://github.com/Abdelrahman-Tamer" },
];
const SERVICE_ICONS = [Smartphone, Figma, Plug, Gauge];
const SERVICE_COLORS = ["blue", "purple", "green", "orange"];
const SKILL_META = [
  { icon: Code2, colorKey: "blue" },
  { icon: Cpu, colorKey: "blue" },
  { icon: Layers, colorKey: "purple" },
  { icon: Wrench, colorKey: "green" },
  { icon: Gauge, colorKey: "orange" },
];
const TIMELINE_META = [
  { org: "Route Academy", location: "Cairo, Egypt", type: "work" },
  { org: "Elevvo Pathways", location: "Cairo, Egypt", type: "work" },
  { org: "CIB Egypt", location: "Cairo, Egypt", type: "work" },
  { org: "Egyptian E-Learning University", location: "Cairo, Egypt", type: "edu" },
];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_KEYS.forEach((s) => { const el = document.getElementById(s); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function App() {
  const [mode, setMode] = useState<Mode>("dark");
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const c = THEMES[mode];
  const a = ACCENTS[mode];
  const t = T[lang];
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const fonts = {
    heading: isRTL ? "'IBM Plex Sans Arabic', sans-serif" : "'Space Grotesk', sans-serif",
    body: isRTL ? "'IBM Plex Sans Arabic', sans-serif" : "'Inter', sans-serif",
    latin: "'Space Grotesk', sans-serif",
  };
  const flip = isRTL ? "scaleX(-1)" : "none";

  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursor.current) cursor.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const shared = { c, a, t, fonts, isRTL, flip, mode };

  return (
    <div
      dir={dir}
      lang={lang}
      style={{
        fontFamily: fonts.body, backgroundColor: c.bg, color: c.text,
        position: "relative", overflowX: "hidden",
        transition: "background-color 0.4s, color 0.4s",
        ["--bd" as any]: c.border, ["--focus" as any]: a.blue,
      }}
      className="min-h-screen"
    >
      {/* Cursor spotlight */}
      <div ref={cursor} className="cursor-spot" style={{ position: "fixed", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${a.blue}${c.spotAlpha} 0%, transparent 70%)`, pointerEvents: "none", zIndex: 1, left: 0, top: 0, willChange: "transform" }} />

      {/* Grid background */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(${c.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${c.gridLine} 1px, transparent 1px)`, backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ── NAV ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: `1px solid ${scrolled || menuOpen ? c.border : "transparent"}`, background: scrolled || menuOpen ? c.navBg : "transparent", backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none", transition: "all 0.3s ease" }}>
          <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <button onClick={() => scrollTo("about")} aria-label="Home" style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0, fontFamily: fonts.latin, fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: c.text }}>
              AE<span style={{ color: a.blue }}>.</span>
            </button>

            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <div className="nav-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {NAV_KEYS.map((key) => {
                  const isActive = activeSection === key;
                  return (
                    <button key={key} onClick={() => scrollTo(key)}
                      style={{ position: "relative", padding: "6px 16px", borderRadius: 8, border: "none", background: "transparent", fontSize: 14, fontWeight: 500, fontFamily: fonts.body, color: isActive ? a.blue : c.muted, cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = c.text; }}
                      onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = c.muted; }}>
                      {t.nav[key]}
                      {isActive && <motion.div layoutId="navdot" style={{ position: "absolute", bottom: 0, left: "50%", width: 4, height: 4, borderRadius: "50%", background: a.blue, x: "-50%" }} />}
                    </button>
                  );
                })}
                <span style={{ width: 1, height: 20, background: c.border, margin: "0 8px" }} />
              </div>

              {/* Language switch */}
              <div role="group" aria-label="Language" style={{ display: "flex", alignItems: "center", border: `1px solid ${c.border}`, borderRadius: 8, overflow: "hidden" }}>
                {(["en", "ar"] as Lang[]).map((l) => (
                  <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                    style={{ padding: "5px 11px", border: "none", background: lang === l ? a.blue : "transparent", color: lang === l ? c.onAccent : c.muted, fontSize: 12, fontWeight: 600, fontFamily: fonts.latin, cursor: "pointer", transition: "all 0.2s" }}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Theme toggle */}
              <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${c.border}`, background: "transparent", color: c.text, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", marginInlineStart: 4 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = a.blue)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = c.border)}>
                {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Burger (mobile) */}
              <button className="nav-burger" onClick={() => setMenuOpen((o) => !o)} aria-label={t.menu} aria-expanded={menuOpen}
                style={{ display: "none", width: 36, height: 36, borderRadius: 8, border: `1px solid ${c.border}`, background: "transparent", color: c.text, cursor: "pointer", alignItems: "center", justifyContent: "center", transition: "all 0.2s", marginInlineStart: 4 }}>
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                className="nav-mobile-panel" style={{ overflow: "hidden", background: c.menuBg, backdropFilter: "blur(16px)", borderTop: `1px solid ${c.border}` }}>
                <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 40px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
                  {NAV_KEYS.map((key) => (
                    <button key={key} onClick={() => scrollTo(key)}
                      style={{ textAlign: isRTL ? "right" : "left", padding: "12px 12px", borderRadius: 10, border: "none", background: activeSection === key ? `${a.blue}14` : "transparent", color: activeSection === key ? a.blue : c.text, fontSize: 16, fontWeight: 500, fontFamily: fonts.body, cursor: "pointer", transition: "all 0.2s" }}>
                      {t.nav[key]}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <Hero {...shared} scrollTo={scrollTo} />
        <Marquee {...shared} />

        {/* ── STATS ── */}
        <section className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <motion.div variants={{ show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
            className="resp-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: `1px solid ${c.border}`, borderRadius: 16, overflow: "hidden", background: c.statBg }}>
            {STAT_VALUES.map((value, i) => (
              <motion.div key={i} variants={reveal} className="stat-cell" style={{ padding: "32px 28px", borderInlineEnd: i < STAT_VALUES.length - 1 ? `1px solid ${c.border}` : "none" }}>
                <div className="stat-num" style={{ fontFamily: fonts.latin, fontWeight: 700, fontSize: 36, color: a.blue, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{value}</div>
                <div className="stat-label" style={{ fontSize: 14, color: c.muted, marginTop: 6 }}>{t.stats[i]}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="section container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px", scrollMarginTop: 80 }}>
          <SectionHeader number="01" label={t.nav.about} {...shared} />
          <div className="duo" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, marginTop: 48 }}>
            {/* LEFT: intro + identity card + quick facts */}
            <motion.div variants={{ show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <motion.h2 variants={reveal} className="h-section" style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 24 }}>
                {t.aboutHeadingPre}<span style={{ color: a.blue }}>{t.aboutHeadingAccent}</span>.
              </motion.h2>
              {t.aboutBio.map((p: string, i: number) => (
                <motion.p key={i} variants={reveal} style={{ fontSize: 16, lineHeight: 1.9, color: c.muted, marginTop: i ? 16 : 0 }}>{p}</motion.p>
              ))}

              {/* Quick fact chips */}
              <motion.div variants={reveal} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 32 }}>
                {[
                  { Icon: MapPin, k: a.blue, label: isRTL ? "الموقع" : "Location", value: t.location },
                  { Icon: GraduationCap, k: a.purple, label: isRTL ? "التعليم" : "Education", value: "EELU · 2026" },
                  { Icon: Code2, k: a.green, label: isRTL ? "التخصص" : "Focus", value: "Angular" },
                  { Icon: Sparkles, k: a.orange, label: isRTL ? "الحالة" : "Status", value: isRTL ? "متاح للعمل" : "Available" },
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 12, background: c.surface, border: `1px solid ${c.border}` }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${f.k}18`, border: `1px solid ${f.k}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <f.Icon size={15} color={f.k} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 11, color: c.faint, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</div>
                      <div dir={f.value === "Angular" || f.value === "EELU · 2026" ? "ltr" : undefined} style={{ fontSize: 14, fontWeight: 600, color: c.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", textAlign: isRTL ? "right" : "left" }}>{f.value}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div variants={reveal} style={{ marginTop: 28 }}>
                <div style={{ fontSize: 11, color: c.faint, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{t.certsTitle}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {t.certs.map((cert: string, i: number) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: `${a.blue}12`, border: `1px solid ${a.blue}2e` }}>
                      <Award size={14} color={a.blue} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 600, color: c.text }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: card-style animated timeline */}
            <motion.div variants={{ show: { transition: { staggerChildren: 0.14 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ position: "relative", paddingInlineStart: 8 }}>
              {/* Animated connecting line */}
              <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
                style={{ position: "absolute", insetInlineStart: 19, top: 12, bottom: 12, width: 2, transformOrigin: "top", background: `linear-gradient(to bottom, ${a.blue}, ${a.purple}66, transparent)`, borderRadius: 2 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TIMELINE_META.map((item, i) => {
                  const dot = item.type === "edu" ? a.purple : a.blue;
                  return (
                    <motion.div key={i} variants={reveal} whileHover={{ x: isRTL ? -4 : 4 }} style={{ display: "flex", gap: 18, alignItems: "stretch", position: "relative" }}>
                      {/* Node */}
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 18, zIndex: 1 }}>
                        <motion.div whileInView={{ scale: [0.4, 1.25, 1] }} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} viewport={{ once: true }}
                          style={{ width: 24, height: 24, borderRadius: "50%", background: c.bg, border: `2px solid ${dot}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 16px ${dot}55` }}>
                          {item.type === "edu" ? <GraduationCap size={12} color={dot} /> : <Briefcase size={12} color={dot} />}
                        </motion.div>
                      </div>
                      {/* Card */}
                      <div style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: "16px 18px", transition: "border-color 0.25s, box-shadow 0.25s", position: "relative", overflow: "hidden" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${dot}55`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${dot}14`; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = c.border; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                        <span style={{ display: "inline-block", fontSize: 12, color: dot, fontWeight: 600, fontFamily: "monospace", padding: "2px 8px", borderRadius: 6, background: `${dot}14`, border: `1px solid ${dot}2e`, marginBottom: 8 }}>{t.timeline[i].period}</span>
                        <div style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 16, marginBottom: 4, lineHeight: 1.4 }}>{t.timeline[i].role}</div>
                        <div style={{ fontSize: 14, color: c.muted, marginBottom: 8 }}>{item.org}{item.location ? `, ${item.location}` : ""}</div>
                        <p style={{ fontSize: 13, lineHeight: 1.7, color: c.faint, margin: 0 }}>{t.timeline[i].desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <Divider c={c} />

        {/* ── SERVICES ── */}
        <section id="services" className="section container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px", scrollMarginTop: 80 }}>
          <SectionHeader number="02" label={t.servicesLabel} title={t.servicesTitle} {...shared} />
          <motion.div variants={{ show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="quad" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 48 }}>
            {t.services.map((svc: any, i: number) => (
              <ServiceCard key={i} svc={svc} Icon={SERVICE_ICONS[i]} color={a[SERVICE_COLORS[i]]} index={i + 1} {...shared} />
            ))}
          </motion.div>
        </section>

        <Divider c={c} />

        {/* ── PROJECTS ── */}
        <section id="projects" className="section container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px", scrollMarginTop: 80 }}>
          <SectionHeader number="03" label={t.nav.projects} title={t.projectsTitle} {...shared} />
          <motion.div variants={{ show: { transition: { staggerChildren: 0.12 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}
            className="pair" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 48 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} content={t.projects[i]} {...shared} />)}
          </motion.div>

          {/* More projects — compact real cards */}
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginTop: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ width: 16, height: 1, background: a.blue }} />
              <span style={{ fontSize: 13, color: a.blue, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.moreTitle}</span>
            </div>
            <motion.div variants={{ show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
              className="trio" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {t.moreProjects.map((mp: any, i: number) => (
                <MiniProjectCard key={i} mp={mp} c={c} a={a} fonts={fonts} flip={flip} />
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Divider c={c} />

        {/* ── SKILLS ── */}
        <section id="skills" className="section container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px", scrollMarginTop: 80 }}>
          <SectionHeader number="04" label={t.nav.skills} title={t.skillsTitle} {...shared} />
          <SkillsShowcase {...shared} />
        </section>

        <Divider c={c} />

        {/* ── CONTACT ── */}
        <section id="contact" className="section container" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px", scrollMarginTop: 80 }}>
          <SectionHeader number="05" label={t.nav.contact} {...shared} />
          <div className="duo" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, marginTop: 48, alignItems: "start" }}>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="h-section" style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
                {t.contactLines.map((line: string, i: number) => (
                  <span key={i}>{line}{i < t.contactLines.length - 1 && <br />}{i === t.contactLines.length - 1 && <span style={{ color: a.blue }}>.</span>}</span>
                ))}
              </h2>
              <p style={{ fontSize: 16, color: c.muted, lineHeight: 1.8, marginBottom: 40 }}>{t.contactInvite}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <ContactItem icon={<Mail size={15} color={a.blue} />} label={t.ciEmail} value="abdelrahmanacc84@gmail.com" href="mailto:abdelrahmanacc84@gmail.com" {...shared} />
                <ContactItem icon={<Phone size={15} color={a.blue} />} label={t.ciPhone} value="+20 1122615864" href="tel:+201122615864" {...shared} />
                <ContactItem icon={<Linkedin size={15} color={a.blue} />} label={t.ciLinkedin} value="linkedin.com/in/abd-elrahman-emam" href="https://linkedin.com/in/abd-elrahman-emam" {...shared} />
                <ContactItem icon={<Github size={15} color={a.blue} />} label={t.ciGithub} value="github.com/Abdelrahman-Tamer" href="https://github.com/Abdelrahman-Tamer" {...shared} />
                <ContactItem icon={<MapPin size={15} color={a.blue} />} label={t.ciLocation} value={t.location} {...shared} />
              </div>
            </motion.div>

            <motion.form variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} onSubmit={handleSubmit}
              className="contact-form" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
              <FormField label={t.formName} type="text" placeholder={t.formNamePh} value={formState.name} onChange={(v) => setFormState((s) => ({ ...s, name: v }))} {...shared} />
              <FormField label={t.formEmail} type="email" placeholder={t.formEmailPh} value={formState.email} onChange={(v) => setFormState((s) => ({ ...s, email: v }))} {...shared} />
              <div>
                <label htmlFor="msg" style={{ display: "block", fontSize: 14, color: c.strong, marginBottom: 8, fontWeight: 600 }}>{t.formMessage}</label>
                <textarea id="msg" placeholder={t.formMsgPh} value={formState.message} onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))} required rows={5}
                  style={{ width: "100%", background: c.inputBg, border: `1px solid ${c.border}`, borderRadius: 10, padding: "12px 14px", fontSize: 15, color: c.text, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: fonts.body, transition: "border-color 0.2s, box-shadow 0.2s" }}
                  onFocus={(e) => { e.target.style.borderColor = a.blue; e.target.style.boxShadow = `0 0 0 3px ${a.blue}33`; }}
                  onBlur={(e) => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }} />
              </div>
              <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
                style={{ padding: "14px 24px", borderRadius: 10, border: "none", background: sent ? a.green : a.blue, color: c.onAccent, fontWeight: 600, fontSize: 15, fontFamily: fonts.body, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background 0.3s" }}>
                {sent ? t.formSent : <>{t.formSend} <Send size={15} style={{ transform: flip }} /></>}
              </motion.button>
            </motion.form>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="resp-footer container" style={{ borderTop: `1px solid ${c.border}`, maxWidth: 1200, margin: "0 auto", padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <span style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 15 }}>{t.footerName}</span>
          <nav className="footer-nav" style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {NAV_KEYS.map((key) => (
              <button key={key} onClick={() => scrollTo(key)}
                style={{ border: "none", background: "transparent", fontSize: 14, color: c.muted, cursor: "pointer", padding: 0, fontFamily: fonts.body, transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = c.text)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = c.muted)}>
                {t.nav[key]}
              </button>
            ))}
          </nav>
          <span style={{ fontSize: 14, color: c.faint }}>{t.footerCopy}</span>
        </footer>
      </div>

      {/* Responsive + a11y */}
      <style>{`
        @keyframes ping { 75%, 100% { transform: scale(2.4); opacity: 0; } }
        .gradient-text { -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }

        *:focus-visible {
          outline: 2px solid var(--focus);
          outline-offset: 2px;
          border-radius: 8px;
        }
        @media (hover: none) { .cursor-spot { display: none; } }

        /* Laptop ≤ 1280 */
        @media (max-width: 1280px) {
          .container { padding-left: 32px !important; padding-right: 32px !important; }
          .section { padding-top: 100px !important; padding-bottom: 100px !important; }
          .resp-hero { gap: 56px !important; grid-template-columns: 1fr 340px !important; }
          .hero-h1 { font-size: 64px !important; }
          .duo { gap: 56px !important; }
        }

        /* Tablet ≤ 880 — stack hero, 2-col grids */
        @media (max-width: 880px) {
          .resp-hero { grid-template-columns: 1fr !important; gap: 48px !important; padding-top: 112px !important; min-height: auto !important; }
          .hero-code { max-width: 460px; width: 100%; }
          .duo { grid-template-columns: 1fr !important; gap: 48px !important; }
          .trio { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Tablet ≤ 768 */
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-burger { display: flex !important; }
          .section { padding-top: 80px !important; padding-bottom: 80px !important; }
          .h-section { font-size: 32px !important; }
          .quad { grid-template-columns: repeat(2, 1fr) !important; }
          .resp-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .resp-stats .stat-cell:nth-child(odd) { border-inline-end: 1px solid var(--bd) !important; }
          .resp-stats .stat-cell:nth-child(even) { border-inline-end: none !important; }
          .resp-stats .stat-cell:nth-child(1), .resp-stats .stat-cell:nth-child(2) { border-bottom: 1px solid var(--bd) !important; }
          .resp-footer { flex-direction: column !important; gap: 16px !important; text-align: center; }
          .contact-form { padding: 24px !important; }
        }

        /* Mobile ≤ 480 */
        @media (max-width: 480px) {
          .container { padding-left: 20px !important; padding-right: 20px !important; }
          .section { padding-top: 64px !important; padding-bottom: 64px !important; }
          .trio { grid-template-columns: 1fr !important; }
          .quad { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 48px !important; }
          .hero-sub { font-size: 19px !important; }
          .h-section { font-size: 28px !important; }
          .cta-row { width: 100%; }
          .cta-row > button { flex: 1 1 auto; justify-content: center; }
          .stat-num { font-size: 30px !important; }
        }

        /* Skills + projects layout ≤ 880 */
        @media (max-width: 880px) {
          .skills-layout { grid-template-columns: 1fr !important; }
          .pair { grid-template-columns: 1fr !important; }
        }

        /* Small mobile ≤ 360 */
        @media (max-width: 360px) {
          .container { padding-left: 16px !important; padding-right: 16px !important; }
          .resp-stats { grid-template-columns: 1fr !important; }
          .resp-stats .stat-cell { border-inline-end: none !important; border-bottom: 1px solid var(--bd) !important; }
          .resp-stats .stat-cell:last-child { border-bottom: none !important; }
          .hero-h1 { font-size: 42px !important; }
          .hero-code { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}

/* ── HERO ── */
function Hero({ c, a, t, fonts, isRTL, flip, scrollTo }: any) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="resp-hero container" style={{ maxWidth: 1200, margin: "0 auto", padding: "152px 40px 96px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 72, alignItems: "center", minHeight: "100vh", position: "relative" }}>
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: 80, insetInlineStart: -100, width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${a.blue}1f 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(20px)" }} />
      <motion.div animate={{ x: [0, -30, 0], y: [0, 40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 40, insetInlineEnd: 100, width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${a.purple}1a 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(20px)" }} />

      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} style={{ position: "relative" }}>
        <motion.div variants={reveal} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: `1px solid ${c.border}`, background: c.badgeBg, fontSize: 14, color: c.muted, marginBottom: 32, flexWrap: "wrap" }}>
          <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: a.green, animation: "ping 1.6s cubic-bezier(0,0,0.2,1) infinite" }} />
            <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: a.green }} />
          </span>
          {t.heroBadge}
          <span style={{ width: 1, height: 12, background: c.border }} />
          <MapPin size={13} color={a.blue} /> {t.location}
        </motion.div>

        <motion.h1 variants={reveal} className="hero-h1" style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 76, lineHeight: 1.05, letterSpacing: isRTL ? "0" : "-0.04em", marginBottom: 20, wordBreak: "break-word" }}>
          {t.heroName.l1}
          <br />
          <span className="gradient-text" style={{ backgroundImage: `linear-gradient(120deg, ${a.blue}, ${a.purple})` }}>{t.heroName.l2}</span>
        </motion.h1>

        <motion.p variants={reveal} className="hero-sub" style={{ fontFamily: fonts.heading, fontWeight: 500, fontSize: 22, color: c.muted, marginBottom: 20, letterSpacing: "-0.01em" }}>
          {t.heroTitle}{" "}
          <span style={{ fontFamily: fonts.latin, color: c.text, background: `${a.blue}1f`, padding: "2px 10px", borderRadius: 6, border: `1px solid ${a.blue}33`, fontSize: 18, whiteSpace: "nowrap" }}>Angular</span>
        </motion.p>

        <motion.p variants={reveal} style={{ fontSize: 17, lineHeight: 2, color: c.strong, maxWidth: 560, marginBottom: 40 }}>{t.heroSubtitle}</motion.p>

        <motion.div variants={reveal} className="cta-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <motion.button onClick={() => scrollTo("projects")} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ padding: "14px 28px", borderRadius: 10, border: "none", background: a.blue, color: c.onAccent, fontWeight: 600, fontSize: 15, fontFamily: fonts.body, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 0 24px ${a.blue}4d` }}>
            {t.ctaProjects} <ChevronRight size={16} style={{ transform: flip }} />
          </motion.button>
          <motion.button onClick={() => scrollTo("contact")} whileHover={{ y: -2, backgroundColor: `${a.blue}14` }} whileTap={{ scale: 0.97 }}
            style={{ padding: "14px 28px", borderRadius: 10, border: `1.5px solid ${a.blue}66`, background: "transparent", color: c.text, fontWeight: 600, fontSize: 15, fontFamily: fonts.body, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "background-color 0.2s, border-color 0.2s" }}>
            {t.ctaContact} <Mail size={15} style={{ color: a.blue }} />
          </motion.button>
        </motion.div>

        <motion.div style={{ opacity, display: "flex", alignItems: "center", gap: 8, marginTop: 48, color: c.faint, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><ArrowDown size={14} /></motion.div>
          {t.scroll}
        </motion.div>
      </motion.div>

      {/* Code card — intentionally dark in both themes (editor aesthetic) */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        dir="ltr" className="hero-code"
        style={{ y, background: "#121a28", border: "1px solid #1e2738", borderRadius: 16, padding: 32, position: "relative", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 60px rgba(96,165,250,0.1)", justifySelf: isRTL ? "start" : "end", width: "100%" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(96,165,250,0.08)", pointerEvents: "none" }} />
        <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
          {["#ef4444", "#fbbf24", "#34d399"].map((cc) => <span key={cc} style={{ width: 11, height: 11, borderRadius: "50%", background: cc, opacity: 0.7 }} />)}
        </div>
        <div style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1.8, color: "#94a3b8" }}>
          <div style={{ color: "#64748b", marginBottom: 12 }}>// profile.ts</div>
          <div><span style={{ color: "#60a5fa" }}>const</span> <span style={{ color: "#f8fafc" }}>developer</span> = {"{"}</div>
          {[["name", '"Abdelrahman"'], ["role", '"Front-End Dev"'], ["focus", '"Angular"'], ["location", '"Cairo, Egypt"']].map(([k, v]) => (
            <div key={k} style={{ paddingLeft: 20 }}><span style={{ color: "#a78bfa" }}>{k}</span>: <span style={{ color: "#34d399" }}>{v}</span>,</div>
          ))}
          <div style={{ paddingLeft: 20 }}><span style={{ color: "#a78bfa" }}>available</span>: <span style={{ color: "#60a5fa" }}>true</span>,</div>
          <div>{"}"}</div>
          <div style={{ marginTop: 16, borderTop: "1px solid #1e2738", paddingTop: 16 }}><span style={{ color: "#60a5fa" }}>const</span> <span style={{ color: "#f8fafc" }}>stack</span> = [</div>
          {["Angular", "TypeScript", "Tailwind", "Git"].map((s, i, arr) => (
            <div key={s} style={{ paddingLeft: 20 }}><span style={{ color: "#34d399" }}>"{s}"</span>{i < arr.length - 1 ? "," : ""}</div>
          ))}
          <div>]</div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── MARQUEE ── */
function Marquee({ c, a }: any) {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];
  return (
    <div style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: "18px 0", overflow: "hidden", marginBottom: 96, position: "relative" }}>
      <div style={{ position: "absolute", insetInlineStart: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(to right, ${c.bg}, transparent)`, zIndex: 2, pointerEvents: "none", transform: "none" }} />
      <div style={{ position: "absolute", insetInlineEnd: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(to left, ${c.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
      <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ display: "flex", gap: 40, whiteSpace: "nowrap", width: "max-content" }}>
        {items.map((tech, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 40, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 17, color: c.muted }}>
            {tech}<Sparkles size={12} color={a.blue} style={{ opacity: 0.5 }} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Shared ── */
function Divider({ c }: any) {
  return <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}><div style={{ height: 1, background: c.border }} /></div>;
}

function SectionHeader({ number, label, title, c, a, fonts }: any) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: a.blue }}>
        <span style={{ fontFamily: "monospace", color: c.faint }}>{number}</span>
        <div style={{ width: 20, height: 1, background: a.blue }} />
        {label}
      </div>
      {title && <h2 className="h-section" style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", marginTop: 16 }}>{title}</h2>}
    </motion.div>
  );
}

function ProjectCard({ project, content, c, a, fonts, flip }: any) {
  const color = a[project.colorKey];
  const isPrivate = project.private;
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) { mx.set(e.clientX - rect.left); my.set(e.clientY - rect.top); }
  };
  return (
    <motion.div ref={ref} variants={reveal} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onMouseMove={onMove} whileHover={{ y: -4 }}
      style={{ background: c.surface, border: `1px solid ${hovered ? color + "55" : c.border}`, borderRadius: 14, display: "flex", flexDirection: "column", transition: "border-color 0.25s, box-shadow 0.25s", boxShadow: hovered ? `0 14px 36px ${color}24` : "none", position: "relative", overflow: "hidden", height: "100%" }}>
      <motion.div style={{ position: "absolute", inset: 0, opacity: hovered ? 1 : 0, transition: "opacity 0.3s", background: useTransform([mx, my], ([x, y]) => `radial-gradient(240px circle at ${x}px ${y}px, ${color}12, transparent 70%)`), pointerEvents: "none", zIndex: 1 }} />

      {/* ── Screenshot preview placeholder (replaceable) ── */}
      <ProjectPreview color={color} hovered={hovered} />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 2, padding: 24, display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            {/* Project type tag */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.03em", color: color, background: `${color}14`, border: `1px solid ${color}2e`, padding: "3px 10px", borderRadius: 999, marginBottom: 10 }}>
              {isPrivate && <Lock size={11} />}{content.type}
            </span>
            <h3 style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em", lineHeight: 1.35, margin: 0 }}>
              <span dir="ltr" style={{ fontFamily: "monospace", fontSize: 13, color: color, opacity: 0.75, marginInlineEnd: 8 }}>{project.index}</span>
              {content.title}
            </h3>
          </div>
          <ArrowUpRight size={16} color={hovered ? color : c.faint} style={{ flexShrink: 0, marginTop: 4, transition: "color 0.2s", transform: flip }} />
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.8, color: c.muted, flexGrow: 1, margin: 0 }}>{content.desc}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.map((tag: string) => (
            <span key={tag} dir="ltr" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", padding: "4px 10px", borderRadius: 999, background: color + "18", border: `1px solid ${color}33`, color: color }}>{tag}</span>
          ))}
        </div>

        {content.note && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: c.faint, lineHeight: 1.5 }}>
            <Lock size={12} style={{ flexShrink: 0 }} /> {content.note}
          </div>
        )}

        {/* ── Action buttons (Demo/View stronger than Code) ── */}
        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1.4, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 12px", borderRadius: 8, background: color, border: `1px solid ${color}`, color: c.onAccent, fontSize: 13, fontWeight: 700, fontFamily: fonts.body, textDecoration: "none", transition: "opacity 0.2s", opacity: 1 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
            {isPrivate ? <Lock size={14} /> : <ExternalLink size={14} />} {content.demoLabel}
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 12px", borderRadius: 8, background: "transparent", border: `1px solid ${c.border}`, color: c.muted, fontSize: 13, fontWeight: 600, fontFamily: fonts.body, textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = c.faint; (e.currentTarget as HTMLElement).style.color = c.text; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = c.border; (e.currentTarget as HTMLElement).style.color = c.muted; }}>
            {isPrivate ? <Lock size={14} /> : <Github size={14} />} {content.codeLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* Replaceable screenshot placeholder — swap the inner block for a real <img> later */
function ProjectPreview({ color, hovered }: any) {
  return (
    <div dir="ltr" style={{ position: "relative", height: 150, overflow: "hidden", background: "linear-gradient(160deg, #0d1320, #121a28)", borderBottom: "1px solid #1e2738" }}>
      {/* glow */}
      <div style={{ position: "absolute", top: -50, insetInlineEnd: -40, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${color}26, transparent 70%)`, transition: "transform 0.4s", transform: hovered ? "scale(1.15)" : "scale(1)" }} />
      {/* browser chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px" }}>
        {["#ef4444", "#fbbf24", "#34d399"].map((cc) => <span key={cc} style={{ width: 9, height: 9, borderRadius: "50%", background: cc, opacity: 0.6 }} />)}
        <div style={{ flex: 1, height: 14, marginInlineStart: 8, borderRadius: 4, background: "#1e2738" }} />
      </div>
      {/* faux UI skeleton */}
      <div style={{ padding: "4px 14px 14px", display: "flex", gap: 10 }}>
        <div style={{ width: 46, display: "flex", flexDirection: "column", gap: 7, paddingTop: 4 }}>
          {[0, 1, 2, 3].map((i) => <div key={i} style={{ height: 7, borderRadius: 3, background: i === 0 ? `${color}66` : "#1e2738" }} />)}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 22, borderRadius: 5, background: `linear-gradient(90deg, ${color}40, #1e2738)` }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[0, 1, 2, 3].map((i) => <div key={i} style={{ height: 26, borderRadius: 5, background: "#161f30", border: "1px solid #1e2738" }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Service card ─── */
function ServiceCard({ svc, Icon, color, index, c, fonts, flip }: any) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div variants={reveal} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} whileHover={{ y: -6 }}
      style={{ background: c.surface, border: `1px solid ${hovered ? color + "66" : c.border}`, borderRadius: 16, padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 12, position: "relative", overflow: "hidden", transition: "border-color 0.25s, box-shadow 0.25s", boxShadow: hovered ? `0 16px 36px ${color}20` : "none" }}>
      {/* animated top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(to right, ${color}, ${color}44)`, transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" }} />
      {/* watermark index */}
      <span style={{ position: "absolute", top: -6, insetInlineEnd: 10, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 1, color: color, opacity: hovered ? 0.14 : 0.07, transition: "opacity 0.3s", pointerEvents: "none" }}>{index}</span>
      {/* glow */}
      <div style={{ position: "absolute", bottom: -50, insetInlineStart: -30, width: 150, height: 150, borderRadius: "50%", background: `radial-gradient(circle, ${color}1f, transparent 70%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

      <motion.div animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.5 }}
        style={{ width: 46, height: 46, borderRadius: 12, background: `${color}18`, border: `1px solid ${color}33`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <Icon size={21} color={color} />
      </motion.div>
      <div style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 16, lineHeight: 1.4, position: "relative", zIndex: 1 }}>{svc.title}</div>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: c.muted, margin: 0, flexGrow: 1, position: "relative", zIndex: 1 }}>{svc.desc}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, position: "relative", zIndex: 1, marginTop: 4, color: color, fontSize: 13, fontWeight: 600, opacity: hovered ? 1 : 0.6, transition: "opacity 0.25s" }}>
        <span style={{ width: hovered ? 24 : 16, height: 2, borderRadius: 2, background: color, transition: "width 0.25s" }} />
        <ArrowUpRight size={15} style={{ transform: flip }} />
      </div>
    </motion.div>
  );
}

function MiniProjectCard({ mp, c, a, fonts, flip }: any) {
  const color = a.blue;
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) { mx.set(e.clientX - rect.left); my.set(e.clientY - rect.top); }
  };
  return (
    <motion.div ref={ref} variants={reveal} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onMouseMove={onMove} whileHover={{ y: -3 }}
      style={{ background: c.surface, border: `1px solid ${hovered ? color + "44" : c.border}`, borderRadius: 12, display: "flex", flexDirection: "column", transition: "border-color 0.25s, box-shadow 0.25s", boxShadow: hovered ? `0 10px 28px ${color}18` : "none", overflow: "hidden" }}>
      <motion.div style={{ position: "absolute", inset: 0, opacity: hovered ? 1 : 0, pointerEvents: "none", transition: "opacity 0.3s", background: useTransform([mx, my], ([x, y]) => `radial-gradient(180px circle at ${x}px ${y}px, ${color}0e, transparent 70%)`) }} />
      {/* Compact preview */}
      <div style={{ position: "relative", height: 100, overflow: "hidden", background: "linear-gradient(160deg, #0d1320, #121a28)", borderBottom: `1px solid ${c.border}` }}>
        <div style={{ position: "absolute", top: -30, right: -20, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${color}1a, transparent 70%)` }} />
        <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px" }}>
          {["#ef4444", "#fbbf24", "#34d399"].map((cc) => <span key={cc} style={{ width: 8, height: 8, borderRadius: "50%", background: cc, opacity: 0.6 }} />)}
          <div style={{ flex: 1, height: 10, marginInlineStart: 6, borderRadius: 3, background: "#1e2738" }} />
        </div>
        <div style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ height: 14, borderRadius: 4, background: `linear-gradient(90deg, ${color}33, #1e2738)` }} />
          <div style={{ display: "flex", gap: 8 }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ flex: 1, height: 18, borderRadius: 4, background: "#161f30", border: "1px solid #1e2738" }} />)}
          </div>
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 10, flexGrow: 1 }}>
        <h3 style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 15, lineHeight: 1.35, margin: 0, color: c.text }}>{mp.title}</h3>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: c.muted, margin: 0 }}>{mp.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {mp.tags.map((tag: string) => (
            <span key={tag} dir="ltr" style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 999, background: `${color}14`, border: `1px solid ${color}28`, color: color }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <a href={mp.demo} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1.3, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "8px 10px", borderRadius: 7, background: color, color: "#0b0e14", fontSize: 12, fontWeight: 700, fontFamily: fonts.body, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}>
            <ExternalLink size={13} /> {mp.demoLabel}
          </a>
          <a href={mp.github} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "8px 10px", borderRadius: 7, background: "transparent", border: `1px solid ${c.border}`, color: c.muted, fontSize: 12, fontWeight: 600, fontFamily: fonts.body, textDecoration: "none", transition: "border-color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = c.faint)} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = c.border)}>
            <Github size={13} /> {mp.codeLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsShowcase({ c, a, t, fonts, isRTL }: any) {
  const [active, setActive] = useState(0);

  const cats = SKILL_META.map((meta, i) => ({
    Icon: meta.icon,
    color: a[meta.colorKey],
    label: t.skillLabels[i],
    items: t.skillItems[i] ?? [],
  }));

  const allItems = cats.flatMap((cat) =>
    cat.items.map((item: string) => ({ item, color: cat.color }))
  );

  const activeCat = cats[active];

  return (
    <motion.div
      variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
      style={{ marginTop: 48 }}
    >
      {t.skillsSubtitle && (
        <motion.p variants={reveal} style={{ fontSize: 15, color: c.muted, lineHeight: 1.8, marginBottom: 40, maxWidth: 560 }}>
          {t.skillsSubtitle}
        </motion.p>
      )}

      <div className="skills-layout" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>

        {/* ── LEFT: vertical category list ── */}
        <motion.div variants={reveal} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {cats.map((cat, i) => {
            const isActive = i === active;
            return (
              <motion.button key={i} onClick={() => setActive(i)}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 16px", borderRadius: 12, border: "none",
                  background: isActive ? `${cat.color}12` : "transparent",
                  cursor: "pointer", textAlign: isRTL ? "right" : "left",
                  transition: "background 0.22s",
                  outline: "none", width: "100%",
                  position: "relative", overflow: "hidden",
                }}>
                {/* Active side bar */}
                {isActive && (
                  <motion.div layoutId="skill-bar"
                    style={{ position: "absolute", insetInlineStart: 0, top: 8, bottom: 8, width: 3, borderRadius: 2, background: cat.color }} />
                )}
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: isActive ? `${cat.color}20` : `${cat.color}0e`,
                  border: `1px solid ${isActive ? cat.color + "44" : cat.color + "1a"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.22s",
                }}>
                  <cat.Icon size={16} color={cat.color} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                  <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 14, color: isActive ? c.text : c.muted, transition: "color 0.2s", lineHeight: 1.2 }}>
                    {cat.label}
                  </span>
                  <span style={{ fontSize: 12, color: c.faint, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {cat.items.length} items
                  </span>
                </div>
                {isActive && (
                  <div style={{ marginInlineStart: "auto", fontSize: 11, fontWeight: 700, color: activeCat.color, fontFamily: "monospace", opacity: 0.8 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── RIGHT: active panel + all-tags cloud ── */}
        <motion.div variants={reveal} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Active category panel */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: c.surface, border: `1px solid ${activeCat.color}33`, borderRadius: 16, padding: "24px 28px", position: "relative", overflow: "hidden" }}>

              {/* Corner glow — subtle */}
              <div style={{ position: "absolute", top: -48, insetInlineEnd: -48, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${activeCat.color}12, transparent 70%)`, pointerEvents: "none" }} />

              {/* Panel header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${activeCat.color}18`, border: `1px solid ${activeCat.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <activeCat.Icon size={19} color={activeCat.color} />
                </div>
                <div>
                  <div style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 17, color: c.text }}>{activeCat.label}</div>
                  <div style={{ fontSize: 13, color: c.muted }}>{activeCat.items.length}{isRTL ? " تقنيات" : " technologies"}</div>
                </div>
                <div style={{ marginInlineStart: "auto", width: 36, height: 36, borderRadius: "50%", background: `${activeCat.color}0e`, border: `1px solid ${activeCat.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: activeCat.color }}>{String(active + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Chip row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {activeCat.items.map((item: string, i: number) => (
                  <motion.span key={item} dir="ltr"
                    initial={{ opacity: 0, y: 6, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontSize: 13, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif",
                      padding: "7px 14px", borderRadius: 10,
                      background: `${activeCat.color}10`,
                      border: `1px solid ${activeCat.color}28`,
                      color: c.text,
                    }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All-skills compact cloud */}
          <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: "20px 24px" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: c.faint, marginBottom: 14 }}>
              {isRTL ? "كل المهارات" : "All skills"}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {allItems.map(({ item, color }, i) => (
                <motion.span key={`${item}-${i}`} dir="ltr"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.015 }}
                  style={{
                    fontSize: 12, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif",
                    padding: "5px 11px", borderRadius: 8,
                    background: "transparent",
                    border: `1px solid ${c.border}`,
                    color: c.muted,
                    cursor: "default",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = color + "55";
                    (e.currentTarget as HTMLElement).style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.border;
                    (e.currentTarget as HTMLElement).style.color = c.muted;
                  }}>
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

function ContactItem({ icon, label, value, href, c, a }: any) {
  return (
    <motion.div variants={reveal} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ width: 38, height: 38, borderRadius: 8, background: `${a.blue}1a`, border: `1px solid ${a.blue}26`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: c.faint, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>{label}</div>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" dir="ltr" style={{ fontSize: 14, color: c.muted, textDecoration: "none", transition: "color 0.2s", wordBreak: "break-word" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = a.blue)} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = c.muted)}>{value}</a>
        ) : <span style={{ fontSize: 14, color: c.muted }}>{value}</span>}
      </div>
    </motion.div>
  );
}

function FormField({ label, type, placeholder, value, onChange, c, a, fonts }: any) {
  const id = `f-${label}`;
  return (
    <div>
      <label htmlFor={id} style={{ display: "block", fontSize: 14, color: c.strong, marginBottom: 8, fontWeight: 600 }}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required
        style={{ width: "100%", background: c.inputBg, border: `1px solid ${c.border}`, borderRadius: 10, padding: "12px 14px", fontSize: 15, color: c.text, outline: "none", boxSizing: "border-box", fontFamily: fonts.body, transition: "border-color 0.2s, box-shadow 0.2s" }}
        onFocus={(e) => { e.target.style.borderColor = a.blue; e.target.style.boxShadow = `0 0 0 3px ${a.blue}33`; }}
        onBlur={(e) => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; }} />
    </div>
  );
}

export interface LocalizedText {
  readonly en: string;
  readonly ar: string;
}

export interface NavLink {
  readonly id: string;
  readonly label: LocalizedText;
  readonly href: string;
}

export interface PersonalInfo {
  readonly name: LocalizedText;
  readonly role: LocalizedText;
  readonly location: LocalizedText;
  readonly email: string;
  readonly phone: string;
  readonly resumeUrl: string;
  readonly resumePdfUrl: string;
  readonly resumeAvailable: boolean;
}

export interface HeroContent {
  readonly badge: LocalizedText;
  readonly description: LocalizedText;
  readonly clientLine: LocalizedText;
  readonly primaryCta: LocalizedText;
  readonly secondaryCta: LocalizedText;
  readonly scrollLabel: LocalizedText;
}

export interface StatItem {
  readonly id: string;
  readonly label: LocalizedText;
  readonly detail: LocalizedText;
}

export interface AboutContent {
  readonly heading: LocalizedText;
  readonly paragraph: LocalizedText;
}

export interface SectionHeadingContent {
  readonly label: LocalizedText;
  readonly title?: LocalizedText;
}

export interface PortfolioSectionHeadings {
  readonly about: SectionHeadingContent;
  readonly services: SectionHeadingContent;
  readonly projects: SectionHeadingContent;
  readonly moreProjects: SectionHeadingContent;
  readonly testimonials: SectionHeadingContent;
  readonly skills: SectionHeadingContent;
  readonly process: SectionHeadingContent;
  readonly contact: SectionHeadingContent;
}

export interface TimelineItem {
  readonly id: string;
  readonly title: LocalizedText;
  readonly place: LocalizedText;
  readonly date: LocalizedText;
  readonly description: LocalizedText;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface ProjectAction {
  readonly label: LocalizedText;
  readonly url?: string;
  readonly isPrivate?: boolean;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: LocalizedText;
  readonly type?: LocalizedText;
  readonly description: LocalizedText;
  readonly problem?: LocalizedText;
  readonly solution?: LocalizedText;
  readonly outcome?: LocalizedText;
  readonly roleLine?: LocalizedText;
  readonly tags: readonly string[];
  readonly actions: readonly ProjectAction[];
  readonly note?: LocalizedText;
  readonly imageUrl?: string;
  readonly imageAlt?: LocalizedText;
  readonly imagePosition?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: LocalizedText;
  readonly items: readonly string[];
}

export interface CertificationItem {
  readonly id: string;
  readonly title: LocalizedText;
}

export interface TestimonialItem {
  readonly id: string;
  readonly quote: LocalizedText;
  readonly name: LocalizedText;
  readonly role: LocalizedText;
}

export interface ProcessStep {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
}

export interface ContactFormLabels {
  readonly name: LocalizedText;
  readonly email: LocalizedText;
  readonly message: LocalizedText;
  readonly submit: LocalizedText;
}

export interface ContactInfo {
  readonly heading: LocalizedText;
  readonly paragraph: LocalizedText;
  readonly email: string;
  readonly phone: string;
  readonly location: LocalizedText;
  readonly formLabels: ContactFormLabels;
}

export interface FooterLink {
  readonly id: string;
  readonly label: LocalizedText;
  readonly href: string;
}

export interface FooterContent {
  readonly text: LocalizedText;
  readonly copyright: LocalizedText;
  readonly socialLinks: readonly FooterLink[];
}

export interface PortfolioData {
  readonly personal: PersonalInfo;
  readonly navLinks: readonly NavLink[];
  readonly hero: HeroContent;
  readonly featuredSkills: readonly string[];
  readonly stats: readonly StatItem[];
  readonly sectionHeadings: PortfolioSectionHeadings;
  readonly about: AboutContent;
  readonly timeline: readonly TimelineItem[];
  readonly services: readonly ServiceItem[];
  readonly featuredProjects: readonly ProjectItem[];
  readonly moreProjects: readonly ProjectItem[];
  readonly testimonials: readonly TestimonialItem[];
  readonly skills: readonly SkillCategory[];
  readonly processSteps: readonly ProcessStep[];
  readonly certifications: readonly CertificationItem[];
  readonly contact: ContactInfo;
  readonly footer: FooterContent;
}

export type Language = 'bn' | 'en';

export interface NavItem {
  id: string;
  label: {
    bn: string;
    en: string;
  };
  href: string;
}

export type PortfolioCategory =
  | 'all'
  | 'logo'
  | 'branding'
  | 'social_media'
  | 'poster'
  | 'banner'
  | 'thumbnail'
  | 'photo_editing'
  | 'video';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: {
    bn: string;
    en: string;
  };
  subtitle: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  client: {
    bn: string;
    en: string;
  };
  year: string;
  tools: string[];
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  imagePlaceholderType: 'logo' | 'branding' | 'social' | 'poster' | 'banner' | 'thumbnail' | 'photo' | 'video';
  customImageUrl?: string;
  tags: {
    bn: string[];
    en: string[];
  };
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  deliverables: {
    bn: string[];
    en: string[];
  };
  popular?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: {
    bn: string;
    en: string;
  };
  experience: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  badge: {
    bn: string;
    en: string;
  };
  icon: string;
}

export interface WhyChooseItem {
  id: string;
  iconName: string;
  title: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
}

export interface ProcessStep {
  step: string;
  stepNumber: string;
  title: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  deliverables: {
    bn: string;
    en: string;
  };
}

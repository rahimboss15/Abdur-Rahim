import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: {
      bn: 'ফটো ম্যানিপুলেশন ও কম্পোজিটিং',
      en: 'Photo Manipulation & Compositing',
    },
    experience: {
      bn: '৫+ বছরের গভীর অভিজ্ঞতা',
      en: '5+ Years Daily Production',
    },
    badge: {
      bn: 'মাস্টারি লেভেল',
      en: 'Mastery Level',
    },
    description: {
      bn: 'হাই-এন্ড স্কিন রিটাচিং, কালার গ্রেডিং, প্রোডাক্ট কম্পোজিটিং, বিজ্ঞাপন আর্টওয়ার্ক এবং সোশ্যাল মিডিয়া ব্যানার নির্মাণ।',
      en: 'High-end frequency separation, commercial product retouching, complex composite art, and color balance grading.',
    },
    icon: 'Layers',
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: {
      bn: 'ভেক্টর ইলাস্ট্রেশন ও ব্র্যান্ডিং',
      en: 'Vector Illustration & Identity',
    },
    experience: {
      bn: '৫+ বছরের ভেক্টর পারফেকশন',
      en: '5+ Years Vector Craft',
    },
    badge: {
      bn: 'মাস্টারি লেভেল',
      en: 'Mastery Level',
    },
    description: {
      bn: 'পিক্সেল-পারফেক্ট ভেক্টর লোগো, মনোগ্রাম, ব্র্যান্ড গাইডলাইন, প্রিন্ট স্টেশনারি ও আইকনোগ্রাফি সিস্টেম ডিজাইন।',
      en: 'Pixel-perfect vector logo geometry, corporate brand kits, print stationery, packaging die-lines, and scalable iconography.',
    },
    icon: 'PenTool',
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    category: {
      bn: 'প্রফেশনাল ভিডিও এডিটিং',
      en: 'Professional Video Editing',
    },
    experience: {
      bn: '৩+ বছরের ভিডিও প্রোডাকশন',
      en: '3+ Years Video Production',
    },
    badge: {
      bn: 'অ্যাডভান্সড লেভেল',
      en: 'Advanced Level',
    },
    description: {
      bn: 'ইউটিউব লং-ভিডিও, প্রমোশনাল কমার্শিয়াল, ডায়নামিক স্পিড র‍্যাম্পিং, কালার কারেকশন এবং ক্রিস্প সাউন্ড মিক্সিং।',
      en: 'Multi-cam sequencing, commercial pacing, dynamic speed ramps, audio noise cleanup, and broadcast export mastery.',
    },
    icon: 'Film',
  },
  {
    id: 'after-effects',
    name: 'Adobe After Effects',
    category: {
      bn: 'মোশন গ্রাফিক্স ও ভিজ্যুয়াল ইফেক্টস',
      en: 'Motion Graphics & VFX',
    },
    experience: {
      bn: '৩+ বছরের মোশন ডিজাইন',
      en: '3+ Years Motion Design',
    },
    badge: {
      bn: 'প্রফেশনাল লেভেল',
      en: 'Professional Level',
    },
    description: {
      bn: 'লোগো অ্যানিমেশন, কাইনেটিক টাইপোগ্রাফি, লোয়ার থার্ডস এবং সোশ্যাল মিডিয়া প্রমোশনাল মোশন রিলস তৈরি।',
      en: 'Logo reveals, kinetic typography animations, UI micro-interactions, seamless transitions, and vector morphing.',
    },
    icon: 'Sparkles',
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: {
      bn: 'কুইক টার্নঅ্যারাউন্ড ও টেমপ্লেটিং',
      en: 'Rapid Turnaround & Templates',
    },
    experience: {
      bn: '৪+ বছরের ক্লায়েন্ট টেমপ্লেটিং',
      en: '4+ Years Client Systems',
    },
    badge: {
      bn: 'এক্সপার্ট লেভেল',
      en: 'Expert Level',
    },
    description: {
      bn: 'ক্লায়েন্টদের সহজে এডিটযোগ্য সোশ্যাল মিডিয়া টেমপ্লেট, দ্রুত প্রেজেন্টেশন স্লাইড এবং ব্র্যান্ড কিট তৈরি।',
      en: 'Editable brand kits for non-designer clients, fast turnaround presentation decks, and consistent social templates.',
    },
    icon: 'Palette',
  },
  {
    id: 'capcut',
    name: 'CapCut Pro',
    category: {
      bn: 'শর্ট-ফর্ম ভিডিও ও ভাইরাল কনটেন্ট',
      en: 'Short-Form Viral Video Editing',
    },
    experience: {
      bn: '২+ বছরের শর্টস ও রিলস এক্সপেরিয়েন্স',
      en: '2+ Years Viral Reels',
    },
    badge: {
      bn: 'হাই-কনভার্সন স্পেশালিস্ট',
      en: 'High-Retention Specialist',
    },
    description: {
      bn: 'TikTok, Instagram Reels এবং YouTube Shorts-এর জন্য দ্রুত ট্রানজিশন, অটো-ক্যাপশন এবং ট্রেন্ডিং সাউন্ড এফেক্ট।',
      en: 'High-retention mobile short pacing, auto-synced kinetic captions, trending sound manipulation, and vertical video exports.',
    },
    icon: 'Smartphone',
  },
  {
    id: 'ai-tools',
    name: 'AI Design Tools (Midjourney & Firefly)',
    category: {
      bn: 'জেনারেটিভ AI ভিজ্যুয়ালাইজেশন',
      en: 'Generative AI Visualization',
    },
    experience: {
      bn: 'আধুনিক AI প্রোডাকশন পাইপলাইন',
      en: 'Modern AI Pipeline',
    },
    badge: {
      bn: 'ইনোভেশন ফোকাসড',
      en: 'Innovation Focused',
    },
    description: {
      bn: 'উন্নত প্রম্পট ইঞ্জিনিয়ারিং, স্টাইল কন্ট্রোল, ইমেজ সিন্থেসিস এবং ফটোশপে নির্ভুল ম্যানুয়াল পোস্ট-প্রসেসিং।',
      en: 'Prompt engineering, reference style tuning, concept ideation, and seamless post-synthesis manual Photoshop retouching.',
    },
    icon: 'Cpu',
  },
  {
    id: 'branding-strategy',
    name: 'Branding & Visual Communication',
    category: {
      bn: 'ব্র্যান্ড স্ট্র্যাটেজি ও নান্দনিকতা',
      en: 'Brand Strategy & Aesthetics',
    },
    experience: {
      bn: 'কমপ্লিট ভিজ্যুয়াল ইকোসিস্টেম',
      en: 'Complete Visual Ecosystems',
    },
    badge: {
      bn: 'কোর ফাউন্ডেশন',
      en: 'Core Foundation',
    },
    description: {
      bn: 'কালার সাইকোলজি, টাইপোগ্রাফিক হায়ারার্কি, গ্রিড সিস্টেম এবং আন্তর্জাতিক ডিজাইন স্ট্যান্ডার্ডের সঠিক প্রয়োগ।',
      en: 'Color psychology, typographic hierarchy, editorial grid systems, and strategic market positioning for lasting recall.',
    },
    icon: 'Compass',
  },
];

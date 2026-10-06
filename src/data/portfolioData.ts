import { PortfolioCategory, PortfolioItem } from '../types';

export const portfolioCategories: { id: PortfolioCategory; label: { bn: string; en: string } }[] = [
  { id: 'all', label: { bn: 'সব', en: 'All' } },
  { id: 'logo', label: { bn: 'লোগো', en: 'Logo' } },
  { id: 'branding', label: { bn: 'ব্র্যান্ডিং', en: 'Branding' } },
  { id: 'social_media', label: { bn: 'সোশ্যাল মিডিয়া', en: 'Social Media' } },
  { id: 'poster', label: { bn: 'পোস্টার', en: 'Poster' } },
  { id: 'banner', label: { bn: 'ব্যানার', en: 'Banner' } },
  { id: 'thumbnail', label: { bn: 'থাম্বনেইল', en: 'Thumbnail' } },
  { id: 'photo_editing', label: { bn: 'ফটো এডিটিং', en: 'Photo Editing' } },
  { id: 'video', label: { bn: 'ভিডিও', en: 'Video' } },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'lumina-brand-system',
    category: 'branding',
    title: {
      bn: 'লুমিনা লাক্সারি লাইফস্টাইল ব্র্যান্ড আইডেন্টিটি',
      en: 'Lumina Luxury Lifestyle Brand Identity',
    },
    subtitle: {
      bn: 'কমপ্লিট ভিজ্যুয়াল গাইডলাইন ও স্টেশনারি',
      en: 'Complete Visual Guidelines & Stationery',
    },
    description: {
      bn: 'একটি প্রিমিয়াম লাইফস্টাইল ব্র্যান্ডের জন্য মিনিমালিস্ট গোল্ড ও ডিপ চারকোল কালার প্যালেটের উপর ভিত্তি করে সম্পূর্ণ ভিজ্যুয়াল আইডেন্টিটি, টাইপোগ্রাফি সিস্টেম ও স্টেশনারি ডিজাইন।',
      en: 'Complete visual identity architecture for an upscale lifestyle brand, combining bespoke typography, gold foil stamping guidelines, and dark charcoal stationery.',
    },
    client: {
      bn: 'লুমিনা রোস্টার্স ও লিভিং',
      en: 'Lumina Roasters & Living',
    },
    year: '2025',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    aspectRatio: '4:3',
    imagePlaceholderType: 'branding',
    tags: {
      bn: ['ব্র্যান্ডিং', 'লাক্সারি', 'স্টেশনারি', 'গোল্ড ফয়েল'],
      en: ['Branding', 'Luxury', 'Stationery', 'Gold Foil'],
    },
  },
  {
    id: 'apex-cyber-logo',
    category: 'logo',
    title: {
      bn: 'অ্যাপেক্স টেকনোলজিস মিনিমাল মনোগ্রাম',
      en: 'Apex Technologies Minimal Monogram',
    },
    subtitle: {
      bn: 'ভেক্টর মনোগ্রাম ও জিওমেট্রিক আইকনোগ্রাফি',
      en: 'Vector Monogram & Geometric Iconography',
    },
    description: {
      bn: 'AI এবং ক্লাউড ইনফ্রাস্ট্রাকচার স্টার্টআপের জন্য মার্জিত ‘A’ অক্ষরের জ্যামিতিক মনোগ্রাম। এটি বিভিন্ন স্কেলে ও ডার্ক মোডে স্পষ্টভাবে ফুটে ওঠে।',
      en: 'Engineered geometric monogram mark for an enterprise cloud venture, balancing mathematical symmetry with tech-forward minimalism.',
    },
    client: {
      bn: 'অ্যাপেক্স ক্লাউড সলিউশন্স',
      en: 'Apex Cloud Solutions',
    },
    year: '2025',
    tools: ['Adobe Illustrator', 'Grid Systems'],
    aspectRatio: '1:1',
    imagePlaceholderType: 'logo',
    tags: {
      bn: ['লোগো', 'মনোগ্রাম', 'টেকনোলজি', 'ভেক্টর'],
      en: ['Logo', 'Monogram', 'Tech', 'Vector'],
    },
  },
  {
    id: 'zenith-social-campaign',
    category: 'social_media',
    title: {
      bn: 'জেনিত ফ্যাশন সামার ড্রপ সোশ্যাল ক্যাম্পেইন',
      en: 'Zenith Fashion Summer Drop Social Campaign',
    },
    subtitle: {
      bn: 'ইনস্টাগ্রাম ক্যারোসেল ও ফেসবুক প্রমোশনাল আর্ট',
      en: 'Instagram Carousels & Facebook Promotional Art',
    },
    description: {
      bn: 'ফ্যাশন ব্র্যান্ডের নতুন কালেকশন লঞ্চের জন্য হাই-কনভার্সন ৯টি ক্যারোসেল স্লাইড, এঙ্গেজিং টাইপোগ্রাফি ও প্রোডাক্ট হাইলাইট ডিজাইন।',
      en: 'High-converting social launch campaign consisting of 9 sequential carousel frames, dynamic editorial type, and seamless swipe engagement.',
    },
    client: {
      bn: 'জেনিত আরবান ওয়্যার',
      en: 'Zenith Urban Wear',
    },
    year: '2026',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
    aspectRatio: '4:3',
    imagePlaceholderType: 'social',
    tags: {
      bn: ['সোশ্যাল মিডিয়া', 'ক্যারোসেল', 'ফ্যাশন', 'মার্কেটিং'],
      en: ['Social Media', 'Carousel', 'Fashion', 'Marketing'],
    },
  },
  {
    id: 'dhaka-design-fest-poster',
    category: 'poster',
    title: {
      bn: 'ঢাকা আন্তর্জাতিক ডিজাইন এক্সপো ২০২৬ অফিশিয়াল পোস্টার',
      en: 'Dhaka Design Expo 2026 Official Poster',
    },
    subtitle: {
      bn: 'সুইস টাইপোগ্রাফিক ও জিওমেট্রিক প্রিন্ট আর্ট',
      en: 'Swiss Typographic & Geometric Print Art',
    },
    description: {
      bn: 'আন্তর্জাতিক ডিজাইন সম্মেলনের জন্য তৈরি নজরকাড়া পোস্টার। এতে সুইস গ্রিড স্ট্রাকচার ও ডার্ক ক্রিমসন এক্সেন্টের চমৎকার সংমিশ্রণ ঘটানো হয়েছে।',
      en: 'Official editorial exhibition poster combining international Swiss typographic grid discipline with bold crimson spatial dynamics.',
    },
    client: {
      bn: 'ডিজাইন কনক্লেভ বাংলাদেশ',
      en: 'Design Conclave BD',
    },
    year: '2026',
    tools: ['Adobe Illustrator', 'Adobe InDesign'],
    aspectRatio: '3:4',
    imagePlaceholderType: 'poster',
    tags: {
      bn: ['পোস্টার', 'টাইপোগ্রাফি', 'প্রিন্ট', 'এক্সপো'],
      en: ['Poster', 'Typography', 'Print', 'Exhibition'],
    },
  },
  {
    id: 'nexus-summit-banner',
    category: 'banner',
    title: {
      bn: 'নেক্সাস টেক সামিট কনফারেন্স ব্যানার ও বিলবোর্ড',
      en: 'Nexus Tech Summit Conference Rollup & Billboard',
    },
    subtitle: {
      bn: 'লার্জ ফরম্যাট প্রিন্ট ও স্টেজ ব্যাকড্রপ ডিজাইন',
      en: 'Large Format Print & Stage Backdrop Design',
    },
    description: {
      bn: '৫০০০+ অংশগ্রহণকারীর টেক কনফারেন্সের জন্য মূল স্টেজ ব্যাকড্রপ, রোল-আপ ব্যানার এবং এন্ট্রি গেট ব্র্যান্ডিং ব্যানার।',
      en: 'High-visibility roll-up banners, stage backdrop, and registration booth branding crafted for a flagship tech conference.',
    },
    client: {
      bn: 'নেক্সাস গ্লোবাল ফোরাম',
      en: 'Nexus Global Forum',
    },
    year: '2025',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    aspectRatio: '16:9',
    imagePlaceholderType: 'banner',
    tags: {
      bn: ['ব্যানার', 'রোল-আপ', 'কনফারেন্স', 'বিলবোর্ড'],
      en: ['Banner', 'Roll-up', 'Conference', 'Billboard'],
    },
  },
  {
    id: 'viral-tech-thumbnail',
    category: 'thumbnail',
    title: {
      bn: 'প্রো টেক ইউটিউব চ্যানেলের ভাইরাল থাম্বনেইল সিরিজ',
      en: 'Pro Tech YouTube Channel High-CTR Thumbnail Series',
    },
    subtitle: {
      bn: 'হাই-ক্লিক রেট থাম্বনেইল আর্ট ও ফেস রিটাচ',
      en: 'High-CTR Thumbnail Art & Dynamic Retouch',
    },
    description: {
      bn: '১ মিলিয়নের বেশি সাবস্ক্রাইবার বিশিষ্ট চ্যানেলের জন্য ১৫% গড় CTR অর্জনে সাহায্যকারী হাই-কনট্রাস্ট, বোল্ড টেক্সট ও অভিব্যক্তিপূর্ণ থাম্বনেইল।',
      en: 'Punchy high-contrast YouTube thumbnails generating 15%+ average CTR with bold typography, expressive facial cutouts, and 3D glow accents.',
    },
    client: {
      bn: 'টেক ভিশন বিডি',
      en: 'TechVision BD (1.2M Subs)',
    },
    year: '2026',
    tools: ['Adobe Photoshop', 'Lightroom'],
    aspectRatio: '16:9',
    imagePlaceholderType: 'thumbnail',
    tags: {
      bn: ['থাম্বনেইল', 'ইউটিউব', 'হাই-CTR', 'ফটোশপ'],
      en: ['Thumbnail', 'YouTube', 'High CTR', 'Photoshop'],
    },
  },
  {
    id: 'luxury-watch-retouch',
    category: 'photo_editing',
    title: {
      bn: 'ক্রোনো লাক্সারি ওয়াচ কমার্শিয়াল ফটো রিটাচিং',
      en: 'Chrono Luxury Watch Commercial Photo Retouching',
    },
    subtitle: {
      bn: 'হাই-এন্ড প্রোডাক্ট রিটাচ ও মেটালিক রিফ্লেকশন ফিনিশ',
      en: 'High-End Product Retouch & Metallic Reflection Finish',
    },
    description: {
      bn: 'লাক্সারি ঘড়ির ক্যাটালগের জন্য ডাস্ট ক্লিনিং, মেটাল সারফেস পলিশ, ডায়াল কনট্রাস্ট কারেকশন এবং রিয়েলিস্টিক ড্রপ শ্যাডো তৈরি।',
      en: 'Flawless commercial product manipulation, dust removal, bezel illumination enhancement, and realistic shadow grading.',
    },
    client: {
      bn: 'ক্রোনো টাইমপিসেস',
      en: 'Chrono Timepieces Swiss',
    },
    year: '2025',
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    aspectRatio: '4:3',
    imagePlaceholderType: 'photo',
    tags: {
      bn: ['ফটো এডিটিং', 'প্রোডাক্ট', 'রিটাচিং', 'কমার্স'],
      en: ['Photo Editing', 'Product', 'Retouching', 'Commercial'],
    },
  },
  {
    id: 'cinematic-brand-reel',
    category: 'video',
    title: {
      bn: 'অরুরা অটোমোবাইল সিনেমাটিক প্রমো রিল ও শর্টস',
      en: 'Aurora Motors Cinematic Promo Reel & Motion Edit',
    },
    subtitle: {
      bn: 'ডায়নামিক স্পিড র‍্যাম্পিং ও সাউন্ড মাস্টারিং',
      en: 'Dynamic Speed Ramping & Spatial Sound Design',
    },
    description: {
      bn: 'সোশ্যাল মিডিয়া রিলসের জন্য তৈরি দ্রুতগতির সিনেমাটিক ভিডিও এডিটিং। এতে কালার গ্রেডিং, কাস্টম সাউন্ড ইফেক্ট ও কাইনেটিক সাবটাইটেল সংযুক্ত।',
      en: 'Fast-paced cinematic commercial edit featuring rhythmic beat cuts, bespoke sound design, custom LUT color grading, and animated captions.',
    },
    client: {
      bn: 'অরুরা মোটরস গ্রুপ',
      en: 'Aurora Motors Group',
    },
    year: '2026',
    tools: ['Adobe Premiere Pro', 'After Effects', 'CapCut Pro'],
    aspectRatio: '16:9',
    imagePlaceholderType: 'video',
    tags: {
      bn: ['ভিডিও', 'রিলস', 'সাউন্ড ডিজাইন', 'কালার গ্রেডিং'],
      en: ['Video', 'Reels', 'Sound Design', 'Color Grading'],
    },
  },
  {
    id: 'vanguard-packaging-box',
    category: 'branding',
    title: {
      bn: 'ভ্যানগার্ড অরগানিক কসমেটিক্স প্যাকেজিং ও লেবেল',
      en: 'Vanguard Organic Cosmetics Packaging & Label',
    },
    subtitle: {
      bn: 'প্রিমিয়াম প্রসাধনী বক্স ও জার লেবেল সিস্টেম',
      en: 'Premium Cosmetic Box & Jar Label System',
    },
    description: {
      bn: 'অর্গানিক স্কিনকেয়ার পণ্যের জন্য পরিবেশবান্ধব ড্রাফট পেপার টেক্সচার ও ম্যাট গোল্ড ফিনিশ প্যাকেজিং বক্স ডিজাইন।',
      en: 'Eco-luxury cosmetic packaging design incorporating blind debossing, tactile textures, regulatory typography, and barcode compliance.',
    },
    client: {
      bn: 'ভ্যানগার্ড স্কিনকেয়ার',
      en: 'Vanguard Skincare Naturals',
    },
    year: '2025',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    aspectRatio: '4:3',
    imagePlaceholderType: 'branding',
    tags: {
      bn: ['ব্র্যান্ডিং', 'প্যাকেজিং', 'লেবেল', 'প্রোডাক্ট'],
      en: ['Branding', 'Packaging', 'Label', 'Product'],
    },
  },
];

/**
 * AR DesignBD - Centralized Bilingual Translation System
 * 
 * Supports both Bengali (বাংলা) and English with instant switching and localStorage persistence.
 */

export const translations = {
  bn: {
    // Top Bar & Navigation
    nav: {
      home: 'হোম',
      about: 'আমার সম্পর্কে',
      services: 'সেবাসমূহ',
      portfolio: 'পোর্টফোলিও',
      skills: 'দক্ষতা',
      whyChoose: 'কেন আমি',
      process: 'কাজের প্রক্রিয়া',
      contact: 'যোগাযোগ',
      ctaButton: 'ডিজাইনের জন্য যোগাযোগ করুন',
      switchLang: 'English',
      switchLangShort: 'EN',
      currentLangLabel: 'বাংলা',
      mobileMenuOpen: 'মেনু খুলুন',
      mobileMenuClose: 'মেনু বন্ধ করুন',
    },

    // Hero Section
    hero: {
      smallLabel: 'AR DESIGNBD',
      taglineBadge: 'প্রফেশনাল ক্রিয়েটিভ স্টুডিও',
      heading: 'আব্দুর রহিম ডিজাইন ঘর',
      description: 'ব্যক্তি, ব্যবসা ও প্রতিষ্ঠানের জন্য প্রফেশনাল গ্রাফিক ডিজাইন, ব্র্যান্ডিং, সোশ্যাল মিডিয়া ডিজাইন এবং ভিডিও এডিটিং সেবা।',
      viewWorkBtn: 'আমার কাজ দেখুন',
      contactBtn: 'যোগাযোগ করুন',
      metrics: {
        experience: 'বছরের অভিজ্ঞতা',
        projects: 'সম্পন্ন প্রজেক্ট',
        satisfaction: 'সন্তুষ্ট ক্লায়েন্ট',
        rating: 'রেটিং স্কোর',
      },
      availableBadge: 'নতুন প্রজেক্টের জন্য উন্মুক্ত',
      scrollDown: 'নিচে স্ক্রোল করুন',
    },

    // About Section
    about: {
      subtitle: 'পরিচিতি',
      title: 'AR DesignBD সম্পর্কে',
      leadText: 'AR DesignBD একটি সৃজনশীল ডিজাইন ব্র্যান্ড, যেখানে ব্যক্তি, ব্যবসা, প্রতিষ্ঠান ও বিভিন্ন ব্র্যান্ডের জন্য আধুনিক, প্রফেশনাল এবং আকর্ষণীয় ভিজ্যুয়াল ডিজাইন তৈরি করা হয়।',
      paragraph2: 'ডিজাইন শুধুমাত্র সুন্দর রঙের সমন্বয় নয়, এটি হলো আপনার ব্যবসা ও গ্রাহকের মধ্যে একটি শক্তিশালী ভিজ্যুয়াল সংযোগ। প্রতিটি প্রজেক্টে আমি মনোযোগ দিই নিখুঁত টাইপোগ্রাফি, আধুনিক নান্দনিকতা এবং শক্তিশালী ব্র্যান্ড পরিচয়ের ওপর।',
      founderLabel: 'প্রতিষ্ঠাতা ও ডিজাইনার',
      founderName: 'আব্দুর রহিম',
      role: 'গ্রাফিক ডিজাইনার ও ডিজিটাল ক্রিয়েটর',
      corePhilosophyTitle: 'আমার কাজের মূল দর্শন',
      philosophyPoints: [
        'ব্র্যান্ডের আসল উদ্দেশ্য ও লক্ষ্য বোঝা',
        'আধুনিক ও আন্তর্জাতিক মানের ভিজ্যুয়াল তৈরি',
        'ব্যবহারকারী ও লক্ষ্য গ্রাহকদের মনোযোগ আকর্ষণ',
        'সময়মতো সর্বোচ্চ মানের ফাইল ডেলিভারি',
      ],
      quickStats: {
        passion: 'সৃজনশীলতা',
        precision: 'নিখুঁত মান',
        support: 'পূর্ণ সাপোর্ট',
      },
      talkWithRahim: 'আব্দুর রহিমের সাথে কথা বলুন',
    },

    // Services Section
    services: {
      subtitle: 'আমার বিশেষত্ব',
      title: 'আমার সেবাসমূহ',
      description: 'আপনার ব্র্যান্ড ও ব্যবসাকে অনন্য ও আকর্ষণীয়ভাবে তুলে ধরতে সব ধরনের প্রিমিয়াম গ্রাফিক ডিজাইন ও মাল্টিমিডিয়া সেবা।',
      orderServiceBtn: 'এই সেবাটি অর্ডার করুন',
      deliverablesLabel: 'কী কী পাবেন:',
      exploreAllBtn: 'সকল সেবা দেখতে নিচে যান',
    },

    // Portfolio Section
    portfolio: {
      subtitle: 'নির্বাচিত কাজসমূহ',
      title: 'আমার কাজ',
      description: 'বিভিন্ন ব্র্যান্ড, স্টার্টআপ ও ক্রিয়েটরদের জন্য সম্পন্ন করা কিছু উল্লেখযোগ্য ডিজাইন ও ভিডিও প্রজেক্ট।',
      categories: {
        all: 'সব',
        logo: 'লোগো',
        branding: 'ব্র্যান্ডিং',
        social_media: 'সোশ্যাল মিডিয়া',
        poster: 'পোস্টার',
        banner: 'ব্যানার',
        thumbnail: 'থাম্বনেইল',
        photo_editing: 'ফটো এডিটিং',
        video: 'ভিডিও',
      },
      viewDetails: 'বিস্তারিত দেখুন',
      closeModal: 'বন্ধ করুন',
      toolsUsed: 'ব্যবহৃত সফটওয়্যার:',
      clientLabel: 'ক্লায়েন্ট:',
      yearLabel: 'সাল:',
      categoryLabel: 'ক্যাটাগরি:',
      prevProject: 'পূর্ববর্তী প্রজেক্ট',
      nextProject: 'পরবর্তী প্রজেক্ট',
      viewOriginal: 'ফুলস্ক্রিন ভিউ',
      noProjectsFound: 'এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি।',
      interestedInThisStyle: 'এই ধরনের ডিজাইনে আগ্রহী?',
      discussThisProject: 'অনুরূপ প্রজেক্ট অর্ডার করুন',
    },

    // Skills Section
    skills: {
      subtitle: 'টুলস ও অভিজ্ঞতা',
      title: 'আমার দক্ষতা',
      description: 'আন্তর্জাতিক মানের ডিজাইন ও কন্টেন্ট তৈরিতে যে সকল পেশাদার সফটওয়্যার এবং টেকনিক ব্যবহার করি।',
      categories: {
        graphic: 'গ্রাফিক ডিজাইন সফটওয়্যার',
        video: 'ভিডিও ও মোশন টুলস',
        creative: 'ক্রিয়েটিভ টেকনোলজি ও স্ট্র্যাটেজি',
      },
      experienceBadge: 'অভিজ্ঞতা',
      softwareMastery: 'দক্ষতার ক্ষেত্র',
    },

    // Why Choose AR DesignBD
    whyChoose: {
      subtitle: 'কেন আমার সাথে কাজ করবেন',
      title: 'কেন AR DesignBD?',
      description: 'আপনার মূল্যবান ব্র্যান্ডের ডিজাইনে প্রফেশনালিজম, অনন্য দৃষ্টিভঙ্গি এবং নিখুঁত মানের নিশ্চয়তা।',
      features: {
        creativeThinking: {
          title: 'সৃজনশীল চিন্তা',
          desc: 'গতানুগতিক টেমপ্লেট নয়, প্রতিটি প্রজেক্টের জন্য ইউনিক আইডিয়া ও স্বতন্ত্র ভিজ্যুয়াল কনসেপ্ট তৈরি।',
        },
        professionalQuality: {
          title: 'প্রফেশনাল মান',
          desc: 'হাই-রেজোলিউশন ও প্রিন্ট/ডিজিটাল ব্যবহারের জন্য আন্তর্জাতিক স্ট্যান্ডার্ডের ফাইল আউটপুট।',
        },
        attentionToDetail: {
          title: 'নিখুঁত কাজ',
          desc: 'প্রতিটি পিক্সেল, টাইপোগ্রাফিক অ্যালাইনমেন্ট, কালার হারমোনি ও মার্জিনে সর্বোচ্চ সতর্কতা।',
        },
        customDesign: {
          title: 'কাস্টম ডিজাইন',
          desc: 'আপনার ব্র্যান্ডের নিজস্ব লক্ষ্য ও পছন্দের সাথে মিলিয়ে সম্পূর্ণ ব্যক্তিগতকৃত ডিজাইন সলিউশন।',
        },
        modernStyle: {
          title: 'আধুনিক স্টাইল',
          desc: 'বিশ্বমানের ট্রেন্ড ও মিনিমালিস্ট নান্দনিকতার সমন্বয়ে রুচিশীল ও চিরকালীন ভিজ্যুয়াল।',
        },
        reliableCommunication: {
          title: 'নির্ভরযোগ্য যোগাযোগ',
          desc: 'দ্রুত রেসপন্স, নিয়মিত প্রজেক্ট আপডেট এবং কাজ শেষ না হওয়া পর্যন্ত আন্তরিক সহযোগিতা।',
        },
      },
    },

    // Creative Process
    process: {
      subtitle: 'কাজের ধাপসমূহ',
      title: 'আমার কাজের প্রক্রিয়া',
      description: 'একটি সুশৃঙ্খল এবং ফলপ্রসূ পদ্ধতিতে আপনার আইডিয়াকে চমৎকার বাস্তবতায় রূপান্তরের চার ধাপ।',
      steps: {
        discuss: {
          step: '০১',
          title: 'আলোচনা',
          desc: 'আপনার প্রজেক্টের লক্ষ্য, পছন্দের স্টাইল, টার্গেট অডিয়েন্স এবং বাজেট নিয়ে বিস্তারিত আলোচনা করা হয়।',
          deliverable: 'প্রজেক্ট ব্রিফ ও কনসেপ্ট ক্লিয়ারেন্স',
        },
        plan: {
          step: '০২',
          title: 'পরিকল্পনা',
          desc: 'মুডবোর্ড তৈরি, কালার প্যালেট নির্বাচন, রেফারেন্স রিসার্চ এবং নিখুঁত স্কেচিং ও লেআউট নির্ধারণ।',
          deliverable: 'ডিজাইন স্ট্র্যাটেজি ও রেফারেন্স সেটআপ',
        },
        design: {
          step: '০৩',
          title: 'ডিজাইন',
          desc: 'প্রফেশনাল সফটওয়্যারে ডিজাইন এক্সিকিউশন, ফিডব্যাক গ্রহণ এবং প্রয়োজনে নিখুঁত পরিমার্জন (Revision)।',
          deliverable: 'ডিজাইন ড্রাফট ও রিভিশন রাউন্ড',
        },
        deliver: {
          step: '০৪',
          title: 'ডেলিভারি',
          desc: 'সব ধরনের প্রয়োজনীয় ফরম্যাটে (AI, PSD, PDF, PNG, SVG, MP4) ফুল কোয়ালিটি ফাইনাল ফাইল হস্তান্তর।',
          deliverable: 'রেডি-টু-ইউজ সোর্স ও এক্সপোর্ট ফাইলস',
        },
      },
    },

    // Call to Action Section
    cta: {
      subtitle: 'চলুন প্রজেক্ট শুরু করি',
      heading: 'আপনার কি কোনো ডিজাইন প্রজেক্ট আছে?',
      text: 'আপনার ধারণাকে একটি প্রফেশনাল ভিজ্যুয়াল অভিজ্ঞতায় রূপ দিতে চলুন একসাথে কাজ করি।',
      button: 'প্রজেক্ট শুরু করুন',
      whatsappDirect: 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন',
    },

    // Contact Section
    contact: {
      subtitle: 'যোগাযোগ ও কোটেশন',
      title: 'চলুন একসাথে অসাধারণ কিছু তৈরি করি',
      description: 'আপনার নতুন প্রজেক্ট, ব্র্যান্ডিং প্রশ্ন বা কাস্টম রিকোয়ারমেন্ট জানাতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি মেসেজ দিন।',
      form: {
        nameLabel: 'নাম',
        namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
        emailLabel: 'ইমেইল',
        emailPlaceholder: 'yourname@example.com',
        phoneLabel: 'ফোন নম্বর',
        phonePlaceholder: '+৮৮০ ১XXX-XXXXXX',
        serviceLabel: 'কোন সেবা প্রয়োজন?',
        serviceSelectDefault: 'একটি সেবা নির্বাচন করুন',
        messageLabel: 'আপনার বার্তা',
        messagePlaceholder: 'আপনার প্রজেক্টের বিস্তারিত, রিকোয়ারমেন্ট বা সময়সীমা সম্পর্কে লিখুন...',
        sendBtn: 'বার্তা পাঠান',
        sendingBtn: 'পাঠানো হচ্ছে...',
      },
      directChannels: {
        title: 'সরাসরি যোগাযোগের মাধ্যম',
        whatsappTitle: 'হোয়াটসঅ্যাপ',
        whatsappDesc: 'তাত্ক্ষণিক চ্যাট ও দ্রুত আলোচনার জন্য',
        facebookTitle: 'ফেসবুক পেজ',
        facebookDesc: 'সাম্প্রতিক আপডেট ও ইনবক্স মেসেজিং',
        emailTitle: 'ইমেইল',
        emailDesc: 'অফিসিয়াল প্রস্তাব ও প্রজেক্ট ব্রিফের জন্য',
      },
      feedback: {
        successTitle: 'ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।',
        successDesc: 'আমি খুব দ্রুত আপনার সাথে যোগাযোগ করব। প্রয়োজনে সরাসরি হোয়াটসঅ্যাপেও মেসেজ দিতে পারেন।',
        errorRequired: 'অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন।',
        errorEmail: 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।',
        errorPhone: 'অনুগ্রহ করে সঠিক ফোন নম্বর প্রদান করুন।',
        errorService: 'অনুগ্রহ করে প্রয়োজনীয় সেবাটি নির্বাচন করুন।',
        sendAnother: 'আরেকটি বার্তা পাঠান',
      },
    },

    // Footer
    footer: {
      brandTagline: 'আব্দুর রহিম ডিজাইন ঘর',
      shortBio: 'ব্যক্তি, ব্যবসা ও প্রতিষ্ঠানের জন্য প্রিমিয়াম ভিজ্যুয়াল ব্র্যান্ডিং, সোশ্যাল মিডিয়া গ্রাফিক্স ও ভিডিও কনটেন্ট ক্রিয়েশন।',
      quickLinks: 'দ্রুত লিংক',
      servicesTitle: 'প্রধান সেবাসমূহ',
      contactInfo: 'যোগাযোগের তথ্য',
      copyright: '© ২০২৬ AR DesignBD. সর্বস্বত্ব সংরক্ষিত।',
      designedBy: 'Design by Abdur Rahim',
      backToTop: 'উপরে ফিরে যান',
    },

    // Lightbox & Common UI
    common: {
      close: 'বন্ধ করুন',
      previous: 'পূর্ববর্তী',
      next: 'পরবর্তী',
      copySuccess: 'কপি করা হয়েছে!',
      viewFullImage: 'পূর্ণ ছবি দেখুন',
      zoom: 'বড় করে দেখুন',
      livePreview: 'লাইভ প্রিভিউ',
      brandBadge: 'AR DesignBD স্টুডিও',
    },
  },

  en: {
    // Top Bar & Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      skills: 'Skills',
      whyChoose: 'Why Choose Me',
      process: 'Process',
      contact: 'Contact',
      ctaButton: 'Contact for Design',
      switchLang: 'বাংলা',
      switchLangShort: 'বাং',
      currentLangLabel: 'English',
      mobileMenuOpen: 'Open menu',
      mobileMenuClose: 'Close menu',
    },

    // Hero Section
    hero: {
      smallLabel: 'AR DESIGNBD',
      taglineBadge: 'Professional Creative Studio',
      heading: 'Creative Design. Powerful Identity.',
      description: 'Professional Graphic Design, Branding, Social Media Design and Video Editing for individuals, businesses and brands.',
      viewWorkBtn: 'View My Work',
      contactBtn: "Let's Work Together",
      metrics: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        satisfaction: 'Satisfied Clients',
        rating: 'Rating Score',
      },
      availableBadge: 'Available for New Projects',
      scrollDown: 'Scroll to explore',
    },

    // About Section
    about: {
      subtitle: 'Introduction',
      title: 'About AR DesignBD',
      leadText: 'AR DesignBD is a creative design brand focused on creating modern, professional and visually engaging designs for individuals, businesses, organizations and brands.',
      paragraph2: 'Design is not merely aesthetic decoration—it is the vital visual bridge linking your vision with your audience. Every project is crafted with meticulous attention to typography, contemporary aesthetic balance, and unforgettable brand identity.',
      founderLabel: 'Founder & Designer',
      founderName: 'Abdur Rahim',
      role: 'Graphic Designer & Digital Creator',
      corePhilosophyTitle: 'Core Creative Philosophy',
      philosophyPoints: [
        'Deeply understanding brand purpose and audience',
        'Crafting modern, international-standard visuals',
        'Captivating audience attention through intentional layouts',
        'Delivering pristine production files on time, every time',
      ],
      quickStats: {
        passion: 'Creativity',
        precision: 'Precision',
        support: 'Full Support',
      },
      talkWithRahim: 'Talk with Abdur Rahim',
    },

    // Services Section
    services: {
      subtitle: 'Specialties',
      title: 'My Services',
      description: 'Comprehensive graphic design and digital media solutions tailored to elevate your business presence and visual distinction.',
      orderServiceBtn: 'Order This Service',
      deliverablesLabel: 'Deliverables include:',
      exploreAllBtn: 'Explore all services below',
    },

    // Portfolio Section
    portfolio: {
      subtitle: 'Selected Works',
      title: 'Featured Works',
      description: 'Curated creative executions across branding, digital media, editorial posters, and video production.',
      categories: {
        all: 'All',
        logo: 'Logo',
        branding: 'Branding',
        social_media: 'Social Media',
        poster: 'Poster',
        banner: 'Banner',
        thumbnail: 'Thumbnail',
        photo_editing: 'Photo Editing',
        video: 'Video',
      },
      viewDetails: 'View Details',
      closeModal: 'Close',
      toolsUsed: 'Software Used:',
      clientLabel: 'Client:',
      yearLabel: 'Year:',
      categoryLabel: 'Category:',
      prevProject: 'Previous Project',
      nextProject: 'Next Project',
      viewOriginal: 'Fullscreen View',
      noProjectsFound: 'No projects found in this category.',
      interestedInThisStyle: 'Interested in this design style?',
      discussThisProject: 'Request Similar Project',
    },

    // Skills Section
    skills: {
      subtitle: 'Tools & Competencies',
      title: 'Creative Skills',
      description: 'Industry-standard creative software and strategic methodologies utilized to create high-impact visual products.',
      categories: {
        graphic: 'Graphic Design Software',
        video: 'Video & Motion Suite',
        creative: 'Creative Strategy & AI',
      },
      experienceBadge: 'Experience',
      softwareMastery: 'Application Focus',
    },

    // Why Choose AR DesignBD
    whyChoose: {
      subtitle: 'Why Partner With Me',
      title: 'Why Choose AR DesignBD?',
      description: 'Uncompromising standard of creative integrity, modern aesthetics, and seamless client communication.',
      features: {
        creativeThinking: {
          title: 'Creative Thinking',
          desc: 'Original, bespoke ideas tailored specifically to your project rather than generic cookie-cutter templates.',
        },
        professionalQuality: {
          title: 'Professional Quality',
          desc: 'High-resolution, vector-accurate, print and digital-ready assets built to international standards.',
        },
        attentionToDetail: {
          title: 'Attention to Detail',
          desc: 'Pixel-level scrutiny applied to typography, optical margins, color harmony, and visual weight.',
        },
        customDesign: {
          title: 'Custom Design',
          desc: 'Tailor-made design strategies synchronized with your unique business goals and target demographic.',
        },
        modernStyle: {
          title: 'Modern Style',
          desc: 'Contemporary minimalist visual language inspired by timeless global design trends.',
        },
        reliableCommunication: {
          title: 'Reliable Communication',
          desc: 'Prompt responses, clear milestone updates, and friendly collaborative dedication throughout.',
        },
      },
    },

    // Creative Process
    process: {
      subtitle: 'Workflow',
      title: 'My Creative Process',
      description: 'A disciplined, 4-step creative methodology engineered to transform raw ideas into remarkable visual outcomes.',
      steps: {
        discuss: {
          step: '01',
          title: 'Discuss',
          desc: 'Deep dive into your project goals, aesthetic references, target demographic, timeline, and deliverables.',
          deliverable: 'Project Brief & Scope Alignment',
        },
        plan: {
          step: '02',
          title: 'Plan',
          desc: 'Moodboard generation, palette exploration, competitive research, and initial composition drafting.',
          deliverable: 'Design Strategy & Moodboard',
        },
        design: {
          step: '03',
          title: 'Design',
          desc: 'Execution in industry-standard tools, client review rounds, and meticulous iteration until perfection.',
          deliverable: 'High-Fidelity Drafts & Revisions',
        },
        deliver: {
          step: '04',
          title: 'Deliver',
          desc: 'Packaging all production files (AI, PSD, PDF, PNG, SVG, MP4) with guidelines for effortless deployment.',
          deliverable: 'Final Ready-to-Use Master Files',
        },
      },
    },

    // Call to Action Section
    cta: {
      subtitle: "Let's Get Started",
      heading: 'Have a project in mind?',
      text: "Let's turn your idea into a professional visual experience.",
      button: 'Start a Project',
      whatsappDirect: 'Chat directly on WhatsApp',
    },

    // Contact Section
    contact: {
      subtitle: 'Inquiries & Quotes',
      title: "Let's Create Something Amazing",
      description: 'Ready to elevate your brand identity? Fill out the brief form below or reach out directly through your preferred channel.',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'yourname@example.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '+880 1XXX-XXXXXX',
        serviceLabel: 'Required Service',
        serviceSelectDefault: 'Select a required service',
        messageLabel: 'Your Message',
        messagePlaceholder: 'Tell me about your project scope, vision, goals, or timeline...',
        sendBtn: 'Send Message',
        sendingBtn: 'Sending...',
      },
      directChannels: {
        title: 'Direct Channels',
        whatsappTitle: 'WhatsApp',
        whatsappDesc: 'Instant chat for quick inquiries and project scoping',
        facebookTitle: 'Facebook Page',
        facebookDesc: 'Recent updates, community, and direct messaging',
        emailTitle: 'Email',
        emailDesc: 'Formal project proposals and detailed design briefs',
      },
      feedback: {
        successTitle: 'Thank you! Your message has been sent successfully.',
        successDesc: "I will respond to your inquiry shortly. Feel free to ping directly on WhatsApp if urgent.",
        errorRequired: 'Please fill in all required fields.',
        errorEmail: 'Please provide a valid email address.',
        errorPhone: 'Please provide a valid phone number.',
        errorService: 'Please select a service from the list.',
        sendAnother: 'Send another message',
      },
    },

    // Footer
    footer: {
      brandTagline: 'Creative Design. Powerful Identity.',
      shortBio: 'Bespoke visual branding, social media assets, editorial graphics, and video editing for ambitious brands and creators.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Featured Services',
      contactInfo: 'Contact Information',
      copyright: '© 2026 AR DesignBD. All Rights Reserved.',
      designedBy: 'Design by Abdur Rahim',
      backToTop: 'Back to top',
    },

    // Lightbox & Common UI
    common: {
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      copySuccess: 'Copied to clipboard!',
      viewFullImage: 'View full image',
      zoom: 'Zoom preview',
      livePreview: 'Live preview',
      brandBadge: 'AR DesignBD Studio',
    },
  },
} as const;

export type TranslationKey = typeof translations.bn;

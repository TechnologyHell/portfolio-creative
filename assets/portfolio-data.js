// Portfolio Data Catalog for Nitish Singh - Revision 3.1
const PORTFOLIO_DATA = {
  profile: {
    name: "Nitish Singh",
    role: "Multidisciplinary Creative",
    secondaryRole: "Graphic Design • Motion • Visual Storytelling",
    location: "Siliguri, West Bengal, India",
    email: "nitishsinghslg@gmail.com",
    phone: "+91 78118 38862",
    experienceYears: "9+",
    resumeUrl: "https://drive.google.com/file/d/1DieFi6Mk-B6EoKDMg8yGlseBv7SV4-5v/view?usp=sharing",
    socials: {
      linkedin: "https://www.linkedin.com/in/nitishsinghslg/",
      github: "https://github.com/TechnologyHell",
      youtube: "https://www.youtube.com/technologyhell",
      instagram: "https://www.instagram.com/technologyhell/",
      discord: "https://discord.com/invite/6ME9TDt",
      softwarePortfolio: "https://nitish.technologyhell.in/",
      behance: "https://www.behance.net/technologyhell"
    }
  },

  creatorMetrics: {
    youtube: {
      platform: "YouTube",
      url: "https://www.youtube.com/technologyhell",
      handle: "@technologyhell",
      channelStart: "31 May 2017",
      subscribers: "~5,730",
      views: "3M+ Lifetime Views",
      description: "Long-term content creation covering tutorials, gameplay edits, DIY projects, and technology videos across 7+ years of active publishing."
    },
    discord: {
      platform: "Discord Community",
      url: "https://discord.com/invite/6ME9TDt",
      established: "May 2021",
      membership: "2,660+ Total Members",
      description: "Community space for channel supporters, gaming enthusiasts, creative feedback, and technical discussions. (Total community membership size)."
    },
    instagram: {
      platform: "Instagram",
      url: "https://www.instagram.com/technologyhell/",
      handle: "@technologyhell",
      highlightTitle: "CREATIVE REELS",
      highlightSub: "Short-Form Edits & Experiments",
      description: "Supporting creative channel dedicated to short-form video reels, creative experiments, gaming edits, and product photography."
    },
    facebookNote: {
      note: "Historical note: An earlier Facebook creator page surpassed 600 followers before being compromised, representing an early chapter in multi-platform content distribution."
    }
  },

  categoryDefinitions: {
    featured: {
      id: "featured",
      label: "Featured",
      buttonText: "EXPLORE ALL WORKS",
      route: "all",
      pageTitle: "ALL CREATIVE WORKS",
      pageDesc: "Complete archive of graphic design, visual identity, motion, 3D, and social content."
    },
    branding: {
      id: "branding",
      label: "Branding & Identity",
      buttonText: "EXPLORE ALL BRANDING WORKS",
      route: "branding",
      pageTitle: "BRANDING & IDENTITY WORKS",
      pageDesc: "Visual identity systems, emblems, event branding suites, and brand collateral."
    },
    graphics: {
      id: "graphics",
      label: "Graphic Design",
      buttonText: "EXPLORE ALL GRAPHIC DESIGN WORKS",
      route: "graphic-design",
      pageTitle: "GRAPHIC DESIGN WORKS",
      pageDesc: "Promotional posters, event key visuals, flyers, and print collateral."
    },
    motion: {
      id: "motion",
      label: "Motion & Video",
      buttonText: "EXPLORE ALL MOTION WORKS",
      route: "motion",
      pageTitle: "MOTION & VIDEO WORKS",
      pageDesc: "Gaming montages, promotional trailers, rhythm-cut edits, and visual storytelling."
    },
    "3d": {
      id: "3d",
      label: "3D & Mockups",
      buttonText: "EXPLORE ALL 3D WORKS",
      route: "3d",
      pageTitle: "3D & PACKAGING MOCKUPS",
      pageDesc: "Speculative retail packaging, physical prototypes, CAD enclosures, and 3D scenes."
    },
    social: {
      id: "social",
      label: "Social Content",
      buttonText: "EXPLORE ALL SOCIAL CONTENT",
      route: "social",
      pageTitle: "PRODUCT & SOCIAL CONTENT",
      pageDesc: "YouTube thumbnails, product review covers, social media campaigns, and creator graphics."
    }
  },

  flagshipCaseStudies: {
    idt3: {
      id: "idt3",
      edition: "3.0",
      title: "SIT Ideathon 3.0",
      subtitle: "Event Identity & Collateral Package",
      timeframe: "December 2024 – February 2025",
      officialRole: "Vice President",
      creativeRole: "Design Lead (Print Collateral & Event Media)",
      description: "Visual identity assets and event collateral created for Ideathon 3.0, including stage banners, official flyers, logo mockups, and tiered participant ID cards.",
      heroImage: "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
      videoUrl: "https://www.youtube.com/watch?v=fYRBwF7v4Vk",
      youtubeId: "fYRBwF7v4Vk",
      videoTitle: "SIT Ideathon 3.0 — Event Recap Montage",
      videoLocalPath: null,
      overview: "Across SIT Ideathon 3.0, I served as Vice President of the student organizing committee while directing the event's visual communication design. My responsibilities centered on creating a modern identity emblem, drafting high-resolution promotional print assets, designing auditorium stage banners and participant credentials, and cutting the event recap video.",
      responsibilities: [
        "Established the geometric circular emblem and 3D visual treatments",
        "Designed large-format stage banners and VIP invitation graphics",
        "Created the comprehensive event informational flyer brochure",
        "Constructed tiered credential passes for participants, dignitaries, and volunteers",
        "Designed the ceremonial cash prize presentation dummy check",
        "Edited the fast-paced event recap video in Premiere Pro with music synchronization"
      ],
      sections: [
        {
          heading: "Visual Identity & Emblem",
          description: "Circular brandmark and 3D mockups designed for Ideathon 3.0 branding across digital and print collateral.",
          items: [
            { src: "_CreativeWorkCollection/IDT/3/id3_logo.jpg", original: "_CreativeWorkCollection/IDT/3/id3_logo.jpg", title: "Brandmark Emblem", type: "Logo" },
            { src: "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg", original: "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg", title: "3D Emblem Mockup", type: "Mockup" }
          ]
        },
        {
          heading: "Stage Backdrops & Banners",
          description: "Large-scale vector and raster graphics formatted with print bleeds for auditorium staging.",
          items: [
            { src: "_CreativeWorkCollection/IDT/3/id3_banner.jpg", original: "_CreativeWorkCollection/IDT/3/id3_banner.jpg", title: "Main Stage Backdrop Banner", type: "Stage Banner" },
            { src: "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg", original: "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg", title: "VIP Invitation Banner", type: "Banner" }
          ]
        },
        {
          heading: "Promotional Collateral",
          description: "Multi-panel brochures and informational flyers distributed across regional academic institutions.",
          items: [
            { src: "_CreativeWorkCollection/IDT/3/id3_flyer.jpg", original: "_CreativeWorkCollection/IDT/3/id3_flyer.jpg", title: "Official Event Flyer Brochure", type: "Flyer" }
          ]
        },
        {
          heading: "Credentials & Event Collateral",
          description: "Color-coded physical badges for attendees, jury, and committee members, along with the winner dummy check.",
          items: [
            { src: "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png", original: "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png", title: "Participant ID Badge", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/3/id3_idcardvolunteer.png", original: "_CreativeWorkCollection/IDT/3/id3_idcardvolunteer.png", title: "Volunteer Crew ID Badge", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/3/id3_idcard1.png", original: "_CreativeWorkCollection/IDT/3/id3_idcard1.png", title: "Organizing Committee ID Card", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/3/id3_idcard2.png", original: "_CreativeWorkCollection/IDT/3/id3_idcard2.png", title: "Organizing Committee ID Card", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/3/id3_idcard3.png", original: "_CreativeWorkCollection/IDT/3/id3_idcard3.png", title: "Organizing Committee ID Card", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg", original: "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg", title: "Cash Prize Dummy Check", type: "Ceremonial Check" }
          ]
        }
      ],
      summary: "Through SIT Ideathon 3.0, the visual brand established a clean, unified standard that elevated the event's regional presence. Balancing Vice Presidential coordination duties with direct visual production ensured all assets were delivered on schedule with strict print-bleed calibration and aesthetic consistency."
    },
    idt4: {
      id: "idt4",
      edition: "4.0",
      title: "SIT Ideathon 4.0",
      subtitle: "Flagship Event Brand System & Creative Production",
      timeframe: "November 2025 – January 2026",
      officialRole: "President",
      creativeRole: "Creative Lead & Media Producer",
      description: "Visual identity and comprehensive event collateral for the fourth edition of SIT Ideathon, including stage backdrops, red-carpet photography walls, credentials, digital displays, publications, and an opening montage.",
      heroImage: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
      videoUrl: "https://www.youtube.com/watch?v=3i-MoULXUFg",
      youtubeId: "3i-MoULXUFg",
      videoTitle: "SIT Ideathon 4.0 — Opening Montage",
      overview: "Serving as President of the student organizing committee and Creative Lead for SIT Ideathon 4.0, I led the full visual and media packaging. The production spanned high-contrast stage backdrops, red-carpet photography walls, participant credentials, digital displays, official publications, and a fast-paced opening montage.",
      responsibilities: [
        "Executive oversight as President while personally directing visual communication design",
        "Designed the grand auditorium stage backdrop banner with millimeter-precision bleed margins",
        "Created the red-carpet dignitary and team photography backdrop wall",
        "Authored the Call for Ideas promotional posters and multi-slide social carousels",
        "Produced auditorium digital screen loop banners for dynamic venue screens",
        "Designed participant credentials, VIP invitation cards, dummy checks, and event publication covers",
        "Edited the music-synchronized opening montage utilizing non-linear time remapping in Premiere Pro"
      ],
      publications: [],
      sections: [
        {
          heading: "Stage Backdrops & Photography Walls",
          description: "High-contrast, large-format graphics designed for the main event auditorium and dignitary reception.",
          items: [
            { src: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg", original: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg", title: "Main Stage Backdrop Banner", type: "Stage Backdrop" },
            { src: "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg", original: "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg", title: "Red Carpet Photography Backdrop", type: "Photography Wall" }
          ]
        },
        {
          heading: "Posters & Promotional Assets",
          description: "Promotional campaigns distributed across digital channels, social media, and campus notices.",
          items: [
            { src: "_CreativeWorkCollection/IDT/4/id4_poster.jpg", original: "_CreativeWorkCollection/IDT/4/id4_poster.jpg", title: "Official Call For Ideas Poster", type: "Poster" },
            { src: "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg", original: "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg", title: "Social Carousel Key Art", type: "Social Media" },
            { src: "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg", original: "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg", title: "Auditorium Digital Screen Banner", type: "Digital Display" }
          ]
        },
        {
          heading: "Credentials, Invitations & Collateral",
          description: "Tiered access passes, VIP invitation cards, and ceremony collateral for participants and guests.",
          items: [
            { src: "_CreativeWorkCollection/IDT/4/id4_invitationcard.png", original: "_CreativeWorkCollection/IDT/4/id4_invitationcard.png", title: "VIP Invitation Card", type: "Invitation" },
            { src: "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png", original: "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png", title: "Participant ID Credential Badge", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/4/id4_icard1.png", original: "_CreativeWorkCollection/IDT/4/id4_icard1.png", title: "Dignitary & Guest Pass", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/4/id4_idcard2.png", original: "_CreativeWorkCollection/IDT/4/id4_idcard2.png", title: "Jury Credential Pass", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/4/id4_idcard3.png", original: "_CreativeWorkCollection/IDT/4/id4_idcard3.png", title: "Organizing Committee Pass", type: "Credential Badge" },
            { src: "_CreativeWorkCollection/IDT/4/id4_dummycheck.png", original: "_CreativeWorkCollection/IDT/4/id4_dummycheck.png", title: "Cash Prize Dummy Check", type: "Ceremonial Check" }
          ]
        }
      ],
      summary: "SIT Ideathon 4.0 represented the culmination of two years of event design and student leadership. Managing presidential coordination while authoring the complete design package ensured absolute brand fidelity from digital screens to 20-foot physical stage banners and the high-energy opening video."
    }
  },

  // Flat list of 6 motion projects for a consistent, unbroken 3x2 grid
  motionWorks: [
    {
        "id": "valo-stay",
        "title": "Stay — Valorant Montage",
        "category": "Gaming Montage",
        "year": "2022",
        "youtubeId": "12ZS0y4Gnq4",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_stay.jpg",
        "description": "Fast-paced montage focused on non-linear time remapping, velocity curve acceleration, weapon sound synchronization, and punchy color grading.",
        "techniques": [
            "Time Remapping",
            "Beat Sync",
            "Sound Design",
            "Color Grading"
        ]
    },
    {
        "id": "idt4-master-video",
        "title": "Ideathon 4.0 — Event Master Video",
        "category": "Event Master Edit",
        "year": "2026",
        "youtubeId": "3i-MoULXUFg",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id4_edit.jpg",
        "description": "High-energy event master recap video produced for SIT Ideathon 4.0 featuring dynamic speed ramps, rhythm cuts, and stage atmosphere highlights.",
        "techniques": [
            "Speed Ramps",
            "Rhythm Cuts",
            "Audio Layering",
            "Stage Visuals"
        ]
    },
    {
        "id": "valo-7rings",
        "title": "7 Rings — 3D Valorant Montage",
        "category": "3D Motion Edit",
        "year": "2023",
        "youtubeId": "j2JfFx4vBoc",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valoEdit_7rings_TN.jpg",
        "description": "Short-form gameplay sequence exploring 3D spatial camera movement, character isolation, and smooth velocity ramping.",
        "techniques": [
            "3D Spatial Camera",
            "Character Isolation",
            "Speed Ramping"
        ]
    },
    {
        "id": "client-hushpuppi-video",
        "title": "Hushpuppi — Motion Graphics Video",
        "category": "Motion Graphics",
        "year": "2023",
        "youtubeId": "H1M3WzE4sOs",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/hushpuppi_edit.png",
        "description": "Specialized kinetic motion graphics piece exploring rapid typographic animation, fast cuts, punchy sound design, and client-tailored visual pacing.",
        "techniques": [
            "Kinetic Typography",
            "Motion Graphics",
            "Sound Design",
            "Client Delivery"
        ]
    },
    {
        "id": "valo-motn",
        "title": "Middle of the Night — Valorant Montage",
        "category": "Gaming Montage",
        "year": "2022",
        "youtubeId": "fmtiSYfkd-M",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_middleofthenight.jpg",
        "description": "Rhythm-driven gameplay edit coordinating cuts and high-contrast color styling to vocal drops and percussion beats.",
        "techniques": [
            "Rhythm Pacing",
            "Contrast Grade",
            "Vocal Drop Alignment"
        ]
    },
    {
        "id": "gameday-trailer",
        "title": "GameDayYT — Gaming Channel Trailer",
        "category": "Creator Trailer",
        "year": "2020",
        "youtubeId": "R9RPorD-qXk",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/gameday_trailer.jpg",
        "description": "Under-one-minute channel intro edit combining stream highlights, setup photography, and custom transparent transition overlays.",
        "techniques": [
            "Trailer Pacing",
            "Alpha Transitions",
            "Audio Design"
        ]
    }
],

  physicalProjects: [
    {
      "id": "techdeck-hardware",
      "slNo": 99,
      "title": "TechDeck — Mechanical Macropad & CAD Enclosure",
      "category": "3d",
      "primaryCategory": "3d",
      "categories": [
        "3d"
      ],
      "categoryLabel": "Physical Prototyping & CAD",
      "year": "2025 – 2026",
      "client": "Independent Hardware Build",
      "role": "Industrial Design, CAD & Firmware",
      "tools": [
        "CATIA V5",
        "FDM 3D Printing",
        "Python",
        "Embedded C++"
      ],
      "description": "Standalone programmable macro keypad designed with a custom 3D-printed enclosure modeled in CATIA V5, running custom firmware and a dynamic Python macro engine. Ranked #1 at CDAC Additive Manufacturing training; placed 4th globally at IHMMC 2026.",
      "thumbnail": "_CreativeWorkCollection/Physical/techdeck1.jpeg",
      "original": "_CreativeWorkCollection/Physical/techdeck1.jpeg",
      "featured": true,
      "tags": [
        "3D Design",
        "Physical Prototyping",
        "Hardware Build"
      ],
      "gallery": [
        {
          "src": "_CreativeWorkCollection/Physical/techdeck1.jpeg",
          "original": "_CreativeWorkCollection/Physical/techdeck1.jpeg",
          "title": "TechDeck — Mechanical Macropad Prototype",
          "caption": "Custom mechanical macropad featuring tactile switches and 3D printed structural chassis.",
          "type": "Physical Hardware • 2025–2026"
        },
        {
          "src": "_CreativeWorkCollection/Physical/techdeck2.jpeg",
          "original": "_CreativeWorkCollection/Physical/techdeck2.jpeg",
          "title": "TechDeck — Keycap & Switch Assembly",
          "caption": "Ergonomic key arrangement with individual switch seating and wiring architecture.",
          "type": "Physical Hardware • 2025–2026"
        },
        {
          "src": "_CreativeWorkCollection/Physical/techdeck3.jpg",
          "original": "_CreativeWorkCollection/Physical/techdeck3.jpg",
          "title": "TechDeck — Custom CATIA V5 Enclosure",
          "caption": "FDM 3D-printed enclosure engineered in CATIA V5 with tight component clearances.",
          "type": "CAD & Prototyping • 2025–2026"
        },
        {
          "src": "_CreativeWorkCollection/Physical/techdeck4.png",
          "original": "_CreativeWorkCollection/Physical/techdeck4.png",
          "title": "TechDeck — Desktop Production Setup",
          "caption": "Live deployment on desk for rapid application switching and automated media macros.",
          "type": "Physical Hardware • 2025–2026"
        }
      ]
    },
    {
      "id": "custom-playbutton",
      "slNo": 100,
      "title": "Custom 1K Creator Award (Unofficial Milestone Piece)",
      "category": "3d",
      "primaryCategory": "3d",
      "categories": [
        "3d"
      ],
      "categoryLabel": "Custom Fabrication & Awards",
      "year": "2020",
      "client": "Personal Milestone Piece",
      "role": "Fabrication & Finishing Lead",
      "tools": [
        "Material Layering",
        "Metallic Finishing",
        "Graphic Design",
        "Plaque Assembly"
      ],
      "description": "Unofficial custom-made creator award piece fabricated to celebrate crossing 1,000 YouTube subscribers on the TechnologyHell channel, exploring multi-layer plaque construction and metallic finishes.",
      "thumbnail": "_CreativeWorkCollection/Physical/playbutton1.png",
      "original": "_CreativeWorkCollection/Physical/playbutton1.png",
      "featured": true,
      "tags": [
        "Custom Fabrication",
        "Milestone Plaque",
        "Creative Build"
      ],
      "gallery": [
        {
          "src": "_CreativeWorkCollection/Physical/playbutton1.png",
          "original": "_CreativeWorkCollection/Physical/playbutton1.png",
          "title": "Custom 1K Creator Award — Final Plaque",
          "caption": "Completed custom creator award with metallic finish celebrating the 1K subscriber milestone.",
          "type": "Custom Fabrication • 2020"
        },
        {
          "src": "_CreativeWorkCollection/Physical/playbutton2.jpg",
          "original": "_CreativeWorkCollection/Physical/playbutton2.jpg",
          "title": "Custom 1K Creator Award — Dimensional Detailing",
          "caption": "Angled perspective showing reflective surface treatment and play button bevel.",
          "type": "Custom Fabrication • 2020"
        },
        {
          "src": "_CreativeWorkCollection/Physical/playbutton3.jpg",
          "original": "_CreativeWorkCollection/Physical/playbutton3.jpg",
          "title": "Custom 1K Creator Award — Material Assembly",
          "caption": "Layered plaque fabrication demonstrating precision edge alignment and mounting.",
          "type": "Custom Fabrication • 2020"
        },
        {
          "src": "_CreativeWorkCollection/Physical/playbutton4.jpg",
          "original": "_CreativeWorkCollection/Physical/playbutton4.jpg",
          "title": "Custom 1K Creator Award — Finished Display",
          "caption": "Studio display demonstrating high-contrast metallic presentation and plaque relief.",
          "type": "Custom Fabrication • 2020"
        }
      ]
    },
    {
      "id": "custom-pc-build",
      "slNo": 101,
      "title": "Custom PC Build Portfolio",
      "category": "3d",
      "primaryCategory": "3d",
      "categories": [
        "3d"
      ],
      "categoryLabel": "Hardware Assembly & Systems",
      "year": "2024",
      "client": "Personal Creative Workstation",
      "role": "System Architecture & Assembly",
      "tools": [
        "Hardware Assembly",
        "Cable Management",
        "Thermal Optimization",
        "Workstation Tuning"
      ],
      "description": "High-performance personal workstation crafted with bespoke cable management, optimal thermal airflow routing, component synergy, and sleek hardware aesthetics.",
      "thumbnail": "_CreativeWorkCollection/Physical/pc1.jpg",
      "original": "_CreativeWorkCollection/Physical/pc1.jpg",
      "featured": true,
      "tags": [
        "Hardware Assembly",
        "Custom PC Build",
        "Thermal Tuning"
      ],
      "gallery": [
        {
          "src": "_CreativeWorkCollection/Physical/pc1.jpg",
          "original": "_CreativeWorkCollection/Physical/pc1.jpg",
          "title": "Custom PC Build — Interior Hardware & Lighting",
          "caption": "Custom workstation interior showing component clearances, liquid cooler routing, and GPU mount.",
          "type": "Hardware Assembly • 2024"
        },
        {
          "src": "_CreativeWorkCollection/Physical/pc2.jpg",
          "original": "_CreativeWorkCollection/Physical/pc2.jpg",
          "title": "Custom PC Build — Component Architecture",
          "caption": "Component symmetry, motherboard interconnects, and clean power distribution cabling.",
          "type": "Hardware Assembly • 2024"
        },
        {
          "src": "_CreativeWorkCollection/Physical/pc3.jpg",
          "original": "_CreativeWorkCollection/Physical/pc3.jpg",
          "title": "Custom PC Build — Thermal & Cable Layout",
          "caption": "High-efficiency static-pressure fan configuration ensuring sustained multi-hour render cooling.",
          "type": "Hardware Assembly • 2024"
        },
        {
          "src": "_CreativeWorkCollection/Physical/pc4.jpg",
          "original": "_CreativeWorkCollection/Physical/pc4.jpg",
          "title": "Custom PC Build — Complete Workstation Setup",
          "caption": "Finished battlestation setup powering 4K video rendering and 3D simulation workflows.",
          "type": "Hardware Assembly • 2024"
        }
      ]
    }
  ],

  projects: [
    {
        "id": "idt4-identity",
        "slNo": 0,
        "title": "SIT Ideathon 4.0 — Event Identity & Collateral",
        "company": "Siliguri Institute of Technology",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Event Brand System & Creative Production",
        "date": "25.01.2026",
        "year": "2025 – 2026",
        "categories": [
            "branding",
            "graphics"
        ],
        "primaryCategory": "branding",
        "categoryLabel": "Branding & Identity",
        "role": "President & Creative Lead",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Event Branding",
            "Brand Identity Systems",
            "Event Collateral",
            "Banners",
            "Posters"
        ],
        "description": "Comprehensive visual collateral designed for the fourth edition of SIT Ideathon, including stage backdrops, red-carpet photography walls, participant ID credentials, cash prize checks, and invitation cards.",
        "thumbnail": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
        "original": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
        "featured": true,
        "isCaseStudy": true,
        "caseStudyEdition": "idt4",
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
                "title": "Main Stage Backdrop Banner",
                "type": "Stage Backdrop"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg",
                "title": "Red Carpet Photography Backdrop",
                "type": "Photography Wall"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_poster.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_poster.jpg",
                "title": "Official Call For Ideas Poster",
                "type": "Poster"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg",
                "title": "Social Carousel Key Art",
                "type": "Social Media"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg",
                "title": "Auditorium Digital Screen Banner",
                "type": "Digital Display"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_dummycheck.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_dummycheck.png",
                "title": "Prize Dummy Check",
                "type": "Event Collateral"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
                "title": "VIP Invitation Card",
                "type": "Invitation"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
                "title": "Participant ID Credential Badge",
                "type": "Credential Badge"
            }
        ]
    },
    {
        "id": "idt3-identity",
        "slNo": 0,
        "title": "SIT Ideathon 3.0 — Comprehensive Event Identity",
        "company": "Siliguri Institute of Technology",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Event Identity & Collateral Package",
        "date": "08.02.2025",
        "year": "2024 – 2025",
        "categories": [
            "branding",
            "graphics"
        ],
        "primaryCategory": "branding",
        "categoryLabel": "Branding & Identity",
        "role": "Vice President & Creative Lead",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Event Branding",
            "Brand Identity Systems",
            "Stage Banners",
            "Credentials",
            "Flyers"
        ],
        "description": "Visual identity assets and event collateral created for Ideathon 3.0, including stage banners, official flyers, circular logo mockups, and tiered participant ID cards.",
        "thumbnail": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
        "original": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
        "featured": false,
        "isCaseStudy": true,
        "caseStudyEdition": "idt3",
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
                "title": "Main Stage Backdrop Banner",
                "type": "Stage Banner"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg",
                "title": "VIP Invitation Banner",
                "type": "Banner"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_logo.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_logo.jpg",
                "title": "Brandmark Emblem",
                "type": "Logo"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
                "title": "3D Emblem Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_flyer.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_flyer.jpg",
                "title": "Official Event Flyer Brochure",
                "type": "Flyer"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
                "title": "Cash Prize Dummy Check",
                "type": "Ceremonial Check"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
                "title": "Participant ID Badge",
                "type": "Credential Badge"
            }
        ]
    },
    {
        "id": "idt4-master-video",
        "slNo": 1,
        "title": "Ideathon 4.0 — Event Master Video",
        "company": "Ideathon 4.0",
        "client": "Ideathon 4.0",
        "typeOfWork": "Event Master Video",
        "date": "25.01.2026",
        "year": "2026",
        "link": "https://youtu.be/3i-MoULXUFg",
        "youtubeId": "3i-MoULXUFg",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id4_edit.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id4_edit.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "High-energy event master recap video produced for SIT Ideathon 4.0 featuring dynamic speed ramps, rhythm cuts, and stage atmosphere highlights.",
        "tools": [
            "Premiere Pro",
            "After Effects",
            "Sound Design"
        ],
        "tags": [
            "Event Video",
            "Time Remapping",
            "Brand Video"
        ]
    },
    {
        "id": "valo-stay",
        "slNo": 2,
        "title": "Stay — Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (Stay)",
        "date": "02.10.2022",
        "year": "2022",
        "link": "https://youtu.be/12ZS0y4Gnq4",
        "youtubeId": "12ZS0y4Gnq4",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_stay.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorant_stay.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Fast-paced montage focused on non-linear time remapping, velocity curve acceleration, weapon sound synchronization, and punchy color grading.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Gaming Montage",
            "Time Remapping",
            "Beat Sync"
        ],
        "featured": true
    },
    {
        "id": "idt3-master-video",
        "slNo": 3,
        "title": "Ideathon 3.0 — Event Master Video",
        "company": "Ideathon 3.0",
        "client": "Ideathon 3.0",
        "typeOfWork": "Event Master Video",
        "date": "08.02.2026",
        "year": "2025 – 2026",
        "link": "https://youtu.be/fYRBwF7v4Vk",
        "youtubeId": "fYRBwF7v4Vk",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id3_edit.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id3_edit.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Official event recap and master showcase video for SIT Ideathon 3.0, capturing participant pitches, jury reactions, and award ceremonies.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Event Video",
            "Recap Edit",
            "Brand Video"
        ]
    },
    {
        "id": "valo-motn",
        "slNo": 4,
        "title": "Middle of the Night — Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (Middle of the Night)",
        "date": "12.06.2022",
        "year": "2022",
        "link": "https://youtu.be/fmtiSYfkd-M",
        "youtubeId": "fmtiSYfkd-M",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_middleofthenight.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorant_middleofthenight.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Rhythm-driven gameplay edit coordinating cuts and high-contrast color styling to vocal drops and percussion beats.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Gaming Montage",
            "Rhythm Pacing",
            "Color Grading"
        ]
    },
    {
        "id": "valo-7rings",
        "slNo": 5,
        "title": "7 Rings — 3D Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (7Rings)",
        "date": "27.05.2023",
        "year": "2023",
        "link": "https://youtu.be/j2JfFx4vBoc",
        "youtubeId": "j2JfFx4vBoc",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valoEdit_7rings_TN.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valoEdit_7rings_TN.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "3d"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Short-form gameplay sequence exploring 3D spatial camera movement, character isolation, and smooth velocity ramping.",
        "tools": [
            "Premiere Pro",
            "After Effects",
            "Blender"
        ],
        "tags": [
            "3D Motion Edit",
            "Speed Ramping",
            "Character Isolation"
        ]
    },
    {
        "id": "valo-tournament-trailer",
        "slNo": 6,
        "title": "Valorant Tournament Announcement Trailer",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Tournament Announcement Trailer",
        "date": "04.12.2022",
        "year": "2022",
        "link": "https://youtu.be/aVYVlrya-PY",
        "youtubeId": "aVYVlrya-PY",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorantTournamentVideoTN.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorantTournamentVideoTN.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Esports tournament promotional video utilizing kinetic typography, bracket reveals, and energetic audio synchronization.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Tournament Announcement",
            "Kinetic Typography",
            "Motion Graphics"
        ]
    },
    {
        "id": "valo-kaam25",
        "slNo": 7,
        "title": "Kaam 25 — Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (kaam 25)",
        "date": "27.03.2022",
        "year": "2022",
        "link": "https://youtu.be/lI7x-3TsPmI",
        "youtubeId": "lI7x-3TsPmI",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_kaam25.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorant_kaam25.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Desi hip-hop beat-synced Valorant montage utilizing time remapping, snap zoom transitions, and impact bass shakes.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Gaming Montage",
            "Beat Sync",
            "Impact Shakes"
        ]
    },
    {
        "id": "valo-blindinglights",
        "slNo": 8,
        "title": "Blinding Lights — Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (Blinding Lights)",
        "date": "14.08.2022",
        "year": "2022",
        "link": "https://youtu.be/KW_itFOtTp4",
        "youtubeId": "KW_itFOtTp4",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_blindinglights.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorant_blindinglights.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Synthwave-themed gameplay montage synchronizing sniper eliminations with retro tempo cuts and vibrant neon color correction.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Gaming Montage",
            "Synthwave",
            "Color Grading"
        ]
    },
    {
        "id": "valo-violin",
        "slNo": 9,
        "title": "World's Smallest Violin — Valorant Montage",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Montage (Worlds Smallest Violin)",
        "date": "22.08.2022",
        "year": "2022",
        "link": "https://youtu.be/DwRePf1XJfY",
        "youtubeId": "DwRePf1XJfY",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/valorant/valorant_worldssmallestviolin.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/valorant/valorant_worldssmallestviolin.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Accelerating tempo edit matching relentless crescendo timing with rapid-fire kill feed sync and comedic timing.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Gaming Montage",
            "Tempo Acceleration",
            "Sound Sync"
        ]
    },
    {
        "id": "idt5-poster-timelapse",
        "slNo": 10,
        "title": "Ideathon Key Visual — Photoshop Timelapse Design",
        "company": "Ideathon BehindTheScenes",
        "client": "Ideathon BehindTheScenes",
        "typeOfWork": "Photoshop Timelapse Design",
        "date": "23.10.2026",
        "year": "2026",
        "link": "https://youtu.be/RXjvNWHlgQA",
        "youtubeId": "RXjvNWHlgQA",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id5_poster_video.png",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id5_poster_video.png",
        "primaryCategory": "social",
        "categories": [
            "social",
            "branding",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "Behind-the-scenes speed art and Photoshop design timelapse showing the complete compositing process of the Ideathon key visual poster.",
        "tools": [
            "Photoshop",
            "Premiere Pro"
        ],
        "tags": [
            "Speed Art",
            "Process Timelapse",
            "Behind The Scenes"
        ]
    },
    {
        "id": "idt4-backdrop-loop",
        "slNo": 11,
        "title": "Ideathon 4.0 — Backdrop Loop Animation",
        "company": "Ideathon 4.0",
        "client": "Ideathon 4.0",
        "typeOfWork": "Backdrop Loop Animation",
        "date": "20.01.2026",
        "year": "2026",
        "link": "https://youtu.be/hmvluCXhdVQ",
        "youtubeId": "hmvluCXhdVQ",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id4_backdrop.png",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id4_backdrop.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Seamless stage backdrop animation loop running continuously on the main auditorium LED screens throughout SIT Ideathon 4.0.",
        "tools": [
            "After Effects",
            "Premiere Pro"
        ],
        "tags": [
            "Stage Visuals",
            "Loop Animation",
            "Motion Graphics"
        ]
    },
    {
        "id": "idt3-premiere-breakdown",
        "slNo": 12,
        "title": "Ideathon 3.0 — Premiere Pro Timeline Breakdown",
        "company": "Ideathon 3.0",
        "client": "Ideathon 3.0",
        "typeOfWork": "Premiere Pro Timeline for Master Edit",
        "date": "10.02.2025",
        "year": "2025",
        "link": "https://youtu.be/FxehnLpjCeI",
        "youtubeId": "FxehnLpjCeI",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id3_premiere.png",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id3_premiere.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Behind-the-scenes breakdown of the multi-track timeline, sound layering, transition curves, and audio stem mixing for the Ideathon 3.0 master edit.",
        "tools": [
            "Premiere Pro"
        ],
        "tags": [
            "Timeline Breakdown",
            "Video Editing",
            "Audio Mixing"
        ]
    },
    {
        "id": "idt3-backdrop-loop",
        "slNo": 13,
        "title": "Ideathon 3.0 — Backdrop Loop Animation",
        "company": "Ideathon 3.0",
        "client": "Ideathon 3.0",
        "typeOfWork": "Backdrop Loop Animation",
        "date": "08.02.2025",
        "year": "2025",
        "link": "https://youtu.be/fmkYAUBqaiM",
        "youtubeId": "fmkYAUBqaiM",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/ideathon/id3_backdrop.png",
        "original": "_CreativeWorkCollection/Thumbnails/ideathon/id3_backdrop.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Geometric stage backdrop loop motion graphic engineered for auditorium projection displays during Ideathon 3.0 presentations.",
        "tools": [
            "After Effects",
            "Premiere Pro"
        ],
        "tags": [
            "Stage Visuals",
            "Loop Animation",
            "Motion Graphics"
        ]
    },
    {
        "id": "client-hushpuppi-video",
        "slNo": 14,
        "title": "Hushpuppi — Short Motion Graphics Video",
        "company": "Client Work",
        "client": "Client Work",
        "typeOfWork": "Short Motion Graphics Video",
        "date": "23.11.2023",
        "year": "2023",
        "link": "https://youtu.be/H1M3WzE4sOs",
        "youtubeId": "H1M3WzE4sOs",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/hushpuppi_edit.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/hushpuppi_edit.png",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Short-form kinetic motion graphics piece featuring typographic animation, fast cuts, and punchy audio effects.",
        "tools": [
            "After Effects",
            "Premiere Pro"
        ],
        "tags": [
            "Motion Graphics",
            "Kinetic Typography",
            "Client Work"
        ]
    },
    {
        "id": "client-ratlam-trailer",
        "slNo": 15,
        "title": "Ratlam Food Court — Commercial Trailer",
        "company": "Client Work",
        "client": "Ratlam Food Court",
        "typeOfWork": "Ratlam Food Court Trailer",
        "date": "18.10.2023",
        "year": "2023",
        "link": "https://youtube.com/shorts/rGhjhrKjsyA",
        "youtubeId": "rGhjhrKjsyA",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/clientworks/ratlam.png",
        "original": "_CreativeWorkCollection/Thumbnails/clientworks/ratlam.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Vertical promotional trailer created for Ratlam Food Court showcasing appetizing culinary offerings and venue ambiance.",
        "tools": [
            "Premiere Pro",
            "CapCut Pro"
        ],
        "tags": [
            "Commercial Reel",
            "Vertical Video",
            "Client Work"
        ]
    },
    {
        "id": "tann-mann-short",
        "slNo": 16,
        "title": "The Tann Mann Foundation — Program Intro Reel",
        "company": "The Tann Mann Foundation",
        "client": "The Tann Mann Foundation",
        "typeOfWork": "Program Introductory Video",
        "date": "22.09.2023",
        "year": "2023",
        "link": "https://youtube.com/shorts/5EnX1JRPUHA",
        "youtubeId": "5EnX1JRPUHA",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/clientworks/mbm_short.png",
        "original": "_CreativeWorkCollection/Thumbnails/clientworks/mbm_short.png",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Short-form vertical introductory reel highlighting non-profit initiatives, healthcare camps, and youth engagement programs.",
        "tools": [
            "Premiere Pro"
        ],
        "tags": [
            "Non-Profit",
            "Introductory Reel",
            "Vertical Video"
        ]
    },
    {
        "id": "webmarvel-services",
        "slNo": 17,
        "title": "Webmarvel — Company Services Introduction",
        "company": "Webmarvel",
        "client": "Webmarvel.in",
        "typeOfWork": "Company Services Introduction",
        "date": "03.09.2023",
        "year": "2023",
        "link": "https://youtu.be/rj33hTSLU5M",
        "youtubeId": "rj33hTSLU5M",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/webmarvel_vid.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/webmarvel_vid.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Motion showcase detailing IT services, web development packages, and cloud solutions provided by Webmarvel.",
        "tools": [
            "After Effects",
            "Premiere Pro"
        ],
        "tags": [
            "Corporate Video",
            "Service Explainer",
            "Motion Graphics"
        ]
    },
    {
        "id": "webmarvel-reel",
        "slNo": 18,
        "title": "Webmarvel — Company Intro Reel",
        "company": "Webmarvel",
        "client": "Webmarvel.in",
        "typeOfWork": "Company Intro Reel",
        "date": "02.09.2023",
        "year": "2023",
        "link": "https://youtube.com/shorts/oELYB_Sncaw",
        "youtubeId": "oELYB_Sncaw",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/webmarvel_short.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/webmarvel_short.png",
        "primaryCategory": "motion",
        "categories": [
            "motion"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Snappy Instagram vertical reel designed to increase agency brand discovery with punchy captions and motion graphics.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Short Reel",
            "Agency Promo",
            "Vertical Video"
        ]
    },
    {
        "id": "vlebazaar-giveaway",
        "slNo": 19,
        "title": "Vle Bazaar — Giveaway Announcement Reel",
        "company": "Vle Bazaar",
        "client": "Vle Bazaar",
        "typeOfWork": "Giveaway Announcement Reel",
        "date": "28.08.2023",
        "year": "2023",
        "link": "https://youtube.com/shorts/aGHhxTCLcmE",
        "youtubeId": "aGHhxTCLcmE",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/clientworks/giveaway_vle.png",
        "original": "_CreativeWorkCollection/Thumbnails/clientworks/giveaway_vle.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding",
            "social"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Social media announcement reel promoting a tech hardware giveaway contest for e-commerce portal Vle Bazaar.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Promotional Reel",
            "Giveaway Campaign",
            "E-Commerce"
        ]
    },
    {
        "id": "tann-mann-trailer",
        "slNo": 20,
        "title": "The Tann Mann Foundation — Program Showcase Video",
        "company": "The Tann Mann Foundation",
        "client": "The Tann Mann Foundation",
        "typeOfWork": "Program Introductory Video",
        "date": "17.07.2023",
        "year": "2023",
        "link": "https://youtu.be/Ufwz2Cn7BUI",
        "youtubeId": "Ufwz2Cn7BUI",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/mbm_trailer.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/mbm_trailer.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Comprehensive horizontal documentary-style promotional trailer communicating the mission and community projects of The Tann Mann Foundation.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Documentary Promo",
            "Foundation Intro",
            "Sound Design"
        ]
    },
    {
        "id": "vlebazaar-airdopes",
        "slNo": 21,
        "title": "boAt Airdopes Edit — Product Showcase",
        "company": "Vle Bazaar",
        "client": "Vle Bazaar",
        "typeOfWork": "Boat Airdopes Edit",
        "date": "21.07.2023",
        "year": "2023",
        "link": "https://youtube.com/shorts/nDfvWqkJDV4",
        "youtubeId": "nDfvWqkJDV4",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/airdopes_edit.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/airdopes_edit.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "social"
        ],
        "categoryLabel": "Motion & Video",
        "description": "High-octane product commercial reel featuring sound sync, quick cuts, and kinetic product feature callouts for boAt Airdopes.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Product Commercial",
            "Sound Sync",
            "Vertical Video"
        ]
    },
    {
        "id": "bdj-submerged-video",
        "slNo": 22,
        "title": "Submerged Civilization — Concept Edit",
        "company": "BDJ Manthan",
        "client": "BDJ Manthan",
        "typeOfWork": "Submerged Civilization Edit",
        "date": "24.08.2021",
        "year": "2021",
        "link": "https://youtu.be/5Fdr-hnYrYw",
        "youtubeId": "5Fdr-hnYrYw",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/submerged_civilization.png",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/submerged_civilization.png",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "3d"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Sci-fi worldbuilding concept edit combining volumetric underwater atmospheres, deep-sea spacecraft navigation, and cinematic orchestral sound scoring.",
        "tools": [
            "Premiere Pro",
            "After Effects",
            "Blender"
        ],
        "tags": [
            "Sci-Fi Trailer",
            "Worldbuilding",
            "Atmospheric Edit"
        ]
    },
    {
        "id": "playbutton-showcase",
        "slNo": 23,
        "title": "1K Subscriber Play Button Showcase",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Play Button Showcase",
        "date": "12.02.2020",
        "year": "2020",
        "link": "https://youtu.be/n7gZTElnXp0",
        "youtubeId": "n7gZTElnXp0",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/playbutton_edit.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/playbutton_edit.jpg",
        "primaryCategory": "3d",
        "categories": [
            "3d",
            "motion"
        ],
        "categoryLabel": "3D & Mockups",
        "description": "Cinematic reveal and fabrication showcase video of a custom-crafted 1,000 subscriber creator award milestone plaque.",
        "tools": [
            "Physical Fabrication",
            "Premiere Pro",
            "Lighting"
        ],
        "tags": [
            "Physical Award",
            "Creator Milestone",
            "Cinematic Reveal"
        ]
    },
    {
        "id": "gameday-trailer",
        "slNo": 24,
        "title": "GameDayYT — Gaming Channel Trailer",
        "company": "Client Work",
        "client": "GameDayYT",
        "typeOfWork": "Channel Trailer Edit for GamedayYT",
        "date": "22.06.2020",
        "year": "2020",
        "link": "https://youtu.be/R9RPorD-qXk",
        "youtubeId": "R9RPorD-qXk",
        "thumbnail": "_CreativeWorkCollection/Thumbnails/trailers/gameday_trailer.jpg",
        "original": "_CreativeWorkCollection/Thumbnails/trailers/gameday_trailer.jpg",
        "primaryCategory": "motion",
        "categories": [
            "motion",
            "branding"
        ],
        "categoryLabel": "Motion & Video",
        "description": "Under-one-minute channel intro edit combining stream highlights, setup photography, and custom transparent transition overlays.",
        "tools": [
            "Premiere Pro",
            "After Effects"
        ],
        "tags": [
            "Channel Trailer",
            "Alpha Transitions",
            "Audio Design"
        ]
    },
    {
        "id": "dl-logistics-branding",
        "slNo": 25,
        "title": "DL Logistics — Visual Identity & Logo Design Suite",
        "company": "Client Work",
        "client": "DL Logistics",
        "typeOfWork": "DL Logistics Logo Designing",
        "date": "01.06.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/Logos/m_dl_3.png",
        "original": "_CreativeWorkCollection/Logos/m_dl_3.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Comprehensive corporate identity system designed for freight and supply chain provider DL Logistics, featuring aerodynamic iconography, customized typographic lockup, office signage, and 3D vehicle mockups.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Logo Design",
            "Corporate Identity",
            "3D Mockup",
            "Graphic Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_dl_3.png",
                "original": "_CreativeWorkCollection/Logos/m_dl_3.png",
                "title": "DL Logistics 3D Wall Signage Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/m_dl_1.jpg",
                "original": "_CreativeWorkCollection/Logos/m_dl_1.jpg",
                "title": "DL Logistics Corporate Office Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/m_dl_2.jpg",
                "original": "_CreativeWorkCollection/Logos/m_dl_2.jpg",
                "title": "DL Logistics Delivery Fleet Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_dllogisticsmockup.png",
                "original": "_CreativeWorkCollection/Logos/logo_dllogisticsmockup.png",
                "title": "DL Logistics Acrylic Plate Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_dllogistics.png",
                "original": "_CreativeWorkCollection/Logos/logo_dllogistics.png",
                "title": "DL Logistics Icon Mark",
                "type": "Logo"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_dllogistics_text.png",
                "original": "_CreativeWorkCollection/Logos/logo_dllogistics_text.png",
                "title": "DL Logistics Full Wordmark Lockup",
                "type": "Wordmark"
            }
        ]
    },
    {
        "id": "laldingpuii-logo",
        "slNo": 26,
        "title": "Laldingpuii — Personal Brand Identity",
        "company": "Client Work",
        "client": "Laldingpuii",
        "typeOfWork": "Laldingpuii Logo Designing",
        "date": "23.10.2025",
        "year": "2025",
        "thumbnail": "_CreativeWorkCollection/Logos/m_laldingpuii.png",
        "original": "_CreativeWorkCollection/Logos/m_laldingpuii.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Elegant monogram and personal signature identity mark developed with balanced proportions, refined geometric curvature, and embossed stationery mockups.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Personal Branding",
            "Monogram",
            "Identity Design",
            "Mockup"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_laldingpuii.png",
                "original": "_CreativeWorkCollection/Logos/m_laldingpuii.png",
                "title": "Laldingpuii Monogram 3D Presentation Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_laldingpuii.jpg",
                "original": "_CreativeWorkCollection/Logos/logo_laldingpuii.jpg",
                "title": "Laldingpuii Brand Identity Mark",
                "type": "Logo"
            }
        ]
    },
    {
        "id": "optimization-club-logo",
        "slNo": 27,
        "title": "SIT Optimization Club — Official Emblem Design",
        "company": "SIT Optimization Club",
        "client": "SIT Optimization Club",
        "typeOfWork": "College Club Logo Design",
        "date": "22.09.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/Logos/m_optimization_1.png",
        "original": "_CreativeWorkCollection/Logos/m_optimization_1.png",
        "primaryCategory": "branding",
        "categories": [
            "branding"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Geometric emblem and visual identity designed for the SIT Optimization Club, symbolizing algorithm efficiency, growth curves, and collegiate collaboration.",
        "tools": [
            "Illustrator",
            "Photoshop"
        ],
        "tags": [
            "Club Emblem",
            "Geometric Design",
            "Academic Branding",
            "3D Mockup"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_optimization_1.png",
                "original": "_CreativeWorkCollection/Logos/m_optimization_1.png",
                "title": "Optimization Club 3D Badge Mockup 1",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/m_optimization_2.png",
                "original": "_CreativeWorkCollection/Logos/m_optimization_2.png",
                "title": "Optimization Club 3D Badge Mockup 2",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_optimizationclub.jpg",
                "original": "_CreativeWorkCollection/Logos/logo_optimizationclub.jpg",
                "title": "SIT Optimization Club Official Logo",
                "type": "Emblem"
            }
        ]
    },
    {
        "id": "sickicks-branding",
        "slNo": 28,
        "title": "Sickicks — Footwear Streetwear Identity",
        "company": "Client Work",
        "client": "Sickicks",
        "typeOfWork": "Sickicks",
        "date": "11.07.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Logos/m_sick_1.png",
        "original": "_CreativeWorkCollection/Logos/m_sick_1.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Urban streetwear and sneakerhead culture logo mark featuring sharp typography, edgy silhouette stylings, retail apparel, and storefront mockups.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Streetwear Brand",
            "Sneaker Culture",
            "Apparel Mockup",
            "Identity Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_sick_1.png",
                "original": "_CreativeWorkCollection/Logos/m_sick_1.png",
                "title": "Sickicks Streetwear Apparel Mockup 1",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/m_sick_2.png",
                "original": "_CreativeWorkCollection/Logos/m_sick_2.png",
                "title": "Sickicks Streetwear Apparel Mockup 2",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/mockup_sickicks.png",
                "original": "_CreativeWorkCollection/Logos/mockup_sickicks.png",
                "title": "Sickicks Retail Storefront Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/logo_sickicks.jpg",
                "original": "_CreativeWorkCollection/Logos/logo_sickicks.jpg",
                "title": "Sickicks Wordmark Identity",
                "type": "Logo"
            }
        ]
    },
    {
        "id": "submerged-civ-poster",
        "slNo": 29,
        "title": "Submerged Civilization — Concept Key Art Poster",
        "company": "BDJ Manthan",
        "client": "BDJ Manthan",
        "typeOfWork": "Submerged Civilization Poster",
        "date": "24.08.2021",
        "year": "2021",
        "thumbnail": "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg",
        "original": "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Key visual movie-style concept art poster visualizing an undersea civilization exploring benthic biomes and futuristic submarine vessels.",
        "tools": [
            "Photoshop",
            "Blender"
        ],
        "tags": [
            "Concept Art",
            "Movie Poster",
            "Sci-Fi Matte Painting"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg",
                "original": "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg",
                "title": "Submerged Civilization Key Art Poster",
                "type": "Concept Poster"
            }
        ]
    },
    {
        "id": "gta6-disc",
        "slNo": 30,
        "title": "GTA 6 — Speculative Disc Packaging & Print",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "GTA 6 Mockup Disc Cover",
        "date": "15.10.2026",
        "year": "2026",
        "thumbnail": "_CreativeWorkCollection/Mockups/m_gta6.png",
        "original": "_CreativeWorkCollection/Mockups/m_gta6.png",
        "primaryCategory": "3d",
        "categories": [
            "3d",
            "graphics"
        ],
        "categoryLabel": "3D & Mockups",
        "description": "Speculative physical game packaging including high-gloss retail slipcover, disc artwork label, and case insert for Grand Theft Auto VI.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Packaging Design",
            "Physical Disc Mockup",
            "Key Art Compositing"
        ],
        "featured": true,
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Mockups/m_gta6.png",
                "original": "_CreativeWorkCollection/Mockups/m_gta6.png",
                "title": "GTA 6 Retail Case & Disc 3D Presentation",
                "type": "3D Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Mockups/gta6_discCover.jpeg",
                "original": "_CreativeWorkCollection/Mockups/gta6_discCover.jpeg",
                "title": "Retail Case Cover Layout",
                "type": "Packaging"
            },
            {
                "src": "_CreativeWorkCollection/Mockups/gta6_discPrint.png",
                "original": "_CreativeWorkCollection/Mockups/gta6_discPrint.png",
                "title": "Physical Optical Disc Print",
                "type": "Disc Label"
            }
        ]
    },
    {
        "id": "webmarvel-posts",
        "slNo": 31,
        "title": "Webmarvel — Social Media Post Suite",
        "company": "Webmarvel",
        "client": "Webmarvel.in",
        "typeOfWork": "Social Media Posts",
        "date": "12.09.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Mockups/webmarvel_InstaPost1.jpg",
        "original": "_CreativeWorkCollection/Mockups/webmarvel_InstaPost1.jpg",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "Cohesive social media marketing templates designed for Instagram grids, communicating company hiring, tech stacks, and agency capabilities.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Social Media Graphics",
            "Marketing Grid",
            "Agency Branding"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Mockups/webmarvel_InstaPost1.jpg",
                "original": "_CreativeWorkCollection/Mockups/webmarvel_InstaPost1.jpg",
                "title": "Webmarvel Instagram Post 1",
                "type": "Social Post"
            },
            {
                "src": "_CreativeWorkCollection/Mockups/webmarvel_instaPost2.jpg",
                "original": "_CreativeWorkCollection/Mockups/webmarvel_instaPost2.jpg",
                "title": "Webmarvel Instagram Post 2",
                "type": "Social Post"
            }
        ]
    },
    {
        "id": "3dprinting-workshop-poster",
        "slNo": 32,
        "title": "3D Printing Workshop — Event Poster",
        "company": "SIT Optimization Club",
        "client": "SIT Optimization Club",
        "typeOfWork": "Event Poster - 3d printing workshop",
        "date": "22.08.2025",
        "year": "2025",
        "thumbnail": "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
        "original": "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics",
            "3d"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Technical event poster announcing the hands-on 3D printing and additive manufacturing workshop hosted by SIT Optimization Club.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Event Poster",
            "Additive Manufacturing",
            "Academic Event"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
                "original": "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
                "title": "3D Printing Workshop Official Poster",
                "type": "Poster"
            }
        ]
    },
    {
        "id": "ratlam-invitation",
        "slNo": 33,
        "title": "Ratlam Food Court — Chatore Street Invitation Suite",
        "company": "Client Work",
        "client": "Ratlam Food Court",
        "typeOfWork": "Ratlam Food Court Invitation Card",
        "date": "18.10.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Posters/chatorestreet_english.jpg",
        "original": "_CreativeWorkCollection/Posters/chatorestreet_english.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Bilingual grand opening invitation cards crafted in English and Hindi for Chatore Street at Ratlam Food Court, utilizing regal Indian aesthetics and decorative gold foils.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Invitation Design",
            "Bilingual Print",
            "Grand Opening"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/chatorestreet_english.jpg",
                "original": "_CreativeWorkCollection/Posters/chatorestreet_english.jpg",
                "title": "Chatore Street Invitation — English",
                "type": "Invitation"
            },
            {
                "src": "_CreativeWorkCollection/Posters/chatorestreet_hindi.jpg",
                "original": "_CreativeWorkCollection/Posters/chatorestreet_hindi.jpg",
                "title": "Chatore Street Invitation — Hindi",
                "type": "Invitation"
            }
        ]
    },
    {
        "id": "dreamtation-poster",
        "slNo": 34,
        "title": "DreamTation '24 — Official Event Poster",
        "company": "SIT Optimization Club",
        "client": "SIT Optimization Club",
        "typeOfWork": "Event Poster - dreamtation 24",
        "date": "20.09.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/Posters/DreamTation24.jpeg",
        "original": "_CreativeWorkCollection/Posters/DreamTation24.jpeg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "High-contrast dynamic event poster designed for DreamTation 2024, highlighting student innovation, presentation rounds, and registration criteria.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Event Poster",
            "Club Techfest",
            "College Notice"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/DreamTation24.jpeg",
                "original": "_CreativeWorkCollection/Posters/DreamTation24.jpeg",
                "title": "DreamTation 2024 Official Poster",
                "type": "Poster"
            }
        ]
    },
    {
        "id": "vlebazaar-giveaway-post",
        "slNo": 35,
        "title": "VLE Bazaar — Social Media Giveaway Post",
        "company": "VLE Bazaar",
        "client": "VLE Bazaar",
        "typeOfWork": "Social Media Posts",
        "date": "01.08.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Posters/giveaway_post.jpg",
        "original": "_CreativeWorkCollection/Posters/giveaway_post.jpg",
        "primaryCategory": "social",
        "categories": [
            "social"
        ],
        "categoryLabel": "Social Content",
        "description": "Promotional banner and feed visual for VLE Bazaar's customer giveaway campaign, highlighting gift items and participation steps.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Social Post",
            "Giveaway Banner",
            "E-Commerce"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/giveaway_post.jpg",
                "original": "_CreativeWorkCollection/Posters/giveaway_post.jpg",
                "title": "VLE Bazaar Giveaway Feed Post",
                "type": "Social Media Post"
            }
        ]
    },
    {
        "id": "holi-creatives",
        "slNo": 36,
        "title": "Festival of Colors — Holi Campaign Creatives",
        "company": "Client Work",
        "client": "Client Work",
        "typeOfWork": "Holi Creatives",
        "date": "18.03.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/Posters/holi_banner_clientwork.jpg",
        "original": "_CreativeWorkCollection/Posters/holi_banner_clientwork.jpg",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "Vibrant festival marketing collateral featuring splash color typography and joyful celebratory imagery, tailored for web banners and social stories.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Festival Creatives",
            "Social Banner",
            "Client Campaign"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/holi_banner_clientwork.jpg",
                "original": "_CreativeWorkCollection/Posters/holi_banner_clientwork.jpg",
                "title": "Holi Web Banner",
                "type": "Digital Banner"
            },
            {
                "src": "_CreativeWorkCollection/Posters/holi_creative_clientwork.jpg",
                "original": "_CreativeWorkCollection/Posters/holi_creative_clientwork.jpg",
                "title": "Holi Social Story Creative",
                "type": "Social Creative"
            }
        ]
    },
    {
        "id": "sit-career-impulse",
        "slNo": 37,
        "title": "SIT Career Impulse — Event Poster",
        "company": "SIT Career Impulse",
        "client": "SIT Career Impulse",
        "typeOfWork": "Event Poster Design",
        "date": "04.10.2026",
        "year": "2026",
        "thumbnail": "_CreativeWorkCollection/Posters/SIT_CareerImpulse.jpg",
        "original": "_CreativeWorkCollection/Posters/SIT_CareerImpulse.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Career development seminar and corporate placement guidance event poster designed for Siliguri Institute of Technology.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Career Seminar",
            "Corporate Branding",
            "Event Poster"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/SIT_CareerImpulse.jpg",
                "original": "_CreativeWorkCollection/Posters/SIT_CareerImpulse.jpg",
                "title": "SIT Career Impulse Event Poster",
                "type": "Poster"
            }
        ]
    },
    {
        "id": "sit-freshers-invitation",
        "slNo": 38,
        "title": "AIML Department Freshers — Welcome Invitation",
        "company": "SIT Freshers",
        "client": "SIT Freshers",
        "typeOfWork": "AIML Freshers Invitation Card",
        "date": "06.10.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Posters/SIT_Freshers.png",
        "original": "_CreativeWorkCollection/Posters/SIT_Freshers.png",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "AI & Machine Learning Department Freshers' Welcome ceremony card featuring neural network vector elements, cybernetic aesthetics, and event itinerary.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Freshers Invitation",
            "AIML Theme",
            "Cyberpunk Aesthetic"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/SIT_Freshers.png",
                "original": "_CreativeWorkCollection/Posters/SIT_Freshers.png",
                "title": "AIML Freshers Invitation Card",
                "type": "Invitation"
            }
        ]
    },
    {
        "id": "sit-technovision-posters",
        "slNo": 39,
        "title": "SIT Technovision 2k24 — Designcon Event Suite",
        "company": "SIT Technovision 2k24",
        "client": "SIT Technovision 2k24",
        "typeOfWork": "Designcon Event Post Designing",
        "date": "09.04.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/Posters/SITPoster1.jpg",
        "original": "_CreativeWorkCollection/Posters/SITPoster1.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics",
            "branding"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Comprehensive poster and social graphic series for Designcon at SIT Technovision 2k24, establishing event tracks, design challenges, and submission deadlines.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Designcon",
            "Techfest Campaign",
            "Event Poster Suite"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/SITPoster1.jpg",
                "original": "_CreativeWorkCollection/Posters/SITPoster1.jpg",
                "title": "Designcon Key Visual Poster 1",
                "type": "Poster"
            },
            {
                "src": "_CreativeWorkCollection/Posters/SITPoster2.jpg",
                "original": "_CreativeWorkCollection/Posters/SITPoster2.jpg",
                "title": "Designcon Track Poster 2",
                "type": "Poster"
            },
            {
                "src": "_CreativeWorkCollection/Posters/SITPoster3.jpg",
                "original": "_CreativeWorkCollection/Posters/SITPoster3.jpg",
                "title": "Designcon Guidelines Poster 3",
                "type": "Poster"
            }
        ]
    },
    {
        "id": "vastu-home-solutions",
        "slNo": 40,
        "title": "Vastu Home Solutions — Corporate Business Banner",
        "company": "Client Work",
        "client": "Vastu Home Solutions",
        "typeOfWork": "Client Business Banner Design",
        "date": "13.04.2025",
        "year": "2025",
        "thumbnail": "_CreativeWorkCollection/Posters/VastuHomeSolns_poster.png",
        "original": "_CreativeWorkCollection/Posters/VastuHomeSolns_poster.png",
        "primaryCategory": "graphics",
        "categories": [
            "graphics",
            "branding"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Professional commercial banner designed for architectural and interior advisory consultancy Vastu Home Solutions, highlighting service verticals and contact channels.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Business Banner",
            "Interior Design",
            "Client Work"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Posters/VastuHomeSolns_poster.png",
                "original": "_CreativeWorkCollection/Posters/VastuHomeSolns_poster.png",
                "title": "Vastu Home Solutions Corporate Banner",
                "type": "Banner"
            }
        ]
    },
    {
        "id": "tech-business-card",
        "slNo": 41,
        "title": "TechnologyHell — Business Card Design & Print Suite",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Business Card design",
        "date": "21.05.2026",
        "year": "2026",
        "thumbnail": "_CreativeWorkCollection/Logos/m_tech_card.png",
        "original": "_CreativeWorkCollection/Logos/m_tech_card.png",
        "primaryCategory": "graphics",
        "categories": [
            "graphics",
            "branding"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Premium physical business card design featuring spot UV varnish detailing, matte black typography, and dual-sided corporate contact layout.",
        "tools": [
            "Photoshop",
            "Illustrator",
            "Print Production"
        ],
        "tags": [
            "Business Card",
            "Print Production",
            "Spot UV",
            "Branding"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_tech_card.png",
                "original": "_CreativeWorkCollection/Logos/m_tech_card.png",
                "title": "Business Card 3D Perspective Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/card_front.png",
                "original": "_CreativeWorkCollection/Logos/card_front.png",
                "title": "Business Card Front Side",
                "type": "Print Asset"
            },
            {
                "src": "_CreativeWorkCollection/Logos/card_rear.png",
                "original": "_CreativeWorkCollection/Logos/card_rear.png",
                "title": "Business Card Rear Side",
                "type": "Print Asset"
            },
            {
                "src": "_CreativeWorkCollection/Logos/card_uv.jpeg",
                "original": "_CreativeWorkCollection/Logos/card_uv.jpeg",
                "title": "Spot UV Varnish Layer Mask",
                "type": "Print Mask"
            }
        ]
    },
    {
        "id": "valo-t2-post",
        "slNo": 42,
        "title": "Ignition T2 — Valorant Tournament Post",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Valorant Tournament Post",
        "date": "14.07.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Mockups/ignitiont2.jpg",
        "original": "_CreativeWorkCollection/Mockups/ignitiont2.jpg",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "High-octane esports social feed poster announcing the Ignition Tournament Season 2, featuring tactical agent cutouts and bracket details.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Tournament Post",
            "Social Creative",
            "Gaming Key Art"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Mockups/ignitiont2.jpg",
                "original": "_CreativeWorkCollection/Mockups/ignitiont2.jpg",
                "title": "Ignition T2 Tournament Announcement Post",
                "type": "Social Post"
            }
        ]
    },
    {
        "id": "t2-brand-collab",
        "slNo": 43,
        "title": "Ignition T2 — Brand Collaboration Mockup Design",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Brand Collaboration Mockup Design",
        "date": "12.07.2023",
        "year": "2023",
        "thumbnail": "_CreativeWorkCollection/Mockups/collaborationt2_collab.jpg",
        "original": "_CreativeWorkCollection/Mockups/collaborationt2_collab.jpg",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "Commercial sponsorship and tournament partnership announcement graphic visualizing joint brand integrations across social platforms.",
        "tools": [
            "Photoshop"
        ],
        "tags": [
            "Brand Collaboration",
            "Sponsorship Graphic",
            "Mockup Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Mockups/collaborationt2_collab.jpg",
                "original": "_CreativeWorkCollection/Mockups/collaborationt2_collab.jpg",
                "title": "Brand Collaboration Mockup",
                "type": "Social Creative"
            }
        ]
    },
    {
        "id": "tech-channel-logo",
        "slNo": 44,
        "title": "TechnologyHell — Official Channel Brand Logo",
        "company": "Youtube (Self)",
        "client": "YouTube (Self)",
        "typeOfWork": "Channel Final Logo (in use present)",
        "date": "19.09.2021",
        "year": "2021",
        "thumbnail": "_CreativeWorkCollection/Logos/m_tech_logo.png",
        "original": "_CreativeWorkCollection/Logos/m_tech_logo.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Current active visual identity and avatar emblem for the TechnologyHell brand, balancing sharp cybernetic aesthetics with high visibility across digital platforms.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Channel Logo",
            "Brand Identity",
            "Emblem Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/Logos/m_tech_logo.png",
                "original": "_CreativeWorkCollection/Logos/m_tech_logo.png",
                "title": "TechnologyHell 3D Logo Presentation",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/Logos/tech_logo.png",
                "original": "_CreativeWorkCollection/Logos/tech_logo.png",
                "title": "TechnologyHell Primary Mark",
                "type": "Logo"
            },
            {
                "src": "_CreativeWorkCollection/Logos/tech_sq.png",
                "original": "_CreativeWorkCollection/Logos/tech_sq.png",
                "title": "TechnologyHell Square Profile Lockup",
                "type": "Avatar Mark"
            }
        ]
    },
    {
        "id": "idt3-idcards-suite",
        "slNo": 45,
        "title": "SIT Ideathon 3.0 — Comprehensive ID Cards Suite",
        "company": "Ideathon 3.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "ID Cards Design",
        "date": "06.02.2025",
        "year": "2025",
        "thumbnail": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
        "original": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Tiered access credential badges designed for participants, volunteers, faculty, dignitaries, and organizing committee members at SIT Ideathon 3.0.",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Credential Badges",
            "Event Collateral",
            "Print Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png",
                "title": "Participant ID Credential Badge",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcardvolunteer.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcardvolunteer.png",
                "title": "Volunteer Crew ID Badge",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcard1.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcard1.png",
                "title": "Organizing Committee ID Card",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcard2.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcard2.png",
                "title": "Organizing Committee ID Card",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_idcard3.png",
                "original": "_CreativeWorkCollection/IDT/3/id3_idcard3.png",
                "title": "Organizing Committee ID Card",
                "type": "Badge"
            }
        ]
    },
    {
        "id": "idt3-dummycheck",
        "slNo": 46,
        "title": "SIT Ideathon 3.0 — Ceremonial Dummy Check",
        "company": "Ideathon 3.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Dummy Check Designs",
        "date": "18.01.2026",
        "year": "2025 – 2026",
        "thumbnail": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
        "original": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Large-format ceremonial presentation dummy check created for the cash prize award ceremony at SIT Ideathon 3.0.",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Ceremonial Check",
            "Event Collateral",
            "Stage Presentation"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_dummycheck.jpg",
                "title": "Cash Prize Presentation Dummy Check",
                "type": "Stage Collateral"
            }
        ]
    },
    {
        "id": "idt3-logos-mockups",
        "slNo": 47,
        "title": "SIT Ideathon 3.0 — Logos & 3D Mockup Suite",
        "company": "Ideathon 3.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Logos & Mockups",
        "date": "04.10.2024",
        "year": "2024",
        "thumbnail": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
        "original": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
        "primaryCategory": "graphics",
        "categories": [
            "graphics",
            "branding"
        ],
        "categoryLabel": "Graphic Design",
        "description": "Brandmark identity emblem and 3D architectural mockup suite establishing the visual foundation for Ideathon 3.0.",
        "tools": [
            "Photoshop",
            "Illustrator"
        ],
        "tags": [
            "Brandmark",
            "3D Mockup",
            "Event Emblem"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_logomockup.jpg",
                "title": "3D Emblem Presentation Mockup",
                "type": "Mockup"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_logo.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_logo.jpg",
                "title": "Official Brandmark Vector Master",
                "type": "Logo"
            }
        ]
    },
    {
        "id": "idt3-posters-invitations",
        "slNo": 48,
        "title": "SIT Ideathon 3.0 — Stage Banners & Invitation Suite",
        "company": "Ideathon 3.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Posters & Invitation Cards",
        "date": "13.12.2024",
        "year": "2024 – 2025",
        "thumbnail": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
        "original": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "Auditorium stage backdrop banner, promotional flyer brochure, and VIP invitation graphics authored for Ideathon 3.0.",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Stage Banner",
            "Event Flyer",
            "VIP Invitation"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
                "title": "Main Stage Backdrop Banner",
                "type": "Stage Banner"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_flyer.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_flyer.jpg",
                "title": "Official Event Flyer Brochure",
                "type": "Flyer"
            },
            {
                "src": "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg",
                "title": "VIP Invitation Banner",
                "type": "Banner"
            }
        ]
    },
    {
        "id": "idt4-idcards-suite",
        "slNo": 49,
        "title": "SIT Ideathon 4.0 — Event ID Credentials Suite",
        "company": "Ideathon 4.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "ID Cards Design",
        "date": "18.01.2026",
        "year": "2026",
        "thumbnail": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
        "original": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Multi-tiered credential pass suite engineered for participants, jury members, dignitaries, and organizing committee for SIT Ideathon 4.0.",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Credential Badges",
            "Event Branding",
            "VIP Passes"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png",
                "title": "Participant ID Credential Badge",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_icard1.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_icard1.png",
                "title": "Dignitary & Guest Pass",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_idcard2.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_idcard2.png",
                "title": "Jury Credential Pass",
                "type": "Badge"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_idcard3.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_idcard3.png",
                "title": "Organizing Committee Pass",
                "type": "Badge"
            }
        ]
    },
    {
        "id": "idt4-posters-backdrops",
        "slNo": 50,
        "title": "SIT Ideathon 4.0 — Stage Backdrops & Posters Suite",
        "company": "Ideathon 4.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Posters",
        "date": "21.12.2025",
        "year": "2025 – 2026",
        "thumbnail": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
        "original": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
        "primaryCategory": "branding",
        "categories": [
            "branding",
            "graphics"
        ],
        "categoryLabel": "Branding & Identity",
        "description": "Large-format stage backdrop banners, 20-foot red-carpet photography walls, official call-for-ideas posters, and social carousel key art.",
        "tools": [
            "Photoshop",
            "Print Production"
        ],
        "tags": [
            "Stage Backdrop",
            "Photography Wall",
            "Call For Ideas Poster"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
                "title": "Main Stage Backdrop Banner",
                "type": "Stage Backdrop"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_poster.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_poster.jpg",
                "title": "Official Call For Ideas Poster",
                "type": "Poster"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg",
                "title": "Red Carpet Photography Backdrop",
                "type": "Photography Wall"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg",
                "title": "Social Carousel Key Art",
                "type": "Social Carousel"
            }
        ]
    },
    {
        "id": "idt4-invitations-screens",
        "slNo": 51,
        "title": "SIT Ideathon 4.0 — Digital Screens & Invitation Cards",
        "company": "Ideathon 4.0",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "Invitation Cards",
        "date": "21.12.2025",
        "year": "2025 – 2026",
        "thumbnail": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
        "original": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics"
        ],
        "categoryLabel": "Social Content",
        "description": "High-contrast VIP physical invitation cards and auditorium LED screen digital display banners created for Ideathon 4.0.",
        "tools": [
            "Photoshop",
            "Digital Display"
        ],
        "tags": [
            "VIP Invitation",
            "Digital Screen Banner",
            "Event Collateral"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
                "original": "_CreativeWorkCollection/IDT/4/id4_invitationcard.png",
                "title": "VIP Physical Invitation Card",
                "type": "Invitation"
            },
            {
                "src": "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg",
                "original": "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg",
                "title": "Auditorium Digital Screen Banner",
                "type": "Digital Display"
            }
        ]
    },
    {
        "id": "idt5-rockstar",
        "slNo": 52,
        "title": "SIT Ideathon 5.0 — Rockstar Thematic Key Visual",
        "company": "Ideathon 5",
        "client": "Siliguri Institute of Technology",
        "typeOfWork": "GTA 5 styled poster mockups",
        "date": "26.01.2026",
        "year": "2026",
        "thumbnail": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png",
        "original": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png",
        "primaryCategory": "social",
        "categories": [
            "social",
            "graphics",
            "branding"
        ],
        "categoryLabel": "Social Content",
        "featured": true,
        "description": "Rockstar GTA-inspired promotional poster illustration and trimmed composition celebrating the fifth anniversary of SIT Ideathon.",
        "tools": [
            "Photoshop",
            "Digital Illustration"
        ],
        "tags": [
            "GTA Thematic",
            "Key Visual",
            "Speed Art",
            "Poster Design"
        ],
        "gallery": [
            {
                "src": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png",
                "original": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png",
                "title": "Full Key Visual Poster Art",
                "type": "Poster"
            },
            {
                "src": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster_trimmed.png",
                "original": "_CreativeWorkCollection/IDT/5/id5_rockstar_poster_trimmed.png",
                "title": "Trimmed Showcase Variant",
                "type": "Poster Variant"
            }
        ]
    }
],

  achievements: [
    {
        "badge": "GLOBAL 4TH POSITION",
        "year": "March 2026",
        "title": "IHMMC 2026 — 4th Position Globally",
        "org": "Asansol Engineering College",
        "desc": "Competed with the TechDeck programmable macropad variants in the Innovative Hardware Model Making Competition 2026, ranking 4th among 180+ participating international teams."
    },
    {
        "badge": "WINNER",
        "year": "February 2026",
        "title": "Winner — Startup Challenge @ Technovision 2k26",
        "org": "Technovision 2k26",
        "desc": "Went in with the business model, unit economics, and go-to-market strategy, and stood as the winners!"
    },
    {
        "badge": "2ND RUNNERS UP",
        "year": "February 2026",
        "title": "Hardware Project Competition — 2nd Runners Up",
        "org": "Technovision 2k26",
        "desc": "Demonstrated the physical TechDeck macro keypad running custom Python firmware and CATIA CAD chassis, receiving high honors in the project showcase."
    },
    {
        "badge": "RUNNERS UP",
        "year": "February 2026",
        "title": "Robosoccer Competition — Runners Up",
        "org": "Technovision 2k26",
        "desc": "Designed and engineered the competition chassis and drivetrain, driving to the grand finals of the collegiate Robosoccer robotics cup."
    },
    {
        "badge": "RUNNERS UP",
        "year": "September 2025",
        "title": "Inter-College Debate Championship",
        "org": "SIT Literary Club",
        "desc": "Stood as Runners-Up in the college-level parliamentary debate tournament evaluating technology ethics and automation."
    },
    {
        "badge": "WINNER",
        "year": "August 2025",
        "title": "Winner — Vision to Venture",
        "org": "Eureka! IIT Bombay",
        "desc": "Winners at a Business Idea Event organized by Eureka! IIT Bombay — went in with strategic venture proposition, market model, and business execution framework."
    },
    {
        "badge": "1ST RANK",
        "year": "July 2025",
        "title": "CDAC Additive Manufacturing Training — Ranked #1",
        "org": "Centre for Development of Advanced Computing (CDAC)",
        "desc": "Capstone hardware and CAD modeling project ranked first in the specialized 3D Printing & Additive Manufacturing intensive training programme."
    },
    {
        "badge": "RUNNERS UP",
        "year": "September 2024",
        "title": "Digital Marketing & Design Competition",
        "org": "SIT Annual Tech & Cultural Fest",
        "desc": "Awarded Runners-Up for creative visual branding, promotional campaign messaging, and social media creative suite execution."
    },
    {
        "badge": "RUNNERS UP",
        "year": "September 2024",
        "title": "Quiz-O-Mania — Runners Up",
        "org": "Computer Engineers Society",
        "desc": "Secured 2nd place in the inter-departmental technical and computer science engineering quiz tournament."
    }
],

  awardsGallery: [
    {
      "src": "_CreativeWorkCollection/Awards/1.jpg",
      "original": "_CreativeWorkCollection/Awards/1.jpg",
      "title": "Trophies & Honors Showcase",
      "caption": "Collection of trophies, mementos, and awards won across hardware hackathons, model making, and design competitions.",
      "type": "Trophy Showcase • Battlestation Display"
    },
    {
      "src": "_CreativeWorkCollection/Awards/6.jpeg",
      "original": "_CreativeWorkCollection/Awards/6.jpeg",
      "title": "Technovision Award Ceremony",
      "caption": "Receiving the 1st place winner prize check on stage for the Startup Challenge during the annual Tech Management Fest 2026 (TMF2K26).",
      "type": "Stage Felicitation • TMF2K26"
    },
    {
      "src": "_CreativeWorkCollection/Awards/2.jpg",
      "original": "_CreativeWorkCollection/Awards/2.jpg",
      "title": "Prize Checks & Competition Grants",
      "caption": "Framed ceremonial dummy prize checks from TMF2K26 Startup Challenge, Robosoccer, Hardware Prototyping, and IHMMC 2026.",
      "type": "Prize Checks • Competition Wins"
    },
    {
      "src": "_CreativeWorkCollection/Awards/3.jpg",
      "original": "_CreativeWorkCollection/Awards/3.jpg",
      "title": "Certificates of Excellence & Appreciation",
      "caption": "Official institutional certificates recognizing top rankings, hackathon victories, and technical leadership.",
      "type": "Credentials • Certificates of Honor"
    },
    {
      "src": "_CreativeWorkCollection/Awards/5.jpg",
      "original": "_CreativeWorkCollection/Awards/5.jpg",
      "title": "Hackathon Victory Ceremony",
      "caption": "Team celebration holding the 1st place champion trophy and recognition plaques at SIT Hackaverse.",
      "type": "Ceremony • Team Victory"
    },
    {
      "src": "_CreativeWorkCollection/Awards/4.jpg",
      "original": "_CreativeWorkCollection/Awards/4.jpg",
      "title": "Event Passes, Credentials & Badges",
      "caption": "Access passes and credentials from DevFest, CDAC summits, international conferences, and technical fests.",
      "type": "Credentials • Badges & Lanyards"
    }
  ]
};

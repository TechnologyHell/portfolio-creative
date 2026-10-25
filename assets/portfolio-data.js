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
    resumeUrl: "assets/Nitish_Singh_Creative_Resume.pdf",
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
      heroImage: "assets/optimized/IDT/3/id3_banner.webp",
      videoUrl: "https://www.youtube.com/watch?v=fYRBwF7v4Vk",
      youtubeId: "fYRBwF7v4Vk",
      videoTitle: "SIT Ideathon 3.0 — Event Recap Montage",
      videoLocalPath: "_CreativeWorkCollection/IDT/3/id3_montage_premierescreenrecording.mp4",
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
            { src: "assets/optimized/IDT/3/id3_logo.webp", original: "_CreativeWorkCollection/IDT/3/id3_logo.jpg", title: "Brandmark Emblem", type: "Logo" },
            { src: "assets/optimized/IDT/3/id3_logomockup.webp", original: "_CreativeWorkCollection/IDT/3/id3_logomockup.png", title: "3D Emblem Mockup", type: "Mockup" }
          ]
        },
        {
          heading: "Stage Backdrops & Banners",
          description: "Large-scale vector and raster graphics formatted with print bleeds for auditorium staging.",
          items: [
            { src: "assets/optimized/IDT/3/id3_banner.webp", original: "_CreativeWorkCollection/IDT/3/id3_banner.jpg", title: "Main Stage Backdrop Banner", type: "Stage Banner" },
            { src: "assets/optimized/IDT/3/id3_invitationbanner.webp", original: "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg", title: "VIP Invitation Banner", type: "Banner" }
          ]
        },
        {
          heading: "Promotional Collateral",
          description: "Multi-panel brochures and informational flyers distributed across regional academic institutions.",
          items: [
            { src: "assets/optimized/IDT/3/id3_flyer.webp", original: "_CreativeWorkCollection/IDT/3/id3_flyer.jpg", title: "Official Event Flyer Brochure", type: "Flyer" }
          ]
        },
        {
          heading: "Credentials & Event Collateral",
          description: "Color-coded physical badges for attendees, jury, and committee members, along with the winner dummy check.",
          items: [
            { src: "assets/optimized/IDT/3/id3_idcardparticipant.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png", title: "Participant ID Badge", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_idcardvolunteer.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcardvolunteer.png", title: "Volunteer Crew ID Badge", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_idcard1.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcard1.png", title: "Tier 1 Credential Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_idcard2.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcard2.png", title: "Tier 2 Credential Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_idcard3.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcard3.png", title: "Tier 3 Credential Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_idcard4.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcard4.png", title: "Tier 4 Credential Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/3/id3_dummycheck.webp", original: "_CreativeWorkCollection/IDT/3/id3_dummycheck.png", title: "Cash Prize Dummy Check", type: "Ceremonial Check" }
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
      heroImage: "assets/optimized/IDT/4/id4_backdropbanner.webp",
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
      publications: [
        { title: "Book of Abstract (Official Event Publication)", path: "_CreativeWorkCollection/IDT/4/id4_bookofabstract.pdf", type: "PDF Publication" },
        { title: "Participant Certificates Compilation", path: "_CreativeWorkCollection/IDT/4/id4_certificates.pdf", type: "PDF Document" }
      ],
      sections: [
        {
          heading: "Stage Backdrops & Photography Walls",
          description: "High-contrast, large-format graphics designed for the main event auditorium and dignitary reception.",
          items: [
            { src: "assets/optimized/IDT/4/id4_backdropbanner.webp", original: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg", title: "Main Stage Backdrop Banner", type: "Stage Backdrop" },
            { src: "assets/optimized/IDT/4/id4_redcarpetbackdrop.webp", original: "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg", title: "Red Carpet Photography Backdrop", type: "Photography Wall" }
          ]
        },
        {
          heading: "Posters & Promotional Assets",
          description: "Promotional campaigns distributed across digital channels, social media, and campus notices.",
          items: [
            { src: "assets/optimized/IDT/4/id4_poster.webp", original: "_CreativeWorkCollection/IDT/4/id4_poster.jpg", title: "Official Call For Ideas Poster", type: "Poster" },
            { src: "assets/optimized/IDT/4/id4_carouselposter.webp", original: "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg", title: "Social Carousel Key Art", type: "Social Media" },
            { src: "assets/optimized/IDT/4/id4_digitalscreenbanner.webp", original: "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg", title: "Auditorium Digital Screen Banner", type: "Digital Display" }
          ]
        },
        {
          heading: "Credentials, Invitations & Collateral",
          description: "Tiered access passes, VIP invitation cards, and ceremony collateral for participants and guests.",
          items: [
            { src: "assets/optimized/IDT/4/id4_invitationcard.webp", original: "_CreativeWorkCollection/IDT/4/id4_invitationcard.png", title: "VIP Invitation Card", type: "Invitation" },
            { src: "assets/optimized/IDT/4/id4_idcardparticipant.webp", original: "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png", title: "Participant ID Credential Badge", type: "Credential Badge" },
            { src: "assets/optimized/IDT/4/id4_icard1.webp", original: "_CreativeWorkCollection/IDT/4/id4_icard1.png", title: "Dignitary & Guest Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/4/id4_idcard2.webp", original: "_CreativeWorkCollection/IDT/4/id4_idcard2.png", title: "Jury Credential Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/4/id4_idcard3.webp", original: "_CreativeWorkCollection/IDT/4/id4_idcard3.png", title: "Organizing Committee Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/4/id4_idcard4.webp", original: "_CreativeWorkCollection/IDT/4/id4_idcard4.png", title: "Volunteer Crew Pass", type: "Credential Badge" },
            { src: "assets/optimized/IDT/4/id4_dummycheck.webp", original: "_CreativeWorkCollection/IDT/4/id4_dummycheck.png", title: "Cash Prize Dummy Check", type: "Ceremonial Check" }
          ]
        }
      ],
      summary: "SIT Ideathon 4.0 represented the culmination of two years of event design and student leadership. Managing presidential coordination while authoring the complete design package ensured absolute brand fidelity from digital screens to 20-foot physical stage banners and the high-energy opening video."
    }
  },

  // Flat list of 6 motion projects for a consistent, unbroken 3x2 grid
  motionWorks: [
    {
      id: "valo-stay",
      title: "Stay — Valorant Montage",
      category: "Gaming Montage",
      year: "2022",
      youtubeId: "12ZS0y4Gnq4",
      thumbnail: "assets/optimized/Thumbnails/valoEdit_bossbitch_TN.webp",
      description: "Fast-paced montage focused on non-linear time remapping, velocity curve acceleration, weapon sound synchronization, and punchy color grading.",
      techniques: ["Time Remapping", "Beat Sync", "Sound Design", "Color Grading"]
    },
    {
      id: "valo-motn",
      title: "Middle of the Night — Valorant Montage",
      category: "Gaming Montage",
      year: "2022",
      youtubeId: "fmtiSYfkd-M",
      thumbnail: "assets/optimized/Thumbnails/valoedit_ridin_TN.webp",
      description: "Rhythm-driven edit coordinating cuts and high-contrast color styling to vocal drops and percussion beats.",
      techniques: ["Rhythm Pacing", "Contrast Grade", "Vocal Drop Alignment"]
    },
    {
      id: "valo-7rings",
      title: "7 Rings — 3D Valorant Edit",
      category: "3D Motion Edit",
      year: "2023",
      youtubeId: "j2JfFx4vBoc",
      thumbnail: "assets/optimized/Thumbnails/valoEdit_7rings_TN.webp",
      description: "Short-form gameplay sequence exploring 3D spatial camera movement, character isolation, and smooth velocity ramping.",
      techniques: ["3D Spatial Camera", "Character Isolation", "Speed Ramping"]
    },
    {
      id: "gameday-trailer",
      title: "GameDayYT — Gaming Channel Trailer",
      category: "Creator Trailer",
      year: "2020",
      youtubeId: "-Q3jBdPBSQ4",
      thumbnail: "assets/optimized/Thumbnails/valorantTournamentVideoTN.webp",
      description: "Under-one-minute channel intro edit combining stream highlights, setup photography, and custom transparent transition overlays.",
      techniques: ["Trailer Pacing", "Alpha Transitions", "Audio Design"]
    },
    {
      id: "valo-ignition",
      title: "Valorant : Ignition T2 — Tournament Announcement",
      category: "Tournament Announcement",
      year: "2022",
      youtubeId: "aVYVlrya-PY",
      thumbnail: "assets/optimized/Thumbnails/valorantTournamentVideoTN.webp",
      description: "Esports tournament promotional video utilizing kinetic typography, bracket reveals, and energetic audio synchronization.",
      techniques: ["Kinetic Typography", "Graphic Reveals", "Audio Sync"]
    },
    {
      id: "submerged-civ",
      title: "Submerged Civilization — Concept & Trailer",
      category: "3D Worldbuilding & Teaser",
      year: "2021",
      localVideo: "_CreativeWorkCollection/Videos/Designation_submergedCivilizationTrailer.mp4",
      thumbnail: "assets/optimized/Mockups/designation_submergedCivilizationPoster.webp",
      description: "Sci-fi worldbuilding trailer exploring an underwater habitat narrative, built with a 3D spacecraft model in Blender and scored in Premiere Pro.",
      techniques: ["Blender 3D Modeling", "Volumetric Lighting", "Sound Scoring"]
    }
  ],

  physicalProjects: [
    {
      id: "techdeck-hardware",
      title: "TechDeck — Mechanical Macropad & CAD Enclosure",
      category: "3d",
      categoryLabel: "Physical Prototyping & CAD",
      year: "2025 – 2026",
      client: "Independent Hardware Build",
      role: "Industrial Design, CAD & Firmware",
      tools: ["CATIA V5", "FDM 3D Printing", "Python", "Embedded C++"],
      description: "Standalone programmable macro keypad designed with a custom 3D-printed enclosure modeled in CATIA V5, running custom firmware and a dynamic Python macro engine. Ranked #1 at CDAC Additive Manufacturing training; placed 4th globally at IHMMC 2026.",
      thumbnail: "assets/optimized/techdeck_physical.webp",
      original: "assets/techdeck_macropad.png",
      featured: true,
      tags: ["3D Design", "Physical Prototyping", "Hardware Build"]
    },
    {
      id: "creator-playbutton",
      title: "Custom 1K Subscriber Creator Award",
      category: "3d",
      categoryLabel: "Custom Fabrication",
      year: "2020",
      client: "Channel Milestone (Personal Build)",
      role: "Fabrication & Finishing",
      tools: ["Physical Fabrication", "Material Finishing", "Plaque Layout"],
      description: "Unofficial custom-made creator award piece fabricated to commemorate crossing 1,000 YouTube subscribers. An exercise in material layering, metallic surface finishing, and physical commemorative plaque design.",
      thumbnail: "assets/optimized/play_button_custom.webp",
      original: "assets/custom_play_button_milestone.jpg",
      videoUrl: "https://www.youtube.com/watch?v=n7gZTElnXp0",
      youtubeId: "n7gZTElnXp0",
      featured: true,
      tags: ["Physical Fabrication", "Creator Milestone", "Mockups"]
    },
    {
      id: "3d-printing-prototyping",
      title: "Additive Manufacturing & Structural CAD",
      category: "3d",
      categoryLabel: "CAD & Additive Manufacturing",
      year: "2025",
      client: "CDAC Training Programme",
      role: "CAD Modeling & Tolerance Testing",
      tools: ["CATIA V5", "FDM Slicing", "Additive Manufacturing"],
      description: "Component prototyping and print-bed tolerance calibration for structural enclosures. Honed through the CDAC Additive Manufacturing programme where the final capstone earned first rank.",
      thumbnail: "assets/optimized/Posters/3dprintingWorkshopPoster.webp",
      original: "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
      featured: false,
      tags: ["3D Design", "CAD Modeling", "Event Collateral"]
    }
  ],
  
  projects: [
    // 1. SIT Ideathon 4.0 Event Collateral
    {
      id: "idt4-identity",
      title: "SIT Ideathon 4.0 — Event Identity & Collateral",
      categories: ["branding", "graphics"],
      primaryCategory: "branding",
      categoryLabel: "Branding & Identity",
      year: "2025 – 2026",
      client: "Siliguri Institute of Technology",
      role: "President & Creative Lead",
      tools: ["Photoshop", "Print Production"],
      tags: ["Event Branding", "Brand Identity Systems", "Event Collateral", "Banners", "Invitations & Certificates", "Posters"],
      description: "Comprehensive visual collateral designed for the fourth edition of SIT Ideathon, including stage backdrops, red-carpet photography walls, participant ID credentials, cash prize checks, and invitation cards.",
      thumbnail: "assets/optimized/IDT/4/id4_backdropbanner.webp",
      original: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg",
      featured: true,
      isCaseStudy: true,
      caseStudyEdition: "idt4",
      gallery: [
        { src: "assets/optimized/IDT/4/id4_backdropbanner.webp", original: "_CreativeWorkCollection/IDT/4/id4_backdropbanner.jpg", title: "Main Stage Backdrop Banner", type: "Stage Backdrop" },
        { src: "assets/optimized/IDT/4/id4_redcarpetbackdrop.webp", original: "_CreativeWorkCollection/IDT/4/id4_redcarpetbackdrop.jpg", title: "Red Carpet Photography Backdrop", type: "Event Backdrop" },
        { src: "assets/optimized/IDT/4/id4_poster.webp", original: "_CreativeWorkCollection/IDT/4/id4_poster.jpg", title: "Official Call For Ideas Poster", type: "Poster" },
        { src: "assets/optimized/IDT/4/id4_carouselposter.webp", original: "_CreativeWorkCollection/IDT/4/id4_carouselposter.jpg", title: "Social Carousel Key Art", type: "Social Media" },
        { src: "assets/optimized/IDT/4/id4_digitalscreenbanner.webp", original: "_CreativeWorkCollection/IDT/4/id4_digitalscreenbanner.jpg", title: "Auditorium Digital Screen Banner", type: "Digital Display" },
        { src: "assets/optimized/IDT/4/id4_dummycheck.webp", original: "_CreativeWorkCollection/IDT/4/id4_dummycheck.png", title: "Prize Dummy Check", type: "Event Collateral" },
        { src: "assets/optimized/IDT/4/id4_idcardparticipant.webp", original: "_CreativeWorkCollection/IDT/4/id4_idcardparticipant.png", title: "Participant ID Badge", type: "Credential Badge" },
        { src: "assets/optimized/IDT/4/id4_invitationcard.webp", original: "_CreativeWorkCollection/IDT/4/id4_invitationcard.png", title: "VIP Invitation Card", type: "Invitation" }
      ]
    },

    // 2. Ideathon 3.0 Brand Ecosystem
    {
      id: "idt3-identity",
      title: "SIT Ideathon 3.0 — Brand Assets & Collateral",
      categories: ["branding", "graphics"],
      primaryCategory: "branding",
      categoryLabel: "Branding & Identity",
      year: "2024 – 2025",
      client: "Siliguri Institute of Technology",
      role: "Vice President & Design Lead",
      tools: ["Photoshop", "Print Production"],
      tags: ["Event Branding", "Brand Identity Systems", "Event Collateral", "Flyers", "Banners", "Logos"],
      description: "Visual identity assets and event collateral created for Ideathon 3.0, including stage banners, official flyers, logo mockups, and tiered participant ID cards.",
      thumbnail: "assets/optimized/IDT/3/id3_banner.webp",
      original: "_CreativeWorkCollection/IDT/3/id3_banner.jpg",
      featured: false,
      isCaseStudy: true,
      caseStudyEdition: "idt3",
      gallery: [
        { src: "assets/optimized/IDT/3/id3_banner.webp", original: "_CreativeWorkCollection/IDT/3/id3_banner.jpg", title: "Stage Banner", type: "Stage Banner" },
        { src: "assets/optimized/IDT/3/id3_logomockup.webp", original: "_CreativeWorkCollection/IDT/3/id3_logomockup.png", title: "Ideathon 3.0 3D Logo Mockup", type: "Logo Mockup" },
        { src: "assets/optimized/IDT/3/id3_logo.webp", original: "_CreativeWorkCollection/IDT/3/id3_logo.jpg", title: "Brandmark Emblem", type: "Logo" },
        { src: "assets/optimized/IDT/3/id3_flyer.webp", original: "_CreativeWorkCollection/IDT/3/id3_flyer.jpg", title: "Official Brochure Flyer", type: "Flyer" },
        { src: "assets/optimized/IDT/3/id3_invitationbanner.webp", original: "_CreativeWorkCollection/IDT/3/id3_invitationbanner.jpg", title: "VIP Invitation Banner", type: "Banner" },
        { src: "assets/optimized/IDT/3/id3_idcardparticipant.webp", original: "_CreativeWorkCollection/IDT/3/id3_idcardparticipant.png", title: "Participant ID Badge", type: "Credential Badge" }
      ]
    },

    // 3. DL Logistics Identity
    {
      id: "dl-logistics",
      title: "DL Logistics — Visual Identity & Signage",
      categories: ["branding", "3d"],
      primaryCategory: "branding",
      categoryLabel: "Branding & Identity",
      year: "2024",
      client: "DL Logistics (Freelance)",
      role: "Brand Identity Designer",
      tools: ["Photoshop"],
      tags: ["Logos", "Brand Identity Systems", "Mockups"],
      description: "Monogram logo and visual identity concepts designed for a logistics service, including horizontal wordmark variations and building signage mockups.",
      thumbnail: "assets/optimized/Logos/logo_dllogisticsmockup.webp",
      original: "_CreativeWorkCollection/Logos/logo_dllogisticsmockup.png",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Logos/logo_dllogisticsmockup.webp", original: "_CreativeWorkCollection/Logos/logo_dllogisticsmockup.png", title: "3D Signage Mockup", type: "Mockup" },
        { src: "assets/optimized/Logos/logo_dllogistics.webp", original: "_CreativeWorkCollection/Logos/logo_dllogistics.png", title: "Primary Icon Mark", type: "Logo" },
        { src: "assets/optimized/Logos/logo_dllogistics_text.webp", original: "_CreativeWorkCollection/Logos/logo_dllogistics_text.png", title: "Horizontal Wordmark", type: "Logo Variation" }
      ]
    },

    // 4. Sickicks Streetwear Identity
    {
      id: "sickicks-brand",
      title: "Sickicks — Footwear Identity Concept",
      categories: ["branding", "3d"],
      primaryCategory: "branding",
      categoryLabel: "Branding & Identity",
      year: "2024",
      client: "Sickicks (Personal Concept)",
      role: "Brand Designer",
      tools: ["Photoshop"],
      tags: ["Logos", "Mockups", "Concept Art"],
      description: "Monogram logo and material mockups created as an exploratory brand exercise for urban footwear and streetwear apparel.",
      thumbnail: "assets/optimized/Logos/mockup_sickicks.webp",
      original: "_CreativeWorkCollection/Logos/mockup_sickicks.png",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Logos/mockup_sickicks.webp", original: "_CreativeWorkCollection/Logos/mockup_sickicks.png", title: "Apparel Application Mockup", type: "Mockup" },
        { src: "assets/optimized/Logos/logo_sickicks.webp", original: "_CreativeWorkCollection/Logos/logo_sickicks.jpg", title: "Monogram Mark", type: "Logo" }
      ]
    },

    // 5. Ideathon 5.0 Teaser Poster
    {
      id: "idt5-rockstar",
      title: "SIT Ideathon 5.0 — Advance Teaser Poster",
      categories: ["graphics", "branding"],
      primaryCategory: "graphics",
      categoryLabel: "Graphic Design",
      year: "2026",
      client: "Ideathon Committee",
      role: "Graphic Designer",
      tools: ["Photoshop"],
      tags: ["Posters", "Event Branding", "Concept Art"],
      description: "Illustrative promotional poster created in a vintage cel-shaded comic style as an advance teaser announcement for Ideathon 5.0.",
      thumbnail: "assets/optimized/IDT/5/id5_rockstar_poster.webp",
      original: "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png",
      featured: true,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/IDT/5/id5_rockstar_poster.webp", original: "_CreativeWorkCollection/IDT/5/id5_rockstar_poster.png", title: "Full Illustrative Poster", type: "Poster" },
        { src: "assets/optimized/IDT/5/id5_rockstar_poster_trimmed.webp", original: "_CreativeWorkCollection/IDT/5/id5_rockstar_poster_trimmed.png", title: "Trimmed Crop Edition", type: "Key Visual" }
      ]
    },

    // 6. Chatore Street Food Campaign
    {
      id: "chatore-street",
      title: "Chatore Street — Restaurant Promotional Posters",
      categories: ["graphics", "social"],
      primaryCategory: "graphics",
      categoryLabel: "Graphic Design",
      year: "2024",
      client: "Chatore Street",
      role: "Graphic Designer",
      tools: ["Photoshop"],
      tags: ["Posters", "Social Media Creatives", "Flyers"],
      description: "Bilingual promotional posters created in English and Hindi for a local street food eatery, focusing on food photography compositing and localized typography.",
      thumbnail: "assets/optimized/Posters/chatorestreet_english.webp",
      original: "_CreativeWorkCollection/Posters/chatorestreet_english.jpg",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Posters/chatorestreet_english.webp", original: "_CreativeWorkCollection/Posters/chatorestreet_english.jpg", title: "English Campaign Poster", type: "Poster" },
        { src: "assets/optimized/Posters/chatorestreet_hindi.webp", original: "_CreativeWorkCollection/Posters/chatorestreet_hindi.jpg", title: "Hindi Campaign Poster", type: "Poster" }
      ]
    },

    // 7. SIT Institutional & Fest Posters
    {
      id: "sit-posters",
      title: "SIT Cultural & Tech Fest — Key Visuals",
      categories: ["graphics"],
      primaryCategory: "graphics",
      categoryLabel: "Graphic Design",
      year: "2024 – 2025",
      client: "Siliguri Institute of Technology",
      role: "Graphic Designer",
      tools: ["Photoshop"],
      tags: ["Posters", "Banners", "Event Collateral"],
      description: "Series of promotional posters and social banners designed for college annual events, including DreamTation 2024.",
      thumbnail: "assets/optimized/Posters/SITPoster3.webp",
      original: "_CreativeWorkCollection/Posters/SITPoster3.jpg",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Posters/SITPoster3.webp", original: "_CreativeWorkCollection/Posters/SITPoster3.jpg", title: "SIT Event Poster 3", type: "Poster" },
        { src: "assets/optimized/Posters/SITPoster2.webp", original: "_CreativeWorkCollection/Posters/SITPoster2.jpg", title: "SIT Event Poster 2", type: "Poster" },
        { src: "assets/optimized/Posters/DreamTation24.webp", original: "_CreativeWorkCollection/Posters/DreamTation24.jpeg", title: "DreamTation 2024 Key Art", type: "Key Visual" }
      ]
    },

    // 8. 3D Printing Workshop Poster
    {
      id: "3d-printing-poster",
      title: "3D Printing Workshop — Technical Poster",
      categories: ["graphics"],
      primaryCategory: "graphics",
      categoryLabel: "Graphic Design",
      year: "2025",
      client: "Department of CSE",
      role: "Graphic Designer",
      tools: ["Photoshop"],
      tags: ["Posters", "Event Collateral"],
      description: "Informational event poster designed for the Department of CSE to announce a hands-on workshop in additive manufacturing and CAD modeling.",
      thumbnail: "assets/optimized/Posters/3dprintingWorkshopPoster.webp",
      original: "_CreativeWorkCollection/Posters/3dprintingWorkshopPoster.jpg",
      featured: false,
      isCaseStudy: false
    },

    // 9. Stay Montage
    {
      id: "valo-stay",
      title: "Stay — Valorant Montage",
      categories: ["motion"],
      primaryCategory: "motion",
      categoryLabel: "Motion & Video",
      year: "2022",
      client: "Personal Creative",
      role: "Video Editor & Colorist",
      tools: ["Premiere Pro"],
      tags: ["Gaming Montages", "Reels & Short-form Edits"],
      description: "Personal gaming montage focused on precise audio beat-matching, weapon sound synchronization, and speed ramping transitions.",
      thumbnail: "assets/optimized/Thumbnails/valoEdit_bossbitch_TN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valoEdit_bossbitch_TN.jpg",
      videoUrl: "https://www.youtube.com/watch?v=12ZS0y4Gnq4",
      youtubeId: "12ZS0y4Gnq4",
      featured: true,
      isCaseStudy: false
    },

    // 10. Middle of the Night Montage
    {
      id: "valo-motn",
      title: "Middle of the Night — Valorant Montage",
      categories: ["motion"],
      primaryCategory: "motion",
      categoryLabel: "Motion & Video",
      year: "2022",
      client: "Personal Creative",
      role: "Video Editor",
      tools: ["Premiere Pro"],
      tags: ["Gaming Montages"],
      description: "Personal gaming montage featuring high-contrast color adjustments and transition pacing aligned to vocal drops.",
      thumbnail: "assets/optimized/Thumbnails/valoedit_ridin_TN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valoedit_ridin_TN.jpg",
      videoUrl: "https://www.youtube.com/watch?v=fmtiSYfkd-M",
      youtubeId: "fmtiSYfkd-M",
      featured: false,
      isCaseStudy: false
    },

    // 11. 7 Rings 3D Valorant Edit
    {
      id: "valo-7rings",
      title: "7 Rings — 3D Valorant Edit",
      categories: ["motion"],
      primaryCategory: "motion",
      categoryLabel: "Motion & Video",
      year: "2023",
      client: "Personal Creative",
      role: "Video Editor",
      tools: ["Premiere Pro", "After Effects"],
      tags: ["Gaming Montages", "Reels & Short-form Edits"],
      description: "Short-form gameplay edit combining 3D spatial camera movement and character framing with music-synchronized transition cuts.",
      thumbnail: "assets/optimized/Thumbnails/valoEdit_7rings_TN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valoEdit_7rings_TN.jpg",
      videoUrl: "https://www.youtube.com/watch?v=j2JfFx4vBoc",
      youtubeId: "j2JfFx4vBoc",
      featured: false,
      isCaseStudy: false
    },

    // 12. GameDayYT Channel Trailer
    {
      id: "gameday-trailer",
      title: "GameDayYT — Gaming Channel Trailer",
      categories: ["motion"],
      primaryCategory: "motion",
      categoryLabel: "Motion & Video",
      year: "2020",
      client: "GameDayYT (Client)",
      role: "Video Editor",
      tools: ["Premiere Pro", "After Effects"],
      tags: ["Promotional Videos", "Reels & Short-form Edits"],
      description: "30-second channel introduction trailer edited for a gaming creator, featuring stream highlights and custom transparent transition overlays.",
      thumbnail: "assets/optimized/Thumbnails/valorantTournamentVideoTN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valorantTournamentVideoTN.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-Q3jBdPBSQ4",
      youtubeId: "-Q3jBdPBSQ4",
      featured: false,
      isCaseStudy: false
    },

    // 13. Valorant Ignition T2 Tournament Trailer
    {
      id: "valo-ignition",
      title: "Valorant : Ignition T2 — Tournament Announcement",
      categories: ["motion"],
      primaryCategory: "motion",
      categoryLabel: "Motion & Video",
      year: "2022",
      client: "Tournament Organizer",
      role: "Motion Graphics Editor",
      tools: ["Premiere Pro", "After Effects"],
      tags: ["Event Trailers", "Promotional Videos"],
      description: "Promotional video announcing an esports tournament, utilizing kinetic typography, roster reveals, and sound-effect pacing.",
      thumbnail: "assets/optimized/Thumbnails/valorantTournamentVideoTN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valorantTournamentVideoTN.jpg",
      videoUrl: "https://www.youtube.com/watch?v=aVYVlrya-PY",
      youtubeId: "aVYVlrya-PY",
      featured: false,
      isCaseStudy: false
    },

    // 14. GTA 6 Collector's Disc Mockup
    {
      id: "gta6-disc",
      title: "Grand Theft Auto VI — Disc & Packaging Concept",
      categories: ["3d", "graphics"],
      primaryCategory: "3d",
      categoryLabel: "3D & Mockups",
      year: "2025",
      client: "Personal Concept (Unofficial)",
      role: "Concept Designer",
      tools: ["Photoshop"],
      tags: ["Mockups", "Concept Art", "3D Design"],
      description: "Personal speculative design studying retail packaging presentation, simulating plastic jewel-case light scatter, disc surface print layout, and publisher typography.",
      thumbnail: "assets/optimized/Mockups/gta6_discCover.webp",
      original: "_CreativeWorkCollection/Mockups/gta6_discCover.jpeg",
      featured: true,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Mockups/gta6_discCover.webp", original: "_CreativeWorkCollection/Mockups/gta6_discCover.jpeg", title: "Jewel Case & Cover Artwork", type: "Packaging Mockup" },
        { src: "assets/optimized/Mockups/gta6_discPrint.webp", original: "_CreativeWorkCollection/Mockups/gta6_discPrint.png", title: "Optical Disc Surface Print", type: "Disc Print" }
      ]
    },

    // 15. Submerged Civilization Concept
    {
      id: "submerged-civ",
      title: "Submerged Civilization — Concept & Trailer",
      categories: ["3d", "motion"],
      primaryCategory: "3d",
      categoryLabel: "3D & Mockups",
      year: "2021",
      client: "Birla Fest Digital Concept Competition",
      role: "Concept Designer & Editor",
      tools: ["Blender", "Premiere Pro"],
      tags: ["Concept Art", "3D Design", "Event Trailers", "Mockups"],
      description: "Student competition project exploring an underwater habitat narrative, built with a 3D spacecraft model in Blender and edited into a narrative teaser video.",
      thumbnail: "assets/optimized/Mockups/designation_submergedCivilizationPoster.webp",
      original: "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg",
      localVideo: "_CreativeWorkCollection/Videos/Designation_submergedCivilizationTrailer.mp4",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Mockups/designation_submergedCivilizationPoster.webp", original: "_CreativeWorkCollection/Mockups/designation_submergedCivilizationPoster.jpg", title: "Concept Key Art Poster", type: "Concept Art" }
      ]
    },

    // 16. Tech Hardware YouTube Thumbnails
    {
      id: "tech-thumbnails",
      title: "Consumer Tech — YouTube Cover Graphics",
      categories: ["social", "graphics"],
      primaryCategory: "social",
      categoryLabel: "Product & Social Media",
      year: "2023 – 2024",
      client: "YouTube Content / VLE Bazaar",
      role: "Thumbnail Designer",
      tools: ["Photoshop"],
      tags: ["YouTube Thumbnails", "Product Videos", "Social Media Creatives"],
      description: "Collection of YouTube thumbnails designed for consumer electronics unboxings and hardware reviews, emphasizing subject isolation, rim lighting, and clear text at small scales.",
      thumbnail: "assets/optimized/Thumbnails/productVideo_hyperX_quadcastMic.webp",
      original: "_CreativeWorkCollection/Thumbnails/productVideo_hyperX_quadcastMic.jpg",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Thumbnails/productVideo_hyperX_quadcastMic.webp", original: "_CreativeWorkCollection/Thumbnails/productVideo_hyperX_quadcastMic.jpg", title: "HyperX QuadCast Mic", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/productVideo_pocoX3pro.webp", original: "_CreativeWorkCollection/Thumbnails/productVideo_pocoX3pro.jpg", title: "Poco X3 Pro Review", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/productvideo_rogfusion300.webp", original: "_CreativeWorkCollection/Thumbnails/productvideo_rogfusion300.png", title: "ROG Fusion 300 Headset", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/productVideo_RedgearProGamepad.webp", original: "_CreativeWorkCollection/Thumbnails/productVideo_RedgearProGamepad.jpg", title: "Redgear Pro Gamepad", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/productvideo_lenovowebcam.webp", original: "_CreativeWorkCollection/Thumbnails/productvideo_lenovowebcam.jpg", title: "Lenovo Webcam 300", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/productVideo_redmiwatch4.webp", original: "_CreativeWorkCollection/Thumbnails/productVideo_redmiwatch4.png", title: "Redmi Watch 4 Launch", type: "Thumbnail" }
      ]
    },

    // 17. Gaming & Valorant Thumbnails
    {
      id: "gaming-thumbnails",
      title: "Gaming & Tournament — YouTube Thumbnails",
      categories: ["social", "graphics"],
      primaryCategory: "social",
      categoryLabel: "Product & Social Media",
      year: "2022 – 2023",
      client: "Personal YouTube Channel",
      role: "Thumbnail Designer",
      tools: ["Photoshop"],
      tags: ["YouTube Thumbnails", "Social Media Creatives"],
      description: "Video cover graphics created for personal gaming montages and tournament clips, utilizing character silhouettes, contrast grading, and typography.",
      thumbnail: "assets/optimized/Thumbnails/valoEdit_enemy_TN.webp",
      original: "_CreativeWorkCollection/Thumbnails/valoEdit_enemy_TN.jpg",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Thumbnails/valoEdit_enemy_TN.webp", original: "_CreativeWorkCollection/Thumbnails/valoEdit_enemy_TN.jpg", title: "Enemy — Valorant Montage", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/valoEdit_7rings_TN.webp", original: "_CreativeWorkCollection/Thumbnails/valoEdit_7rings_TN.jpg", title: "7 Rings 3D Edit Thumbnail", type: "Thumbnail" },
        { src: "assets/optimized/Thumbnails/valorantTournamentVideoTN.webp", original: "_CreativeWorkCollection/Thumbnails/valorantTournamentVideoTN.jpg", title: "Tournament Bracket Announcement", type: "Thumbnail" }
      ]
    },

    // 18. WebMarvel Brand & Social Collateral
    {
      id: "webmarvel-campaign",
      title: "WebMarvel — Social Media Creatives",
      categories: ["social", "graphics"],
      primaryCategory: "social",
      categoryLabel: "Product & Social Media",
      year: "2023 – 2024",
      client: "WebMarvel.in",
      role: "Creative Coordinator & Designer",
      tools: ["Photoshop"],
      tags: ["Social Media Creatives", "Brand Identity Systems"],
      description: "Social media graphics, intern announcement posts, and marketing creatives produced during an internship at WebMarvel.",
      thumbnail: "assets/optimized/Mockups/webmarvel_instaPost1.webp",
      original: "_CreativeWorkCollection/Mockups/webmarvel_instaPost1.jpg",
      featured: false,
      isCaseStudy: false,
      gallery: [
        { src: "assets/optimized/Mockups/webmarvel_instaPost1.webp", original: "_CreativeWorkCollection/Mockups/webmarvel_instaPost1.jpg", title: "Instagram Creative 1", type: "Social Post" },
        { src: "assets/optimized/Mockups/webmarvel_instaPost2.webp", original: "_CreativeWorkCollection/Mockups/webmarvel_instaPost2.jpg", title: "Instagram Creative 2", type: "Social Post" }
      ]
    }
  ]
};

// ============================================================================
// Harold Rajesh George Kulangara — Portfolio Interactive Controller
// Optimized Static Build for GitHub Pages
// ============================================================================

const YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v=o9QupZzX-hA&t=1s&pp=ygUcdGhlIG5lZXQgc3RvcnkgYnkgcmdrIGNpbmVtYQ%3D%3D";
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/o9QupZzX-hA?start=1&rel=0";

const ALL_CERTIFICATES_ASSETS = [
  {
    label: "Hack2Skill — Google Hackathon Official Certificate",
    relativePath: "assets/images/cert-01-hack2skill-google-hackathon.jpg",
    fileType: "image"
  },
  {
    label: "Gen AI Exchange Hackathon by Google — Certificate of Appreciation",
    relativePath: "assets/images/cert-02-google-genai-exchange-hackathon.jpg",
    fileType: "image"
  },
  {
    label: "Innovengers Workshop 2025 — Certificate of Innovation (Oakridge International School)",
    relativePath: "assets/images/cert-03-innovengers-oakridge-2025.jpg",
    fileType: "image"
  },
  {
    label: "Harvard Model Congress (HMC) — Young Global Leaders Program Certificate",
    relativePath: "assets/images/cert-04-harvard-model-congress.jpg",
    fileType: "image"
  },
  {
    label: "The Times of India — Certified Young AI Explorer Bootcamp (2025)",
    relativePath: "assets/images/cert-05-toi-young-ai-explorer-2025.jpg",
    fileType: "image"
  },
  {
    label: "ARISE School Education Conference 2025 (FICCI Master Class) Certificate",
    relativePath: "assets/images/cert-06-arise-ficci-conference-2025.jpg",
    fileType: "image"
  },
  {
    label: "IIIT Kottayam — CHORDS 2025 International Conference Certificate",
    relativePath: "assets/images/cert-07-iiit-kottayam-chords-2025.jpg",
    fileType: "image"
  },
  {
    label: "IIIT Kottayam C.R.E.A.T.E Lab — 3-Day Drone Building & Application Workshop (2025)",
    relativePath: "assets/images/cert-08-iiit-kottayam-drone-workshop-2025.jpg",
    fileType: "image"
  },
  {
    label: "Don Bosco IMAGE Film School — Two-Day Seminar on \"AI in Filmmaking\" (2025)",
    relativePath: "assets/images/cert-09-don-bosco-ai-filmmaking-2025.jpg",
    fileType: "image"
  },
  {
    label: "National Cadet Corps (NCC) — 17 Kerala Battalion Camp Certificate (2023)",
    relativePath: "assets/images/cert-10-ncc-kerala-battalion-camp-2023.jpg",
    fileType: "image"
  },
  {
    label: "National Cadet Corps (NCC) — Ministry of Defence Certificate \"A\" (2024)",
    relativePath: "assets/images/cert-11-ncc-ministry-of-defence-a-2024.jpg",
    fileType: "image"
  },
  {
    label: "Labour India UN Replica 2025 — Certificate of Participation",
    relativePath: "assets/images/cert-12-labour-india-un-replica-2025.jpg",
    fileType: "image"
  },
  {
    label: "Labour India UN Replica 2024 — Certificate of Participation",
    relativePath: "assets/images/cert-13-labour-india-un-replica-2024.jpg",
    fileType: "image"
  },
  {
    label: "Labour India UN Replica 2023 — Honourable Mention (UNSC)",
    relativePath: "assets/images/cert-14-labour-india-un-replica-2023-unsc.jpg",
    fileType: "image"
  },
  {
    label: "Labour India UN Replica 2023 — Certificate of Participation",
    relativePath: "assets/images/cert-15-labour-india-un-replica-2023.jpg",
    fileType: "image"
  },
  {
    label: "Labour India UN Replica 2022 — Certificate of Participation",
    relativePath: "assets/images/cert-16-labour-india-un-replica-2022.jpg",
    fileType: "image"
  },
  {
    label: "Dr. Kalam Smriti International UN Replica 2021 — Certificate of Appreciation",
    relativePath: "assets/images/cert-17-kalam-smriti-un-replica-2021.jpg",
    fileType: "image"
  },
  {
    label: "Goan Institute (GICE) — \"Me & My Skill\" Contest Certificate (2022)",
    relativePath: "assets/images/cert-18-gice-me-and-my-skill-2022.jpg",
    fileType: "image"
  },
  {
    label: "Sahodaya Kottayam SargaSangamam 2022 — Extempore English Certificate",
    relativePath: "assets/images/cert-19-sahodaya-extempore-english-2022.jpg",
    fileType: "image"
  },
  {
    label: "Sahodaya Kottayam SargaSangamam 2022 — Mime Certificate",
    relativePath: "assets/images/cert-20-sahodaya-mime-2022.jpg",
    fileType: "image"
  },
  {
    label: "Sahodaya Kottayam SargaSangamam 2023 — Anchoring Certificate",
    relativePath: "assets/images/cert-21-sahodaya-anchoring-2023.jpg",
    fileType: "image"
  },
  {
    label: "Labour India School Youth Festival 2023 — Certificate of Merit (Anchoring)",
    relativePath: "assets/images/cert-22-labour-india-anchoring-2023.jpg",
    fileType: "image"
  },
  {
    label: "Labour India School Youth Festival 2023–24 — Certificate of Merit (Extempore English)",
    relativePath: "assets/images/cert-23-labour-india-extempore-2023-24.jpg",
    fileType: "image"
  }
];

const PORTFOLIO_MANIFEST = [
  {
    id: "eduhex-focuslab",
    category: "Ventures & EdTech",
    title: "Eduhex UK - Focus Lab",
    deliverables: [
      "Eduhex UK Incorporation & BeTT 2026 London Exhibitor Pass",
      "Focus Lab Sample Workbook (PDF)",
      "AI School Business Plan (.docx)"
    ],
    assets: [
      {
        label: "BeTT 2026 Exhibitor Badge — Eduhex UK",
        relativePath: "assets/images/eduhex-bett-2026-badge.svg",
        fileType: "image"
      },
      {
        label: "UK Certificate of Incorporation (Eduhex UK Limited)",
        relativePath: "assets/documents/eduhex-uk-incorporation-certificate.pdf",
        fileType: "pdf"
      },
      {
        label: "BeTT 2026 Official Exhibitor Pass (PDF)",
        relativePath: "assets/documents/bett-2026-official-exhibitor-pass.pdf",
        fileType: "pdf"
      },
      {
        label: "Focus Lab Sample Workbook (PDF)",
        relativePath: "assets/documents/focus-lab-sample-workbook.pdf",
        fileType: "pdf"
      },
      {
        label: "AI School Business Plan (.docx)",
        relativePath: "assets/documents/ai-school-business-plan.docx",
        fileType: "doc"
      }
    ],
    link: "https://www.focuslab.school",
    year: "2025–2026",
    summary: "International EdTech venture uniting Eduhex UK Limited and BeTT 2026 London with the Focus Lab Sample Workbook and AI School Business Plan.",
    caseStudy: {
      role: "Co-Founder & Lead Curriculum Architect",
      problem: "Students today face fragmented attention spans and passive screen habits while schools lack a structured framework to teach both deep focus and practical AI literacy.",
      process: "Incorporated Eduhex UK Limited, exhibited Focus Lab at BeTT 2026 in London, and developed the Focus Lab Sample Workbook alongside the AI School Business Plan.",
      tools: [
        "EdTech Venture Strategy",
        "AI School Business Planning",
        "Cognitive Focus Frameworks",
        "Instructional Workbook Design"
      ],
      outcome: "Merged Eduhex UK Incorporation and BeTT 2026 London exhibition with the Focus Lab Sample Workbook and AI School Business Plan.",
      featuredImage: "assets/images/eduhex-bett-2026-badge.svg"
    }
  },
  {
    id: "plans-id-phone",
    category: "Projects & Product Design",
    title: "ID Phone X Artha",
    deliverables: [
      "TOL ID Phone Product Overview & E-Ink / Tactile Communicator Industrial Designs",
      "Comprehensive Project Report, Production Spec, Live Preview & PCB v2 Schematic (PDFs)",
      "Product Requirement Document (PRD): ToL ID Phone & PRD of Artha AI",
      "idPhone v1 Brochure & Instructions Guide (PDFs)"
    ],
    assets: [
      {
        label: "TOL ID Phone — Product Overview",
        relativePath: "assets/images/id-phone-product-overview.jpg",
        fileType: "image"
      },
      {
        label: "Design 2: Half-Screen Tactile Communicator & Translucent PCB Cutaway",
        relativePath: "assets/images/id-phone-design-2-tactile-communicator.jpg",
        fileType: "image"
      },
      {
        label: "Design 3: Minimalist E-Paper Smart Student ID Badge & Exploded PCB View",
        relativePath: "assets/images/id-phone-design-3-epaper-badge.jpg",
        fileType: "image"
      },
      {
        label: "E-Ink Smart Student ID Badge — Hardware Stackup & UI Interface Specs",
        relativePath: "assets/images/id-phone-eink-hardware-stackup.jpg",
        fileType: "image"
      },
      {
        label: "ToL ID Phone — Top & Bottom PCB Component Map & Physical Floorplan",
        relativePath: "assets/images/id-phone-pcb-component-map.jpg",
        fileType: "image"
      },
      {
        label: "ToL ID Phone v2.0 — Working Production Prototype PCB Layout",
        relativePath: "assets/images/id-phone-pcb-v2-prototype-layout.jpg",
        fileType: "image"
      },
      {
        label: "ToL ID Phone — Comprehensive Project Report (PDF)",
        relativePath: "assets/documents/tol-id-phone-comprehensive-project-report.pdf",
        fileType: "pdf"
      },
      {
        label: "ToL ID Phone — Complete Production Specification (PDF)",
        relativePath: "assets/documents/tol-id-phone-complete-production-spec.pdf",
        fileType: "pdf"
      },
      {
        label: "ToL ID Phone — Live Preview Specification (PDF)",
        relativePath: "assets/documents/tol-id-phone-live-preview-spec.pdf",
        fileType: "pdf"
      },
      {
        label: "ToL ID Phone — Prototype PCB v2 Schematic (PDF)",
        relativePath: "assets/documents/tol-id-phone-prototype-pcb-v2.pdf",
        fileType: "pdf"
      },
      {
        label: "ToL ID Phone — Instructions & Setup Guide (PDF)",
        relativePath: "assets/documents/tol-id-phone-instructions-guide.pdf",
        fileType: "pdf"
      },
      {
        label: "idPhone v1 Brochure (PDF)",
        relativePath: "assets/documents/idphone-v1-brochure.pdf",
        fileType: "pdf"
      },
      {
        label: "ToL ID Phone PRD (.docx)",
        relativePath: "assets/documents/tol-id-phone-prd.docx",
        fileType: "doc"
      },
      {
        label: "PRD of Artha (.docx)",
        relativePath: "assets/documents/artha-ai-prd.docx",
        fileType: "doc"
      }
    ],
    year: "2025–2026",
    summary: "Product requirement documents, E-Ink & tactile hardware industrial designs, PCB v2 schematics, production reports, and Artha AI specifications for the distraction-free ToL ID Phone.",
    caseStudy: {
      role: "Product Architect",
      problem: "School students need a safe, reliable way to communicate with parents and verify campus identity without the distractions and social media addiction of full smartphones.",
      process: "Authored the Product Requirement Documents (PRDs), hardware stackup specifications, E-Ink / tactile communicator industrial designs, and 4-layer PCB layouts for the ToL ID Phone alongside Artha AI.",
      tools: [
        "Product Requirements (PRD)",
        "Hardware & PCB Stackup Design",
        "E-Ink & Tactile Communicator UX",
        "System Specification"
      ],
      outcome: "Delivered the complete TOL ID Phone specification suite, industrial design renders, PCB v2 schematics, comprehensive project reports, and Artha AI PRD.",
      featuredImage: "assets/images/id-phone-product-overview.jpg"
    }
  },
  {
    id: "film-mahaakaavya",
    category: "Creative & Film",
    title: "MAHAAKAAVYA The NEET STORY",
    deliverables: [
      "Official Selection to AICFF (2026) & First Screening",
      "Mahaakaavya: The NEET Story Official Trailer (YouTube)",
      "16:9 Theatrical Poster, First Screening Poster & 5 Production / Film Stills"
    ],
    assets: [
      {
        label: "Mahaakaavya: The NEET Story — Official Trailer (YouTube)",
        relativePath: YOUTUBE_EMBED_URL,
        watchUrl: YOUTUBE_WATCH_URL,
        fileType: "video"
      },
      {
        label: "Mahaakaavya Official 16:9 Theatrical Poster",
        relativePath: "assets/images/mahaakaavya-16-9-theatrical-poster.jpg",
        fileType: "image"
      },
      {
        label: "First Screening — Mahaakaavya Private Screening Poster",
        relativePath: "assets/images/mahaakaavya-first-screening-poster.jpg",
        fileType: "image"
      },
      {
        label: "Mahaakaavya Film Still 01 — Classroom Scene",
        relativePath: "assets/images/mahaakaavya-film-still-01.jpg",
        fileType: "image"
      },
      {
        label: "Mahaakaavya Film Still 02 — Lecture Scene",
        relativePath: "assets/images/mahaakaavya-film-still-02.jpg",
        fileType: "image"
      },
      {
        label: "Mahaakaavya Film Still 03 — Study Desk Scene",
        relativePath: "assets/images/mahaakaavya-film-still-03.jpg",
        fileType: "image"
      },
      {
        label: "Mahaakaavya Production Still 04 — On-Set Camera Rig",
        relativePath: "assets/images/mahaakaavya-bts-still-04.jpg",
        fileType: "image"
      },
      {
        label: "Mahaakaavya Production Still 05 — Muhurtham & Direction",
        relativePath: "assets/images/mahaakaavya-bts-still-05.jpg",
        fileType: "image"
      }
    ],
    year: "2026",
    summary: "Narrative film directed by Harold R. George exploring academic pressure, human curiosity, and the vision of Aryabhata — selected for the All India Children Film Festival (AICFF) in 2026, complete with the official YouTube Trailer.",
    caseStudy: {
      role: "Director & Storyteller",
      problem: "Millions of students in high-pressure exam coaching ecosystems lose their natural curiosity and love for discovery, turning education into mechanical memorization.",
      process: "Wrote, directed, and produced Mahaakaavya: The NEET Story (inspired by the life and mathematical imagination of Aryabhata), managing on-set cinematography, visual storytelling, and the official trailer.",
      tools: [
        "Film Direction",
        "Screenwriting",
        "Cinematography & On-Set Production",
        "AI-Assisted Pre-Visualization"
      ],
      outcome: "Earned Official Selection at the All India Children Film Festival (AICFF) 2026, released the official trailer on YouTube, and hosted a private screening at Color Planet Studios, Kochi.",
      featuredImage: "assets/images/mahaakaavya-16-9-theatrical-poster.jpg"
    }
  },
  {
    id: "book-releases",
    category: "Publications & Books",
    title: "Author of Three",
    deliverables: [
      "Autobiography of a Gen Zombie (Full Book PDF)",
      "Autobiography of an AI Zombie (Preview PDF)",
      "Focus Lab — Complete Book (Bands 1–4 Combined PDF)"
    ],
    assets: [
      {
        label: "Autobiography of a Gen Zombie (Full Book PDF)",
        relativePath: "assets/documents/autobiography-of-a-gen-zombie.pdf",
        fileType: "pdf"
      },
      {
        label: "Autobiography of an AI Zombie (Preview PDF)",
        relativePath: "assets/documents/autobiography-of-an-ai-zombie-preview.pdf",
        fileType: "pdf"
      },
      {
        label: "Focus Lab — Complete Book (Bands 1–4 Combined PDF)",
        relativePath: "assets/documents/focus-lab-complete-books-1-to-4.pdf",
        fileType: "pdf"
      }
    ],
    link: "https://you2zombie.com",
    year: "2024–2026",
    summary: "Three authored books: Autobiography of a Gen Zombie, Autobiography of an AI Zombie, and the combined Focus Lab Complete Textbook (Bands 1–4 merged into one volume).",
    caseStudy: {
      role: "Author",
      problem: "Growing up as a teenager in an algorithm-driven era raises urgent questions about agency, attention, creativity, and what it means to think independently alongside AI.",
      process: "Wrote and published Autobiography of a Gen Zombie, Autobiography of an AI Zombie, and the combined Focus Lab textbook volume (merging Bands 01–04: Field Manual, Final Textbook, TextBook, and The Focus Wizard into one complete book).",
      tools: [
        "Long-Form Authorship",
        "Philosophical Inquiry",
        "Textbook & Curriculum Writing",
        "Digital Publishing"
      ],
      outcome: "Published all three works: Autobiography of a Gen Zombie (Full Book PDF), Autobiography of an AI Zombie (Preview PDF), and Focus Lab — Complete Book (Bands 1–4 Combined PDF).",
      featuredImage: "assets/images/gen-zombie-book-cover.jpg"
    }
  },
  {
    id: "google-hackathon-sagaris",
    category: "Hackathons & Competitions",
    title: "Sagaris AI - A Hackathon Initiative",
    deliverables: [
      "Sagaris AI Autonomous Cybersecurity System",
      "Investor & Hackathon Technical Whitepapers & Decks (PDF)",
      "Sagaris AI Visual Identity & Architecture Blueprints"
    ],
    assets: [
      {
        label: "SagarisAI — Autonomous Threat Detection & Response (Whitepaper PDF)",
        relativePath: "assets/documents/sagaris-ai-whitepaper.pdf",
        fileType: "pdf"
      },
      {
        label: "SagarisAI — Securing the Connected World (PDF)",
        relativePath: "assets/documents/sagaris-ai-securing-the-connected-world.pdf",
        fileType: "pdf"
      },
      {
        label: "SagarisAI — Technical Deck (PDF)",
        relativePath: "assets/documents/sagaris-ai-technical-deck.pdf",
        fileType: "pdf"
      },
      {
        label: "SagarisAI Axe Crest Logo",
        relativePath: "assets/images/sagaris-ai-axe-crest-logo.jpg",
        fileType: "image"
      }
    ],
    year: "2025",
    summary: "Autonomous cybersecurity threat-detection concept, presentation deck, and technical whitepaper suite built for the Google Gen AI Exchange Hackathon.",
    caseStudy: {
      role: "Team Lead & AI Systems Designer",
      problem: "Small organizations and connected student networks face increasingly automated cyber threats but lack real-time, intelligent anomaly detection.",
      process: "Designed Sagaris AI during the Google Gen AI Exchange Hackathon, producing technical whitepapers and system architecture decks explaining autonomous threat triage.",
      tools: [
        "Generative AI Workflows",
        "Cybersecurity Architecture",
        "Technical Writing",
        "Rapid Hackathon Prototyping"
      ],
      outcome: "Recognized with official certificates from Google Gen AI Exchange Hackathon and Hack2Skill.",
      featuredImage: "assets/images/sagaris-ai-axe-crest-logo.jpg"
    }
  },
  {
    id: "tomachan-hmc",
    category: "Leadership & Global Forums",
    title: "Tomo Chan - A Lifestyle Project for HMC (Harvard Model Congress)",
    deliverables: [
      "Tomo Chan Executive Summary for Investors & Startup India Panel",
      "Shark Tank Pitch, About the Product & Financial Plan",
      "Hanari Life, Hanari Drive & Hana Zen Air Quality Companion Specs",
      "Harvard Model Congress Delegation"
    ],
    assets: [
      {
        label: "Tomo Chan Product Concept Render",
        relativePath: "assets/images/tomo-chan-product-concept.webp",
        fileType: "image"
      },
      {
        label: "Executive Summary for Investors & Startup India Panel (.docx)",
        relativePath: "assets/documents/tomo-chan-executive-summary.docx",
        fileType: "doc"
      },
      {
        label: "About the Product — Tomo Chan (.docx)",
        relativePath: "assets/documents/tomo-chan-about-the-product.docx",
        fileType: "doc"
      },
      {
        label: "Shark Tank Pitch — Tomo Chan (.docx)",
        relativePath: "assets/documents/tomo-chan-shark-tank-pitch.docx",
        fileType: "doc"
      },
      {
        label: "Tomo Chan Financial Plan (.docx)",
        relativePath: "assets/documents/tomo-chan-financial-plan.docx",
        fileType: "doc"
      },
      {
        label: "Functions of Hanari Life (.docx)",
        relativePath: "assets/documents/hanari-life-functions.docx",
        fileType: "doc"
      },
      {
        label: "Hanari Drive Specification (.docx)",
        relativePath: "assets/documents/hanari-drive-specification.docx",
        fileType: "doc"
      },
      {
        label: "Hana Zen — Personal Air Quality Companion (.docx)",
        relativePath: "assets/documents/hana-zen-air-quality-companion.docx",
        fileType: "doc"
      }
    ],
    year: "2025",
    summary: "Lifestyle hardware and wellness companion project (Tomo Chan, Hanari Life, Hanari Drive, Hana Zen) developed for Harvard Model Congress (HMC).",
    caseStudy: {
      role: "Product Designer & Delegate",
      problem: "Urban commuters and students lack friendly, approachable personal companions for air quality awareness and daily lifestyle wellness habits.",
      process: "Developed product concepts, financial models, Startup India executive summaries, and Shark Tank pitch scripts for Tomo Chan, Hanari Life, Hanari Drive, and Hana Zen while representing as a Young Global Leaders delegate at Harvard Model Congress.",
      tools: [
        "Industrial Concept Design",
        "Financial Modeling",
        "Venture Pitching",
        "International Policy Debate"
      ],
      outcome: "Completed the 8-document Tomo Chan / Hanari investor & product suite and earned the Harvard Model Congress Young Global Leaders Certificate.",
      featuredImage: "assets/images/tomo-chan-product-concept.webp"
    }
  },
  {
    id: "conferences-summits",
    category: "Conferences & Summits",
    title: "Global Industry Summits, China Expedition & UN Diplomacy",
    deliverables: [
      "China Expedition — Shenzhen IoTe 2025, Foshan Bruce Lee Memorial & Hong Kong",
      "Bengaluru Tech Summit 2024 (Official Pass & Event Photography)",
      "UN Replica (2025–2026) — UNGA France Speech, Security Council & AI Speech Screening Platform"
    ],
    assets: [
      {
        label: "Bengaluru Tech Summit 2024 Official Pass (PDF)",
        relativePath: "assets/documents/bengaluru-tech-summit-2024-pass.pdf",
        fileType: "pdf"
      },
      {
        label: "Bengaluru Tech Summit Event Photo 1",
        relativePath: "assets/images/bengaluru-tech-summit-photo-01.jpg",
        fileType: "image"
      },
      {
        label: "Bengaluru Tech Summit Event Photo 2",
        relativePath: "assets/images/bengaluru-tech-summit-photo-02.jpg",
        fileType: "image"
      },
      {
        label: "Bengaluru Tech Summit Event Photo 3",
        relativePath: "assets/images/bengaluru-tech-summit-photo-03.jpg",
        fileType: "image"
      },
      {
        label: "Foshan Bruce Lee Memorial Photo 1",
        relativePath: "assets/images/foshan-bruce-lee-memorial-01.jpg",
        fileType: "image"
      },
      {
        label: "Foshan Bruce Lee Memorial Photo 2",
        relativePath: "assets/images/foshan-bruce-lee-memorial-02.jpg",
        fileType: "image"
      },
      {
        label: "Foshan Bruce Lee Memorial Photo 3",
        relativePath: "assets/images/foshan-bruce-lee-memorial-03.jpg",
        fileType: "image"
      },
      {
        label: "Foshan Bruce Lee Memorial Photo 4",
        relativePath: "assets/images/foshan-bruce-lee-memorial-04.jpg",
        fileType: "image"
      },
      {
        label: "UN Replica 2026 — Orientation Dossier (PDF)",
        relativePath: "assets/documents/un-replica-2026-orientation-dossier.pdf",
        fileType: "pdf"
      },
      {
        label: "UN Training — Grace & Force AI Audio Speech Screening Platform (PDF)",
        relativePath: "assets/documents/un-grace-and-force-ai-speech-screening.pdf",
        fileType: "pdf"
      },
      {
        label: "UN Training — G-Force AI 365-Day Guidebook (PDF)",
        relativePath: "assets/documents/un-g-force-ai-365-day-guidebook.pdf",
        fileType: "pdf"
      },
      {
        label: "UN Training — Model UN Simulation Grading Rubric (PDF)",
        relativePath: "assets/documents/un-model-un-simulation-grading-rubric.pdf",
        fileType: "pdf"
      },
      {
        label: "UNGA 2025 — France Delegation Speech (PDF)",
        relativePath: "assets/documents/unga-2025-france-delegation-speech.pdf",
        fileType: "pdf"
      },
      {
        label: "UN Security Council — Policy Brief (PDF)",
        relativePath: "assets/documents/unsc-policy-brief.pdf",
        fileType: "pdf"
      }
    ],
    year: "2024–2026",
    summary: "Global showcase presence spanning Shenzhen IoTe, Foshan Bruce Lee Memorial, Bengaluru Tech Summit, and Model UN 2025–2026 diplomacy."
  },
  {
    id: "certificates",
    category: "Certifications & Training",
    title: "Certificates",
    deliverables: [
      "Google Gen AI Exchange Hackathon & Hack2Skill Certificates",
      "Harvard Model Congress (HMC) & Innovengers Innovation Certificates",
      "IIIT Kottayam, TOI AI Bootcamp & Don Bosco AI in Filmmaking",
      "ARISE FICCI Conference, NCC & UN Replica (2021–2025) Certificates",
      "Sahodaya SargaSangamam & Labour India Youth Festival Merit Certificates"
    ],
    assets: ALL_CERTIFICATES_ASSETS,
    year: "2021–2026",
    summary: "Complete consolidated vault of all 23 verified certificates spanning AI hackathons, IIIT research workshops, Harvard Model Congress, UN Replica diplomacy, NCC, filmmaking, and stage anchoring."
  }
];

let showAllCertificates = false;
let currentModalRecordId = "eduhex-focuslab";
let currentModalAssetPath = "";

function toggleSocialPopup() {
  const el = document.getElementById("social-popup-card");
  if (el) el.classList.toggle("hidden");
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getFileName(pathStr) {
  if (!pathStr) return "document.pdf";
  return pathStr.split("/").pop() || "document.pdf";
}

function renderCertificates() {
  const certContainer = document.getElementById("certificates-container");
  const toggleBtn = document.getElementById("toggle-certs-btn");
  if (!certContainer) return;

  const visibleCerts = showAllCertificates
    ? ALL_CERTIFICATES_ASSETS
    : ALL_CERTIFICATES_ASSETS.slice(0, 8);

  if (toggleBtn) {
    toggleBtn.textContent = showAllCertificates
      ? "Show Highlighted (8)"
      : "View More (All 23 Certificates)";
  }

  certContainer.innerHTML = visibleCerts
    .map(
      (cert, idx) => `
      <div onclick="openVaultModal('certificates', '${cert.relativePath}')" class="group cursor-pointer rounded-2xl border border-white/10 bg-carbon overflow-hidden hover:border-gold/50 transition-all flex flex-col justify-between">
        <div class="h-40 w-full bg-obsidian p-2 flex items-center justify-center border-b border-white/10">
          <img src="${cert.relativePath}" alt="${escapeHtml(cert.label)}" loading="lazy" class="max-h-full w-auto object-contain group-hover:scale-105 transition-transform" />
        </div>
        <div class="p-3.5 flex items-center justify-between gap-2">
          <span class="text-xs font-medium text-alabaster line-clamp-2">${escapeHtml(cert.label)}</span>
          <span class="font-mono text-[10px] text-gold shrink-0">#${String(idx + 1).padStart(2, "0")}</span>
        </div>
      </div>
    `
    )
    .join("");
}

function toggleAllCertificates() {
  showAllCertificates = !showAllCertificates;
  renderCertificates();
}

function renderPdfLinksBlock(pdfAssets, headingText) {
  if (!pdfAssets || pdfAssets.length === 0) return "";
  return `
    <div class="space-y-2.5 pt-2">
      <div class="font-mono text-[11px] uppercase tracking-wider text-gold">${escapeHtml(headingText || "Project PDF Documents")}</div>
      <div class="space-y-2">
        ${pdfAssets
          .map(
            (pdf) => `
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold/40 flex flex-wrap items-center justify-between gap-2.5 transition-all">
            <a href="${pdf.relativePath}" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-alabaster hover:text-gold truncate flex-1 min-w-[180px]">
              📄 ${escapeHtml(pdf.label)}
            </a>
            <div class="flex items-center gap-2 shrink-0">
              <a href="${pdf.relativePath}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-lg bg-gold text-obsidian font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-gold-light transition-all">
                View PDF ↗
              </a>
              <a href="${pdf.relativePath}" download="${getFileName(pdf.relativePath)}" class="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 font-mono text-[10px] text-alabaster uppercase tracking-wider transition-all">
                Download PDF ↓
              </a>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPortfolio() {
  const featured = PORTFOLIO_MANIFEST.filter((r) => Boolean(r.caseStudy));
  const mahaakaavyaRec = PORTFOLIO_MANIFEST.find((r) => r.id === "film-mahaakaavya");
  const mahaakaavyaStills = mahaakaavyaRec
    ? mahaakaavyaRec.assets.filter((a) => a.fileType === "image")
    : [];

  const featuredContainer = document.getElementById("featured-projects-container");
  if (featuredContainer) {
    featuredContainer.innerHTML = featured
      .map((project, idx) => {
        const cs = project.caseStudy;
        const isFilm = project.id === "film-mahaakaavya";
        const isBooks = project.id === "book-releases";
        const pdfAssets = project.assets.filter((a) => a.fileType === "pdf");

        const filmSectionHtml = isFilm
          ? `
          <div class="space-y-3 pt-2">
            <div class="rounded-2xl border border-gold/30 bg-obsidian p-3 sm:p-4 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="font-mono text-[11px] uppercase tracking-wider text-gold">🎬 Mahaakaavya: The NEET Story — Official Trailer (YouTube)</span>
                <div class="flex items-center gap-2">
                  <a href="${YOUTUBE_WATCH_URL}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-cyan/15 border border-cyan/40 text-cyan font-mono text-[10px] uppercase hover:bg-cyan/25 transition-all">Watch on YouTube ↗</a>
                  <button type="button" onclick="openVaultModal('film-mahaakaavya', '${YOUTUBE_EMBED_URL}')" class="px-2.5 py-1 rounded-lg bg-gold text-obsidian font-mono text-[10px] font-bold uppercase hover:bg-gold-light transition-all">Fullscreen Player</button>
                </div>
              </div>
              <div class="youtube-responsive-wrapper">
                <iframe
                  src="${YOUTUBE_EMBED_URL}"
                  title="Mahaakaavya: The NEET Story — Official Trailer"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </div>
            </div>

            <div class="font-mono text-[11px] uppercase tracking-wider text-slateMuted">Mahaakaavya Poster, First Screening &amp; Film Stills (Click to Enlarge)</div>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
              ${mahaakaavyaStills
                .map(
                  (s) => `
                <button type="button" onclick="openVaultModal('film-mahaakaavya', '${s.relativePath}')" class="h-16 rounded-xl overflow-hidden border border-white/10 hover:border-gold bg-obsidian" title="${escapeHtml(s.label)}">
                  <img src="${s.relativePath}" alt="${escapeHtml(s.label)}" loading="lazy" class="w-full h-full object-cover" />
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        `
          : "";

        const pdfBlockHeading = isBooks
          ? "The 3 Authored Books — View or Download PDF"
          : "Project PDF Documents — View or Download PDF";

        return `
          <article class="rounded-3xl border border-white/10 bg-carbon p-6 sm:p-8 hover:border-white/20 transition-all">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div class="lg:col-span-5 space-y-4">
                <div class="flex items-center justify-between gap-2">
                  <span class="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[11px] text-gold">0${idx + 1} • ${escapeHtml(project.category)}</span>
                  <span class="font-mono text-xs text-slateMuted">${escapeHtml(project.year)}</span>
                </div>
                <div onclick="openVaultModal('${project.id}')" class="cursor-pointer relative ${isBooks ? "h-72 p-2" : "h-56"} w-full rounded-2xl overflow-hidden border border-white/10 bg-obsidian flex items-center justify-center">
                  <img src="${cs.featuredImage}" alt="${escapeHtml(project.title)}" loading="lazy" class="w-full h-full ${isBooks ? "object-contain" : "object-cover"} hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <h3 class="font-display text-2xl font-bold text-alabaster">${escapeHtml(project.title)}</h3>
                  <div class="font-mono text-xs text-cyan mt-1">Role: ${escapeHtml(cs.role)}</div>
                  <p class="text-xs sm:text-sm text-slateMuted mt-2 leading-relaxed">${escapeHtml(project.summary)}</p>
                </div>
                <div class="flex flex-wrap items-center gap-2.5 pt-1">
                  <button type="button" onclick="openVaultModal('${project.id}')" class="px-4 py-2.5 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-all">
                    Inspect Files (${project.assets.length})
                  </button>
                  ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 font-mono text-xs text-alabaster">Visit Website ↗</a>` : ""}
                </div>
              </div>

              <div class="lg:col-span-7 space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-1.5">
                    <div class="font-mono text-[11px] uppercase tracking-wider text-gold">1. The Problem</div>
                    <p class="text-xs sm:text-sm text-alabaster/90 leading-relaxed">${escapeHtml(cs.problem)}</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-1.5">
                    <div class="font-mono text-[11px] uppercase tracking-wider text-cyan">2. My Process</div>
                    <p class="text-xs sm:text-sm text-alabaster/90 leading-relaxed">${escapeHtml(cs.process)}</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
                  <div class="font-mono text-[11px] uppercase tracking-wider text-slateMuted">3. Tools &amp; Methods Used</div>
                  <div class="flex flex-wrap gap-2">
                    ${cs.tools.map((t) => `<span class="px-3 py-1 rounded-lg bg-obsidian border border-white/10 font-mono text-xs text-alabaster">${escapeHtml(t)}</span>`).join("")}
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-gold/[0.06] border border-gold/25 space-y-2">
                  <div class="font-mono text-[11px] uppercase tracking-wider text-gold">4. The Outcome &amp; Deliverables</div>
                  <p class="text-xs sm:text-sm text-alabaster leading-relaxed">${escapeHtml(cs.outcome)}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
                    ${project.deliverables.map((d) => `<div class="text-xs text-alabaster/85 truncate">✓ ${escapeHtml(d)}</div>`).join("")}
                  </div>
                </div>

                ${filmSectionHtml}
                ${renderPdfLinksBlock(pdfAssets, pdfBlockHeading)}
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const extraContainer = document.getElementById("additional-archives-container");
  if (extraContainer) {
    extraContainer.innerHTML = PORTFOLIO_MANIFEST.filter((r) => !r.caseStudy)
      .map(
        (rec) => `
      <div onclick="openVaultModal('${rec.id}')" class="cursor-pointer rounded-2xl p-5 border border-white/10 bg-carbon hover:border-gold/50 transition-all flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center justify-between text-xs font-mono text-slateMuted mb-2">
            <span class="text-gold">${escapeHtml(rec.category)}</span>
            <span>${escapeHtml(rec.year)}</span>
          </div>
          <h3 class="font-display text-lg font-bold text-alabaster">${escapeHtml(rec.title)}</h3>
          <p class="text-xs text-slateMuted mt-1.5 leading-relaxed">${escapeHtml(rec.summary)}</p>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
          <span class="text-slateMuted">${rec.assets.length} files</span>
          <span class="text-gold font-bold">Open Files →</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderCertificates();
}

function openVaultModal(recordId, assetPath) {
  const rec = PORTFOLIO_MANIFEST.find((r) => r.id === recordId) || PORTFOLIO_MANIFEST[0];
  currentModalRecordId = rec.id;
  currentModalAssetPath = assetPath || (rec.assets[0] ? rec.assets[0].relativePath : "");
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (backdrop) backdrop.classList.remove("hidden");
  renderVaultModal();
}

function closeVaultModal() {
  const backdrop = document.getElementById("vault-modal-backdrop");
  if (backdrop) backdrop.classList.add("hidden");
}

function selectModalAsset(assetPath) {
  currentModalAssetPath = assetPath;
  renderVaultModal();
}

function renderVaultModal() {
  const rec = PORTFOLIO_MANIFEST.find((r) => r.id === currentModalRecordId) || PORTFOLIO_MANIFEST[0];
  document.getElementById("modal-category-label").textContent = "PROJECT FILES & MEDIA // " + rec.category;
  document.getElementById("modal-record-title").textContent = rec.title;

  const selectEl = document.getElementById("modal-record-select");
  selectEl.innerHTML = PORTFOLIO_MANIFEST.map(
    (r) => `
    <option value="${r.id}" ${r.id === rec.id ? "selected" : ""}>${escapeHtml(r.title)} (${r.assets.length} files)</option>
  `
  ).join("");

  const activeAsset = rec.assets.find((a) => a.relativePath === currentModalAssetPath) || rec.assets[0];
  const listEl = document.getElementById("modal-asset-list");
  listEl.innerHTML = rec.assets
    .map((a) => {
      const isCurrent = activeAsset && a.relativePath === activeAsset.relativePath;
      return `
      <button type="button" onclick="selectModalAsset('${a.relativePath}')" class="w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${isCurrent ? "bg-gold/15 border-gold text-alabaster" : "bg-white/[0.02] border-white/10 text-slateMuted hover:text-alabaster"}">
        <div class="truncate">
          <div class="font-display font-semibold text-xs text-alabaster truncate">${escapeHtml(a.label)}</div>
          <div class="font-mono text-[10px] text-slateMuted truncate">${escapeHtml(a.relativePath)}</div>
        </div>
        <span class="px-2 py-0.5 rounded bg-obsidian font-mono text-[10px] text-gold uppercase shrink-0">${escapeHtml(a.fileType)}</span>
      </button>
    `;
    })
    .join("");

  const viewerEl = document.getElementById("modal-viewer-content");
  if (!activeAsset || !viewerEl) return;

  const resolvedUrl = activeAsset.relativePath;
  let previewHtml = "";
  let actionButtonsHtml = "";

  if (activeAsset.fileType === "pdf") {
    actionButtonsHtml = `
      <a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-all">
        View PDF ↗
      </a>
      <a href="${resolvedUrl}" download="${getFileName(resolvedUrl)}" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 font-mono text-xs text-alabaster uppercase tracking-wider transition-all">
        Download PDF ↓
      </a>
    `;
    previewHtml = `
      <div class="flex-1 rounded-2xl border border-white/10 bg-obsidian p-6 flex flex-col justify-between space-y-4 min-h-[460px]">
        <div class="p-4 rounded-xl bg-white/[0.03] border border-gold/30 flex flex-wrap items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="font-mono text-[11px] uppercase tracking-wider text-gold">PDF DOCUMENT LINKED FROM ASSETS/DOCUMENTS</div>
            <div class="text-xs sm:text-sm text-slateMuted">Click <strong class="text-alabaster">View PDF</strong> to open in a new tab or <strong class="text-alabaster">Download PDF</strong> to save a copy.</div>
          </div>
          <div class="flex items-center gap-2.5">
            <a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase">View PDF ↗</a>
            <a href="${resolvedUrl}" download="${getFileName(resolvedUrl)}" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 font-mono text-xs text-alabaster uppercase">Download PDF ↓</a>
          </div>
        </div>
        <iframe src="${resolvedUrl}" title="${escapeHtml(activeAsset.label)}" class="w-full flex-1 min-h-[380px] rounded-xl border border-white/10 bg-carbon"></iframe>
      </div>
    `;
  } else if (activeAsset.fileType === "image") {
    actionButtonsHtml = `
      <a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase">
        Open Full Image ↗
      </a>
      <a href="${resolvedUrl}" download="${getFileName(resolvedUrl)}" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-mono text-xs text-alabaster uppercase">
        Download Image ↓
      </a>
    `;
    previewHtml = `
      <div class="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-obsidian flex items-center justify-center p-4 min-h-[420px]">
        <img src="${resolvedUrl}" alt="${escapeHtml(activeAsset.label)}" class="max-h-[62dvh] w-auto object-contain rounded-xl" />
      </div>
    `;
  } else if (activeAsset.fileType === "video") {
    actionButtonsHtml = `
      <a href="${YOUTUBE_WATCH_URL}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase">
        Watch on YouTube ↗
      </a>
    `;
    previewHtml = `
      <div class="flex-1 rounded-2xl overflow-hidden border border-white/10 bg-obsidian flex flex-col justify-center p-4 min-h-[420px]">
        <div class="youtube-responsive-wrapper">
          <iframe
            src="${YOUTUBE_EMBED_URL}"
            title="${escapeHtml(activeAsset.label)}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  } else {
    actionButtonsHtml = `
      <a href="${resolvedUrl}" download="${getFileName(resolvedUrl)}" class="px-4 py-2 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase">
        Download Document ↓
      </a>
    `;
    previewHtml = `
      <div class="flex-1 rounded-2xl border border-white/10 bg-obsidian/90 p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[360px]">
        <div class="px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 font-mono text-xs text-gold uppercase">${escapeHtml(activeAsset.fileType)} DOCUMENT</div>
        <h4 class="font-display text-2xl font-bold text-alabaster">${escapeHtml(activeAsset.label)}</h4>
        <p class="font-mono text-xs text-slateMuted max-w-lg">${escapeHtml(resolvedUrl)}</p>
        <a href="${resolvedUrl}" download="${getFileName(resolvedUrl)}" class="px-5 py-2.5 rounded-xl bg-gold text-obsidian font-mono text-xs font-bold uppercase">
          Download Document ↓
        </a>
      </div>
    `;
  }

  viewerEl.innerHTML = `
    <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="font-mono text-[10px] uppercase tracking-wider text-cyan">ACTIVE FILE // ${escapeHtml(activeAsset.fileType.toUpperCase())}</div>
        <div class="font-display font-bold text-base sm:text-lg text-alabaster">${escapeHtml(activeAsset.label)}</div>
        <div class="font-mono text-xs text-slateMuted">${escapeHtml(activeAsset.relativePath)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        ${actionButtonsHtml}
      </div>
    </div>
    ${previewHtml}
  `;
}

window.addEventListener("DOMContentLoaded", renderPortfolio);

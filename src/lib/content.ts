export const EMAILS = {
  general: "contact@ybsindustries.com",
  collab: "collab@ybsindustries.com",
  legal: "legal@ybsindustries.com",
  sales: "sales@ybsindustries.com",
  support: "support@ybsindustries.com",
  feedback: "feedback@ybsindustries.com",
  samardhya: "contact@samardhya.com",
  xdrip: "contact@xdrip.com",
} as const;

export const LINKEDIN = "https://www.linkedin.com/company/ybs-industries/";
export const WEBSITE = "https://ybsindustriesllp.com";

export type Maturity =
  | "Concept"
  | "In Development"
  | "Prototype"
  | "Pilot"
  | "Validated"
  | "Operational"
  | "Capability Area";

export const MATURITY_FRAMEWORK: { label: Maturity; text: string }[] = [
  { label: "Concept", text: "Problem and proposed solution are being defined." },
  { label: "In Development", text: "Technical approach, architecture, or service model is being developed." },
  { label: "Prototype", text: "A demonstrable implementation exists." },
  { label: "Pilot", text: "Testing is underway with a defined user or partner under an agreed scope." },
  { label: "Validated", text: "Results have been evaluated against documented criteria." },
  { label: "Operational", text: "The service or product is being delivered in a defined operating environment." },
];

export type Initiative = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  maturity: Maturity;
  maturityNote: string;
  summary: string;
  challenge: string[];
  approachIntro: string;
  verticals?: { title: string; text: string }[];
  points?: string[];
  outcomes: string[];
  priorities?: string;
  collaboration: string;
  caveat?: string;
  cta: string;
  email: string;
  emailLabel: string;
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "samardhya",
    name: "SAMARDHYA",
    tagline: "Technology Talent Development, Industry Collaboration & Project Validation",
    category: "Education technology · Industry collaboration · Applied R&D",
    maturity: "In Development",
    maturityNote: "Developing initiative; individual programmes and delivery status to be confirmed.",
    summary:
      "A developing ecosystem connecting technology awareness, structured learning, industry-oriented project execution, applied R&D, and independent innovators seeking to validate their ideas.",
    challenge: [
      "Learning and technical exposure do not always translate into experience with real project requirements. Independent innovators can also struggle to move from an idea to a technically tested prototype.",
    ],
    approachIntro: "SAMARDHYA is being structured around five complementary verticals:",
    verticals: [
      { title: "Workshops — Awareness", text: "Technology awareness, practical demonstrations, and institutional programmes that introduce participants to emerging technologies and cybersecurity practices." },
      { title: "Cohorts — Skill Development", text: "Structured learning, technical mentorship, team assignments, and practical assessments aligned with industry-oriented workflows." },
      { title: "Cohorts+ — Client Projects & Career Pathways", text: "A proposed pathway for participants to work on defined client projects, build practical portfolios, and develop experience in requirements, development, testing, and delivery." },
      { title: "R&D — Research & Development", text: "Applied experimentation, feasibility studies, software and AI prototypes, and collaborative technical research." },
      { title: "Project Validation — Independent Innovators", text: "A proposed service pathway for evaluating ideas, developing prototypes or MVPs, testing assumptions, and preparing projects for further development or commercialisation." },
    ],
    outcomes: [
      "More practical, demonstrable technical experience.",
      "Stronger links between institutions and industry requirements.",
      "Structured opportunities for applied R&D.",
      "Earlier technical and market validation for independent innovators.",
    ],
    collaboration: "Educational institutions, companies, mentors, research teams, project owners, and independent innovators.",
    cta: "Discuss a SAMARDHYA Collaboration",
    email: EMAILS.samardhya,
    emailLabel: "SAMARDHYA enquiries",
  },
  {
    slug: "x-drip",
    name: "X-DRIP",
    tagline: "Preventive Cybersecurity. Software Integrity. Digital Trust.",
    category: "Cybersecurity · Software supply-chain security · Security research",
    maturity: "In Development",
    maturityNote: "Initiative in development; service scope and technical validation to be established.",
    summary:
      "A developing cybersecurity initiative focused on early risk identification, software and dependency security, organisational security practices, and trustworthy digital infrastructure.",
    challenge: [
      "Organisations increasingly depend on software, third-party packages, connected systems, and digital workflows. Weaknesses can enter through insecure configurations, vulnerable dependencies, compromised code, or insufficient security practices.",
      "Smaller organisations may lack dedicated teams or the resources to establish consistent preventive controls.",
    ],
    approachIntro: "X-DRIP is being structured around five proposed service and research verticals:",
    verticals: [
      { title: "Awareness & Cyber Governance", text: "Cybersecurity awareness, cyber hygiene guidance, risk ownership, and foundational governance practices." },
      { title: "X-DRIP Lab", text: "Proposed reviews of source code, software repositories, open-source dependencies, and build components to identify potential security weaknesses and suspicious modifications." },
      { title: "Enterprise Security", text: "Scoped assessments of organisational security posture, configurations, access controls, applications, and infrastructure." },
      { title: "Digital Trust & Infrastructure", text: "Security-by-design, system integrity, identity and access architecture, auditability, and digital verification concepts." },
      { title: "Research & Threat Intelligence", text: "Evaluation of security tools, vulnerability research, detection workflows, and the development of preventive-security prototypes." },
    ],
    outcomes: [
      "Earlier identification of selected software and system risks.",
      "More consistent security practices.",
      "Better prioritisation and documentation of vulnerabilities.",
      "Reusable testing workflows and preventive-security capabilities.",
    ],
    collaboration: "MSMEs, startups, software teams, educational institutions, cybersecurity professionals, and organisations interested in authorised pilot assessments.",
    caveat: "Assessments will require defined scope, appropriate authorisation, documented methods, and evidence-based reporting. No assessment can guarantee protection against every attack.",
    cta: "Discuss a Cybersecurity Pilot",
    email: EMAILS.xdrip,
    emailLabel: "X-DRIP enquiries",
  },
  {
    slug: "athelion",
    name: "Athelion",
    tagline: "Synthetic Media Forensics & Threat Intelligence",
    category: "AI · Digital forensics · Threat intelligence",
    maturity: "In Development",
    maturityNote: "Developing technology initiative; validation and deployment status to be documented.",
    summary:
      "A technology initiative exploring the identification and analysis of synthetic media, manipulated content, and digital threats associated with misinformation and fraud.",
    challenge: [
      "Synthetic media and manipulated digital content can complicate the assessment of authenticity. These risks can affect information integrity and contribute to impersonation, misinformation, and fraud.",
    ],
    approachIntro: "Athelion explores technology for analysing potentially manipulated media and supporting the investigation of digital threats. The intended direction includes:",
    points: [
      "Synthetic media and deepfake analysis.",
      "Signals relevant to manipulated or misleading digital content.",
      "Threat intelligence workflows for investigation and assessment.",
      "Technical research into forensic methods and detection approaches.",
      "Potential support for human-led review and evidence-based decision-making.",
    ],
    outcomes: [
      "A more structured approach to examining suspicious media, documenting analytical findings, and supporting investigative workflows.",
    ],
    priorities: "Technical evaluation against representative datasets, measurement of false positives and false negatives, documentation of model limitations, and assessment of operational requirements.",
    collaboration: "Research institutions, cybersecurity teams, digital-forensics professionals, and relevant organisations interested in controlled technical evaluation.",
    caveat: "Detection results must be interpreted in context. A model output alone should not be treated as definitive proof that media is authentic or manipulated.",
    cta: "Explore a Research Collaboration",
    email: EMAILS.collab,
    emailLabel: "Research collaboration",
  },
  {
    slug: "kalasetu",
    name: "Kalasetu",
    tagline: "Digital Product Identity & Traceability",
    category: "Digital infrastructure · Product identity · Traceability",
    maturity: "Concept",
    maturityNote: "Conceptual initiative; architecture and use cases require further validation.",
    summary:
      "A conceptual initiative exploring digital identity, product traceability, verification, and integrity across connected systems.",
    challenge: [
      "Product and asset information can be fragmented across records, organisations, and systems. This can make verification, traceability, and reliable recordkeeping difficult.",
    ],
    approachIntro: "Kalasetu explores ways to connect physical products or assets with structured digital records and verification workflows. Potential areas of investigation include:",
    points: [
      "Digital product identity and master records.",
      "QR-code, RFID, or NFC-based identification.",
      "Product and asset traceability.",
      "Record integrity, verification, and audit trails.",
      "Secure integration with existing information systems.",
    ],
    outcomes: [
      "A potential framework for improving access to product information, traceability, and record verification across defined use cases.",
    ],
    priorities: "Selecting a specific industry use case, validating data ownership and governance, defining the system architecture, and building a demonstrator before making deployment claims.",
    collaboration: "Manufacturers, supply-chain participants, system integrators, and institutions exploring product or asset traceability.",
    cta: "Discuss a Traceability Use Case",
    email: EMAILS.collab,
    emailLabel: "Collaboration enquiries",
  },
  {
    slug: "applied-engineering",
    name: "Applied Engineering",
    tagline: "Software. Electronics. Automation. Prototyping.",
    category: "Engineering · Systems integration · Applied R&D",
    maturity: "Capability Area",
    maturityNote: "Capability area; engagement-specific scope and delivery evidence required.",
    summary:
      "YBS’s broader engineering direction: solutions that combine software, electronics, connected devices, automation, and physical systems.",
    challenge: [
      "YBS’s broader engineering direction includes the investigation and development of solutions that combine software, electronics, connected devices, automation, and physical systems.",
    ],
    approachIntro: "Potential areas include:",
    points: [
      "Software applications and internal technology products.",
      "AI-enabled workflows and automation.",
      "IoT, sensors, RFID/NFC, and embedded systems.",
      "Hardware and software integration.",
      "Technical feasibility studies and proof-of-concept development.",
      "Prototype testing, documentation, and maintenance planning.",
    ],
    outcomes: [
      "Each engagement begins with a defined technical problem and a review of feasibility, resources, dependencies, and expected deliverables.",
    ],
    collaboration: "Businesses, SMEs, startups, and institutions with a defined technical problem.",
    caveat: "Specific capabilities are confirmed for each engagement. Areas still under exploration are not represented as established commercial services.",
    cta: "Discuss an Engineering Project",
    email: EMAILS.sales,
    emailLabel: "Project enquiries",
  },
];

export const getInitiative = (slug: string) => INITIATIVES.find((i) => i.slug === slug);

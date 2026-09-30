export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  subcaption?: string;
  tiltDeg?: number;
}

export interface InvestigationCard {
  id: string;
  title: string;
  frontNote: string;
  revealedMessage: string;
  iconTag: string;
}

export interface MetricItem {
  label: string;
  percentage: number;
  displayValue: string;
  comment: string;
}

export interface BubuAdmission {
  id: string;
  text: string;
  subnote?: string;
  isSpecial?: boolean;
}

export const SITE_CONFIG = {
  // Department of Happiness Meta
  department: {
    title: "DEPARTMENT OF HAPPINESS",
    division: "Special Celebration Division",
    founder: "Bubu (Abhilash)",
    founderShort: "Bubu",
    founderFullName: "Abhilash",
    dedicatee: "Dudu (Prabhat)",
    dedicateeShort: "Dudu",
    dedicateeFullName: "Prabhat",
    anniversaryDate: "08 · September · 2026",
    milestoneDisplay: "08 · 09 · 2026 — 6 MONTHS OF US",
    heroStatement: "“Because Dudu deserves his own department.” 🤍",
    heroPlayfulSubtext: "“And apparently Bubu was qualified enough to start one.”",
    heroCta: "ENTER THE DEPARTMENT →",
  },

  // Dudu's Official Profile (Dossier)
  duduDossier: {
    name: "Prabhat",
    nickname: "Dudu",
    department: "Happiness",
    position: "Dudu",
    status: "Extremely Important",
    assignedBubu: "Abhilash (Bubu)",
    happinessLevel: "Dudu (Infinite)",
    badgeId: "DUDU-PB-080926-HAP",
    officialSeal: "APPROVED BY BUBU™",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "“The single most essential person in the entire organization.”",
  },

  // "WHY DUDU?" Investigation Cards
  whyDuduInvestigation: [
    {
      id: "smile",
      title: "Makes Bubu smile",
      frontNote: "Primary function observed daily",
      revealedMessage: "No matter how chaotic the day gets, one message, call, or smile from Dudu completely resets Bubu's mood. Highly effective. 🤍",
      iconTag: "Exhibit A",
    },
    {
      id: "moments",
      title: "Makes ordinary moments special",
      frontNote: "Transformative influence detected",
      revealedMessage: "Random 2 AM texts, mundane updates, quiet evenings—everything becomes memorable when Dudu is on the other end. ☕",
      iconTag: "Exhibit B",
    },
    {
      id: "face",
      title: "Has an unfairly cute face",
      frontNote: "Department visual hazard",
      revealedMessage: "The signature look, the slight squint, the soft smirk—completely disarming and scientifically proven to be unfair. 🙄❤️",
      iconTag: "Exhibit C",
    },
    {
      id: "important",
      title: "Somehow became important",
      frontNote: "Unplanned organic integration",
      revealedMessage: "Neither of us scheduled this, yet somewhere along these 6 months, Dudu became an indispensable part of Bubu's universe. 🌟",
      iconTag: "Exhibit D",
    },
    {
      id: "being-dudu",
      title: "Excellent at being Dudu",
      frontNote: "100% job performance rating",
      revealedMessage: "Unpredictable humor, effortless calm, and just being 100% authentically himself without any pretense. Unmatched. 🤭",
      iconTag: "Exhibit E",
    },
    {
      id: "happiness",
      title: "Causes unnecessary amounts of happiness",
      frontNote: "Department objective achieved",
      revealedMessage: "The department was literally founded because of this exact metric. It's safe to say Dudu exceeded all expectations. 🥺❤️",
      iconTag: "Exhibit F",
    },
  ] as InvestigationCard[],

  // Section: "A few things Bubu has to admit… 🤭"
  bubuAdmissions: {
    title: "A few things Bubu has to admit… 🤭",
    subtitle: "A slightly reluctant confession section",
    items: [
      {
        id: "admit-1",
        text: "“I like being with you.”",
        subnote: "Simple fact. 🤍",
      },
      {
        id: "admit-2",
        text: "“I stay happy when I'm around you.”",
        subnote: "Department mood automatically elevated. ✨",
      },
      {
        id: "admit-3",
        text: "“I love to go ghumi-ghumi with you.” 🥺",
        subnote: "Anytime, anywhere, zero questions asked. 🚗",
      },
      {
        id: "admit-4",
        text: "“And I really, really love being in your arms.” 🤭😩❤️",
        subnote: "Okay fine… Bubu likes being around Dudu a LOT.",
        isSpecial: true,
      },
    ] as BubuAdmission[],
    closingNote: "“There. I said it. Don't make it weird. 🙂↔️”",
  },

  // Strictly photos of Prabhat (NO couple photos!)
  photos: [
    {
      id: "d1",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      caption: "One of Bubu's favourites.",
      subcaption: "Naturally effortless.",
      tiltDeg: -2.2,
    },
    {
      id: "d2",
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      caption: "Sir ji. 🤭",
      subcaption: "Doing that signature look.",
      tiltDeg: 2.5,
    },
    {
      id: "d3",
      url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      caption: "This one.",
      subcaption: "Ridiculously cute.",
      tiltDeg: -1.6,
    },
    {
      id: "d4",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      caption: "Okay, look at you.",
      subcaption: "I rest my case.",
      tiltDeg: 2.1,
    },
    {
      id: "d5",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      caption: "Rent-free in Bubu's head.",
      subcaption: "Permanent resident.",
      tiltDeg: -2.8,
    },
    {
      id: "d6",
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
      caption: "Had to include this one.",
      subcaption: "Zero hesitation. 🤍",
      tiltDeg: 1.8,
    },
  ] as PhotoItem[],

  // Department Report (Dashboard Analytics)
  departmentReport: {
    heading: "DUDU HAPPINESS REPORT",
    subtitle: "Quarterly Performance Metrics & Emotional Audit conducted by Bubu",
    metrics: [
      {
        label: "Happiness generated",
        percentage: 100,
        displayValue: "100%",
        comment: "Consistently off the charts since Day 1.",
      },
      {
        label: "Bubu smiling because of Dudu",
        percentage: 99.9,
        displayValue: "99.9%",
        comment: "Remaining 0.1% accounts for when Dudu is being annoying. 😂",
      },
      {
        label: "Dudu being adorable",
        percentage: 100,
        displayValue: "100%",
        comment: "Undeniable, peer-reviewed, and completely unfair.",
      },
      {
        label: "Bubu pretending to be normal about it",
        percentage: 0.4,
        displayValue: "0.4%",
        comment: "Extremely low poker face efficiency.",
      },
    ] as MetricItem[],
  },

  // 6-Month Service Anniversary Letter
  serviceAnniversary: {
    date: "08 · SEPTEMBER · 2026",
    milestoneTag: "OFFICIAL MILESTONE — DEPARTMENT OF HAPPINESS",
    title: "6 months of us. ❤️",
    paragraphs: [
      "I don’t know exactly when you became such an important part of my life, but somewhere along the way, you did.",
      "Thank you for being here, for all the little conversations, the smiles, the moments, and even the silly things that somehow became memories I keep close to my heart.",
      "I’m genuinely grateful that I met you. And honestly, I’m just happy that it’s you.",
      "Here’s to our little journey so far… and to all the moments we haven’t lived yet. 🥺❤️",
    ],
    closing: "Happy 6 months, Sir ji. 🤭❤️",
    signature: "— Abhilash",
  },

  // Boyfriend's Day Special
  boyfriendsDay: {
    heading: "HAPPY BOYFRIEND'S DAY, DUDU 🤍",
    subheading: "“From your very unofficially official Department of Happiness.”",
    lines: [
      "No complicated announcements.",
      "No unnecessary labels.",
      "Just Bubu celebrating Dudu.",
    ],
  },

  // Final Comedic & Emotional Punchline Section: "ONE SMALL THING… 🤭"
  finalPunchline: {
    preHeader: "ONE SMALL THING… 🤭",
    tagline: "The unofficially official closing statement",
    part1: "You're not my boyfriend,",
    part2: "but I'll still share “you're my saiyaan” reels with you. 😂😭🤭🙂↔️❤️",
    punchline: "Because I like you. 😌🌻",
    behaviorStamp: "Usual Bubu behaviour™",
    closingSalutation: "Happy Boyfriend's Day, Dudu. 🤍",
    signature: "— Bubu",
    footerText: "Department of Happiness™ • Established by Bubu. • Powered by Dudu. 🤭",
  },
};

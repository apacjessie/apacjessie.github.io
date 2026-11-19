// All site copy lives here, so updating the portfolio never means touching components.

export type Highlight = { value: string; label: string };

export type Project = {
  id: string;
  brand: string;
  title: string;
  summary: string;
  tags: string[];
  /** Big figure shown in the card visual when there is no screenshot */
  stat: { value: string; label: string };
  /** Optional screenshot path in /public, e.g. "/projects/bracket.png" */
  image?: string;
  featured?: boolean;
  /** Items show a ✓ by default; give an item its own mark (e.g. '?') when it isn't confirmed */
  checklist?: { heading: string; items: (string | { text: string; mark: string })[] };
};

export type SideProject = { name: string; stack: string; summary: string; url: string };

export type Role = { period: string; title: string; company: string; summary: string };

export const profile = {
  name: 'Jessie Apac',
  role: 'Frontend Developer',
  location: 'Manila, Philippines',
  headline: 'I build high-traffic web platforms that stay',
  headlineAccents: ['fast', 'maintainable'] as const,
  meta: ['Frontend Developer', 'Manila, Philippines', 'Open to remote'],
  intro:
    "Hi, I'm Jessie. At DigiPlus I lead frontend work on sports betting, social and risk platforms for brands serving millions of players, using Vue.js, React and Next.js.",
  email: 'apacjessie@gmail.com',
  github: 'https://github.com/apacjessie',
  linkedin: 'https://www.linkedin.com/in/jessie-apac-72154023a/',
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const highlights: Highlight[] = [
  { value: '100K+', label: 'participants in the 1 Billion Bracket Challenge, shipped on a tight deadline' },
  { value: '2.9M+', label: 'daily active users on BingoPlus, home of the Community platform I built' },
  { value: '−50%', label: 'frontend resources needed for event pages, thanks to an internal page builder' },
  { value: '1 year', label: 'from junior to mid-level, plus a Top Performer nomination among 700+' },
];

export const projects: Project[] = [
  {
    id: 'bracket',
    brand: 'ARENAPLUS · CAMPAIGN',
    title: 'Ultimate 1 Billion Bracket Challenge',
    summary:
      'Led a 2-person frontend team alongside 3 backend engineers and launched on time under heavy deadline pressure. More than 100,000 players joined.',
    tags: ['Vue.js', 'TypeScript', 'Frontend lead'],
    stat: { value: '100,000+', label: 'participants' },
    featured: true,
  },
  {
    id: 'affiliate',
    brand: 'AFFILIATE PLATFORM · LIVE IN PRODUCTION',
    title: 'My Affiliate Partners',
    summary:
      'As the sole frontend developer, I took the feature from build to production under real time pressure, working with our backend team and integrating third-party provider iCore. The release touched four connected systems at once, so every change had to land together without breaking what was already live.',
    tags: ['Sole frontend', 'Responsive', 'iCore'],
    stat: { value: '4', label: 'systems shipped together' },
    featured: true,
    checklist: {
      heading: 'Systems shipped to prod',
      items: ['Current app', 'New app version', 'Content management system', 'Responsive affiliate landing page'],
    },
  },
  {
    id: 'brain',
    brand: 'AI · KNOWLEDGE ENGINEERING',
    title: 'Brain: an AI-ready knowledge base',
    summary:
      'Two codebases, a player app and the admin backoffice that configures it, had no shared map. I built ~380 citation-backed notes, drafted by AI agents from my written briefs, with confidence-labeled links between the repos and Node.js + git tooling that keeps every citation current. It surfaced promotions that silently did nothing, admin features players never see, and type mismatches between the two systems.',
    tags: ['Context engineering', 'AI agents', 'Node.js + git tooling'],
    stat: { value: '380', label: 'citation-backed notes' },
    featured: true,
    checklist: {
      heading: '231 cross-repo links, by confidence',
      items: ['105 proven in code', '12 from the admin editor', { text: '114 awaiting backend confirmation', mark: '?' }],
    },
  },
  {
    id: 'sportsbook',
    brand: 'ARENAPLUS · SPORTSBOOK',
    title: 'Sports Page: Altenar + Saba',
    summary:
      'Led a 3-person frontend team integrating the Altenar sportsbook. I’m the sole frontend developer on the ongoing Saba integration, which covers business-critical betting and wallet flows.',
    tags: ['Team lead', 'Wallet flows', '3rd-party integration'],
    stat: { value: '2', label: 'sportsbook providers' },
  },
  {
    id: 'community',
    brand: 'BINGOPLUS · 2.9M+ DAILY ACTIVE USERS',
    title: 'BingoPlus Community',
    summary:
      'Social media meets gaming: real-time chat (RongCloud), AI-generated content, missions, posts, followers and a short-video feed, kept smooth with virtual scrolling.',
    tags: ['Real-time', 'Mobile-first'],
    stat: { value: '2.9M+', label: 'daily active users on the platform' },
  },
  {
    id: 'event-venue',
    brand: 'INTERNAL TOOLING',
    title: 'Event page builder',
    summary:
      'A mobile web (H5) page builder that lets product teams launch holiday and promotional pages without a frontend developer. Co-built with a senior, then took full ownership. Cut frontend resource needs by 50%.',
    tags: ['Ownership', '−50% resources'],
    stat: { value: '−50%', label: 'frontend resources for event pages' },
  },
  {
    id: 'risk',
    brand: 'BACK-OFFICE · RISK & IDENTITY',
    title: 'Risk management back-office',
    summary:
      'Sole frontend developer on the company’s internal risk management back-office, delivering every risk requirement with the backend team. Also contributed to a company-wide identity verification (eKYC) initiative.',
    tags: ['Sole frontend', 'Security-sensitive'],
    stat: { value: 'Solo', label: 'frontend developer on every risk requirement' },
  },
];

export const sideProjects: SideProject[] = [
  {
    name: 'Genetic algorithm scheduler',
    stack: 'TYPESCRIPT · ALGORITHMS',
    summary: 'A scheduling system from my thesis that assigns professors, rooms and subjects without conflicts.',
    url: 'https://github.com/apacjessie/genetic_algorithm',
  },
  {
    name: 'Realtime chat',
    stack: 'NEXT.JS · REAL-TIME',
    summary: 'A real-time chat app exploring live messaging and presence.',
    url: 'https://github.com/apacjessie/realtime-chat',
  },
  {
    name: 'ThoughtBox',
    stack: 'MERN STACK',
    summary: 'A platform for writing, organizing and sharing thought cards.',
    url: 'https://github.com/apacjessie/ThoughtBox_mern_stack',
  },
];

export const principles = [
  {
    title: 'Readable beats clever',
    body: 'Features ship fast now. I care about the code still being easy to change six months later, for me and for the next developer.',
  },
  {
    title: 'Calm under pressure',
    body: 'On a critical international project I was the only frontend developer, and a junior, next to senior backend engineers. I spotted a backend issue, proposed the fix, and the release shipped.',
  },
  {
    title: 'AI is a tool, judgment is the job',
    body: 'I use AI to move faster, then review its output like a pull request: structure, performance, edge cases. Speed and quality, not one or the other.',
  },
];

export const experience: Role[] = [
  {
    period: 'Sep 2024 – Present',
    title: 'Frontend Developer (Vue.js)',
    company: 'DigiPlus',
    summary:
      'Promoted from junior to mid-level within a year. Nominated Top Performer (Dec 2025) in a 700+ person department; Best Employee of the Month in Oct 2025 and Feb 2026.',
  },
  {
    period: 'Feb 2024 – Jul 2024',
    title: 'Software Developer Intern',
    company: 'NCIP',
    summary: 'Led a team of 5 interns, set up CI with automated testing, and built a scalable Laravel backend with a React frontend.',
  },
  {
    period: 'Aug 2023 – Jan 2024',
    title: 'Software Developer Intern',
    company: 'Interleukin',
    summary: 'Led Next.js development, integrated external services with NextAuth, and wrote unit and end-to-end tests with Vitest and Cypress.',
  },
];

export const toolkit = {
  daily: ['Vue.js', 'React', 'Next.js', 'TypeScript'],
  also: ['Claude Code', 'Pinia', 'Vite', 'Tailwind CSS', 'Vitest', 'Cypress', 'Figma', 'React Native', 'Node.js', 'Laravel', 'MySQL', 'MongoDB', 'Docker'],
  learning: 'Spring Boot',
};

export const education = [
  'BS Computer Science, Lyceum of Alabang (2020 – 2024)',
  'Dean’s Lister · Best in On-the-Job Training',
  'CS50, Harvard University (2024)',
  'First Place, Web Design Competition (2024)',
];

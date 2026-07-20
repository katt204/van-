export const profile = {
  name: "Van Jally Opon",
  shortName: "Van Opon",
  title: "Senior Full Stack Engineer",
  location: "Philippines · US Remote",
  email: "hudswillington@gmail.com",
  phone: "+63 963 103 9083",
  headline:
    "I build scalable SaaS products, cloud apps, and practical AI features for remote US teams.",
  summary:
    "I have 8+ years of experience shipping production software. Most days I work across React, TypeScript, and Node.js, with a focus on clean APIs, solid architecture, and performance users can actually feel.",
  availability: "Open to senior remote roles",
  resumeUrl: "/resume/Van_Jally_Opon.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/van-jally-opon-8840253b5/",
    github: "https://github.com/katt204",
  },
  about: [
    "I am a Senior Full Stack Engineer with a bit over eight years of experience building SaaS and web products for remote US teams. I am most comfortable owning a feature from start to finish: frontend, backend, data, and release.",
    "At Hireplicity and LANEX, that meant real production work. I helped cut page load times by about 20%, tightened service request paths, and shipped systems for conferencing, document editing, authentication, and payments.",
  ],
  philosophy: [
    {
      title: "Own the outcome",
      description:
        "I prefer to take a feature from requirements through design, build, and release. Ticket-only work is not how I like to operate.",
    },
    {
      title: "Measure what ships",
      description:
        "Nice architecture means little if users still wait on slow pages. I care about load time, reliability, and code that stays easy to change.",
    },
    {
      title: "Design for change",
      description:
        "Products shift. Clear service boundaries and readable code make that shift safer when new features or AI capabilities come in.",
    },
  ],
  highlights: [
    { value: "8+", label: "Years in production" },
    { value: "20%", label: "Faster page loads" },
    { value: "3", label: "US remote teams" },
  ],
  experience: [
    {
      company: "Hireplicity",
      role: "Senior Full Stack Engineer",
      location: "Los Angeles, CA · Remote",
      period: "03/2024 - 05/2026",
      points: [
        "Built and shipped client SaaS features end to end with React, TypeScript, and Node.js.",
        "Cut average page load time by about 20% after profiling, code-splitting, caching, and query cleanup.",
        "Helped unblock urgent frontend and backend issues so releases stayed on track.",
        "Set up shared feature workflows and coding standards that made multi-client codebases easier to maintain.",
      ],
    },
    {
      company: "LANEX Corporation",
      role: "Full Stack Developer",
      location: "San Francisco, CA · Remote",
      period: "02/2021 - 03/2024",
      points: [
        "Moved core backend work toward microservices so payloads were smaller and responses came back faster.",
        "Integrated BigBlueButton for in-platform meetings on the server side.",
        "Built a workforce tracking system with scheduled capture and careful performance work.",
        "Extended an existing document editor library so editing behavior matched the product without a full rewrite.",
      ],
    },
    {
      company: "Arcanys",
      role: "Web Developer",
      location: "Cebu, Philippines · Remote",
      period: "08/2017 - 01/2021",
      points: [
        "Migrated the data layer from MySQL to MongoDB as user volume and product data grew.",
        "Built authentication flows that protected accounts and sensitive user data.",
        "Wired up payment gateways so checkout and settlement stayed reliable.",
        "Shipped realtime order tracking and responsive UI with design and product partners.",
      ],
    },
  ],
  education: {
    school: "Ateneo de Manila University",
    degree: "Bachelor’s of Computer Science",
    period: "10/2013 - 08/2017",
  },
  skillGroups: [
    {
      id: "frontend",
      title: "Frontend",
      description: "UI, state management, and rendering performance.",
      items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Zustand", "Tailwind CSS"],
    },
    {
      id: "backend",
      title: "Backend",
      description: "APIs, services, and request handling.",
      items: ["Node.js", "Express.js", "NestJS", "REST", "GraphQL", "WebSockets", "Microservices"],
    },
    {
      id: "cloud",
      title: "Cloud",
      description: "Hosting and cloud delivery.",
      items: ["AWS", "Azure", "GCP", "Vercel", "Serverless"],
    },
    {
      id: "devops",
      title: "DevOps",
      description: "Containers, CI/CD, and releases.",
      items: ["Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Terraform", "Nginx"],
    },
    {
      id: "databases",
      title: "Databases",
      description: "SQL, document stores, cache, and search.",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    },
    {
      id: "ai",
      title: "AI / LLM",
      description: "Model APIs and product-facing AI features.",
      items: ["OpenAI API", "Anthropic Claude", "LangChain", "RAG", "pgvector", "AI Agents"],
    },
  ],
  projects: [
    {
      slug: "breshna",
      title: "Breshna",
      company: "No-Code Game Platform",
      summary:
        "Breshna lets people create, share, and play games without writing code. The product focuses on template libraries, game discovery, and a clean creator experience.",
      challenge:
        "Keep game creation and discovery feeling fast and responsive, especially across desktop and mobile templates.",
      result:
        "Built a strong product UI for template browsing, game exploration, and a clear path from signup to creating and playing games.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "REST"],
      media: {
        cover: "/images/breshna-cover.webp",
        alt: "Breshna no-code game creation platform homepage",
        slides: [
          {
            src: "/images/breshna-1.webp",
            alt: "Breshna homepage hero for creating video games",
          },
          {
            src: "/images/breshna-2.webp",
            alt: "Breshna game template library with Create and Preview actions",
          },
          {
            src: "/images/breshna-3.webp",
            alt: "Breshna featured games and discovery experience",
          },
          {
            src: "/images/breshna-4.webp",
            alt: "Breshna community and closing page sections",
          },
        ],
      },
      links: {
        demo: "https://breshna.io/",
        label: "Visit Breshna",
      },
    },
    {
      slug: "lloyds-building",
      title: "Lloyds Building",
      company: "Luxury Home Builders",
      summary:
        "Lloyds Building is a Sydney luxury home and duplex builder site. It showcases projects, craftsmanship, and brand trust for people looking at new builds.",
      challenge:
        "Show premium building work clearly while keeping the site fast and easy to browse for homeowners.",
      result:
        "Put together a polished brand site with strong project visuals, clear project browsing, and simple ways to get in touch.",
      stack: ["React", "TypeScript", "Next.js", "Performance"],
      media: {
        cover: "/images/lloyds-home.webp",
        alt: "Lloyds Building award-winning luxury home builders",
        slides: [
          {
            src: "/images/lloyds-home.webp",
            alt: "Lloyds Building brand homepage presentation",
          },
          {
            src: "/images/lloyds-slide-2.webp",
            alt: "Lloyds luxury duplex exterior in modern style",
          },
          {
            src: "/images/lloyds-slide-3.webp",
            alt: "Lloyds contemporary townhouse exterior with landscaping",
          },
          {
            src: "/images/lloyds-slide-4.webp",
            alt: "Lloyds premium family home with driveway and facade details",
          },
        ],
      },
      links: {
        demo: "https://lloydsbuilding.com.au/",
        label: "Visit Lloyds Building",
      },
    },
    {
      slug: "soflow-media",
      title: "SoFlow Media",
      company: "Social Media Marketing SaaS",
      summary:
        "SoFlow Media helps businesses plan, publish, and manage social content in one place. Teams can automate posts, use a planner, handle reviews, run an inbox, and collaborate together.",
      challenge:
        "Bring posting, planning, reviews, messaging, and media assets into one workflow that saves time without making the tool hard to control.",
      result:
        "Shipped a full SaaS feature set covering post automation, calendar planning, review handling, feeds, unified inbox, media gallery, and team collaboration.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "Analytics"],
      media: {
        cover: "/images/soflow-cover.webp",
        alt: "SoFlow Media social media marketing platform homepage",
        slides: [
          {
            src: "/images/soflow-1.webp",
            alt: "SoFlow Media hero and product dashboard preview",
          },
          {
            src: "/images/soflow-2.webp",
            alt: "SoFlow Media main features and product sections",
          },
          {
            src: "/images/soflow-3.webp",
            alt: "SoFlow Media advanced tools and platform modules",
          },
          {
            src: "/images/soflow-4.webp",
            alt: "SoFlow Media pricing and signup sections",
          },
        ],
      },
      links: {
        demo: "https://soflowmedia.com/",
        label: "Visit SoFlow Media",
      },
    },
    {
      slug: "manifex",
      title: "ManifeX",
      company: "Identity-Based Execution System",
      summary:
        "ManifeX turns identity into calendar action. You define who you are becoming, set 90-day priorities, and schedule the work that makes it real.",
      challenge:
        "Connect personal goals and identity change to a calendar people will actually use day to day.",
      result:
        "Built a clear product experience around identity definition, priority setting, and calendar-based execution blocks.",
      stack: ["React", "Next.js", "TypeScript", "Product UI"],
      media: {
        cover: "/images/manifex-cover.webp",
        alt: "ManifeX identity-based calendar product homepage",
        slides: [
          {
            src: "/images/manifex-1.webp",
            alt: "ManifeX homepage hero and calendar product preview",
          },
          {
            src: "/images/manifex-2.webp",
            alt: "ManifeX identity and prioritization product sections",
          },
          {
            src: "/images/manifex-3.webp",
            alt: "ManifeX how-it-works execution flow",
          },
          {
            src: "/images/manifex-4.webp",
            alt: "ManifeX comparison and final signup sections",
          },
        ],
      },
      links: {
        demo: "https://manifex.com/",
        label: "Visit ManifeX",
      },
    },
    {
      slug: "pillfinda",
      title: "PillFinda",
      company: "Pharma B2B Marketplace",
      summary:
        "PillFinda is a B2B marketplace where pharmacies buy from verified distributors and manufacturers. It supports competitive pricing, verified suppliers, delivery tracking, and procurement analytics.",
      challenge:
        "Help pharmacies compare suppliers, place orders, and track deliveries without friction or trust issues.",
      result:
        "Built marketplace flows for search, compare, checkout, supplier verification, analytics, and easy reordering.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "Marketplace"],
      media: {
        cover: "/images/pillfinda-cover.webp",
        alt: "PillFinda B2B pharma marketplace homepage",
        slides: [
          {
            src: "/images/pillfinda-1.webp",
            alt: "PillFinda homepage hero for pharma supplies",
          },
          {
            src: "/images/pillfinda-2.webp",
            alt: "PillFinda benefits and how-it-works sections",
          },
          {
            src: "/images/pillfinda-3.webp",
            alt: "PillFinda analytics and market intelligence modules",
          },
          {
            src: "/images/pillfinda-4.webp",
            alt: "PillFinda testimonials and signup sections",
          },
        ],
      },
      links: {
        demo: "https://www.pillfinda.co/",
        label: "Visit PillFinda",
      },
    },
  ],
  aiExpertise: [
    {
      title: "LLM Product Integrations",
      description:
        "I connect OpenAI and Anthropic APIs into real product flows, with timeouts, fallbacks, and clear UX limits.",
      icon: "sparkles",
    },
    {
      title: "RAG Systems",
      description:
        "I build retrieval setups with stores like pgvector so answers stay grounded in your own data, not generic chat.",
      icon: "search",
    },
    {
      title: "AI Agents",
      description:
        "I work on tool-using agent flows for multi-step tasks, with service contracts that stay testable.",
      icon: "bot",
    },
    {
      title: "Cloud Architecture",
      description:
        "I keep AI features behind solid APIs, containers, and CI/CD so they can ship and scale like any other service.",
      icon: "cloud",
    },
  ],
} as const;

export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'email' | 'npm' | 'upwork' | 'facebook'
}

export interface ExperienceItem {
  company: string
  title: string
  period: string
  location?: string
  note?: string
  highlights: string[]
}

export interface AchievementItem {
  name: string
  company: string
  role: string
  challenge: string
  solution: string
  outcome: string
  stack: string[]
}

export interface ProjectItem {
  name: string
  summary: string
  stack: string[]
  href?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationItem {
  school: string
  credential: string
  year: string
  detail?: string
}

export const profile = {
  name: 'Ashikur Rahman Rijvy',
  shortName: 'Rijvy',
  title: 'Senior Software Engineer',
  location: 'Dhaka, Bangladesh',
  phone: '+8801717745808',
  email: 'rrijvy@gmail.com',
  headline: 'Building SaaS and document-automation products on AWS and Azure.',
  tagline:
    'Software engineer with 7+ years of experience in .NET and TypeScript/Node. At KAZ Software I build serverless EDI pipelines, document extraction with LLMs, regulatory AI tools, and e-invoicing compliance systems.',
  about: [
    'I like clean, simple code and reliable delivery. At KAZ Software I build serverless EDI pipelines, document extraction with LLMs, regulatory AI tools, and e-invoicing compliance systems across AWS and Azure.',
    'Outside client work I build and share open-source projects: PDF viewers, Chrome extensions, crawlers, and full-stack products. Shipping in public keeps the craft sharp.'
  ],
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ] as NavItem[],
  socials: [
    { label: 'Email', href: 'mailto:rrijvy@gmail.com', icon: 'email' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rrijvy', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/rrijvy', icon: 'github' },
    { label: 'npm', href: 'https://www.npmjs.com/package/rx-pdf-viewer', icon: 'npm' },
    {
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~01f7a7b1007c281270',
      icon: 'upwork'
    }
  ] as SocialLink[],
  experience: [
    {
      company: 'KAZ Software',
      title: 'Senior Software Engineer',
      period: 'Jul 2020 – Present',
      note: 'Promoted July 2024 — previously Software Engineer & Associate Software Engineer',
      highlights: [
        'Led the build of a multi-tenant B2B supply-chain platform that automates order processing, supplier and purchase-order management, and shipment tracking.',
        'Added in-app discussion threads with mentions and reactions, an S3-backed file manager with type-aware previews, and a notification system with per-type email/in-app controls plus a daily digest.',
        'Built an Open API (Swagger, API keys) for third-party integration and a WebSocket layer so users see order and discussion updates in real time.',
        'Built a serverless document-extraction pipeline (AWS Step Functions and Lambda) that classifies documents with AWS Comprehend, falls back to an in-house LayoutLMv3 model, then extracts line-item data with Claude, GPT-4, and Bedrock — processing 500–1,000 supplier documents a month at about 95% accuracy.',
        'Built a UAE PINT-AE e-invoicing compliance product with a rule builder so compliance teams write their own validation rules. Cut invoice validation from 1–2 hours to 10–15 seconds per batch; live with 2–3 tenants.',
        'Built a multi-agent regulatory-intelligence system with RAG that checks 12 news and regulatory sources daily, with site-specific scrapers and rotating browser fingerprints — cutting analyst research time by about 87%.',
        'Trained a ModernBERT classifier for tax and regulatory articles across 5 categories and ~25–30 subcategories, at about 98% accuracy on around 50 articles a day.',
        'Built a scheduled Electron app that syncs purchase-order line items and documents with 8 ERP systems (including Progress OpenEdge, Visual FoxPro, P21/Epicor, and Plex) via direct database and REST connections.',
        'Built a ComfyUI image-generation engine for a children’s comic-book client using Flux and custom-trained LoRAs for character consistency, plus a custom Segment Anything (SAM) node for region editing — generating 15 illustrations in about 20 minutes.'
      ]
    },
    {
      company: 'Alphasoft Technology Limited',
      title: 'Software Developer',
      period: 'May 2019 – Feb 2020',
      highlights: [
        'Built a hospital management system covering patient assessment, billing, live dashboards, and real-time alerts between doctors and receptionists using SignalR.',
        'Built a website generator that let non-technical staff create a full website by filling out a form, so nobody had to hand-code each site.',
        'Built a payroll system that calculates salaries from job cards and runs an approval workflow based on attendance.'
      ]
    }
  ] as ExperienceItem[],
  achievements: [
    {
      name: 'Document Processing & EDI Pipeline',
      company: 'KAZ Software',
      role: 'Senior Software Engineer',
      challenge:
        'Supplier documents arrived by email in batches of about 25 every 1–2 hours, and each one had to be processed by hand — slow work that led to data-entry mistakes.',
      solution:
        'Built an AWS Step Functions pipeline that classifies each document with AWS Comprehend, falls back to a trained LayoutLMv3 model for harder cases, then uses Claude, GPT-4, and AWS Bedrock to extract line-item data and validate it against business rules.',
      outcome:
        'No more manual handling — the system processes 500–1,000 documents a month on its own at about 95% accuracy.',
      stack: [
        'AWS Comprehend',
        'LayoutLMv3',
        'Claude / GPT-4 / Bedrock',
        'Lambda',
        'Step Functions'
      ]
    },
    {
      name: 'E-Invoicing Compliance SaaS',
      company: 'KAZ Software',
      role: 'Technical Lead & Project Manager',
      challenge:
        'Businesses had to check invoices against the PINT-AE standard by hand — 1–2 hours per invoice — with no easy way to catch problems before going live.',
      solution:
        'Built a multi-tenant platform where businesses upload invoice data as CSV, validate against rules they define in a rule builder, flag exceptions for review, and assemble audit evidence.',
      outcome:
        'Validation takes 10–15 seconds per batch instead of 1–2 hours per invoice, flags about 25% of invoices for review before submission, and is live with 2–3 tenants in the UAE.',
      stack: ['React', 'Node / Express', 'PostgreSQL', 'Azure']
    },
    {
      name: 'Regulatory Intelligence Platform',
      company: 'KAZ Software',
      role: 'Technical Lead & Project Manager',
      challenge:
        'An analyst was spending 5–6 hours a day manually checking 12 news and regulatory sources just to stay on top of risk.',
      solution:
        'Built a multi-agent RAG system that checks those sources automatically every day — each site gets its own scraper, with rotating browser fingerprints — then produces AI summaries and risk insights.',
      outcome:
        'Cut daily research time by about 87%, from 5–6 hours down to 40–45 minutes across all 12 sources.',
      stack: ['Python', 'FastAPI', 'Celery', 'LangChain / LangGraph', 'Pinecone']
    },
    {
      name: 'Transformer Risk Classifier',
      company: 'KAZ Software',
      role: 'ML Engineer',
      challenge:
        'Tax and regulatory articles needed to be sorted by risk category, and doing this by hand was slow and inconsistent.',
      solution:
        'Trained a ModernBERT classifier covering 5 main categories and roughly 25–30 subcategories.',
      outcome:
        'Classifies each article in under 20 seconds at about 98% accuracy, handling around 50 articles a day.',
      stack: ['ModernBERT', 'FastAPI', 'Docker']
    },
    {
      name: 'Children’s Comic Book Illustration Engine',
      company: 'KAZ Software',
      role: 'Generative AI Engineer',
      challenge:
        'A client needed illustrations for a children’s comic book with consistent custom characters across every panel — and a way to edit just one part of an image at a time.',
      solution:
        'Built the full image-generation engine in ComfyUI using Flux with custom-trained LoRAs for character consistency, plus a custom Segment Anything (SAM) node for region-only regeneration.',
      outcome:
        'Generates a full set of 15 illustrations in about 20 minutes, with consistent characters throughout.',
      stack: ['ComfyUI', 'Flux', 'LoRA', 'Segment Anything', 'Python']
    }
  ] as AchievementItem[],
  projects: [
    {
      name: 'Ecommerce Platform',
      summary:
        'Online store and admin console: shoppers browse and buy products, while staff manage catalog, orders, and stock.',
      stack: ['Next.js 15', '.NET 10', 'MongoDB', 'AWS Lambda']
    },
    {
      name: 'Tender Operations Platform',
      summary:
        'Operations hub for a small contracting and tender business: tracks project finances, working capital, assets, staff, and deadline reminders so the owner sees profit/loss and dues in one place.',
      stack: ['React', 'Vite', 'Express', 'Prisma', 'AWS SAM']
    },
    {
      name: 'Vocaly',
      summary:
        'Voice typing for any website: a Chrome extension that turns speech into text in any input field, in English and Bengali.',
      stack: ['Manifest V3', 'Web Speech API', 'Google Cloud']
    },
    {
      name: 'RX PDF Viewer',
      summary:
        'Embeddable PDF viewer for React apps with selectable text, so developers can show documents without a heavy dependency.',
      stack: ['pdfjs-dist', 'React', 'npm'],
      href: 'https://github.com/rrijvy/rx-pdf-viewer'
    },
    {
      name: 'Colorful Copy Manager',
      summary:
        'Clipboard history manager: a Chrome extension that remembers recently copied text locally so users can re-copy it later, storing nothing externally.',
      stack: ['TypeScript', 'Chrome Extension']
    },
    {
      name: 'EdTech Platform',
      summary:
        'Course-selling site: creators publish video courses with secure streaming, subscriptions, and certificates, and learners track progress.',
      stack: ['Next.js', 'Express', 'Prisma']
    },
    {
      name: 'Bebodh Crawler',
      summary:
        'Distributed web crawler: collects and scrapes web content at scale using worker queues and multiple datastores.',
      stack: ['.NET', 'Python/Django', 'Next.js', 'Postgres', 'Mongo', 'Redis', 'Celery']
    },
    {
      name: 'UpAlert',
      summary:
        'Job-alert app: lets job hunters save search filters and get matched openings in one mobile feed, with application tracking.',
      stack: ['Expo', 'React Native']
    }
  ] as ProjectItem[],
  skills: [
    {
      label: 'Languages',
      items: ['C# / .NET (7 yrs)', 'TypeScript (6 yrs)', 'JavaScript', 'Python', 'Node.js']
    },
    {
      label: 'Frontend',
      items: [
        'React',
        'Next.js',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Redux / Zustand / TanStack Query',
        'Electron',
        'Expo / React Native'
      ]
    },
    {
      label: 'Backend',
      items: [
        '.NET Core / .NET 10',
        'ASP.NET MVC & Razor',
        'Node / Express',
        'FastAPI',
        'REST APIs',
        'JWT (RS256)'
      ]
    },
    {
      label: 'Cloud & Infra',
      items: [
        'AWS Lambda',
        'Step Functions',
        'DynamoDB',
        'S3',
        'SNS',
        'API Gateway',
        'SES',
        'EventBridge',
        'Azure Functions',
        'Azure Blob',
        'Docker',
        'pnpm / turbo',
        'CI/CD'
      ]
    },
    {
      label: 'AI / ML',
      items: [
        'AWS Comprehend',
        'LayoutLMv3',
        'Claude / GPT-4 / Bedrock',
        'ModernBERT',
        'ComfyUI',
        'Flux',
        'LoRA training',
        'Segment Anything (SAM)',
        'Hugging Face',
        'Web Speech API'
      ]
    },
    {
      label: 'Data',
      items: ['PostgreSQL', 'MongoDB', 'MSSQL Server', 'Prisma', 'Entity Framework']
    },
    {
      label: 'Practices',
      items: ['Git', 'Multi-tenant & RBAC', 'Design patterns', 'Clean / hexagonal architecture']
    }
  ] as SkillGroup[],
  education: [
    {
      school: 'Daffodil International University',
      credential: 'BSc in Computer Science and Engineering',
      year: '2019',
      detail: 'GPA 3.1 / 4.0'
    },
    {
      school: 'Narail Govt Victoria College',
      credential: 'Higher Secondary School Certificate',
      year: '2013',
      detail: 'GPA 4.80'
    },
    {
      school: 'Narail Govt High School',
      credential: 'Secondary School Certificate',
      year: '2011',
      detail: 'GPA 4.75'
    }
  ] as EducationItem[]
} as const

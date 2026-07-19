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
  highlights: string[]
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
  headline: 'Building scalable ERP, document-automation, and SaaS products.',
  tagline:
    '7+ years shipping cloud-native business software across .NET and TypeScript/Node on AWS — from serverless EDI pipelines to LLM-based extraction and multi-tenant compliance platforms.',
  about: [
    'I design and deliver reliable software with clean architecture and strong developer experience. At KAZ Software I lead work on supply-chain platforms, document intelligence, e-invoicing compliance, and regulatory-AI systems.',
    'Outside client work I publish open-source tooling — PDF viewers, Chrome extensions, crawlers, and full-stack products — because shipping in public keeps the craft sharp.'
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
      highlights: [
        'Promoted to Senior Software Engineer in July 2024 (previously Software Engineer & Associate Software Engineer).',
        'Supply-chain management platform: multi-tenant B2B platform automating order processing, supplier and purchase-order management, shipment tracking, and EDI for supplier documents, with in-app chat, file manager, and managed email/notification (C#, .NET, Node, Electron, React, AWS).',
        'Document processing system: ingests supplier documents and uses OCR plus LLM extraction to classify files, extract structured line-item data, and validate against business rules (AWS Lambda, Step Functions, Python, EasyOCR, LayoutLMv3).',
        'Multi-tenant e-invoicing compliance SaaS: validates invoice data against the UAE national e-invoicing (PINT-AE) standard via CSV upload, field mapping, rule-based validation, and audit-ready evidence packs (React, Node/Express, PostgreSQL, Azure).',
        'Regulatory intelligence platform: monitors global news and regulatory sources, extracts and classifies content with OCR and LLMs, and delivers AI summaries via a multi-agent RAG pipeline (Python, FastAPI, Celery, LangChain/LangGraph, Pinecone).',
        'Regulatory document intelligence: tags tax and regulatory articles by risk category with a transformer model to speed analyst triage (ModernBERT, FastAPI, Docker).',
        'Desktop and integration tooling: Electron widget for platform actions and AWS SAM Lambdas for client sync.'
      ]
    },
    {
      company: 'Alphasoft Technology Limited',
      title: 'Software Developer',
      period: 'May 2019 – Feb 2020',
      highlights: [
        'Hospital Management System: end-to-end patient care from assessment and billing to live dashboards and real-time doctor–receptionist alerts (SignalR).',
        'Dynamic website generator: let non-technical staff create full websites from a submitted form without hand-coding each one.',
        'Payroll system: computed salaries from job cards with approval workflows and attendance-based reporting (C# / ASP.NET Core / SQL Server).'
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      name: 'Ecommerce Platform',
      summary:
        'Online store and admin console — shoppers browse and buy while staff manage catalog, orders, and stock.',
      stack: ['Next.js 15', '.NET 10', 'MongoDB', 'AWS Lambda']
    },
    {
      name: 'Tender Operations Platform',
      summary:
        'Operations hub for a contracting business: project finances, working capital, assets, staff, and deadline reminders in one place.',
      stack: ['React', 'Vite', 'Express', 'Prisma', 'AWS SAM']
    },
    {
      name: 'Vocaly',
      summary:
        'Chrome extension for voice typing on any website in English and Bengali — speech to text in any input field.',
      stack: ['Manifest V3', 'Web Speech API', 'Google Cloud']
    },
    {
      name: 'RX PDF Viewer',
      summary:
        'Embeddable React PDF viewer with selectable text, so apps can show documents without a heavy dependency.',
      stack: ['pdfjs-dist', 'React', 'npm'],
      href: 'https://github.com/rrijvy/rx-pdf-viewer'
    },
    {
      name: 'Colorful Copy Manager',
      summary:
        'Chrome extension that keeps recent clipboard history locally so you can re-copy later — nothing stored externally.',
      stack: ['TypeScript', 'Chrome Extension']
    },
    {
      name: 'EdTech Platform',
      summary:
        'Course-selling site with secure streaming, subscriptions, certificates, and learner progress tracking.',
      stack: ['Next.js', 'Express', 'Prisma']
    },
    {
      name: 'Bebodh Crawler',
      summary:
        'Distributed web crawler that scrapes at scale with worker queues and multiple datastores.',
      stack: ['.NET', 'Python/Django', 'Next.js', 'Postgres', 'Mongo', 'Redis', 'Celery']
    },
    {
      name: 'UpAlert',
      summary:
        'Job-alert mobile app — save search filters, get matched openings, and track applications in one feed.',
      stack: ['Expo', 'React Native']
    }
  ] as ProjectItem[],
  skills: [
    {
      label: 'Languages',
      items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Node.js']
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
      items: ['.NET Core / .NET 10', 'ASP.NET', 'Node/Express', 'FastAPI', 'REST APIs', 'JWT']
    },
    {
      label: 'Cloud & Infra',
      items: [
        'AWS Lambda',
        'Step Functions',
        'S3',
        'EventBridge',
        'Docker',
        'CI/CD',
        'pnpm / turbo'
      ]
    },
    {
      label: 'AI / ML',
      items: [
        'LLM document extraction',
        'LayoutLMv3 OCR',
        'ModernBERT',
        'Hugging Face',
        'LangChain / LangGraph'
      ]
    },
    {
      label: 'Data',
      items: ['PostgreSQL', 'MongoDB', 'MSSQL Server', 'Prisma', 'Entity Framework']
    },
    {
      label: 'Practices',
      items: ['Git', 'Multi-tenant & RBAC', 'Clean / hexagonal architecture', 'Design patterns']
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

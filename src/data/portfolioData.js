import avt from '../assets/bmw.jpg';
export const profile = {
  name: "Karnik Rathva",
  role: "Software Developer",
  tagline: "From Ideas to Interactive Experiences.",
  subtext:
    " I build responsive full-stack web applications using React, Node.js, Express, and MongoDB- turning ideas into practical, user-friendly products with clean and maintainable code.",
  availability: "Available for Q3/Q4 Roles",
  location: "Vadodara, India · Open to remote",
  email: "karnikrathva200@gmail.com",
  socials: {
    github: "https://github.com/Karnik-Rathva",
    linkedin: "https://www.linkedin.com/in/karnik-rathva-035b6a338/",
    // x: "https://x.com/aaravbuilds",
  },
  avatar: {avt},
};

export const techMarquee = [
  "JavaScript",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Mongoose",
  "MongoDB",
  "Axios",
  "ReactJs",
  "NodeJs",
  "TailwindCss",
  "Git",
  "Github",
];

export const philosophy = [
  {
    title: "Build for users, not just demos",
    description:
      "I build web applications with clean, reusable components and reliable APIs, focusing on responsive experiences, maintainable code, and practical functionality from the start, not just making something that looks good in a demo.",
  },
  {
    title: "Clean code is a feature",
    description:
      "I focus on writing simple, reusable, and maintainable code that is easy to understand, extend, and debug - because good software should make development easier, not harder.",
  },
  {
    title: "Build with purpose",
    description:
      "Code is more than just functionality. I focus on building applications that solve real problems, provide a smooth user experience, and create value through practical, maintainable solutions.",
  },
];

export const superpowers = [
  "Full-stack web development",
  "Responsive UI & component design",
  "Database Design & Integration",
  "Authentication & Authorization",
  "REST API development",
  
];

export const skillCategories = [
  {
    category: "Languages",
    tags: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "SQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    tags: [
      "AWS (EKS, Lambda, RDS)",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Docker",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus / Grafana",
    ],
  },
  {
    category: "Databases",
    tags: [
      "PostgreSQL",
      "MongoDB",
      // "DynamoDB",
      // "Cassandra",
      // "Elasticsearch",
      // "ClickHouse",
    ],
  },
  {
    category: "AI / ML Tooling",
    tags: [
      "PyTorch",
      "LangChain",
      "ScikitLearn",
      "Vector Search (pgvector)",
      "Pandas/Numpy",
      // "OpenAI / Anthropic APIs",
      // "MLflow",
      // "Feature Stores",
    ],
  },
];

export const projects = [
  {
    title: "Ledger — Real-Time Payments Engine",
    description:
      "A double-entry ledger service processing high-volume financial transactions with strict idempotency guarantees and sub-100ms settlement latency across regions.",
    metrics: "12M+ daily transactions · 99.99% uptime · p99 latency 84ms",
    stack: ["Go", "PostgreSQL", "Kafka", "Kubernetes"],
    image: "/assets/project-placeholder.jpg",
    github: "https://github.com/aaravmehta/ledger-engine",
    demo: "https://ledger-demo.buildsystems.dev",
  },
  {
    title: "Sentinel — Distributed Rate Limiter",
    description:
      "A sliding-window rate limiting library and sidecar used to protect internal APIs from abuse, deployed as a shared platform service across 40+ microservices.",
    metrics: "40+ services protected · 2.1B requests/mo evaluated · <1ms overhead",
    stack: ["Rust", "Redis", "gRPC", "Envoy"],
    image: "/assets/project-placeholder.jpg",
    github: "https://github.com/aaravmehta/sentinel-ratelimit",
    demo: "https://sentinel-demo.buildsystems.dev",
  },
  {
    title: "Pulse — Observability Data Platform",
    description:
      "A metrics and log ingestion pipeline that unified fragmented monitoring stacks into a single queryable warehouse, cutting incident triage time significantly.",
    metrics: "60% faster MTTR · 3.5TB/day ingested · 200+ dashboards migrated",
    stack: ["Python", "ClickHouse", "Airflow", "Terraform"],
    image: "/assets/project-placeholder.jpg",
    github: "https://github.com/aaravmehta/pulse-platform",
    demo: "https://pulse-demo.buildsystems.dev",
  },
  {
    title: "Cortex — Internal RAG Assistant",
    description:
      "An internal knowledge assistant built on a retrieval-augmented pipeline over engineering docs, runbooks, and postmortems, embedded directly into the team's chat tool.",
    metrics: "35% drop in repeat support questions · 4.7/5 engineer rating",
    stack: ["TypeScript", "LangChain", "pgvector", "OpenAI API"],
    image: "/assets/project-placeholder.jpg",
    github: "https://github.com/aaravmehta/cortex-assistant",
    demo: "https://cortex-demo.buildsystems.dev",
  },
];

export const experience = [
  {
    role: "Software developer Intern",
    company: "MAMO Technolabs LLP",
    period: "Sep-2026 — Present",
    location: "Vadodara, Gujarat",
    achievements: [
      "Led the migration of a monolithic billing system to an event-driven microservices architecture, reducing deployment risk and cutting release cycle time from weeks to days.",
      "Designed a multi-region failover strategy that reduced customer-facing downtime by 92% over two fiscal years.",
      "Mentored a team of 5 engineers and established the org's incident response and on-call playbooks.",
    ],
  },
  {
    role: "Web Developer intern",
    company: "Nexer Technologies",
    period: "Jan-2026 — Jul-2026",
    location: "Surat, Gujarat",
    achievements: [
      "Built the core transaction reconciliation engine handling 8M+ daily records with zero data-loss guarantees.",
      "Optimized PostgreSQL query patterns and indexing strategy, reducing average API response time by 47%.",
      "Introduced infrastructure-as-code practices with Terraform, cutting environment provisioning time from days to minutes.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Venom Technologies",
    period: "May-2025 — Jul-2025",
    location: "Anand",
    achievements: [
      "Developed Key UI features for CoEdit, a real time code editor built as a single page application in ReactJs and TailwindCss",
      "Engineered an interactive file explorer, project dashboard, and code editing workspace utilizing React Context API and hooks for global state management.",
      " Integrated RESTful APIs using Axios to manage project permissions, code execution calls, and user authentication flows.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Information and Communication Technology",
    institution: "Dhirubhai Ambani University",
    period: "2022 — 2026",
    detail: "Specialization in MERN Stack Development. Focused on building scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
  },
  {
    degree: "12th standard",
    institution: "Eklavya Model Residential School, Vadodara",
    period: "2021 — 2022",
    detail: "Completed Higher Secondary Education in Science Stream (Group A), with Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Certified Kubernetes Administrator (CKA)",
    institution: "The Linux Foundation",
    period: "2022",
    detail: "Professional certification validating hands-on Kubernetes cluster administration expertise.",
  },
];

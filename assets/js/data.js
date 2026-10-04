// Everything personal on the site lives here. Edit this file, commit, done.
window.SITE_DATA = {
  name: "Raja Mohamad",
  title: "Data Engineering Intern",
  company: "Cuedo Analytics",
  location: "Bengaluru, India",
  tagline:
    "I build reliable ETL pipelines and cloud data platforms that turn raw data into analytics-ready datasets.",

  photo: {
    webp: "assets/img/avatar-320.webp",
    jpg: "assets/img/avatar-320.jpg",
    alt: "Portrait of Raja Mohamad"
  },

  // Flip to true once the PDF is in assets/
  resumeAvailable: false,
  resumeUrl: "assets/Raja_Mohamad_Resume.pdf",

  links: {
    linkedin: "https://www.linkedin.com/in/raja-mohamad-711161262",
    github: "https://github.com/Raja9964",
    email: "raja123.mrb@gmail.com"
  },

  highlights: [
    { value: "AWS", label: "Certified Data Engineer – Associate" },
    { value: "GCP", label: "Professional Data Engineer" },
    { value: "9.16", label: "CGPA in B.Tech CSE" }
  ],

  heroBadge: {
    title: "Google Cloud Certified",
    subtitle: "Professional Data Engineer"
  },

  about: [
    "I'm a Data Engineering Intern at Cuedo Analytics in Bengaluru, where I build production data pipelines in Python and SQL that load client datasets into PostgreSQL and Amazon Redshift.",
    "I care about data people can trust, so validation, reconciliation between source and target systems, and query performance are part of every pipeline I ship.",
    "I hold the AWS Certified Data Engineer – Associate and Google Cloud Professional Data Engineer certifications, and I studied Computer Science and Engineering at Dayananda Sagar University (2022 – 2026) with a CGPA of 9.16.",
    "Outside work I build lakehouse-style analytics projects with dbt and DuckDB, and I've worked on machine learning projects in healthcare and voice AI."
  ],

  facts: [
    { label: "Role", value: "Data Engineering Intern" },
    { label: "Company", value: "Cuedo Analytics" },
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Focus", value: "ETL, data warehousing, cloud migration" }
  ],

  skills: [
    { group: "Languages", icon: "code", items: ["Python", "SQL", "Java", "JavaScript"] },
    {
      group: "Data Engineering",
      icon: "pipeline",
      items: [
        "ETL pipelines",
        "Data warehousing",
        "Medallion architecture",
        "PySpark",
        "dbt",
        "Data validation & reconciliation",
        "Data quality testing"
      ]
    },
    {
      group: "Cloud",
      icon: "cloud",
      items: [
        "AWS Glue",
        "AWS DMS",
        "Amazon S3",
        "Amazon Redshift",
        "AWS Lambda",
        "Step Functions",
        "Amazon Bedrock",
        "Google Cloud"
      ]
    },
    { group: "Databases", icon: "database", items: ["PostgreSQL", "MySQL", "MongoDB", "DuckDB"] },
    {
      group: "Tools",
      icon: "tools",
      items: ["Git", "Docker", "GitHub Actions", "REST APIs", "Flask", "Django", "React", "Node.js"]
    },
    { group: "ML & BI", icon: "chart", items: ["TensorFlow", "Scikit-learn", "Power BI", "Tableau", "Streamlit"] }
  ],

  experience: [
    {
      role: "Data Engineering Intern",
      company: "Cuedo Analytics",
      location: "Bengaluru, India",
      start: "Feb 2026",
      end: "Present",
      points: [
        "Built production data pipelines in Python and SQL to ingest and transform client datasets into PostgreSQL and Amazon Redshift.",
        "Developed SQL validation and reconciliation checks across source and target systems to verify row counts, totals and data consistency.",
        "Implemented data-quality checks and optimized Redshift queries for analytical workloads.",
        "Executed disaster-recovery test runs on production workflows and documented pipelines for cross-team handoff."
      ],
      highlight: {
        title: "Cloud data migration: PostgreSQL to Amazon Redshift (full load + CDC)",
        tags: ["AWS DMS", "AWS Glue", "PySpark", "Amazon S3", "Amazon Redshift"]
      }
    }
  ],

  projects: [
    {
      name: "LendLake",
      featured: true,
      description:
        "Lending analytics lakehouse built on a medallion architecture (Bronze → Silver → Gold). Synthetic loan data is ingested with Python, transformed with dbt and DuckDB, checked by data-quality tests and served through a Streamlit dashboard, with CI on every change.",
      pipeline: [
        { stage: "Source", note: "Synthetic loan data" },
        { stage: "Bronze", note: "Raw, ingested with Python" },
        { stage: "Silver", note: "Cleaned with dbt + DuckDB" },
        { stage: "Gold", note: "Tested, analytics-ready" },
        { stage: "Serve", note: "Streamlit dashboard" }
      ],
      tags: ["Python", "dbt", "DuckDB", "SQL", "Streamlit", "GitHub Actions"],
      url: "https://github.com/Raja9964/LendLake"
    },
    {
      name: "TaskWeave",
      description:
        "Task dependency manager with cycle detection, recursive status propagation and an interactive dependency graph.",
      tags: ["Django", "React", "TypeScript", "React Flow", "Tailwind"],
      url: "https://github.com/Raja9964/TaskWeave"
    },
    {
      name: "SpeakScore",
      description:
        "Rubric-based engine that scores spoken self-introduction transcripts on content, speech rate, grammar, vocabulary, clarity and engagement.",
      tags: ["Python", "Flask", "NLP", "VADER"],
      url: "https://github.com/Raja9964/SpeakScore"
    },
    {
      name: "Voyagr",
      description: "Travel reservation app with trip search and overbooking-safe transactional booking.",
      tags: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
      url: "https://github.com/Raja9964/Voyagr"
    },
    {
      name: "Helping Hands",
      description:
        "Donation platform with trackable donation codes, a public status timeline and an admin dashboard.",
      tags: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      url: "https://github.com/Raja9964/Helping-Hands"
    },
    {
      name: "Pagewright",
      description:
        "Playwright + TypeScript test automation framework with Page Object Model, fixtures, UI and API suites, and CI reports.",
      tags: ["Playwright", "TypeScript", "CI/CD"],
      url: "https://github.com/Raja9964/Pagewright"
    },
    {
      name: "Multi-Disease Health Risk Assessment",
      description:
        "Machine learning and deep learning models for cardiovascular, pulmonary, retinal and renal risk assessment, served through a Flask web app.",
      tags: ["Python", "TensorFlow", "Scikit-learn", "U-Net", "MobileNetV2", "Flask"],
      url: ""
    },
    {
      name: "SeniorConnect",
      description:
        "Multilingual voice assistant that helps elderly users reach government welfare services by speaking in regional Indian languages.",
      tags: ["Voice AI", "NLP", "Speech-to-Text"],
      url: ""
    }
  ],

  certifications: [
    { name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services" },
    { name: "Professional Data Engineer", issuer: "Google Cloud" },
    { name: "Data Analysis with Python", issuer: "IBM" },
    { name: "Big Data 101", issuer: "IBM" },
    { name: "Power BI", issuer: "Microsoft" }
  ],

  publication: null,

  achievements: [
    { title: "Code Red Hackathon", detail: "3rd place · DSU ACM, 2024", icon: "trophy" },
    { title: "AWS Certified Data Engineer – Associate", detail: "Certified", icon: "award" },
    { title: "Google Cloud Professional Data Engineer", detail: "Certified", icon: "award" }
  ],

  education: [
    {
      degree: "B.Tech, Computer Science and Engineering",
      school: "Dayananda Sagar University",
      location: "Bengaluru, India",
      period: "2022 – 2026",
      grade: "CGPA 9.16 / 10"
    }
  ],

  contact: {
    heading: "Let's talk data.",
    text: "I'm always happy to talk about data engineering roles, pipelines and cloud projects. Email or LinkedIn is the quickest way to reach me."
  }
};

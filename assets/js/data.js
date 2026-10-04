// Everything personal on the site lives here. Edit this file, commit, done.
window.SITE_DATA = {
  name: "Raja Mohamad",
  title: "Data Engineer",
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
    email: "" // add an address here to show an Email button
  },

  highlights: [
    { value: "GCP", label: "Professional Data Engineer" },
    { value: "IEEE", label: "Published author" },
    { value: "9.16", label: "CGPA in B.Tech CSE" }
  ],

  heroBadge: {
    title: "Google Cloud Certified",
    subtitle: "Professional Data Engineer"
  },

  about: [
    "I'm a Data Engineer at Cuedo Analytics in Bengaluru, where I build ETL pipelines in Python and SQL and cloud data migration workflows on AWS using Glue, DMS, S3 and Redshift.",
    "I care about data people can trust, so validation, reconciliation between source and target systems, and query performance are part of every pipeline I ship.",
    "I'm a Google Cloud certified Professional Data Engineer and a published IEEE author, and I studied Computer Science and Engineering at Dayananda Sagar University with a CGPA of 9.16.",
    "Right now I'm focused on cloud data migration and on building lakehouse-style analytics projects with dbt and DuckDB."
  ],

  facts: [
    { label: "Role", value: "Data Engineer" },
    { label: "Company", value: "Cuedo Analytics" },
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Focus", value: "ETL, data warehousing, cloud migration" }
  ],

  skills: [
    { group: "Languages", icon: "code", items: ["Python", "SQL", "Java", "TypeScript"] },
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
      items: ["AWS Glue", "AWS DMS", "Amazon S3", "Amazon Redshift", "Google Cloud", "BigQuery"]
    },
    { group: "Databases", icon: "database", items: ["PostgreSQL", "MySQL", "MongoDB", "DuckDB"] },
    {
      group: "Tools",
      icon: "tools",
      items: ["GitHub Actions", "Playwright", "Flask", "Django", "React", "Node.js", "Express"]
    },
    { group: "BI", icon: "chart", items: ["Power BI", "Streamlit"] }
  ],

  experience: [
    {
      role: "Data Engineer",
      company: "Cuedo Analytics",
      location: "Bengaluru, India",
      start: "Feb 2026",
      end: "Present",
      points: [
        "Develop ETL pipelines using Python and SQL.",
        "Build cloud data migration workflows with AWS Glue, AWS DMS, Amazon S3 and Amazon Redshift.",
        "Run data validation and reconciliation across PostgreSQL and Redshift.",
        "Optimize SQL queries and contribute to analytics-ready datasets.",
        "Work on cloud-based data engineering solutions and production support."
      ],
      highlight: {
        title: "Cloud data migration: PostgreSQL to Amazon Redshift",
        tags: ["AWS Glue", "AWS DMS", "Amazon S3", "Amazon Redshift", "PostgreSQL"]
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
      name: "GiveTrack",
      description:
        "Donation platform with trackable donation codes, a public status timeline and an admin dashboard.",
      tags: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      url: "https://github.com/Raja9964/GiveTrack"
    },
    {
      name: "Pagewright",
      description:
        "Playwright + TypeScript test automation framework with Page Object Model, fixtures, UI and API suites, and CI reports.",
      tags: ["Playwright", "TypeScript", "CI/CD"],
      url: "https://github.com/Raja9964/Pagewright"
    }
  ],

  certifications: [
    { name: "Professional Data Engineer", issuer: "Google Cloud" },
    { name: "Data Analysis with Python", issuer: "IBM" },
    { name: "Big Data 101", issuer: "IBM" },
    { name: "Power BI", issuer: "Microsoft" }
  ],

  publication: {
    title: "AI-Driven Multi-Modal Health Risk Assessment",
    venue: "IEEE ICISC 2025",
    summary: "Peer-reviewed research on assessing health risk by combining multiple data modalities.",
    tags: ["TensorFlow", "Scikit-learn", "Streamlit"],
    url: "" // add the IEEE Xplore link when it's available
  },

  achievements: [
    { title: "Code Red Hackathon", detail: "3rd place", icon: "trophy" },
    { title: "IEEE published author", detail: "ICISC 2025", icon: "file" },
    { title: "Google Cloud Professional Data Engineer", detail: "Certified", icon: "award" }
  ],

  education: [
    {
      degree: "B.Tech, Computer Science and Engineering",
      school: "Dayananda Sagar University",
      location: "Bengaluru, India",
      period: "", // e.g. "2022 – 2026"
      grade: "CGPA 9.16 / 10"
    }
  ],

  contact: {
    heading: "Let's talk data.",
    text: "I'm always happy to talk about data engineering roles, pipelines and cloud projects. The quickest way to reach me is LinkedIn."
  }
};

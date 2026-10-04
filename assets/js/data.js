// All the content on the site lives here. Edit, save, refresh.
window.SITE_DATA = {
  name: "Raja Mohamad",
  role: "Data Engineering Intern",
  company: "Cuedo Analytics",
  location: "Bengaluru, India",
  tagline: "Raw data in. Reliable insights out.",
  intro:
    "I build Python and SQL pipelines that move client data into PostgreSQL and Amazon Redshift, with validation and reconciliation checks so the numbers can be trusted.",

  photo: {
    webp: "assets/img/avatar-320.webp",
    webp2x: "assets/img/avatar-460.webp",
    jpg: "assets/img/avatar-320.jpg",
    alt: "Portrait of Raja Mohamad"
  },

  links: {
    email: "raja123.mrb@gmail.com",
    linkedin: "https://www.linkedin.com/in/raja-mohamad-711161262",
    github: "https://github.com/Raja9964",
    certifications: "https://www.linkedin.com/in/raja-mohamad-711161262/details/certifications/"
  },

  credentials: [
    { label: "AWS Certified Data Engineer – Associate", tone: "aws" },
    { label: "Google Cloud Professional Data Engineer", tone: "gcp" },
    { label: "2× IEEE Published Author", tone: "ieee" }
  ],

  stats: [
    { value: "2", label: "IEEE publications", note: "Peer-reviewed conference papers", icon: "file" },
    { value: "2", label: "Cloud data engineering certifications", note: "AWS + Google Cloud", icon: "award" },
    { value: "9.16", label: "CGPA", note: "B.Tech CSE, Dayananda Sagar University", icon: "cap" },
    { value: "3rd", label: "Place, 24-hour hackathon", note: "DSU Code Red 2024", icon: "trophy" }
  ],

  about: [
    "I'm a Data Engineering Intern at Cuedo Analytics in Bengaluru. I build production data pipelines in Python and SQL that ingest and transform client datasets into PostgreSQL and Amazon Redshift.",
    "The part I care about most is data people can trust. I write SQL validation and reconciliation checks between source and target systems, add data-quality checks and tune Redshift queries for analytical workloads.",
    "I hold the AWS Certified Data Engineer – Associate and Google Cloud Professional Data Engineer certifications, I've co-authored two IEEE conference papers, and I studied Computer Science and Engineering at Dayananda Sagar University (CGPA 9.16 / 10)."
  ],

  facts: [
    { label: "Based in", value: "Bengaluru, India", icon: "pin" },
    { label: "Currently", value: "Data Engineering Intern, Cuedo Analytics", icon: "briefcase" },
    { label: "Focus", value: "ETL / ELT pipelines, data warehousing, cloud data migration", icon: "pipeline" },
    { label: "Languages", value: "English, Hindi, Kannada", icon: "globe" }
  ],

  skills: [
    { group: "Languages", icon: "code", items: ["Python", "SQL", "Java", "JavaScript"] },
    {
      group: "Data engineering",
      icon: "pipeline",
      items: [
        "ETL / ELT pipelines",
        "Data warehousing",
        "Medallion architecture",
        "Data modeling",
        "Validation & reconciliation",
        "Data quality",
        "PySpark",
        "dbt"
      ]
    },
    {
      group: "Cloud",
      icon: "cloud",
      sets: [
        { label: "AWS", items: ["S3", "Glue", "DMS", "Redshift", "Lambda", "Step Functions", "IAM", "CloudWatch", "Bedrock"] },
        { label: "Google Cloud", items: ["BigQuery"] }
      ]
    },
    { group: "Databases", icon: "database", items: ["PostgreSQL", "MySQL", "MongoDB", "DuckDB"] },
    { group: "DevOps & tooling", icon: "tools", items: ["Docker", "Git", "GitHub Actions", "REST APIs"] },
    { group: "ML & BI", icon: "chart", items: ["TensorFlow", "Scikit-learn", "Power BI", "Tableau", "Streamlit"] }
  ],

  experience: [
    {
      role: "Data Engineering Intern",
      company: "Cuedo Analytics",
      location: "Bengaluru, India",
      mode: "On-site internship",
      start: "Feb 2026",
      end: "Present",
      points: [
        "Built production data pipelines in Python and SQL to ingest and transform client datasets into PostgreSQL and Amazon Redshift.",
        "Developed SQL validation and reconciliation checks across source and target systems to verify row counts, totals and data consistency.",
        "Implemented data-quality checks and optimized Redshift queries for analytical workloads.",
        "Executed disaster-recovery test runs on production workflows and documented pipelines for cross-team handoff."
      ],
      highlight: {
        label: "Highlight",
        title: "Cloud Data Migration on AWS",
        period: "Feb – Jun 2026",
        text: "PostgreSQL → Amazon Redshift migration with a full load and continuous CDC through AWS DMS and Amazon S3, plus AWS Glue / PySpark transforms.",
        flow: ["PostgreSQL", "AWS DMS", "Amazon S3", "AWS Glue · PySpark", "Amazon Redshift"]
      }
    }
  ],

  projects: [
    {
      name: "LendLake",
      group: "data",
      featured: true,
      kicker: "Lending analytics lakehouse",
      description:
        "A medallion-architecture lakehouse (Bronze → Silver → Gold) on synthetic loan data, from raw files to a tested, analytics-ready dashboard.",
      stages: [
        { name: "Bronze", note: "Idempotent Python ingestion into DuckDB" },
        { name: "Silver", note: "dbt models + SCD2 snapshot" },
        { name: "Gold", note: "Incremental facts for analytics" }
      ],
      points: [
        "129 dbt data-quality tests guard every layer",
        "Run-date-driven backfills",
        "Streamlit dashboard on the Gold layer",
        "GitHub Actions CI on every change"
      ],
      tags: ["Python", "DuckDB", "dbt", "SQL", "Streamlit", "GitHub Actions"],
      url: "https://github.com/Raja9964/LendLake",
      demo: "https://raja9964.github.io/LendLake/",
      image: { src: "assets/img/projects/lendlake.webp", width: 1200, height: 900, alt: "LendLake Streamlit dashboard with loan KPIs, monthly disbursement and DPD distribution charts" }
    },
    {
      name: "TaskWeave",
      group: "app",
      kicker: "Task dependency manager",
      description:
        "BFS cycle detection that shows the exact loop, recursive status propagation and an interactive React Flow dependency graph.",
      tags: ["Django REST", "React", "TypeScript", "React Flow"],
      url: "https://github.com/Raja9964/TaskWeave",
      demo: "https://raja9964.github.io/TaskWeave/",
      image: { src: "assets/img/projects/taskweave.webp", width: 1200, height: 750, alt: "TaskWeave dependency graph view with task nodes and status colours" }
    },
    {
      name: "SpeakScore",
      group: "app",
      kicker: "Speech scoring engine",
      description:
        "Rubric-driven scoring of spoken self-introductions on content, speech rate, grammar, vocabulary, clarity and engagement, with explainable metrics.",
      tags: ["Python", "Flask"],
      url: "https://github.com/Raja9964/SpeakScore",
      demo: "https://raja9964.github.io/SpeakScore/",
      image: { src: "assets/img/projects/speakscore.webp", width: 1200, height: 750, alt: "SpeakScore result page with an overall score and rubric breakdown" }
    },
    {
      name: "Voyagr",
      group: "app",
      kicker: "Travel reservations",
      description:
        "Trip search and overbooking-safe transactional booking using SELECT … FOR UPDATE row locks.",
      tags: ["React", "TypeScript", "Express", "MySQL"],
      url: "https://github.com/Raja9964/Voyagr",
      demo: "https://raja9964.github.io/Voyagr/",
      image: { src: "assets/img/projects/voyagr.webp", width: 1200, height: 750, alt: "Voyagr home page with trip search and popular routes from Bengaluru" }
    },
    {
      name: "Helping Hands",
      group: "app",
      kicker: "Donation platform",
      description:
        "Trackable donation codes, a privacy-safe public tracking timeline and a live admin dashboard over Server-Sent Events.",
      tags: ["Node.js", "Express", "MongoDB", "SSE"],
      url: "https://github.com/Raja9964/Helping-Hands",
      demo: "https://raja9964.github.io/Helping-Hands/",
      image: { src: "assets/img/projects/helping-hands.webp", width: 1200, height: 750, alt: "Helping Hands landing page" }
    },
    {
      name: "Pagewright",
      group: "app",
      kicker: "Test automation framework",
      description:
        "Playwright + TypeScript with the Page Object Model, typed fixtures, UI and API suites with zod schema checks, and CI reports.",
      tags: ["Playwright", "TypeScript", "zod", "CI"],
      url: "https://github.com/Raja9964/Pagewright",
      demo: "https://raja9964.github.io/Pagewright/",
      demoLabel: "Live test report",
      image: { src: "assets/img/projects/pagewright.webp", width: 1200, height: 750, alt: "Pagewright Playwright HTML test report with passing suites" }
    }
  ],

  publications: [
    {
      title:
        "SeniorConnect: A Voice-Enabled Mobile Platform with Regional Language Support for Elderly Well-Being and Government Scheme Advisory Across India",
      conference:
        "2026 International Conference on Emerging Trends in Mobile Computing and Sustainable Informatics",
      abbr: "ICEMCSI 2026",
      date: "17–18 June 2026",
      city: "Bengaluru",
      summary:
        "A multilingual voice and chatbot platform with regional-language text-to-speech that helps elderly citizens understand and access government welfare schemes.",
      xplore: "https://ieeexplore.ieee.org/document/11602809",
      doi: "10.1109/ICEMCSI67638.2026.11602809"
    },
    {
      title:
        "Multi-Disease Detection Using Hybrid Models and Transfer Learning: Cardiovascular, Pulmonary, Retinal and Renal",
      conference: "2025 9th International Conference on Inventive Systems and Control",
      abbr: "ICISC 2025",
      date: "12–13 August 2025",
      city: "Coimbatore",
      summary: "A hybrid ML/DL framework across clinical, imaging and lab data.",
      results: [
        { label: "Kidney", value: "98.75%", model: "Random Forest" },
        { label: "Pulmonary", value: "91.00%", model: "MobileNetV2" },
        { label: "Cardiovascular", value: "86.41%", model: "Logistic Regression" },
        { label: "Retinopathy", value: "85.54%", model: "Random Forest" }
      ],
      xplore: "https://ieeexplore.ieee.org/document/11188016",
      doi: "10.1109/ICISC65841.2025.11188016"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Data Engineer – Associate",
      code: "DEA-C01",
      issuer: "Amazon Web Services",
      mark: "AWS",
      tone: "aws",
      issued: "Jul 2026",
      expires: "Jul 2029",
      id: "27c0b6d19a93454baca301f46778cbcd"
    },
    {
      name: "Google Cloud Certified Professional Data Engineer",
      issuer: "Google Cloud",
      mark: "GCP",
      tone: "gcp",
      issued: "Mar 2026",
      expires: "Mar 2028",
      id: "9010c0f1ca5f492e82ff143db439860f"
    }
  ],

  achievement: {
    title: "3rd place, DSU Code Red",
    detail: "24-hour hackathon organised by the DSU-ACM Student Chapter",
    date: "22–23 May 2024"
  },

  education: {
    degree: "B.Tech, Computer Science and Engineering",
    school: "Dayananda Sagar University",
    location: "Bengaluru",
    period: "Dec 2022 – Jun 2026",
    grade: "9.16",
    gradeOf: "/ 10 CGPA"
  },

  contact: {
    heading: "Let's build reliable data together.",
    text: "Want to talk about data pipelines, cloud migrations or any of my projects? Email or LinkedIn is the quickest way to reach me."
  }
};

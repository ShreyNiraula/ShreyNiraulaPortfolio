export type ExperienceItem = {
  when: string;
  badge: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    when: "Aug 2024 to Present",
    badge: "Current",
    role: "Data Engineer",
    company: "NASA IMPACT (CSDA Program)",
    location: "Huntsville, AL, USA",
    bullets: [
      "Architected an Agentic Cloud Decision Framework using self-hosted LLMs (Ollama) for tool-augmented reasoning over petabyte-scale storage inventories, with a code-interpreter agent that automates multi-tier storage recommendations between MCP and NGAP and Human-in-the-Loop (HITL) checkpoints for final governance.",
      "Migrated legacy vendor ingestion workflows (Airbus and BlackSky) into a partitioned Airflow pipeline using PySTAC for metadata standardization, ensuring end-to-end reliability through integrated Pytest validation suites for expansion logic and transformations.",
      "Automated the manual MAXAR checksum verification workflow with an Airflow-orchestrated solution that exports metadata from DynamoDB and detects missing checksums via Athena, eliminating 100 percent of manual validation effort.",
      "Migrated legacy Airflow DAGs to modern standards and optimized key workflows, reducing pipeline runtime."
    ],
    stack: [
      "Apache Airflow",
      "AWS (Athena, DynamoDB, S3, Glue)",
      "PySTAC",
      "Metadata mapping",
      "Pytest"
    ]
  },
  {
    when: "May 2022 to Jul 2024",
    badge: "",
    role: "Mid-Level Data Engineer",
    company: "GrowByData Services",
    location: "Lalitpur, Nepal",
    bullets: [
      "Owned end-to-end integration from POC, acquisition and ETL to reporting backend logic for LeadGen and Amazon data sources.",
      "Re-architected and scaled Pinterest, Facebook, TikTok, SEO, Google Ads, Bing Ads, and Shopify ingestion pipelines using multithreading and memory optimization, achieving 2 to 5 times faster acquisition speeds.",
      "Migrated a monolithic Redshift architecture into a lakehouse-based system (S3, Glue Catalog, Dremio), reducing compute cost by over 2 times and eliminating CPU bottlenecks.",
      "Refactored data anonymization logic using Python decorators, cutting demo report development time across 100+ reports from 3 months to 2 weeks.",
      "Integrated Redis caching into the reporting layer, reducing query latency by around 70 percent.",
      "Mentored junior engineers and trained interns in Python, SQL, Spark ETL, dimensional modeling, and lakehouse architecture."
    ],
    stack: [
      "Lakehouse",
      "Datalake",
      "EMR",
      "Glue",
      "Crawler",
      "Redis",
      "Optimization",
      "ETL Orchestration",
      "Dremio"
    ]
  },
  {
    when: "May 2021 to May 2022",
    badge: "",
    role: "Associate Data Engineer",
    company: "GrowByData Services",
    location: "Lalitpur, Nepal",
    bullets: [
      "Built the first production acquisition pipeline for Pinterest Ads with OAuth2 authentication.",
      "Scaled existing Facebook Ads acquisition to handle the throttle-limit issue, ensuring stable acquisition.",
      "Resolved a production issue in ETL pipelines, gaining hands-on experience with star-schema modeling and Slowly Changing Dimension (SCD).",
      "Migrated Talend ETLs into distributed Spark (Scala and SparkSQL), cutting Redshift CPU load by 2 to 3 times and reducing ETL latency by around 3 times."
    ],
    stack: [
      "Data Warehousing",
      "Data Modeling",
      "Talend",
      "PySpark",
      "Scala",
      "SparkSQL",
      "Redshift",
      "Star-Schema Design",
      "OAuth2"
    ]
  }
];

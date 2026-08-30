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
    company: "NASA ODSI (CSDA Program)",
    location: "Huntsville, AL, USA",
    bullets: [
      "Built and evaluated a multi-agent system on a local LLM that converts Amazon S3 inventory reports into auditable, cost-saving storage-migration plans, using verifier-driven retries for numerical accuracy; validated on petabyte-scale CSDA production buckets against a status-quo baseline.",
      "Onboarded a new satellite vendor (Airbus DEM) end-to-end, building its ingestion and PySTAC-based STAC transformation from scratch.",
      "Rebuilt legacy Airbus SAR and BlackSky ingestion into a centralized, partitioned Airflow pipeline, with Pytest suites validating ingestion logic.",
      "Built an Airflow solution to automate the manual MAXAR vendor checksum-verification process, consolidating DynamoDB export and Athena checks into a single DAG."
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
    location: "Kathmandu, Nepal · Hybrid (US-based stakeholders)",
    bullets: [
      "Owned the LeadGen data source end-to-end (POC, acquisition, ETL, and reporting backend).",
      "Re-architected the Facebook Ads pipeline end-to-end (acquisition, ETL, reporting) into a modular, multithreaded design supporting easy extension of pulls and filters.",
      "Migrated the reporting warehouse from Redshift (ra3.4xlarge) to a Dremio lakehouse (S3 + Glue Catalog), decoupling storage and compute to scale compute independently for heavy ad-hoc/aggregation queries.",
      "Refactored demo-report anonymization from existing duplicated query classes into a reusable Python decorator with pandas post-processing, cutting 100+ report development from ~3 months to ~2 weeks.",
      "Sped up acquisition 2–5× across Pinterest, TikTok, Google/Bing Ads, and Shopify via multithreading and memory tuning.",
      "Integrated Redis caching into the reporting layer, cutting query latency ~70%.",
      "Mentored junior engineers and interns across data acquisition, ETL, reporting logic, Spark, and data modeling."
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
    location: "Kathmandu, Nepal · Hybrid (US-based stakeholders)",
    bullets: [
      "Built the first production acquisition pipeline for Pinterest Ads with OAuth2 authentication.",
      "Refactored the Facebook Ads acquisition to handle API throttle limits, stabilizing ingestion.",
      "Migrated Talend ETLs to distributed Spark (Scala + SparkSQL) using star-schema modeling and SCD, reducing Redshift CPU load and ETL latency."
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

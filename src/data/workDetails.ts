export type WorkDetail = {
  slug: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  background: string;
  jobDescriptions: string[];
  summaryTitle?: string;
  summary?: string;
  dissections?: Array<{
    title: string;
    content: string;
    tools?: string;
  }>;
  skillsGained: string;
};

export const workDetails: WorkDetail[] = [
  {
    slug: "growbydata-company",
    role: "Data Engineer",
    company: "GrowByData Services",
    companyUrl: "https://growbydata.com/",
    location: "Lalitpur, Nepal",
    background:
      "Worked as a Data Engineer for around one and a half years with responsibilities across data acquisition, ETL and scalable data services.",
    jobDescriptions: [
      "Working knowledge in big data processing and big data management.",
      "Working knowledge of data lake and lakehouse technologies.",
      "Working knowledge of Python and Scala programming language.",
      "Strong knowledge in writing SQL queries.",
      "Sound working knowledge with databases and servers such as Amazon RDS MySQL and Amazon Redshift.",
      "Experience with Unix and Linux systems and cloud-based infrastructure, especially AWS.",
      "Adequate knowledge on database modeling and optimization.",
      "Familiarity with data warehousing tools and processes.",
      "Sound working knowledge in developing data pipelines and ETL tools.",
      "Experience with data processing tools like Spark and Hadoop.",
      "Experience with building and deploying RESTful APIs.",
      "Knowledge of version control system (Git)."
    ],
    summaryTitle: "Work Dissections",
    summary:
      "Facilitated data acquisition, ETL automation and development of scalable big data solutions including data warehouse and data lake workflows in AWS.",
    dissections: [
      {
        title: "Data Acquisition",
        content:
          "Fetched business data from sources like Google Adwords, Google Analytics and Facebook, then standardized diverse source responses into common tabular formats.",
        tools:
          "Built on a Python-based custom framework using factory design principles with per-source pull modules."
      },
      {
        title: "ETL Pipelining",
        content:
          "Processed standardized datasets through extraction, transformation and loading, including star schema transformation and periodic aggregations before Redshift load.",
        tools: "Implemented ETL pipelines using Spark Scala."
      },
      {
        title: "Scalable Big Data Solutions",
        content:
          "Developed DataLayer APIs that returned SQL-driven data from Redshift and MySQL in JSON for BI applications."
      }
    ],
    skillsGained:
      "Gained practical skills in big data systems, Python, data warehousing, data lakes and Linux operations."
  },
  {
    slug: "kalki-iot",
    role: "Web Developer",
    company: "Kalki I.o.t. Solutions Pvt. Ltd.",
    location: "Lalitpur, Nepal",
    background:
      "Worked remotely part-time as a frontend developer in React while also contributing to backend support and database management.",
    jobDescriptions: [
      "Working knowledge in React.",
      "Sound understanding of state management.",
      "Understanding of state management through Redux.",
      "Familiarity with APIs and knowledge of MVC.",
      "Experience with building and deploying RESTful APIs.",
      "Strong knowledge in writing SQL queries.",
      "Sound working knowledge with RDBMS such as MySQL.",
      "Working experience in Unix and Linux systems.",
      "Adequate knowledge of version control system (Git)."
    ],
    skillsGained:
      "Gained skills in web development, React component design, state management, and practical backend and database collaboration."
  }
];

export type SkillChip = {
  t: string;
  img?: string;
  i?: string;
  gen?: boolean;
  white?: boolean;
};

export type SkillCategory = {
  cat: string;
  name: string;
  sub: string;
  chips: SkillChip[];
};

export const skillCats: SkillCategory[] = [
  {
    cat: "lang",
    name: "Programming Languages",
    sub: "core",
    chips: [
      { img: "/img/skills/python.png", t: "Python" },
      { i: "devicon-scala-plain colored", t: "Scala" },
      { i: "devicon-azuresqldatabase-plain colored", t: "SQL" }
    ]
  },
  {
    cat: "cloud",
    name: "Cloud & Big Data",
    sub: "platforms",
    chips: [
      {
        i: "devicon-amazonwebservices-plain-wordmark colored",
        t: "AWS (EC2, S3, Lambda)"
      },
      {
        i: "devicon-amazonwebservices-plain-wordmark colored",
        t: "Athena · Glue · DynamoDB · EMR · MSK"
      },
      { img: "/img/skills/spark.png", t: "Spark" },
      { i: "devicon-apacheairflow-plain colored", t: "Apache Airflow" }
    ]
  },
  {
    cat: "db",
    name: "Databases & Caching",
    sub: "storage",
    chips: [
      { img: "/img/skills/mysql.png", t: "MySQL" },
      { img: "/img/skills/redshift.png", t: "Redshift" },
      { img: "/img/skills/dremio.png", t: "Dremio" },
      { img: "/img/skills/iceberg.svg", t: "Iceberg", white: true },
      { i: "devicon-postgresql-plain colored", t: "Postgres" },
      { i: "devicon-redis-plain colored", t: "Redis" }
    ]
  },
  {
    cat: "se",
    name: "Software Engineering",
    sub: "craft",
    chips: [
      { img: "/img/skills/flask.png", t: "Flask", white: true },
      { i: "devicon-docker-plain colored", t: "Docker" },
      { i: "devicon-rabbitmq-original colored", t: "RabbitMQ" },
      { img: "/img/skills/git.png", t: "Git" },
      { i: "devicon-terraform-plain colored", t: "Terraform" },
      { img: "/img/skills/rest.png", t: "RESTful APIs", white: true },
      { img: "/img/skills/react.png", t: "React" },
      { img: "/img/skills/ubuntu.png", t: "Linux" },
      { gen: true, t: "CI/CD" },
      { gen: true, t: "OOP" },
      { gen: true, t: "Multithreading" },
      { gen: true, t: "Distributed Systems" }
    ]
  },
  {
    cat: "concepts",
    name: "Data Concepts",
    sub: "foundations",
    chips: [
      { gen: true, t: "Data Lake" },
      { gen: true, t: "Data Warehousing" },
      { gen: true, t: "Data Modeling" },
      { gen: true, t: "SCD" },
      { gen: true, t: "Data Orchestration" },
      { gen: true, t: "Data Governance" },
      { gen: true, t: "ETL / ELT" },
      { gen: true, t: "OLAP" }
    ]
  },
  {
    cat: "ai",
    name: "AI / ML",
    sub: "focus",
    chips: [
      { img: "/img/skills/ollama.png", t: "Ollama", white: true },
      { gen: true, t: "LangGraph" },
      { gen: true, t: "RAG" },
      { gen: true, t: "Prompt Engineering" },
      { gen: true, t: "Vector Databases" }
    ]
  },
  {
    cat: "ds",
    name: "Data Science",
    sub: "analysis",
    chips: [
      { img: "/img/skills/pandas.png", t: "Pandas", white: true },
      { img: "/img/skills/numpy.png", t: "NumPy", white: true },
      { i: "devicon-matplotlib-plain colored", t: "Matplotlib" },
      { gen: true, t: "Statistical Modeling" }
    ]
  }
];

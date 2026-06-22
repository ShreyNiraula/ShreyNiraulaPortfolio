export type Certification = {
  provider: string;
  year: string;
  title: string;
  link?: string;
  courses?: { t: string; link: string }[];
};

export const certifications: Certification[] = [
  {
    provider: "JEES",
    year: "Dec 2023",
    title: "Japanese-Language Proficiency Test (JLPT) N2",
    link: "https://www.jlpt.jp/"
  },
  {
    provider: "Coursera",
    year: "2020",
    title: "Deep Learning Specialization",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PA94WCBRK6UJ",
    courses: [
      {
        t: "Neural Networks and Deep Learning",
        link: "https://www.coursera.org/account/accomplishments/verify/JB7ZHFKK9M2W"
      },
      {
        t: "Improving Deep Neural Networks",
        link: "https://www.coursera.org/account/accomplishments/verify/YNEWS4FZ5VHK"
      },
      {
        t: "Structuring Machine Learning Projects",
        link: "https://www.coursera.org/account/accomplishments/certificate/32ZYFWK4XTYM"
      },
      { t: "Convolutional Neural Networks", link: "" },
      {
        t: "Sequence Models",
        link: "https://www.coursera.org/account/accomplishments/certificate/HWPDZUCMNN9P"
      }
    ]
  },
  {
    provider: "Coursera",
    year: "Aug 2020",
    title: "Front-End Web Development with React",
    link: "https://www.coursera.org/account/accomplishments/certificate/7HN57LZZGHCL"
  },
  {
    provider: "Coursera",
    year: "Aug 2020",
    title: "Server-side Development with NodeJS, Express and MongoDB",
    link: "https://www.coursera.org/account/accomplishments/certificate/TMUX9EQM8QBZ"
  },
  {
    provider: "Coursera",
    year: "Jun 2020",
    title: "SQL for Data Science",
    link: "https://www.coursera.org/account/accomplishments/certificate/DY76D3TNVXT9"
  },
  {
    provider: "Coursera",
    year: "Jan 2020",
    title: "Machine Learning (Andrew Ng)",
    link: "https://www.coursera.org/account/accomplishments/verify/4NC4Z9XCRXZ8"
  },
  {
    provider: "edX",
    year: "Sep 2020",
    title: "Applied Deep Learning Capstone Project (DL0320EN)",
    link: "https://courses.edx.org/certificates/bb49ae64c3d945f49ad143d22399c184"
  }
];

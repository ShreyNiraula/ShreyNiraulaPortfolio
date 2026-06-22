export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  when: string;
  score: string;
  subjects: string[];
  highlight: string;
};

export const education: EducationItem[] = [
  {
    school: "The University of Alabama in Huntsville",
    degree: "Master's in Computer Science, Data Science Concentration",
    location: "Huntsville, AL, USA",
    when: "Aug 2024 to 2026",
    score: "GPA 4.0",
    subjects: [
      "Advanced Database",
      "Data Structures & Algorithms",
      "Big Data Computing",
      "Cloud Computing",
      "Machine Learning"
    ],
    highlight:
      "Thesis: Agentic Cloud Decision Framework, multi-agent local LLM orchestration and tool-augmented reasoning for large-scale NASA cloud storage."
  },
  {
    school: "Tribhuvan University, IOE, Pulchowk Campus",
    degree: "Bachelor's in Electronics and Communication Engineering",
    location: "Lalitpur, Nepal",
    when: "2016 to 2021",
    score: "81.70% (Rank 4th, top 1%)",
    subjects: [
      "Object Oriented Programming",
      "Database",
      "Artificial Intelligence",
      "Data Mining",
      "Linear Algebra",
      "Computer Architecture"
    ],
    highlight:
      "Ncell Excellence Cash Award (2019) for topping the consecutive 3rd and 4th semesters."
  }
];

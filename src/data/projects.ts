export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  year?: string;
  summary: string;
  details: string;
  background?: string;
  abstract?: string;
  links?: Array<{ label: string; href: string }>;
  videoUrl?: string;
  features?: Array<{
    title: string;
    description: string;
    images?: Array<{ src: string; alt: string; title?: string }>;
  }>;
  team?: Array<{
    name: string;
    profileUrl: string;
    avatar: string;
    roleLabel?: string;
  }>;
  previousSlug?: string;
  nextSlug?: string;
  href: string;
  images?: string[];
  repo?: string;
  hidden?: boolean;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "agentic-ai",
    title: "Agentic Cloud Decision Framework",
    subtitle: "Master's Thesis",
    year: "2025",
    summary:
      "Multi-agent local-LLM orchestration with tool-augmented reasoning to recommend storage tiers over petabyte-scale NASA inventories.",
    details:
      "Multi-agent local-LLM orchestration with tool-augmented reasoning to recommend storage tiers over petabyte-scale NASA inventories.",
    background:
      "My Master's thesis at UAH, built on top of my NASA IMPACT data engineering work. It asks whether self-hosted, tool-augmented LLM agents can make reliable, explainable cloud-storage tiering decisions over petabyte-scale Earth-observation inventories.",
    abstract:
      "A graph of cooperating local LLM agents (LangGraph + Ollama) reasons over inventory metadata, access patterns and cost models, calling deterministic tools for retrieval and verification (RAG) before recommending a storage tier. The goal is to cut storage cost while keeping every decision auditable, with no data leaving the environment for a third-party API.",
    href: "/projects/agentic-ai",
    stack: ["LangGraph", "Local LLMs", "RAG", "Ollama", "Python"]
  },
  {
    slug: "major-project",
    title: "Real Time Visual Localization and Mapping of Mobile Robot in Dynamic Environment",
    subtitle: "Final Year Project",
    year: "2020",
    summary: "Final-year project focused on Visual SLAM in dynamic environments.",
    details:
      "Built a mapping and localization workflow where dynamic obstacles are segmented and excluded from stable landmark generation.",
    background:
      "Human brain is extremely powerful that it can map out the entire 3D environment. Our goal was to use a cheap single camera to help a robot localize and navigate in dynamic environments.",
    abstract:
      "This project uses camera as its only sensor to build a 3D map of the room and localize itself in the built map. Dynamic objects were masked and light-invariant feature extraction was applied to handle changing scenes.",
    links: [
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1lvuPHT_39ZQ7KCuALKRqvdw2jXcDsk9Y/view?usp=share_link"
      },
      {
        label: "Poster",
        href: "https://drive.google.com/file/d/1Eo2sRF7BE8US4C0k_DeNbiiNz-j3sdYm/view?usp=share_link"
      },
      {
        label: "Slides",
        href: "https://drive.google.com/file/d/1OfZqfcIp2VZU6zhXoh_O_n8hLJminaei/view?usp=share_link"
      }
    ],
    videoUrl: "https://player.vimeo.com/video/757833955?h=f6b17b597f",
    features: [
      {
        title: "Dynamic obstacle handling",
        description:
          "Segmented dynamic objects from camera input before map updates to reduce drift and improve localization stability."
      },
      {
        title: "Robust mapping in practical environments",
        description:
          "Designed the pipeline to handle low-texture regions and lighting variation while maintaining reliable correspondence estimation."
      }
    ],
    team: [
      {
        name: "Shrey Niraula",
        profileUrl: "https://shreyniraula.com.np/",
        avatar: "/img/teams/shrey.jpg",
        roleLabel: "073BEX443 (Me)"
      }
    ],
    nextSlug: "minor-project",
    href: "/projects/major-project",
    images: [
      "/img/Projects/Major_Project/turtlebot.png",
      "/img/Projects/Major_Project/path_planning.png",
      "/img/Projects/Major_Project/masking.png"
    ],
    repo: "https://github.com/Visual-Localization-and-Navigation",
    stack: ["PyTorch", "Semantic Segmentation", "Visual SLAM"]
  },
  {
    slug: "plf",
    title: "Precision Livestock Farming",
    subtitle: "Winner Project in Locus Event 2019, Under Hardware Thematic Category",
    year: "2019",
    summary: "Data collection and behavior analysis project for poultry automation.",
    details:
      "Combined sensor-centric data collection with analysis workflows to improve farm process automation decisions.",
    background:
      "The project monitors mobility, distribution, feeding behavior and farm environment to estimate broiler welfare and support timely interventions.",
    abstract:
      "Precision Livestock Farming combines camera, microphone and environmental sensors with mobile controls to help maintain healthy poultry habitat and reduce avoidable losses.",
    links: [
      {
        label: "Slides",
        href: "https://drive.google.com/file/d/1bCNJd1cDOT4FlW0E3mG4iSCohMW_Fm-P/view?usp=share_link"
      },
      {
        label: "Poster",
        href: "https://drive.google.com/file/d/1V-6sPTBK7GzKgVpSb_YcSHEA-oUP2EAE/view?usp=share_link"
      }
    ],
    features: [
      {
        title: "Behavior and habitat monitoring",
        description:
          "Tracked feeding, mobility and distribution patterns and correlated them with sensor signals to estimate welfare.",
        images: [
          {
            src: "/img/Projects/PLF/tracking_chicken.gif",
            alt: "Tracking hens to observe distribution",
            title: "Tracking hens to observe distribution"
          }
        ]
      },
      {
        title: "Actionable automation",
        description:
          "Integrated data insights with controllable farm appliances to maintain temperature, humidity and air quality."
      }
    ],
    previousSlug: "covid-worldmap",
    nextSlug: "abu-robocon",
    href: "/projects/plf",
    images: [
      "/img/Projects/PLF/mobile_app_pages.png",
      "/img/Projects/PLF/plf_board_resized.png",
      "/img/Projects/PLF/plf_display_board_resized.png"
    ],
    repo: "https://github.com/AwaleSajil/PrecisionLivestockFarming",
    stack: ["IoT", "Data Analysis", "Automation"]
  },
  {
    slug: "minor-project",
    title: "Vehicle Traffic Management and Analysis",
    year: "2019",
    summary: "Traffic signal simulation and synchronization project.",
    details:
      "Built a simulation-capable web interface for monitoring and coordinating multi-junction traffic control logic.",
    previousSlug: "major-project",
    nextSlug: "covid-worldmap",
    href: "/projects/minor-project",
    images: [
      "/img/Projects/Minor_Project/simulation.png",
      "/img/Projects/Minor_Project/hardware_prototype.png",
      "/img/Projects/Minor_Project/phases.png"
    ],
    repo: "https://github.com/ShreyNiraula/Tragnal",
    stack: ["Flask", "JavaScript", "Simulation"]
  },
  {
    slug: "abu-robocon",
    title: "ABU Robocon 2019 Stage Simulation",
    year: "2019",
    summary: "Computer graphics and simulation-focused team project.",
    details:
      "Modeled and simulated the ABU Robocon stage environment for learning and event-focused demonstration.",
    background: "This project page is being reconstructed from legacy content and will be expanded over time.",
    previousSlug: "plf",
    nextSlug: "blind-eye",
    href: "/projects/abu-robocon",
    stack: ["Simulation", "Computer Graphics"]
  },
  {
    slug: "covid-worldmap",
    hidden: true,
    title: "COVID-19 WorldMap",
    year: "2020",
    summary: "React-based project consuming external pandemic APIs.",
    details:
      "Created an interactive map-style interface to visualize global COVID trends for educational use.",
    background:
      "A sample dashboard hosted on Heroku where users can explore worldwide case, death and recovery counts.",
    abstract:
      "The project was built with React and Redux and uses data from covid19api.com to power global and country-level visualizations.",
    links: [
      { label: "Website", href: "https://covid-19worldmap.herokuapp.com/" },
      { label: "API", href: "https://covid19api.com/" }
    ],
    features: [
      {
        title: "Switchable global metrics",
        description:
          "Users can switch between total cases, total deaths and total recovered views with Top 10 country rankings.",
        images: [
          {
            src: "/img/Projects/Covid19/Japan_death_cases.png",
            alt: "Death-related dashboard view",
            title: "Death-related dashboard view"
          }
        ]
      },
      {
        title: "Country-level drill down",
        description:
          "Clicking a country reveals trend graphs and both today's and cumulative status details.",
        images: [
          {
            src: "/img/Projects/Covid19/country_based_status.png",
            alt: "Country specific status panel",
            title: "Country specific status panel"
          }
        ]
      }
    ],
    team: [
      {
        name: "Shrey Niraula",
        profileUrl: "https://shreyniraula.com.np/",
        avatar: "/img/teams/shrey.jpg",
        roleLabel: "073BEX443 (Me)"
      }
    ],
    previousSlug: "minor-project",
    nextSlug: "plf",
    href: "/projects/covid-worldmap",
    images: [
      "/img/Projects/Covid19/country_based_status.png",
      "/img/Projects/Covid19/japan_covid_total_cases.png",
      "/img/Projects/Covid19/Japan_death_cases.png"
    ],
    stack: ["React", "Redux", "API Integration"]
  },
  {
    slug: "blind-eye",
    hidden: true,
    title: "Blind Eye",
    year: "2018",
    summary: "Hackathon concept for assistive wearable navigation.",
    details:
      "Developed an accessibility-oriented prototype integrating wearable sensor data with voice-guided navigation ideas.",
    background: "This project page is being reconstructed from legacy content and will be expanded over time.",
    previousSlug: "abu-robocon",
    href: "/projects/blind-eye",
    stack: ["Assistive Tech", "Sensors", "Hackathon"]
  }
];
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
      "Multi-agent local LLM orchestration and tool-augmented reasoning to recommend storage tiers over large-scale NASA cloud storage.",
    details:
      "Multi-agent local LLM orchestration and tool-augmented reasoning to provide storage-tier recommendations over large-scale NASA cloud storage.",
    background:
      "My Master's thesis at UAH, built on top of my NASA IMPACT data engineering work. A code-interpreter agent automates multi-tier storage recommendations between MCP and NGAP, with Human-in-the-Loop (HITL) checkpoints for final governance.",
    abstract:
      "A graph of cooperating self-hosted LLM agents (LangGraph and Ollama) reasons over petabyte-scale storage inventories, calling deterministic tools for retrieval and verification (RAG) before recommending a storage tier. The aim is to cut storage cost while keeping every decision auditable and Human-in-the-Loop, with no data leaving the environment for a third-party API.",
    href: "/projects/agentic-ai",
    stack: ["LangGraph", "Ollama", "RAG", "MCP", "Python"]
  },
  {
    slug: "major-project",
    title: "Real Time Visual Localization and Mapping of Mobile Robot in Dynamic Environment",
    subtitle: "Final Year Project",
    year: "2020",
    summary:
      "Visual SLAM project to localize and navigate a mobile robot in a dynamic environment.",
    details:
      "Visual SLAM based project to localize and navigate the mobile robot in a dynamic environment. Fine-tuned a semantic segmentation model (ICNet) to detect humans as dynamic obstacles so the robot does not treat them as valid landmarks while localizing itself.",
    background:
      "Robot localization is the base for path planning and navigation, and for AR and VR. This project uses a single camera as its only sensor to build a 3D map of an entire room and localize the robot within that map, which can then be used for navigation.",
    abstract:
      "Built on OpenVSLAM and ROS, the system extracts ORB features and uses multi-view geometry and graph optimization to map the room and track the robot pose. It tackles three classic visual SLAM problems: dynamic objects (masked out with a fine-tuned ICNet segmentation model so moving people are not used as landmarks), varying lighting (light-invariant feature extraction), and low-texture scenes. Heavy computation runs on a PC over ROS while a differential-drive robot executes the navigation commands.",
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
        title: "Single-camera 3D mapping and localization",
        description:
          "Uses one camera as the only sensor to build a 3D map of a room and localize the robot within it, built on OpenVSLAM with ORB features, multi-view geometry and graph optimization."
      },
      {
        title: "Dynamic obstacle masking with ICNet",
        description:
          "Fine-tuned an ICNet semantic segmentation model on a custom dataset to mask humans as dynamic obstacles so the SLAM pipeline does not treat them as valid landmarks."
      },
      {
        title: "ROS navigation on a differential-drive robot",
        description:
          "Integrated the ROS Navigation Stack with an occupancy grid map and scaled odometry, with heavy computation on a PC over ROS while the robot executes navigation commands."
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
    stack: ["Visual SLAM", "OpenVSLAM", "ROS", "ICNet", "PyTorch", "Semantic Segmentation"]
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
    subtitle: "Semester Project",
    year: "2020",
    summary:
      "Synchronizing traffic lights across three Kathmandu junctions with a control-center style web app.",
    details:
      "Project to synchronize the traffic lights across three junctions of Kathmandu. Developed a web app to simulate the junctions that could communicate with and control them like a central control center.",
    background:
      "The system models three connected junctions of Kathmandu and coordinates their signals to keep traffic flowing, with a simulation that doubles as a live control center.",
    abstract:
      "The web app simulates the three junctions and can communicate with and control them like a control center, combining data collection, simulation and modeling of the junction phases.",
    features: [
      {
        title: "Multi-junction synchronization",
        description:
          "Synchronizes traffic lights across three connected junctions of Kathmandu to coordinate overall flow."
      },
      {
        title: "Control-center web app",
        description:
          "A web app simulates the junctions and can communicate with and control them like a central control center."
      }
    ],
    previousSlug: "major-project",
    nextSlug: "covid-worldmap",
    href: "/projects/minor-project",
    images: [
      "/img/Projects/Minor_Project/simulation.png",
      "/img/Projects/Minor_Project/hardware_prototype.png",
      "/img/Projects/Minor_Project/phases.png"
    ],
    repo: "https://github.com/ShreyNiraula/Tragnal",
    stack: ["Python", "Flask", "JavaScript", "AJAX / jQuery", "Simulation", "Data Modeling"]
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
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
  heroImage?: string;
  cardImage?: string;
  repo?: string;
  hidden?: boolean;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "agentic-ai",
    title: "Self-Hosted Agentic LLM Framework",
    subtitle: "Master's Thesis",
    year: "2026",
    summary:
      "Multi-agentic systems via local LLMs, with typed outputs, deterministic verification, and a self-correction loop, producing auditable results.",
    details:
      "Multi-agentic systems via local LLMs, with typed outputs, deterministic verification, and a self-correction loop, producing auditable results.",
    background:
      "A self-hosted multi-agent framework that runs entirely on local LLMs. Agents reason over large data inventories and call deterministic tools for retrieval and verification. When a result fails a check, a bounded self-correction loop feeds the failure back and retries. Every output is typed and fully auditable. No data leaves the environment for a third-party API.",
    abstract:
      "Built on Pydantic AI, the system coordinates several local LLM agents through a typed pipeline. Each agent shares a typed dependency context, emits Pydantic-validated structured output, and calls deterministic Python tools, so the model proposes and code verifies every result. The design targets auditability and governance: each step is traceable, and the final output is auditable for human review. I built it to test how far self-hosted models can drive a real, end-to-end agentic workflow without a cloud API, and benchmarked several local model families on the same task.",
    features: [
      {
        title: "Self-hosted multi-agent orchestration",
        description:
          "Coordinates multiple local LLMs (via Ollama) through a typed Pydantic AI pipeline, with no hosted API and no data leaving the environment."
      },
      {
        title: "Typed outputs with deterministic verification",
        description:
          "Every agent returns Pydantic-validated structured data, and deterministic Python checks audit each claim. The LLM labels, the code audits."
      },
      {
        title: "Bounded self-correction loop",
        description:
          "When an output fails a check, the verifier feedback is fed back to the agent and the step retries, so results converge to ones that pass. Every final recommendation stays traceable for human review."
      }
    ],
    href: "/projects/agentic-ai",
    cardImage: "/img/Projects/Agentic_AI/agentic_ai.png",
    stack: ["Pydantic AI", "Ollama", "Multi-Agent", "Text-to-SQL", "Python"]
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
    summary:
      "A data-collection and analysis system that monitors broiler chickens to estimate welfare and automate their habitat.",
    details:
      "Precision Livestock Farming (PLF) uses advanced technologies to monitor and understand animal behavior and optimize their contribution to the livestock. The prototype monitors broiler chickens using a camera, microphone, and environmental sensors to examine feeding, mobility and distribution, correlated to the well-being and health of the broiler variety.",
    background:
      "Broiler poultry welfare is hard to track at scale. PLF monitors mobility, distribution, feeding behavior and the farm environment to estimate welfare and support timely interventions.",
    abstract:
      "The project presents a novel method that monitors mobility and distribution (using camera images processed with a trained YOLO and SORT algorithm) and feeding behavior (using sound analysis) to estimate the welfare of the fowls, while providing a suitable habitat for growth with environmental sensors and AC appliances. A user-friendly mobile app monitors poultry-farm status, notifies the farmer in critical situations, and controls hardware appliances such as heaters, lights and humidifiers.",
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
        title: "Behavior monitoring with YOLO and SORT",
        description:
          "Monitors mobility and distribution using camera images processed with a trained YOLO and SORT algorithm, and feeding behavior using sound analysis, to estimate fowl welfare.",
        images: [
          {
            src: "/img/Projects/PLF/tracking_chicken.gif",
            alt: "Tracking hens to observe distribution",
            title: "Tracking hens to observe distribution"
          }
        ]
      },
      {
        title: "Automated habitat and mobile control",
        description:
          "Environmental sensors and AC appliances maintain a suitable habitat, while a mobile app lets the farmer monitor status and control heaters, lights and humidifiers, with alerts in critical situations."
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
    stack: ["YOLO", "SORT", "Sound Analysis", "IoT", "Mobile App", "Automation"]
  },
  {
    slug: "minor-project",
    title: "Vehicle Traffic Management and Analysis",
    subtitle: "Semester Project",
    year: "2019",
    summary:
      "An intelligent traffic system for Kathmandu Valley that detects flow, analyzes data, and optimizes signal timing across major intersections.",
    details:
      "The project addresses traffic jams in Kathmandu Valley, particularly at major intersections like Koteshwor, Jadibuti and Lokanthali, where fixed-timing traffic lights cause delays, deadlocks and higher fuel consumption. The goal was an intelligent system that detects traffic flow, analyzes data, and optimizes traffic light sequences for efficient management.",
    background:
      "Fixed-timing traffic lights at busy Kathmandu Valley intersections (Koteshwor, Jadibuti, Lokanthali) cause delays, deadlocks and higher fuel consumption. This project set out to detect traffic flow, analyze it, and optimize signal timing.",
    abstract:
      "The system was built across six phases: data collection, modeling, data analysis and prediction, hardware design and fabrication, app development, and testing and optimization. The insights aim to improve traffic management and reduce congestion in Kathmandu Valley.",
    features: [
      {
        title: "Data collection",
        description:
          "Videos of traffic flow at the junctions were captured and processed to determine vehicle density and stoppage times."
      },
      {
        title: "Web app control panel",
        description:
          "The web application serves as a traffic control panel for monitoring simulations and live streams, and managing traffic phases during emergencies."
      },
      {
        title: "Optimization and testing",
        description:
          "Traffic flow data and optimized timing sequences were tested using the PTV Vissim simulation software."
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
    stack: ["Python", "Flask", "JavaScript", "AJAX / jQuery", "PTV Vissim", "Data Collection", "Simulation", "Data Modeling"]
  },
  {
    slug: "abu-robocon",
    title: "ABU Robocon 2019 Simulator",
    year: "2019",
    summary:
      "A graphics project that simulates ABU Robocon 2019 robots and the arena to find the best robot configuration for the competition.",
    details:
      "A graphics project to simulate the ABU Robocon 2019 robots and stage, used to experiment with and build the best robot configuration for the competition. Focused on camera calibration, lighting effects and model rendering.",
    background:
      "Built to simulate the ABU Robocon 2019 robots and arena so the team could test and choose the best robot configuration before the competition.",
    previousSlug: "plf",
    nextSlug: "blind-eye",
    href: "/projects/abu-robocon",
    stack: ["C++", "OpenGL", "Camera Calibration", "Lighting Effects", "Model Rendering"]
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
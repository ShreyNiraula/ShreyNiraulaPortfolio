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
    subtitle: "Final Year Project, IOE Pulchowk (team of 4)",
    year: "2020-2021",
    summary:
      "Single-camera SLAM for a mobile robot that masks out moving people with a CPU-speed segmentation model, cutting trajectory error on TUM's dynamic benchmark from 23.7 cm to 1.8 cm.",
    details:
      "Visual SLAM project to map a room and localize and navigate a mobile robot using one camera, in a scene with people moving. An ICNet segmentation model fine-tuned on our own walking dataset masks out people so their features are not used as landmarks.",
    background:
      "Feature-based visual SLAM assumes the scene does not move. A person walking past adds features that move between frames, which corrupts both the map and the robot's estimated position. DynaSLAM handles this with Mask R-CNN, but that is too slow without a GPU. This project asks whether a real-time semantic segmentation model can do the same job on a laptop CPU.",
    abstract:
      "Built with Nischal Maharjan, Rashik Shrestha and Sajil Awale (supervisor: Jitendra Kumar Manandhar). A Raspberry Pi on a rebuilt TurtleBot streams webcam frames over Wi-Fi to a PC running ROS. On the PC, ICNet produces a person mask for each frame, and custom ROS nodes pair each frame with its mask and pass both to OpenVSLAM. OpenVSLAM drops ORB features inside the mask before tracking and mapping, and its pose replaces wheel odometry for the ROS navigation stack. The 3D map is projected to a 2D occupancy grid and scaled from measured room dimensions, since a single camera has no metric scale. move_base then plans paths, which an Arduino executes as wheel speeds.",
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
        title: "Masking people out of SLAM",
        description:
          "Custom ROS nodes use a message_filters time synchronizer to pair each camera frame with its person mask, feed both into OpenVSLAM, and publish the resulting pose as /odom and TF. On the TUM dynamic benchmark, masking cut trajectory RMS error from 23.7 cm to 1.8 cm (walking_xyz) and from 51.5 cm to 4.0 cm (walking_rpy).",
        images: [
          {
            src: "/img/Projects/Major_Project/masking.png",
            alt: "ORB keypoints before masking, the person mask, and keypoints after masking",
            title: "Keypoints before masking, mask, keypoints after masking"
          }
        ]
      },
      {
        title: "Real-time segmentation on a CPU",
        description:
          "Compared ICNet, BiSeNet, DeepLabV3+ and UNet for speed and accuracy on a laptop CPU (Intel i5-8250U, no GPU). ICNet was the only model fast enough for real time. Fine-tuned with a frozen backbone (400K of 11.4M parameters trainable), it reached 83.3% mIoU at 24 FPS on our validation set.",
        images: [
          {
            src: "/img/Projects/Major_Project/comparison.png",
            alt: "Speed and mIoU comparison of segmentation models",
            title: "Speed vs mIoU of segmentation models"
          }
        ]
      },
      {
        title: "My role: research and the training dataset",
        description:
          "Tried Mask R-CNN / DynaSLAM for handling moving people, found it too slow on a CPU, and helped move to real-time semantic segmentation. Built the dataset for fine-tuning ICNet: filmed people walking from the robot's camera height (focused on legs) in several places and lighting conditions, and auto-labeled the frames with Detectron2 Mask R-CNN converted to binary person masks (1,435 training and 1,350 validation images). This raised accuracy on our validation set from 80.1% to 83.3% mIoU. Also studied OpenVSLAM's tracking and threading code with the team.",
        images: [
          {
            src: "/img/Projects/Major_Project/dataset.png",
            alt: "Frames from the custom walking dataset",
            title: "Custom walking dataset"
          }
        ]
      },
      {
        title: "Robot and navigation",
        description:
          "A rebuilt TurtleBot with a Raspberry Pi (camera and serial bridge) and an Arduino (motor control using the differential-drive equations). All heavy computation ran on the PC: segmentation, SLAM, map_server and move_base with A* planning.",
        images: [
          {
            src: "/img/Projects/Major_Project/path_planning.png",
            alt: "Path planning on the occupancy grid map",
            title: "Path planning in the pre-built map"
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
      },
      { name: "Nischal Maharjan", profileUrl: "", avatar: "", roleLabel: "073BEX421" },
      { name: "Rashik Shrestha", profileUrl: "https://github.com/rashikshrestha", avatar: "", roleLabel: "073BEX432" },
      { name: "Sajil Awale", profileUrl: "https://github.com/AwaleSajil", avatar: "", roleLabel: "073BEX436" }
    ],
    nextSlug: "minor-project",
    href: "/projects/major-project",
    images: [
      "/img/Projects/Major_Project/turtlebot.png",
      "/img/Projects/Major_Project/path_planning.png",
      "/img/Projects/Major_Project/masking.png"
    ],
    repo: "https://github.com/ShreyNiraula/dynamic-visual-slam",
    stack: ["Visual SLAM", "OpenVSLAM", "ROS", "C++", "PyTorch", "ICNet", "Detectron2", "OpenCV", "Raspberry Pi", "Arduino"]
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
    subtitle: "Computer Graphics Project, IOE Pulchowk",
    year: "2019",
    summary:
      "Real-time 3D simulation of the ABU Robocon 2019 arena and robots, with a playable match and time trial built on the official rules.",
    details:
      "A 3D simulation of the ABU Robocon 2019 \"Great Urtuu\" contest, rendered with OpenGL. The robots follow the white guidelines from the rulebook, and you can drive MR1 yourself.",
    background:
      "In ABU Robocon 2019, a wheeled robot (MR1) carries the Gerege through a forest of poles and hands it to a four-legged robot (MR2), which crosses a sand dune and a tussock and climbs a mountain. The first MR2 to reach the top wins.",
    abstract:
      "Written in Python with moderngl, GLFW and PyGLM, using Blender models of the arena and robots. Robot routes are the white guidelines measured from the floor texture, and MR2's height follows the sand dune and mountain. The simulation is independent of frame rate and covered by 124 unit tests.",
    features: [
      {
        title: "Arena and robots in 3D",
        description:
          "The full field and both teams' robots, loaded from OBJ/MTL and shaded with Blinn-Phong lighting.",
        images: [
          { src: "/img/Projects/ABU_Robocon/cover.png", alt: "The ABU Robocon 2019 arena mid-match", title: "The arena mid-match" }
        ]
      },
      {
        title: "Routes from the rulebook",
        description:
          "MR1 follows the white guideline through the forest like a line follower, and MR2 crosses the sand dune and tussock and climbs the mountain.",
        images: [
          { src: "/img/Projects/ABU_Robocon/walls-and-routes.png", alt: "Top view with robot routes", title: "Robot routes (yellow MR1, cyan MR2)" },
          { src: "/img/Projects/ABU_Robocon/mr2-mountain.png", alt: "MR2 climbing the mountain", title: "MR2 climbing the mountain" }
        ]
      },
      {
        title: "Playable match and time trial",
        description:
          "Drive MR1 and hand over to an automatic MR2 in a race against a line-following team, or race a line-follower ghost with split times and a run log.",
        images: [
          { src: "/img/Projects/ABU_Robocon/help-panel.png", alt: "Match view with the sidebar", title: "Match" },
          { src: "/img/Projects/ABU_Robocon/time-trial.png", alt: "Time trial with checkpoints", title: "Time trial" }
        ]
      }
    ],
    previousSlug: "plf",
    nextSlug: "blind-eye",
    href: "/projects/abu-robocon",
    cardImage: "/img/Projects/ABU_Robocon/cover.png",
    images: [
      "/img/Projects/ABU_Robocon/cover.png",
      "/img/Projects/ABU_Robocon/help-panel.png",
      "/img/Projects/ABU_Robocon/mr2-mountain.png"
    ],
    repo: "https://github.com/ShreyNiraula/robocon-2019-arena",
    stack: ["Python", "OpenGL", "GLSL", "Blender", "Simulation"]
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
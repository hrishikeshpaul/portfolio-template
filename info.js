let info = {
  name: "Mohamad Al Mdfaa",
  logo_name: "ML Eng",
  flat_picture: require("./src/assets/portrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Experienced Machine Learning Engineer and a Ph.D. candidate specializing in Computer Vision and Visual SLAM. With a strong background in Python, C++, cloud services, and building end-to-end ML systems. Over the course of my career, I have developed a proven track record of working effectively with teams to deliver innovative and impactful projects. I am skilled at building strong relationships with stakeholders and ensuring that my work meets their needs. I am also passionate about using machine learning to solve real-world problems.",
  links: {
    linkedin: "http://www.linkedin.com/in/mohamad-al-mdfaa",
    github: "https://github.com/mhd-medfa",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Skoltech University",
      date: "2022 – Present",
      degree: "Ph.D. in Computer Vision and Visual SLAM",
      description:
        "Currently pursuing my Ph.D. in Mathematical Modeling, Numerical Methods and Software, while specializing in the field of Computer Vision and Visual SLAM.",
      skills: [
        "Artificial Intelligence",
        "Computer Vision",
        "Multimodal Deep Learning",
        "Perception",
        "Visual SLAM",
        "VLM (Vision-Language Models)"
      ]
    },
    {
      name: "Innopolis University",
      date: "2020 – 2022",
      degree: "Master’s degree in Robotics & Computer Vision",
      gpa: "4.83/5",
      description:
        "Graduated with honor.",
      skills: [
        "AI",
        "Robotics",
        "Computer Vision",
        "Natural Language Processing",
        "Software Engineering"
      ]
    },
    {
      name: "Damascus University",
      date: "2012 – 2017",
      degree: "Bachelor’s degree in Computer & Automation Engineering",
      skills: [
        "Computer Engineering",
        "Neural Networks",
        "Pattern Recognition",
        "Control Theory",
        "Electrical Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Tradinos",
      place: "Berlin, Germany",
      date: "Oct, 2023 - Present",
      position: "AI consultant",
      skills: ["LLM", "RAG (Retreival Augmented Generation)", "Deep Learning", "Machine Learning", "Python", "Vector DB"]
    },
    {
      name: "Mobile Robotics Lab @ Skoltech",
      date: "Dec, 2022 - Present",
      position: "Deep learning research intern",
      description:
        "Contributing to Visual SLAM projects, utilizing techniques such as VLM, Panoptic Segmentation, Keypoint Extraction, Image Retrieval, and IMU Integration.",
      skills: ["Perception", "Computer Vision", "Deep Learning", "ROS", "Python", "C++", "Docker"]
    },
    {
      name: "Innopolis University",
      date: "Jan, 2022 - Dec, 2022",
      position: "Teaching assistant",
      description:
        "Assisted in delivering Reinforcement Learning, Software System Analysis and Design, Software Project and Agile Development courses for graduate and undergraduate students.",
      skills: ["Reinforcement Learning", "Software Design", "Software Engineering", "Python", "C++"]
    },
    {
      name: "WeStart",
      place: "Berkeley, USA",
      date: "Nov, 2021 - Jan, 2022",
      position: "AI engineer (Contract)",
      description:
        "Utilized Artificial Intelligence and Deep Learning expertise to support company projects. Worked on RSS-Feed Classification, using BART-based models for summarization and classification, deployed on AWS. Established Reinforcement Learning and A/B testing pipeline for recommender system's profile matching.",
      skills: ["NLP", "Deep Learning", "Reinforcement Learning", "Python", "AWS"]
    },
    {
      name: "BeeOrder",
      date: "Feb, 2021 - Jan, 2022",
      position: "Lead AI engineer",
      description:
        "Led the design and implementation of an AI system, optimizing dispatch operations by accurately estimating delivery times from restaurants. Engineered algorithms to match optimal drivers with client orders, while enhancing restaurant sorting based on performance. Additionally, maintained and improved the Auto Dispatcher System for route optimization, significantly enhancing delivery efficiency.",
      skills: ["AI", "MySQL", "Redis","Python", "Scrum"]
    },
    {
      name: "L-One Systems GmbH",
      place: "Darmstadt, Germany",
      date: "April, 2019 - Aug, 2020",
      position: "ML engineer",
      description:
        "Created a pipeline using encoder-decoder and multi-scale CNN to convert RGB images into Hyperspectral ones for Plant Nutrient Detection (PND). Designed an image analysis system utilizing CNNs and classical machine learning models like SVM, Random Forest, and Gradient Boosting to accurately identify and quantify plant nutrient status. Improved Field Boundary Detection by implementing instance segmentation and image processing techniques for enhanced model performance. Successfully deployed the system in production using AWS infrastructure and managed satellite data processing.",
      skills: ["Machin Learning", "Deep Learning", "Computer Vision","Research", "Python", "AWS"]
    },
    {
      name: "JoyBox",
      date: "April, 2019 - Aug, 2020",
      position: "AI developer",
      description:
        "Contributed to an AI virtual assistant for the visually impaired, utilizing speech-to-text and computer vision APIs to streamline daily routines. Contributed to an internal Motion Capture project for Cartoon production.",
      skills: ["Python", "C#", "Swift", "Unity", "Kinect"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "C++",
        "SQL",
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Pytorch",
        "Numpy",
        "Pandas",
        "OpenCV",
        "Sklearn",
        "Pillow",
        "Open3D"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Flask", "FastAPI"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MySQL", "PostgreSQL", "Redis", "Weaviate"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Linux",
        "MacOS",
        "Windows",
        "Agile",
        "Scrum",
        "AWS (SageMaker, Lambda, EC2, S3, Fargate, AppRunner)"
      ],
      icon: "fas fa-tools"
    },
  ],
  portfolio: [
    {
      name: "3D-SiamMask (Publication)",
      pictures: [
        {
          img: require("./src/assets/portfolio/3dsiammask/3d-siammask-000.jpeg")
        },
        {
          img: require("./src/assets/portfolio/3dsiammask/3d-siammask-001.png")
        },
        {
          img: require("./src/assets/portfolio/3dsiammask/3d-siammask-002.png")
        },
        {
          img: require("./src/assets/portfolio/3dsiammask/3d-siammask-003.png")
        },
      ],
      technologies: ["Visual Object Tracking", "Deep Learning", "Camera Calibration", "Epipolar Geometry",
      "ROS", "Python", "C++", "PyTorch", "OpenCV", "Docker", "Linux","NVidia Jetson Hardware", "TensorRT"],
      category: "Research",
      date: "October, 2021 - July, 2022",
      github:
        "https://github.com/mhd-medfa/Single-Object-Tracker",
      visit: "https://sites.google.com/view/3d-siammask",
      description:
        "3D-SiamMask: Vision-based tracking system for multi-rotor aerial vehicles that could follow a moving object in real-time. The project involved the use of various technologies, including Visual Object Tracking, Deep Learning, Camera Calibration, and Epipolar Geometry, as well as software and hardware tools such as ROS, Python, C++, PyTorch, OpenCV, Docker, Linux, NVidia Jetson Hardware, and TensorRT. The results of this project were published in a Q1 journal, and my contribution to the research and development process was significant. This project was completed as part of my Master's degree program and involved extensive research and development work."
    },
    {
      name: "RETA (Restaurant ETA)",
      pictures: [
        {
          img: require("./src/assets/portfolio/reta/reta-beeorder.png")
        },
        

      ],
      technologies: ["Clustering",
      "Python",
      "Redis",
      "MariaDB",
      "OSRM",
      "Flask",
      "Data Analysis",
      "Real-time Machine Learning"],
      category: "Production",
      date: "Feb, 2021 - May, 2021",
      visit: "https://beeorder.com/",
      description:
        "Geo-based unsupervised learning approach to estimate delivery time across the platform's outlets: As an AI Engineer at BeeOrder, I worked on the Restaurant ETA (RETA) service, where I developed a geo-based unsupervised learning approach to estimate delivery time across the platform's outlets. This project required the use of various technologies, including Clustering, Python, Redis, MariaDB, OSRM, Flask, and others. The goal of the project was to improve the accuracy and efficiency of the delivery time estimation process, which would ultimately benefit both the restaurants and their customers. In order to achieve this goal, I implemented advanced machine learning techniques and optimized the system for real-time performance. The successful completion of this project helped to drive the growth and success of the company."
    },
    {
      name: "ANA",
      pictures: [
        {
          img: require("./src/assets/portfolio/ana/ana-spacenus.png")
        },
        {
          img: require("./src/assets/portfolio/ana/ana.jpg")
        }
      ],
      technologies: [
        "Machin Learning", "Deep Learning", "Computer Vision","Research", "Python", "AWS"
      ],
      category: "Production &  Research",
      date: "June, 2019 - Aug, 2020",
      visit: "https://www.ana.farm/",
      description:
        "Agricultural Nutrient Assistant (ANA) and Plant Nutrient Detection (PND): I was part of the team responsible for the development and maintenance of the Agricultural Nutrient Assistant (ANA) project, focusing on refining and managing the mathematical and machine learning models integral to its functionality. My key contribution involved crafting the Plant Nutrient Detection (PND) tool, utilizing cutting-edge image analysis and machine learning techniques. This tool accurately identifies and measures plant nutrient levels from images captured via a mobile phone camera. To enable the seamless deployment of ANA APIs (ana.farm), I leveraged Flask, Docker, and an AWS stack encompassing EC2, Fargate, Lambda, and S3. This implementation led to remarkable cost efficiency, reducing expenses by over 90%. My tech toolkit encompassed Python, Tensorflow, OpenCV, Numpy, Flask, AWS, and Docker."
    },
    {
      name: "Neural Indoor Localization",
      pictures: [
        {
          img: require("./src/assets/portfolio/navigine-inddor-localization/nvgn-002.png")
        },
        {
          img: require("./src/assets/portfolio/navigine-inddor-localization/nvgn.jpg")
        },
        {
          img: require("./src/assets/portfolio/navigine-inddor-localization/gyro-integration.png")
        }
      ],
      technologies: ["Image Retrieval", "Keypoint Extraction", "Gyroscope Integration", "Visual SLAM", "Python", "Open3D", "Docker"],
      category: "Research",
      date: "Dec, 2022 - April, 2022",
      visit: "https://sites.skoltech.ru/mobilerobotics/",
      description:
        "Contributed to Neural Visual Localization by utilizing techniques such as Visual SLAM, Keypoint Extraction, Image Retrieval, and IMU Integration."
    },
    {
      name: "Field-Boundary",
      pictures: [
        {
          img: require("./src/assets/portfolio/field-boundary/Field-boundary-logo.png")
        },
        {
          img: require("./src/assets/portfolio/field-boundary/Fields-all-shapes-and-forms.png")
        },
        {
          img: require("./src/assets/portfolio/field-boundary/Field-Boundary-App-01.png")
        },
        {
          img: require("./src/assets/portfolio/field-boundary/Detetected-field-boundaries.png")
        }
      ],
      technologies: ["Python", "OpenCV", "Albumentation", "Numpy", "Scipy", "Scikit-image", "GDAL", "rasterio", "AWS Lambda"],
      category: "Production",
      date: "April, 2019 - May , 2019",
      visit: "https://www.field-boundary.com/",
      description:
        "Improved the Field Boundary API by using image processing and data augmentation techniques, making the Field Boundary model more accurate."
    },
    {
      name: "Crowd-Copter",
      pictures: [
        {
          img: require("./src/assets/portfolio/crowd-copter/Crowd Management.png")
        },
        {
          img: require("./src/assets/portfolio/crowd-copter/Flowchart.jpeg")
        },
        {
          img: require("./src/assets/portfolio/crowd-copter/overview.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/mhd-medfa/Crowd-Copter",
      date: "Oct, 2016 - May, 2017",
      visit: "https://github.com/mhd-medfa/Crowd-Copter",
      description:
        'Implemented unsupervised learning and computer vision approach for crowd movement analysis.'
    },
  ],
  
  recommendations: [
    {
      title:
        "Mohamad is a great AI Engineer, although we had a very challenging project at BeeOrder, he still was able to overcome all obstacles and took the project to live environment. Later he anticipated in creating new AI functionality that optimized our work and saved us a lot of resources and time . Muhammad always make sure that the work he applied have a high positive impact and ROI, this is how he prioritizes his tasks that why I always loved working with him directly. A fast learner and a good coach for other Junior Engineers.",
      author: "Abdel Malek Al-Mouzayen",
      position: "Co-Founder & Vice President",
      company: "BeeOrder",
    },
    {
      title:
      `I can strongly recommend Mohamad – I would absolutely take him as a strong and reliable
      early career scientist in Machine Learning or NLP. He goes above and beyond in research,
      engagement, and project management. He is a highly-motivated individual with excellent
      communication skills, and strongly technically capable.
      Mohamad’s written English needs no editing and his conversation skills in English are also
      clearly of professional grade (I am a native speaker). He integrates in groups well and
      positively. Mr. al Mdfaa is ambitious and motivated, and already assembling creative
      approaches to research problems, and accompanying them with meaningful and rigorous
      analyses.
      I highly recommend Mohamad – he is a strong researcher and will benefit any group.`,
      author: "Dr. Leon R.A Strømberg-Derczynski",
      position: "Associate Professor",
      company: "IT University of Copenhagen",
      location: "Copenhagen, Denmark"
    },
    {
      title:
      'Mohamad and I worked for the same brand "L-One". Mohammad worked as a Machine Learning Engineer. He demonstrated very good research skills, analytical skills, and solid experience in ML and Python programming. In addition to this, Mohamad is very decent and committed. I highly recommend working with him.',
      author: "Feras Tanan",
      position: "Head of Software Development",
      company: "L-One Systems GmbH",
      location: "Darmstadt, Germany"
    },

  ]
};

export default info;

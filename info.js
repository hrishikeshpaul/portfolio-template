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
      name: "Vision-based Multi-rotor Aerial Vehicles Tracking for a Moving Object (Publication)",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
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
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
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
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;

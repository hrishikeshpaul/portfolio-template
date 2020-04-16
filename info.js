let info = {
    name: "Hrishikesh Paul",
    logo_name: "paul",
    flat_picture: require('./src/assets/potrait.svg'),
    description: 'I\'m Hrishikesh Paul, a technology enthusiast currently pursuing my Master\'s in Computer Science at Indiana University Bloomington. Majority of my work consists of web and software development, but lately I have been spending time in the field of Artificial Intelligence and Computer Vision. While being away form my work desk, I love being outdoors playing soccer. Music production, cooking, videography and photography are some of my favourite hobbies!',
    links: {
        linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
        github: "https://github.com/hrishikeshpaul",
        angellist: "https://angel.co/u/hrishikesh-paul",
        resume: "https://drive.google.com/file/d/1EoRMTOOdKzXYsab2dLbCvvikoL1Aoq0U/view?usp=sharing"
    },
    education: [
        {
            name: 'Indiana University Bloomington',
            place: 'USA',
            date: 'Aug, 2019 - May, 2021',
            degree: 'Masters in Computer Science',
            gpa: '3.7/4.0',
            description: 'Currently pursuing my Master\'s in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.',
            skills: ['Artificial Intelligence', 'Software Engineering', 'Computer Vision', 'Music Data Mining']
        },
        {
            name: 'Manipal Institute of Technology',
            place: 'India',
            date: 'Aug, 2015 - July, 2019',
            degree: 'Bachelors in Computer and Communication',
            gpa: '8.0/10.0',
            description: 'Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.',
            skills: ['AI', 'Neural Netwroks', 'Data Mining', 'Computer Vision', 'Pattern Recognition', 'HCI', 'Software Engineering']
        },

    ],
    experience: [
        {
            name: 'Skylark Drones',
            place: 'Bangalore, India',
            date: 'Jan, 2019 - Jun, 2021',
            position: 'Full Stack Web Developer',
            description: 'Worked as a full stack web developer, implementing various features and fixing bugs for Skylark Drones’ central management system called Operations Portal and Data Mining Server.',
            skills: ['MongoDB', 'Flask', 'VueJS', 'NGINX']
        },
        {
            name: 'Hridayam Soft Solutions',
            place: 'Mumbai, India',
            date: 'May, 2018 - Jun, 2018',
            position: 'Computer Vision Engineer',
            description: 'Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.',
            skills: ['Python', 'OpenCV', 'PyTesseract', 'AngularJS', 'NodeJS']
        },
        {
            name: 'Elementail Labs',
            place: 'Mumbai, India',
            date: 'May, 2017 - July, 2017',
            position: 'Full Stack Web Developer',
            description: 'Implemented various contracts and deployed them on the upcoming blockchain technology - Ethereum, while also working as a MEAN stack web developer for Elemential Labs’ website.',
            skills: ['MongoDB', 'AngularJS', 'NodeJS', 'ExpressJS']
        },
        {
            name: 'Viteos Capital Market Services s',
            place: 'Mumbai, India',
            date: 'May, 2016 - July, 2016',
            position: 'Software Developer',
            description: 'Evaluated technologies, and building proof of concept/prototype solutions for trade processing and mathematical model based evaluations, while working in the software development team.',
            skills: ['C#', 'C++', 'Visual Studio']
        },

    ],
    skills: [
        {
            title: 'languages',
            info: ['Python', 'Java', 'Javascript', 'C', 'C++', 'SQL', 'NoSQL', 'Ruby'],
            icon: 'fa fa-code'
        },
        {
            title: 'data frameworks',
            info: ['Keras', 'Numpy', 'Pandas', 'OpenCV', 'SciPy', 'Sklearn', 'LibROSA', 'Pillow'],
            icon: 'fa fa-cubes'
        },
        {
            title: 'web technologies',
            info: ['Vue', 'React', 'Angular', 'Node', 'Flask', 'HTML', 'CSS'],
            icon: 'fas fa-laptop-code'
        },
        {
            title: 'databases',
            info: ['MongoDB', 'MySQL', 'OracleSQL', 'Neo4j'],
            icon: 'fa fa-database'
        },
        {
            title: 'Operating systems',
            info: ['MacOS', 'Ubuntu', 'Windows', 'Android'],
            icon: 'fa fa-laptop'
        },
        {
            title: 'tools',
            info: ['Agile', 'Scrum', 'JIRA', 'Heroku', 'Firebase', 'AWS S3'],
            icon: 'fas fa-tools'
        }
    ]
}

export default info;
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
            title: 'operating systems',
            info: ['MacOS', 'Ubuntu', 'Windows', 'Android'],
            icon: 'fa fa-laptop'
        },
        {
            title: 'tools',
            info: ['Agile', 'Scrum', 'JIRA', 'Heroku', 'Firebase', 'AWS S3'],
            icon: 'fas fa-tools'
        }
    ],
    portfolio: [
        {
            name: 'NoQ Job Portal',
            pictures: [
                require('./src/assets/portfolio/noq/logo.png'),
                require('./src/assets/portfolio/noq/one.png'),
                require('./src/assets/portfolio/noq/two.png'),
                require('./src/assets/portfolio/noq/three.png'),
                require('./src/assets/portfolio/noq/four.png'),
            ],
            technologies: ['Node', 'Vue', 'Express', 'MongoDB', 'Heroku'],
            category: 'Website',
            date: 'Sep, 2019 - Dev, 2019',
            visit: 'https://noq-client.herokuapp.com/',
            description: 'No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system.'
        },
        {
            name: 'Suicide Analyzer',
            pictures: [
                require('./src/assets/portfolio/suicide/suicide-analyzer.png'),
                require('./src/assets/portfolio/suicide/suicide2-original.png')
            ],
            technologies: ['Node', 'Angular', 'Express', 'Leaflet', 'Pandas'],
            category: 'Website',
            date: 'Oct, 2018 - Nov, 2018',
            visit: 'https://skylarktiral.herokuapp.com/',
            description: 'This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent.'
        },
        {
            name: 'POST',
            pictures: [
                require('./src/assets/portfolio/post/one.png'),
                require('./src/assets/portfolio/post/two.png'),
            ],
            technologies: ['Markov Models', 'Python', 'Artificial Intelligence', 'Vue', 'Heroku'],
            category: 'Web App',
            date: 'Oct, 2019 - Nov, 2019',
            visit: 'https://post-client.herokuapp.com/',
            description: 'Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.'
        },
        {
            name: 'Clumpr',
            pictures: [
                require('./src/assets/portfolio/clumpr/logo.png'),
                require('./src/assets/portfolio/clumpr/one.png'),
                require('./src/assets/portfolio/clumpr/two.png'),
            ],
            technologies: ['Node', 'Angular', 'Express', 'MySQL', 'Facebook API'],
            category: 'Web App',
            date: 'Sep, 2017 - Nov, 2017',
            visit: 'https://github.com/hrishikeshpaul/clumpr',
            description: 'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
        }
    ],
    recommendations: [
        {
            title: 'In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, rask oriented approach, he was able to complete his assignment ahead of time.',
            author: 'Ushanas Shastri',
            position: 'CTO',
            company: 'Viteos Capital Market Services',
            location: 'Mumbai'
        },
        {
            title: 'I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.',
            author: 'Anil Dukkipatty',
            position: 'CTO',
            company: 'Elemential Labs',
            location: 'Mumbai'
        },
        {
            title: 'He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client\'s perpective and also making it creative.',
            author: 'Chintan Shah',
            position: 'Director',
            company: 'Hridayam Soft Solution',
            location: 'Mumbai'
        },
        {
            title: 'During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.',
            author: 'Mrinal Pai',
            position: 'Co-Founder & Director',
            company: 'Skylark Drones',
            location: 'Bangalore'
        },



    ]
}

export default info;
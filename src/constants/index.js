import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am an M.Tech student in Computer Science and Engineering at IIT Indore. I have a strong passion for coding in C++ and a deep interest in data structures and algorithms. I spend considerable time researching natural language processing field & ML areas and am enthusiastic and curious about problem-solving. Additionally, I possess knowledge in front-end development, allowing me to create intuitive and interactive web interfaces..`;

export const Education = [
  {
    link:"",
    college: "Indian Institute of Technology Indore",
    degree : "Master of Technology",
    grade: "7.62 CGPA",
    year: ["2023-2025"],
  },
  {
    link:"https://drive.google.com/file/d/1Z-r1JYE6mieN3XcjiCA7jdtvtsWnN4ow/view?usp=drive_link",
    college: "Parul University Gujarat",
    degree : "Bachelor of Technology",
    grade: "8.21 CGPA",
    year: ["2019-2023"],
  },
  {
    link:"https://drive.google.com/file/d/1QuoOc07l_TqahFLYdp7tUvAUvGT-vILT/view?usp=drive_link",
    college: "Central Board of Secondary Education",
    degree : "Senior Secondary School",
    grade: "75%",
    year: ["2018-2019"],
  },
  {
    link:"https://drive.google.com/file/d/1Qs4XIFDo1c0HnwGG3QT8WpPHBpJdxnSX/view?usp=drive_link",
    college: "Central Board of Secondary Education",
    degree : "Secondary School",
    grade: "9.4 CGPA",
    year: ["2016-2017"],
  },
];
export const CODING ={
  leetcode:"LeetCode",
  gfg:"GeeksForGeeks",
  codingninja:"CodingNinjas",
  codeforces:"Codeforces",
  hackerrank:"Hackerrank",
  overall:"Over all platforms (Codolio)",

};

export const EXPERIENCES = [
  {
    link:"",
    year: "July-2023 - Present",
    role: "Teaching Assistant DSA",
    company: "IIT Indnore",
    description: `As a Teaching Assistant for DSA, I collaborated with the lead instructor to deliver lectures, conduct tutorial sessions, and provide one-on-one tutoring, ensuring students comprehended complex topics. I was responsible for grading assignments and exams, offering constructive feedback to enhance student performance. My role also involved developing and refining course materials, organizing review sessions, and introducing innovative teaching techniques to boost student engagement and understanding.`,
    technologies: ["C++","Problem-solving","DSA","Programming"],
  },
  {
    link:"https://drive.google.com/file/d/12cpJbyp6_gODElLCWr_lhXGZWCW-Vz_A/view?usp=drive_link",
    year: "Mar-Apr 2022",
    role: "Data Science Intern",
    company: "LetsGrowMore",
    description: `Developed classification model performed on iris dataset, Exploratory Data Analysis on terrorism dataset, Decision Tree on iris Dataset, Image to Pencil sketch`,
    technologies: ["Python", "ML libraries", "ML Algorithms"],
  },
  {
    link:"https://drive.google.com/file/d/14IBCZ9ftL0JufP_jlZ8Yp99sC1Xu85Uf/view?usp=drive_link",
    year: "2021 - 2022",
    role: "Data Science and Bussiness Analytics Intern",
    company: "SparkFoundation",
    description: `Exploratory Data Analysis on Dataset "SampleSuperStore". `,
    technologies: ["Python", "EDA", "Pandas", "numpy","scikit-learn"],
  },
];

export const PROJECTS = [
  {
    link:"https://github.com/Anukarsh-tech/-Rumour-Detection-in-Social-Media-in-the-Hindi-language-",
    title: "Rumour Detection in Social Media in the Hindi language",
    image: project1,
    description:
      "Created my own dataset, and labeled from International Fact-Checking Network (IFCN) signatories. Implemented different BERT models and achieved good accuracy that overpasses past works. It’s a binary classification project, a Research paper under progress.",
    technologies: ["Deep learning", "Transformers", "Machine learning", "NLP", "Python"],
  },
  {
    link:"https://github.com/Anukarsh-tech/-Controlling-Media-Player-with-Hand-Gestures-using-CNN-",
    title: "Controlling Media Player with Hand Gestures using CNN",
    image: project2,
    description:
      "The project has two stages, The first stage performs the detection of hand gestures and the keyboard controls will be integrated with each gesture in the second stage. The gesture recognition uses computer vision and deep learning techniques with a custom-built dataset.",
    technologies: ["Machine Learning", "Deep learning", "Python ", "Computer vision"],
  },
  {
    link:"https://github.com/Anukarsh-tech/Whatsappwebclone",
    title: "Whatsapp Clone",
    image: project3,
    description:
      "Created a reliable and secure messaging platform that mimics WhatsApp web’s primary functionality while potentially adding additional features. 1. User registration and authentication system 2. One-to-one Chat 3. Group chat 4. File sharing (Image, Video file, Audio file, Documents) 5. Video call 6. Real-time message delivery notifications",
    technologies: ["MongoDB", "Express", "React", "Nodejs"],
  },
  {
    link:"https://github.com/Anukarsh-tech/Email_Spam_Detection_System",
    title: "Email_Spam_Detection_System",
    image: project4,
    description:
      "It is a webapp for checking the weather condition of cities , in output the temperature, humity, weather condition will be displayed ,for developing the webapp HTML, CSS and JavaScript Is used.",
      technologies: ["Python", "Juypter Notebook", "Streamlit","Machine Learning"],
    
  },
  {
    link: "https://github.com/Anukarsh-tech/Get_weather.github.io",
    title: "Weather Predictor",
    image: project5,
    description:
      "An add-on type email spam and ham detection system made using python.Naive Bayes Algorithm is used for email classification in tandem with various datasets.Aim to instill a self learning model and improve dynamic accuracy without manual training on reagular intervals.",
      technologies: ["HTML", "CSS", "javascript","API"],
  },
];

export const Pofres = [
  {
    year: "July 2023-Present",
    role: "Teaching Assistant",
    company: "IIT Indore",
    technologies: ["Programming Lab", "C++", "DSA"],
  },
  {
    year: "March 01-17 2024",
    role: " Coordinator",
    company: "Symposium 2.0 IIT Indore",
    technologies: ["Innovative Technologies", "Research", "Expert_talk", "ML","Networking"],
  },
  {
    year: "Jan-Jun 2021",
    role: "Campus Hero-Intern",
    company: "Developer Student Club, Parul University",
    technologies: ["Android app Development", "Google cloud workshops", "Expert_talks",],
  },
  {
    year: "1-month 2020",
    role: "Student Co-ordinator",
    company: "Vadodara Startup Fest-Parul University",
    technologies: ["Internships","Startup-Expo","Expert-talks","Innovative-tech exhibition"],
  },
];

export const Achievements = 
  {
  gate: "Gate Exam : 94 Percentile - (2023) ",
  jee: "Joint Entrance Examination : Qualified the exam with 72 percentile - (2019)",
  science: "Science Olympiad : Participated in the national level Science Olympiad exam marked in top 100 position - (2016) ",
};

export const Extracurricular={
  Daysprogram: "30-DAYS OF GOOGGLE CLOUD : Participated in a month-long program offered by Google where I have hands-on-lab experience of Qwiklab, till deadline I successfully completed the milestones (1- Concept of computing, 2- ML).",
  Ready: "GOOGLECLOUDREADY FACILITATOR PROGRAM : Two-month long program offered by Googlecloudready: I have Completed 5-courses(computing-based) on Coursera with lab practice on Qwiklab throughout the program. There I have Successfully completed the 1 milestone." 
};

export const CONTACT = {
  address: "Mahewa (206128), Etawah, Uttar Pradesh, India ",
  address2: "Hostel CVR , IIT Indore, Madhya Pradesh, India ",
  phoneNo: "+91 9520130864 ",
  email: "anukarshpratap2000@gmail.com",
};

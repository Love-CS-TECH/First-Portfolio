
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "Ethical Hacking & Cyber Security",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Data-Analysis",
    company_name: "TCS",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Augest 2025 - present",
    points: [
      "Developing and maintaining analytics solutions using Python/SQL and BI tools,", 
      "integrated within web applications where needed for data-driven features.",
"Collaborating closely with designers, PMs, and developers to align metrics",
"define success criteria, and deliver high-quality analytical products",
"Implementing responsive, stakeholder-friendly dashboards and ensuring cross-environment compatibility and data reliability",
"Participating in code reviews and offering constructive feedback to uphold performance, accuracy, and maintainability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His dashboards turned our scattered data into clear, actionable KPIs; refresh times dropped and adoption doubled..",
    name: "Delivery Manager",
    designation: "IT",
    company: "TCS",
    image: firstTestimonial,
  },
  {
    testimonial:
      " Plant disease model was production‑ready—clean code, strong validation, and an API we could ship.",
    name: "Tech Lead",
    designation: "Ecommerce Business",
    company: "AgriTech",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Our site now feels modern and fast—his futuristic UI and animations improved engagement without hurting performance!",
    name: " Founder",
    designation: "CTO",
    company: "Portfolio Client",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Plant Disease Detection",
    description:
      "A ResNet-50–based plant disease detector that classifies leaf images in real-time via a REST API, optimized with transfer learning, strong augmentation, and class-balanced training for high-precision field use..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "white-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css&js",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://codepen.io/royatul031-gmail-com/pen/Qwbrjwa",
  },
  {
    name: "Music_Modify",
    description:
      "Emotion-based music playlist and remixer app: An intelligent audio app that detects mood in real time and auto-generates personalized playlists while remixing tracks on-the-fly with seamless transitions, adaptive BPM, and vibe-matched effects to amplify the listener’s emotional state.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Love-CS-TECH/Moodify-app",
  },
  {
    name: "Py_Crypto Interpreter",
    description:
      "A Python-based crypto language interpreter that parses and executes domain-specific scripts for encryption, decryption, key management, and on-chain data utilities with a clean, extensible runtime.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: " css&js",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Love-CS-TECH/pycrypto",
  },
];

export { services, technologies, experiences, testimonials, projects };

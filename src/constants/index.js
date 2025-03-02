import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  cpp,
  python,
  springboot,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "C/CPP Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "cpp",
    icon: cpp,
  }, 
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Tesla",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Proficiency in OOP concepts (Inheritance, Polymorphism, Encapsulation, Abstraction).",
      "Understanding of Java Collections Framework (List, Set, Map, Queue).",
      "Knowledge of Multithreading & Concurrency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SpringBoot Developer",
    company_name: "Shopify",
    icon: springboot,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Spring & Spring Boot Basics: Spring Core, Spring Boot, Spring Boot Annotations, etc.",
      "REST API Development: Spring Boot RESTful Web Services using @RestController, Handling HTTP Methods (GET, POST, PUT, DELETE), etc.",
      "Database & ORM (Spring Data JPA & Hibernate): Spring Data JPA – CRUD operations, Querying Databases",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "C/CPP Developer",
    company_name: "amazon",
    icon: cpp,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Proficient in C++ development, with expertise in OOP, STL, multithreading, and memory management for high-performance applications.",
      "Experience in data structures and algorithms, optimizing code for efficiency and scalability in competitive programming and real-world applications.",
      "Participate in coding competition and solve problems",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "Meta",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Proficient in Machine Learning with Python, including data preprocessing, feature engineering, and model evaluation using Scikit-learn, Pandas, and NumPy.",
      "Experience in Supervised and Unsupervised Learning, implementing algorithms like Linear Regression, Decision Trees, K-Means Clustering, and PCA for predictive modeling and data analysis.",
      "Hands-on expertise in Deep Learning frameworks, including TensorFlow and PyTorch, for building and optimizing neural networks for image classification and NLP tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

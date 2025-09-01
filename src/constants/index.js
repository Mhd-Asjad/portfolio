import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import { RiReactjsLine } from 'react-icons/ri'
import { SiFastapi } from "react-icons/si";
import { TbBrandNextjs } from 'react-icons/tb';
import { DiDjango } from "react-icons/di";
import { DiRedis } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";

export const stack = [
  {
    Icon : RiReactjsLine,
    duration : 2.5,
    color : 'text-cyan-400',
  },
  {
    Icon : SiFastapi,
    duration : 3,
    color : 'text-green-300',
  },
  {
    Icon : TbBrandNextjs,
    duration : 3.5,
    color : 'text-white',
  },
  {
    Icon : DiDjango,
    duration : 4,
    color : 'text-green-700',
  },
  {
    Icon : BiLogoPostgresql,
    duration : 6,
    color : 'text-sky-700',
  },
  {
    Icon : DiRedis,
    duration : 4,
    color : 'text-red-700',
  },
  {
    Icon : DiMongodb,
    duration : 3,
    color : 'text-green-500',
  },
  {
    Icon : SiJavascript,
    duration : 2.5,
    color : 'text-yellow-500',
  },
  // Add more technologies as needed
]

export const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },

]

export const HERO_CONTENT = `a self taught Full Stack Developer specialized in Django and React, passionate about all things Python.`;

export const ABOUT_TEXT = `Result-oriented Full Stack Developer with strong expertise in Django and React.js. Expertice in building
  scalable, secure web applications using RESTful APIs and efficient architectures. Skilled in both relational and
  non-relational databases with a focus on clean code, performance, and problem solving. Passionate about secure
  development practices and committed to lifelong learning, constantly evolving to tackle real-world challenges to
  drive growth and improvement.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - 2025",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Django", "PaymentIntegration", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "CalenderJs", "FastApi", "MongoDB" , "TailwindCss","Redis"],
  },
  {
    title: "Online Movie Ticket Booking System",
    image: project3,
    description:
      "Cinemagic is a feature-rich online platform that offers users a smooth and intuitive experience for booking movie tickets. From filtering movies by city, genre, and language to selecting custom theatre layouts and seat categories, Cinemagic provides a powerful system for users, admins, and theatre owners.",
    technologies: ["DjangoRestFramework", "Shadcn", "React", "PostgreSQL", "TailwindCss","Redis", "Celery"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Django", "react", "PostgreSQL", "Redux Toolkit", "Redis", "TailwindCss" , "EditorJs"],
  },
];

export const CONTACT = {
  address: " Malappuram Kerala, India ",
  phoneNo: "+91 9744275160",
  email: "mhdasjad877@gmail.com",
};

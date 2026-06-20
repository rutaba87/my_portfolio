import img1 from "../assets/Willingrow_social_thumbnail.png";
import img2 from "../assets/snip-url.png";
import img3 from "../assets/new_project.png";
export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const skillsCore = [
  "React",
  "Next.js (App Router)",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "CSS Modules",
  "Bootstrap",
  "Redux Toolkit",
  "REST APIs & Axios",
  "React Router",
  "Git and GitHub",
  "Figma",
  "Responsive Design",
];

export const skillsSupporting = [
  "Node.js & Express",
  "MongoDB & Mongoose",
  "REST API design",
  "marked.js & DOMPurify",
  "date-fns & uuidv4",
  "nanoid",
  "Vercel",
  "Postman"
];

export const projects = [
  {
    id: 1,
    title: "Willingrow Social",
    desc: "Full-featured social platform built solo on the frontend. Handled the entire UI architecture, component library, and responsive design.",
    tags: ["React", "Solo Frontend"],
    live: "https://willingrowsocial.com",
    github: null,
    featured: false,
    img: img1,
  },
  {
    id: 2,
    title: "Notespace",
    desc: "A responsive markdown note-taking app with live preview, tag filtering, pin support, and persistent storage — built entirely on the frontend",
    tags: [
      "React",
      "marked JS",
      "dompurify",
      "TailwindCSS V3",
      "state management",
      "datefns",
      "uuidv4",
    ],
    live: "https://note-space-six.vercel.app/",
    github: "https://github.com/rutaba87/note-space",
    featured: false,
    img: img3,
  },
  {
    id: 3,
    title: "Snip URL",
    desc: "A full-stack URL shortener with click tracking, real-time stats, and link management. Built the complete frontend in Next.js with server and client components, CSS Modules, and a Node.js/Express/MongoDB backend deployed on Vercel.",
    tags: [
      "Next.js",
      "React",
      "CSS Modules",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Vercel",
    ],
    live: "https://snip-url-omega.vercel.app/",
    github: "https://github.com/rutaba87/snip-url-frontend",
    featured: false,
    img: img2,
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rutaba87",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rutaba-shamshad-5b897223b",
  },
  { label: "resume.pdf", href: "/resume.pdf" },
];

export const experiences = [
  {
    id: 1,
    company: "Fedi Tech",
    period: "2025 Jan – Present",
    role: "Frontend Developer",
    desc: "Developed and maintained production React applications. Built reusable component libraries, optimized performance, and delivered responsive UIs.",
    stack: ["React.js", "Responsive Design", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 2,
    company: "Webnet Pakistan Pvt. Ltd.",
    period: "Dec 2024 – May 2025",
    role: "Junior Frontend Developer",
    desc: "Built client web interfaces and delivered features across landing pages and web apps using React and CSS.",
    stack: ["HTML", "JavaScript", "Vue JS", "CSS"],
  },
  {
    id: 3,
    company: "Shispare Pvt. Ltd.",
    period: "Apr 2024 – Nov 2024",
    role: "React JS Apprentice",
    desc: "Developed and maintained responsive web applications, ensuring cross- browser compatibility and performance optimization",
    stack: ["React JS", "JavaScript", "Tailwind CSS", "SCSS"],
  },
];

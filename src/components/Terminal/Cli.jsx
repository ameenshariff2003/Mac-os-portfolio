import React from "react";
import Window from "../mac-window/Window";
import Terminal from "react-console-emulator";
import "./terminal.scss";

/* -------------------------------
   PROFILE DATA (INLINE)
-------------------------------- */

const PROFILE = {
  name: "Ameen Shariff",
  email: "ameenshariff3443@gmail.com",
  phone: "+91 9916743443",
  social: {
    github: "@ameenshariff2003",
    linkedin: "/ameen-shariff",
    portfolio: "Portfolio",
  },
};

const SKILLS = {
  languages: ["HTML", "CSS", "JavaScript (ES6+)"],
  frontend: ["React.js", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "SQL"],
  versionControl: ["Git", "GitHub"],
};

const PROJECTS = [
  {
    title: "Hollyday – Hotel Booking Platform",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description: [
      "MERN hotel booking app",
      "Secure login & authorization",
      "Context API for state",
      "REST APIs + MongoDB",
    ],
  },
  {
    title: "Careo – Second-Hand Car Selling Platform",
    stack: [
      "HTML",
      "CSS",
      "JavaScript (ES6)",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "EJS",
    ],
    description: [
      "Second-hand car marketplace",
      "REST APIs",
      "Auth & protected routes",
      "Responsive UI",
    ],
  },
  {
    title: "Wonderlust – Tourist Destination Review Platform",
    stack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    description: [
      "Tourist review platform",
      "User authentication",
      "MVC architecture",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Computer Science Engineering",
    institution: "Presidency University",
    year: 2024,
  },
  {
    degree: "PUC",
    institution: "Jaihind PU College",
    year: 2020,
  },
  {
    degree: "X (State Board)",
    institution: "Camlin English School",
    year: 2018,
  },
];

const LANGUAGES = ["English", "Hindi", "Kannada", "Urdu"];

const HOBBIES = ["Exploring new places", "Painting", "Learning"];

/* -------------------------------
   TERMINAL COMMANDS
-------------------------------- */

const commands = {
  about: {
    description: "About me",
    fn: () =>
      `${PROFILE.name}
MERN Stack Developer | Frontend & Backend Enthusiast`,
  },

  contact: {
    description: "Contact details",
    fn: () =>
      `Email : ${PROFILE.email}
Phone : ${PROFILE.phone}`,
  },

  social: {
    description: "Social links",
    fn: () =>
      `GitHub    : ${PROFILE.social.github}
LinkedIn  : ${PROFILE.social.linkedin}
Portfolio : ${PROFILE.social.portfolio}`,
  },

  skills: {
    description: "Technical skills",
    fn: () =>
      `Languages       : ${SKILLS.languages.join(", ")}
Frontend        : ${SKILLS.frontend.join(", ")}
Backend         : ${SKILLS.backend.join(", ")}
Databases       : ${SKILLS.databases.join(", ")}
Version Control : ${SKILLS.versionControl.join(", ")}`,
  },

  projects: {
    description: "Academic projects",
    fn: () =>
      PROJECTS.map(
        (p, i) => `
${i + 1}. ${p.title}
Stack: ${p.stack.join(", ")}
- ${p.description.join("\n- ")}`
      ).join("\n"),
  },

  education: {
    description: "Education details",
    fn: () =>
      EDUCATION.map(
        (e) => `
${e.degree}
${e.institution} (${e.year})`
      ).join("\n"),
  },

  languages: {
    description: "Spoken languages",
    fn: () => LANGUAGES.join(", "),
  },

  hobbies: {
    description: "Personal interests",
    fn: () => HOBBIES.join(", "),
  },
};

/* -------------------------------
   WELCOME MESSAGE (NO HELP)
-------------------------------- */

const welcomeMessage = `
👋 Welcome to AmeenOS Terminal

Available commands:
→ about         – Who Am I
→ contact       – Email & phone
→ social        – GitHub, LinkedIn, Portfolio
→ skills        – Tech stack
→ projects      – Academic projects
→ education     – Education details
→ clear         – Clear terminal

Tip: commands are lowercase.
`;


/* -------------------------------
   COMPONENT
-------------------------------- */

const Cli = ({windowname,setWindowState}) => {
  return (
    <Window Xasix='210' Yasix='186' windowname={windowname} setWindowState={setWindowState}>
      <div className="terminal">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="ameenshariff:~$ "
          autoFocus
        />
      </div>
    </Window>
  );
};

export default Cli;

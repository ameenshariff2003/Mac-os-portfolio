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
  About: {
    description: "About me",
    fn: () =>
      `${PROFILE.name}
MERN Stack Developer | Frontend & Backend Enthusiast`,
  },

  Contact: {
    description: "Contact details",
    fn: () =>
      `Email : ${PROFILE.email}
Phone : ${PROFILE.phone}`,
  },

  Social: {
    description: "Social links",
    fn: () =>
      `GitHub    : ${PROFILE.social.github}
LinkedIn  : ${PROFILE.social.linkedin}
Portfolio : ${PROFILE.social.portfolio}`,
  },

  Skills: {
    description: "Technical skills",
    fn: () =>
      `Languages       : ${SKILLS.languages.join(", ")}
Frontend        : ${SKILLS.frontend.join(", ")}
Backend         : ${SKILLS.backend.join(", ")}
Databases       : ${SKILLS.databases.join(", ")}
Version Control : ${SKILLS.versionControl.join(", ")}`,
  },

  Projects: {
    description: "Academic projects",
    fn: () =>
      PROJECTS.map(
        (p, i) => `
${i + 1}. ${p.title}
Stack: ${p.stack.join(", ")}
- ${p.description.join("\n- ")}`
      ).join("\n"),
  },

  Education: {
    description: "Education details",
    fn: () =>
      EDUCATION.map(
        (e) => `
${e.degree}
${e.institution} (${e.year})`
      ).join("\n"),
  },

  Languages: {
    description: "Spoken languages",
    fn: () => LANGUAGES.join(", "),
  },

  Hobbies: {
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
→ About         – Who Am I
→ Contact       – Email & phone
→ Social        – GitHub, LinkedIn, Portfolio
→ Skills        – Tech stack
→ Projects      – Academic projects
→ Education     – Education details
→ Clear         – Clear terminal

Tip:First character must be in **UPPERCASE**.
`;


/* -------------------------------
   COMPONENT
-------------------------------- */

const Cli = ({windowname,setWindowState,setTopZ, zIndex}) => {
  return (
    <Window Xasix='210' Yasix='186' windowname={windowname} setTopZ={setTopZ} zIndex={zIndex} setWindowState={setWindowState}>
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

/**
 * @file: profile.config.js
 * @author: Ameen Shariff
 * @summary: MERN Stack Developer | Frontend & Backend Enthusiast
 */

// --------------------------------------------------
// 1. BASIC INFO
// --------------------------------------------------

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

// --------------------------------------------------
// 2. SKILLS
// --------------------------------------------------

const SKILLS = {
  languages: ["HTML", "CSS", "JavaScript (ES6+)"],
  frontend: ["React.js", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "SQL"],
  versionControl: ["Git", "GitHub"],
};

// --------------------------------------------------
// 3. ACADEMIC PROJECTS
// --------------------------------------------------

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
    stack: ["HTML", "CSS", "JavaScript (ES6)", "Bootstrap", 
    "Node.js", "Express.js", "EJS"],
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


// --------------------------------------------------
// 4. EDUCATION
// --------------------------------------------------

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

// --------------------------------------------------
// 5. LANGUAGES & HOBBIES
// --------------------------------------------------

const LANGUAGES = ["English", "Hindi", "Kannada", "Urdu"];

const HOBBIES = [
  "Exploring new places",
  "Painting",
  "Learning",
];

// --------------------------------------------------

export {
  PROFILE,
  SKILLS,
  PROJECTS,
  EDUCATION,
  LANGUAGES,
  HOBBIES,
};

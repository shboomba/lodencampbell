// ============================================================
//  src/data/bio.js
//
//  PERSONAL INFO
// ============================================================

const bio = {
  name:   "Loden Campbell",
  role:   "Software Engineer & Game Developer",
  school: "MS Computer Science · USC",

  // Logo shown in the nav bar
  logo: "/logo.png",

  // Links shown under your name on the homepage
  contacts: [
    { label: "LinkedIn",                 href: "http://linkedin.com/in/loden-campbell" },
    { label: "loden.campbell@gmail.com", href: "mailto:loden.campbell@gmail.com" },
    { label: "ljcampbe@usc.edu",         href: "mailto:ljcampbe@usc.edu" },
  ],

  // School logos shown below your photo
  schools: [
    { name: "USC",        logo: "/usc.jpg"        },
    { name: "UW-Madison", logo: "/uw-madison.png" },
  ],

  // About me section — each string is one paragraph
  // You can use <em>italics</em> or <strong>bold</strong> inside the strings
  paragraphs: [
    "I am currently pursuing a Master's in Computer Science at the University of Southern California, specializing in Game Development. I previously earned a Bachelor of Science in Computer Science from the University of Wisconsin-Madison, with a double minor in Game Design and Mathematics.",
    "I develop gameplay systems and interactive experiences using C++, C#, and Unity, with a focus on responsive mechanics, performance, and maintainable architecture. My work includes implementing core gameplay features, prototyping new mechanics, and iterating based on playtesting and technical constraints.",
    "Across team-based projects, I have contributed from initial design through final implementation, building complete gameplay experiences. I have also led teams in fast-paced environments such as hackathons, driving technical direction, coordinating development, and delivering polished, playable builds under tight deadlines.",
    "I am interested in gameplay engineering roles where I can work closely with designers and contribute to building engaging player-facing systems.",
  ],    
};

export default bio;

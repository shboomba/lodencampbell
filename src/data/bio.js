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
    { name: "University of Southern California",    logo: "/usc.jpg"        },
    { name: "University of Wisconsin-Madison",      logo: "/uw-madison.png" },
  ],

  // Short tagline shown under name in hero
  tagline: "I build gameplay systems and interactive experiences focused on responsive mechanics, procedural generation, and maintainable architecture.",

  // Short blurb shown in the About Me card on the home page
  blurb: "I'm a Computer Science graduate student at USC with a passion for building immersive, system-driven experiences. My background in gameplay systems, AI, and interactive simulations allows me to bridge the gap between creative design and technical implementation.",

  // Update these with whatever you're actively building
  currentlyWorkingOn: [
    { title: "The H.U.G.S. Protocol",  description: "A puzzle-platformer game with a super cute modified hamster." },
    { title: "Phrontiers",     description: "A Roblox game where Clash Royale meets StarCraft." },
    { title: "Portfolio Site",       description: "This React portfolio to showcase and create." },
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

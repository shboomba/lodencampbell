// ============================================================
//  src/data/software.js
//
//  PORTFOLIO — SOFTWARE PROJECTS — each object = one project card.
//
//  To add a project:    copy the template at the bottom and fill it in
//  To remove a project: delete its object
// ============================================================

const software = [
  {
    title:       "PBS Wisconsin Recommendation Engine",
    logo:        "/pbs.png",
    page:        "pbs",            // ← internal page route
    description: "Full-stack content personalization system — NLP, ML model, Flask backend, React frontend",
    tags:        ["Python", "Flask", "React", "ML", "NLP"],
  },

  // External link example:
  // {
  //   title:       "My App",
  //   logo:        "/myapp-logo.png",
  //   url:         "https://github.com/shboomba/my-app",
  //   description: "What the project does.",
  //   tags:        ["Python", "React"],
  // },
];

export default software;
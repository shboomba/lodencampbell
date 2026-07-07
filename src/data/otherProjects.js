// ============================================================
//  src/data/otherProjects.js
//
//  Projects shown on the Other Projects page.
// ============================================================

const otherProjects = [
  {
    title:       "IceVite Team Chat",
    image:       "/other/icevite/insitu-teampage-chat.png",
    type:        "Community Tool",
    page:        "icevite",
    description: "Native team chat for icevite.com, the Bay Area adult hockey league site. Captains couldn't group-message mixed iPhone/Android rosters, so I built cross-platform chat with push notifications into the site itself.",
    tags:        ["Django", "HTMX", "Bootstrap", "Web Push", "Python"],
  },

  {
    title:       "SneakyMasters",
    image:       "/other/sneakymasters.svg",
    type:        "Live Web App",
    page:        "sneakymasters",
    description: "A League of Legends leaderboard tracking a friend group's race to Masters rank in real time, with live Riot API data, LP history, and champion stats.",
    tags:        ["JavaScript", "Vercel", "Riot API", "Serverless", "Redis"],
  },
];

export default otherProjects;

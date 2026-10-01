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
    description: "Built and shipped real-time team chat with cross-platform push for an active Bay Area adult hockey league: server-enforced moderation, end-to-end Web Push (VAPID + service workers), integrated into a live Django codebase.",
    tags:        ["Django", "HTMX", "Bootstrap", "Web Push", "Python"],
  },

  {
    title:       "SneakyMasters",
    image:       "/other/sneakymasters.svg",
    type:        "Live Web App",
    page:        "sneakymasters",
    description: "A League of Legends leaderboard tracking a friend group's race to Masters in real time: live Riot API data with LP snapshotting persisted to Vercel KV (Redis), sharing rank history and champion stats across the group.",
    tags:        ["JavaScript", "Vercel", "Riot API", "Serverless", "Redis"],
  },
];

export default otherProjects;

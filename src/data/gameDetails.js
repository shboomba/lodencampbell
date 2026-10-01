const gameDetails = [
  {
    id:          "game-phrontiers",
    title:       "Phrontiers",
    subtitle:    "Real-Time 1v1 Strategy · In Development",
    coverImage:  "/games/phrontiers/phrontiers.svg",
    screenshots: [],
    engine:      "Roblox Studio (Luau)",
    teamSize:    2,
    role:        "Programmer & Designer",
    overview:    "A hybrid 4X / real-time battle game for Roblox where Clash Royale meets StarCraft. Four species (Humans, Glarbtonians, Roblots, Zombies) with distinct playstyles compete to conquer a shared map, and territory changes hands through lane-based battles: players spend a dual-resource economy (water and electricity) to deploy units that auto-march toward enemy towers, and the first to destroy the enemy HQ wins. The battle layer is playable today, with a bot opponent filling in for single player; the 4X territory layer and DataStore persistence are next on the roadmap. Built in Luau with Rojo for source control, with all simulation running server-side and clients kept in sync over RemoteEvents.",
    tags:        ["Luau", "Roblox Studio", "Multiplayer", "RTS", "Rojo"],
    contributions: [
      "Co-developing a server-authoritative battle simulation: a Heartbeat game loop ticks unit AI (attack enemies, then towers, then advance), tower combat, and win conditions every 100ms",
      "Built the client-server deployment flow over RemoteEvents: client raycasts a deploy target, server validates the deploy zone and energy cost before spawning the unit",
      "Implemented a dual-resource energy economy with server-side spend validation, regen, and per-tick sync to client resource bars",
      "Developed the isometric scriptable camera (WASD, scroll, right-click pan) and battle HUD with cost-gated unit buttons, faction select, and end-of-match flow",
      "Co-authored the game design document covering the 4X territory layer, four species with distinct playstyle identities, deck/loadout rules, and a milestone-based build order",
    ],
    challenges: [
      {
        title: "Keeping the simulation server-authoritative",
        description: "Every unit, tower, and resource tick runs on the server so clients can't cheat: deploys are raycast on the client but validated server-side against deploy zones and energy cost, and clients only receive state through RemoteEvents. The whole battle stays in sync from a single 100ms Heartbeat loop.",
      },
      {
        title: "Balancing 16 units across 4 factions",
        description: "Unit stats live in a shared balance spreadsheet that feeds UnitData.luau. Playtests drove iterative balance passes, like doubling unit costs and halving energy regen to slow the early game, and a 4-card hand experiment that we built, tested, and reverted when it didn't fit the pacing.",
      },
    ],
    team: [
      { name: "Loden Campbell", role: "Programming, Design" },
      { name: "Steve Bell",     role: "Programming, Design, 3D Modeling" },
    ],
  },

  {
    id:          "game-hugs-protocol",
    title:       "The H.U.G.S. Protocol",
    subtitle:    "3D Puzzle-Platformer",
    coverImage:  "/games/hugs-protocol/the-hugs-protocol.png",
    screenshots: [],
    itchUrl:     "https://shboomba.itch.io/the-hugs-protocol",
    engine:      "Unity 6",
    teamSize:    2,
    role:        "Co-Developer",
    overview:    "A 3D puzzle-platformer where you play as a hamster navigating a colorful science laboratory. Inspired by Portal's puzzle design and the warmth of peak GameCube-era mascot games, the game centers on discovering floppy disc crackers that unlock three physics-based abilities: Sonar Ball for echo-based detection, Tungsten Ball for heavy traversal, and Sponge Ball for water manipulation and delicate platforming.",
    tags:        ["Unity", "C#", "3D", "Puzzle", "Platformer"],
    contributions: [
      "Implemented the three physics-based ball abilities (Sonar, Tungsten, Sponge) that drive every puzzle and traversal mechanic",
      "Co-designed levels and puzzles around ability interactions, iterating through playtests",
      "Shared programming, design, art, and production across a two-person core team, from concept to itch.io release",
    ],
    team: [
      { name: "Loden Campbell",  role: "Programming, Design, Art, Production" },
      { name: "Thomas Shalosky", role: "Programming, Design, Art, Production" },
      { name: "Carolyne",        role: "Audio" },
      { name: "Dojin",           role: "Audio" },
      { name: "Viski",           role: "Audio" },
    ],
  },

  {
    id:          "game-atg",
    title:       "Against the Grain",
    subtitle:    "2D Platformer",
    coverImage:  "/games/atg/against-the-grain.png",
    screenshots: [],
    itchUrl:     "https://shboomba.itch.io/against-the-grain",
    engine:      "Unity",
    teamSize:    4,
    role:        "Lead Programmer",
    overview:    "A 2D platformer where you play as a wizard with grain-based abilities. Use cornstalk and popcorn powers to navigate obstacles and stop a blight terrorizing the crops. The mechanics emphasize movement-based puzzle-solving tightly tied to the game's agricultural theme.",
    tags:        ["Unity", "C#", "2D", "Platformer"],
    contributions: [
      "Implemented 4+ character abilities with animations and gameplay logic",
      "Developed a trajectory system with custom materials for real-time visual feedback",
      "Built a collectibles and NPC system with 15+ interactive characters and branching dialogue",
      "Authored all narrative content and designed the UI, including health and ability counters",
    ],
    team: [
      { name: "Loden Campbell", role: "Programming, Design, Art" },
    ],
  },

  {
    id:          "game-on-par",
    title:       "On Par",
    subtitle:    "Speedrun Platformer",
    coverImage:  "/games/on-par/on-par.png",
    screenshots: [],
    itchUrl:     "https://shboomba.itch.io/on-par",
    engine:      "Pocket Platformer",
    teamSize:    1,
    role:        "Solo Developer",
    overview:    "A short golf-themed platformer built for speedrunning. Collect golf balls and race through each course using movement and dash mechanics. Designed around tight, replayable levels with a focus on route optimization.",
    tags:        ["Platformer", "Speedrun", "2D"],
    contributions: [
      "Designed and implemented every level, tuning layouts around dash routes for speedrunning",
      "Created the background and golf ball collectible art",
    ],
    team: [
      { name: "Loden Campbell", role: "Design, Level Design" },
    ],
  },

  {
    id:          "game-desolate-remnants",
    title:       "Desolate Remnants",
    subtitle:    "Physics Puzzle Platformer",
    coverImage:  "/games/desolate-remnants/desolate-remnants.png",
    screenshots: [],
    itchUrl:     "https://shboomba.itch.io/desolate-remnants",
    engine:      "Unity",
    teamSize:    5,
    role:        "3Cs & Systems Engineer",
    overview:    "A physics-driven puzzle platformer set in a desolate pixel art world. Players navigate crumbling environments using physics-based mechanics to solve spatial puzzles and progress through the ruins.",
    tags:        ["Unity", "C#", "2D", "Puzzle", "Physics", "Pixel Art"],
    team: [
      { name: "Loden Campbell", role: "Programming, Design, Art" },
    ],
  },

  {
    id:          "game-the-cave",
    title:       "The Cave",
    subtitle:    "Interactive Fiction",
    coverImage:  "/games/the-cave/the-cave.png",
    screenshots: [],
    itchUrl:     "https://shboomba.itch.io/the-cave",
    engine:      "Twine",
    teamSize:    1,
    role:        "Solo Developer",
    overview:    "A story-driven interactive fiction experience built in Twine. Players click through branching narrative as a protagonist journeys deeper into a magical cave, with choices shaping the path through the story.",
    tags:        ["Twine", "Narrative", "Interactive Fiction"],
    contributions: [
      "Wrote the full branching narrative and made all stylistic and presentation choices",
    ],
    team: [
      { name: "Loden Campbell", role: "Writing, Design" },
    ],
  },
];

export default gameDetails;

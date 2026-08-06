export const PICKS = ["scissors", "paper", "rock", "lizard", "spock"] as const;

export type Pick = (typeof PICKS)[number];

export type Outcome = "win" | "lose" | "draw";

export const BEATS: Record<Pick, readonly Pick[]> = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export function decide(player: Pick, house: Pick): Outcome {
  if (player === house) return "draw";
  return BEATS[player].includes(house) ? "win" : "lose";
}

export function randomPick(): Pick {
  return PICKS[Math.floor(Math.random() * PICKS.length)];
}

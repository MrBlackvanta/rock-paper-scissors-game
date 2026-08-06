"use client";

import Duel from "@/components/duel";
import PickGrid from "@/components/pick-grid";
import RulesDialog from "@/components/rules-dialog";
import ScoreBoard from "@/components/score-board";
import { PICK_VISUALS } from "@/data";
import { decide, randomPick, type Outcome, type Pick } from "@/lib/game";
import { useScore } from "@/lib/use-score";
import { useEffect, useState } from "react";

const REVEAL_MS = 650;
const RESULT_MS = 350;

const ANNOUNCEMENT: Record<Outcome, string> = {
  win: "You win.",
  lose: "You lose.",
  draw: "It is a draw.",
};

type Round =
  | { phase: "picking" }
  | { phase: "waiting"; player: Pick }
  | { phase: "revealed"; player: Pick; house: Pick }
  | { phase: "result"; player: Pick; house: Pick; outcome: Outcome };

export default function Game({ rules }: { rules: React.ReactNode }) {
  const [score, addToScore] = useScore();
  const [round, setRound] = useState<Round>({ phase: "picking" });

  useEffect(() => {
    if (round.phase !== "waiting") return;
    const timer = setTimeout(
      () => setRound({ ...round, phase: "revealed", house: randomPick() }),
      REVEAL_MS,
    );
    return () => clearTimeout(timer);
  }, [round]);

  useEffect(() => {
    if (round.phase !== "revealed") return;
    const timer = setTimeout(() => {
      const outcome = decide(round.player, round.house);
      setRound({ ...round, phase: "result", outcome });
      if (outcome !== "draw") addToScore(outcome === "win" ? 1 : -1);
    }, RESULT_MS);
    return () => clearTimeout(timer);
  }, [round, addToScore]);

  return (
    <main className="flex w-full flex-1 flex-col items-center px-8 pt-8 pb-3.5 md:pt-12 md:pb-8">
      <ScoreBoard score={score} />

      <p className="sr-only" role="status">
        {round.phase === "result" &&
          `You picked ${PICK_VISUALS[round.player].label}. The house picked ${
            PICK_VISUALS[round.house].label
          }. ${ANNOUNCEMENT[round.outcome]} Score ${score}.`}
      </p>

      {round.phase === "picking" ? (
        <PickGrid
          className="mt-23.75 md:mt-12"
          onPick={(player) => setRound({ phase: "waiting", player })}
        />
      ) : (
        <Duel
          playerPick={round.player}
          housePick={round.phase === "waiting" ? null : round.house}
          outcome={round.phase === "result" ? round.outcome : null}
          onPlayAgain={() => setRound({ phase: "picking" })}
        />
      )}

      <RulesDialog diagram={rules} />
    </main>
  );
}

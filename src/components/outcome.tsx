import type { Outcome as OutcomeResult } from "@/lib/game";
import { cn } from "@/lib/utils";

const HEADLINE: Record<OutcomeResult, string> = {
  win: "You win",
  lose: "You lose",
  draw: "You drew",
};

type OutcomeProps = {
  outcome: OutcomeResult | null;
  onPlayAgain: () => void;
};

export default function Outcome({ outcome, onPlayAgain }: OutcomeProps) {
  return (
    <div
      className={cn(
        "order-last flex w-55 shrink-0 basis-full flex-col items-center lg:order-0 lg:mt-[calc(95px+0.222*var(--coin-size))] lg:basis-auto",
        { "hidden lg:flex": outcome === null },
      )}
    >
      {outcome !== null && (
        <>
          <p className="v-rise text-result font-bold uppercase text-shadow-raised">
            {HEADLINE[outcome]}
          </p>

          <button
            type="button"
            onClick={onPlayAgain}
            className="mt-4 h-12 w-55 v-rise rounded-lg v-surface text-label tracking-label text-ink uppercase shadow-raised transition-colors [animation-delay:120ms] hover:bg-none hover:text-rock motion-reduce:transition-none"
          >
            Play again
          </button>
        </>
      )}
    </div>
  );
}

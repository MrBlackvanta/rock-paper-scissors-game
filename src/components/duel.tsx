import Coin from "@/components/coin";
import Outcome from "@/components/outcome";
import type { Outcome as OutcomeResult, Pick } from "@/lib/game";
import { cn } from "@/lib/utils";

type PickColumnProps = {
  label: string;
  pick: Pick | null;
  haloed: boolean;
  className?: string;
};

function PickColumn({ label, pick, haloed, className }: PickColumnProps) {
  return (
    <div
      className={cn(
        "flex v-pick-column flex-col-reverse items-center gap-y-4.25 transition-transform duration-450 ease-out motion-reduce:transition-none lg:flex-col lg:gap-y-15.75",
        className,
      )}
    >
      <h2 className="text-caption-sm font-bold tracking-caption whitespace-nowrap uppercase text-shadow-raised lg:text-caption">
        {label}
      </h2>

      <span className="relative isolate grid place-items-center">
        {haloed && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 v-fade-in opacity-50"
          >
            <span className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
            <span className="absolute top-1/2 left-1/2 aspect-square w-[193%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
            <span className="absolute top-1/2 left-1/2 aspect-square w-[145%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          </span>
        )}

        {pick ? (
          <Coin pick={pick} className="v-coin-in" />
        ) : (
          <span className="v-coin-slot">
            <span className="aspect-square w-[77%] v-thinking rounded-full bg-black/10" />
          </span>
        )}
      </span>
    </div>
  );
}

type DuelProps = {
  playerPick: Pick;
  housePick: Pick | null;
  outcome: OutcomeResult | null;
  onPlayAgain: () => void;
};

export default function Duel({
  playerPick,
  housePick,
  outcome,
  onPlayAgain,
}: DuelProps) {
  const pending = outcome === null;

  return (
    <div className="v-duel -mx-1 mt-24.75 mb-12 flex flex-wrap items-start justify-center gap-x-14 gap-y-15.5 self-stretch md:mb-0 lg:mx-0 lg:mt-18 lg:flex-nowrap lg:gap-x-16.5">
      <PickColumn
        label="You picked"
        pick={playerPick}
        haloed={outcome === "win"}
        className={cn({ "lg:translate-x-35": pending })}
      />

      <Outcome outcome={outcome} onPlayAgain={onPlayAgain} />

      <PickColumn
        label="The house picked"
        pick={housePick}
        haloed={outcome === "lose"}
        className={cn({ "lg:-translate-x-35": pending })}
      />
    </div>
  );
}

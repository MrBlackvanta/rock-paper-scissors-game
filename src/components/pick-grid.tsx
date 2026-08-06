import PickButton from "@/components/pick-button";
import { PICKS, type Pick } from "@/lib/game";
import { cn } from "@/lib/utils";

const VERTICES: Record<Pick, { left: number; top: number }> = {
  scissors: { left: 50, top: 15.24 },
  paper: { left: 84.6, top: 43.1 },
  rock: { left: 70.8, top: 83.35 },
  lizard: { left: 29.2, top: 83.35 },
  spock: { left: 15.4, top: 43.1 },
};

const BOX = { width: 472, height: 463 };

const polygonPoints = PICKS.map((pick) => {
  const { left, top } = VERTICES[pick];
  return `${(left / 100) * BOX.width},${(top / 100) * BOX.height}`;
}).join(" ");

type PickGridProps = {
  onPick: (pick: Pick) => void;
  className?: string;
};

export default function PickGrid({ onPick, className }: PickGridProps) {
  return (
    <div className={cn("v-pentagon", className)}>
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${BOX.width} ${BOX.height}`}
        className="absolute inset-0 size-full"
      >
        <polygon
          points={polygonPoints}
          fill="none"
          stroke="#000"
          strokeWidth="15"
          opacity="0.2"
        />
      </svg>

      {PICKS.map((pick) => (
        <PickButton
          key={pick}
          pick={pick}
          onPick={onPick}
          style={{
            left: `${VERTICES[pick].left}%`,
            top: `${VERTICES[pick].top}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        />
      ))}
    </div>
  );
}

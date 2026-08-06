import Coin from "@/components/coin";
import { PICK_VISUALS } from "@/data";
import type { Pick } from "@/lib/game";
import { cn } from "@/lib/utils";

type PickButtonProps = {
  pick: Pick;
  onPick: (pick: Pick) => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function PickButton({
  pick,
  onPick,
  className,
  style,
}: PickButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onPick(pick)}
      aria-label={PICK_VISUALS[pick].label}
      style={style}
      className={cn(
        "rounded-full transition-transform hover:scale-105 focus-visible:outline-offset-4 motion-reduce:transition-none",
        className,
      )}
    >
      <Coin pick={pick} />
    </button>
  );
}

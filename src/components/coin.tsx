import { PICK_VISUALS } from "@/data";
import type { Pick } from "@/lib/game";
import { cn } from "@/lib/utils";

type CoinProps = {
  pick: Pick;
  className?: string;
};

export default function Coin({ pick, className }: CoinProps) {
  const { icon: Icon, iconWidth, coin } = PICK_VISUALS[pick];

  return (
    <span className={cn("v-coin", coin, className)}>
      <span className="v-coin-well">
        <Icon className={iconWidth} />
      </span>
    </span>
  );
}

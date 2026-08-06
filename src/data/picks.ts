import {
  LizardIcon,
  PaperIcon,
  RockIcon,
  ScissorsIcon,
  SpockIcon,
} from "@/components/icons";
import type { Pick } from "@/lib/game";

type PickVisual = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconWidth: string;
  coin: string;
};

export const PICK_VISUALS: Record<Pick, PickVisual> = {
  scissors: {
    label: "Scissors",
    icon: ScissorsIcon,
    iconWidth: "w-[45.54%]",
    coin: "v-coin-scissors",
  },
  paper: {
    label: "Paper",
    icon: PaperIcon,
    iconWidth: "w-[43.75%]",
    coin: "v-coin-paper",
  },
  rock: {
    label: "Rock",
    icon: RockIcon,
    iconWidth: "w-[42.86%]",
    coin: "v-coin-rock",
  },
  lizard: {
    label: "Lizard",
    icon: LizardIcon,
    iconWidth: "w-[56.25%]",
    coin: "v-coin-lizard",
  },
  spock: {
    label: "Spock",
    icon: SpockIcon,
    iconWidth: "w-[40.18%]",
    coin: "v-coin-spock",
  },
};

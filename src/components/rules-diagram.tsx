import { PICK_VISUALS } from "@/data";
import type { Pick } from "@/lib/game";

const EDGE_ARROW = 32.692;
const DIAGONAL_ARROW = 85.692;

const ARROW_HEAD_UPPER =
  "M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z";
const ARROW_HEAD_LOWER =
  "M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z";

type DiagramCoin = {
  pick: Pick;
  x: number;
  y: number;
  ringRadiusY: number;
  icon: { x: number; y: number; width: number; height: number };
};

const COINS: DiagramCoin[] = [
  {
    pick: "scissors",
    x: 117,
    y: 0,
    ringRadiusY: 52.5,
    icon: { x: 31.26, y: 32.62, width: 36.21, height: 41.18 },
  },
  {
    pick: "paper",
    x: 233,
    y: 92,
    ringRadiusY: 50.172,
    icon: { x: 33.4, y: 32.63, width: 34.79, height: 41.89 },
  },
  {
    pick: "rock",
    x: 187,
    y: 225,
    ringRadiusY: 52.5,
    icon: { x: 34.82, y: 36.89, width: 34.08, height: 34.08 },
  },
  {
    pick: "lizard",
    x: 46,
    y: 225,
    ringRadiusY: 52.5,
    icon: { x: 29.14, y: 31.93, width: 44.73, height: 42.6 },
  },
  {
    pick: "spock",
    x: 0,
    y: 92,
    ringRadiusY: 52.5,
    icon: { x: 37.66, y: 31.2, width: 31.95, height: 41.89 },
  },
];

const ARROWS = [
  { length: EDGE_ARROW, transform: "rotate(-40 152.162 -62.778)" },
  { length: EDGE_ARROW, transform: "scale(1 -1) rotate(-40 11.858 -344.091)" },
  { length: EDGE_ARROW, transform: "rotate(127 100.649 180.558)" },
  { length: EDGE_ARROW, transform: "matrix(-1 0 0 1 186 297)" },
  { length: EDGE_ARROW, transform: "scale(-1 1) rotate(-53 195.597 178.185)" },
  { length: DIAGONAL_ARROW, transform: "matrix(-1 0 0 1 212 131)" },
  { length: DIAGONAL_ARROW, transform: "rotate(40 -169.505 247.617)" },
  { length: DIAGONAL_ARROW, transform: "rotate(-40 381.505 -93.07)" },
  { length: DIAGONAL_ARROW, transform: "rotate(-110 176.867 31.934)" },
  { length: DIAGONAL_ARROW, transform: "rotate(110 35.133 118.76)" },
];

const LABELS = [
  { x: 252, y: 64, fontSize: 11 },
  { x: 55, y: 64, fontSize: 11 },
  { x: 305, y: 225, fontSize: 11 },
  { x: 1, y: 225, fontSize: 11 },
  { x: 154, y: 328, fontSize: 11 },
  { x: 35, y: 20, fontSize: 6, transform: "translate(124 131)" },
  { x: 35, y: 6, fontSize: 6, transform: "rotate(40 -161.263 250.617)" },
  { x: 35, y: 6, fontSize: 6, transform: "rotate(-40 373.263 -90.07)" },
  { x: 36, y: 6, fontSize: 6, transform: "rotate(-110 174.766 34.934)" },
  { x: 33, y: 6, fontSize: 6, transform: "rotate(110 37.234 121.76)" },
];

function Arrow({ length, transform }: { length: number; transform: string }) {
  return (
    <g transform={transform}>
      <rect y="6.667" width={length} height="2.667" rx="1.333" />
      <g transform={`translate(${length - EDGE_ARROW} 0)`}>
        <path d={ARROW_HEAD_UPPER} />
        <path d={ARROW_HEAD_LOWER} />
      </g>
    </g>
  );
}

export default function RulesDiagram() {
  return (
    <svg
      viewBox="0 0 336 330"
      aria-hidden="true"
      className="h-auto w-full text-diagram-hand"
    >
      <defs>
        <linearGradient
          id="rules-coin-sheen"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity="0.0966" />
          <stop offset="100%" stopColor="#FFF" stopOpacity="0.0001" />
        </linearGradient>
      </defs>

      {COINS.map(({ pick, x, y, ringRadiusY, icon }) => {
        const Icon = PICK_VISUALS[pick].icon;
        return (
          <g key={pick} transform={`translate(${x} ${y})`}>
            <ellipse
              cx="51.5"
              cy={ringRadiusY}
              rx="51.5"
              ry={ringRadiusY}
              fill="var(--color-diagram-ring)"
            />
            <ellipse
              cx="51.5"
              cy="50.172"
              rx="51.5"
              ry="50.172"
              fill="url(#rules-coin-sheen)"
            />
            <ellipse
              cx="51.5"
              cy="51.207"
              rx="39.535"
              ry="39.31"
              fill="var(--color-diagram-well)"
            />
            <Icon {...icon} />
          </g>
        );
      })}

      <g fill="var(--color-diagram-ink)">
        {ARROWS.map((arrow) => (
          <Arrow key={arrow.transform} {...arrow} />
        ))}
      </g>

      <g className="font-bold" fill="var(--color-diagram-ink)">
        {LABELS.map(({ x, y, fontSize, transform }) => (
          <text
            key={`${transform ?? ""}${x},${y}`}
            x={x}
            y={y}
            fontSize={fontSize}
            transform={transform}
          >
            BEATS
          </text>
        ))}
      </g>
    </svg>
  );
}

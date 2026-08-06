import Game from "@/components/game";
import RulesDiagram from "@/components/rules-diagram";

export default function Home() {
  return <Game rules={<RulesDiagram />} />;
}

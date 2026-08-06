export default function ScoreBoard({ score }: { score: number }) {
  return (
    <header className="flex h-24 w-full max-w-175 items-center justify-between rounded-header-sm border-3 border-white/[0.2892] pr-2.25 pl-5.25 md:h-37.5 md:rounded-header md:pr-5.25 md:pl-7.25">
      <h1 className="text-logo-sm font-bold uppercase text-shadow-raised md:text-logo">
        Rock
        <br />
        Paper
        <br />
        Scissors
        <br />
        Lizard
        <br />
        Spock
      </h1>

      <p className="flex h-18 w-20 shrink-0 flex-col items-center rounded-sm v-surface pt-2.5 shadow-raised md:h-28.5 md:w-37.5 md:rounded-lg md:pt-4">
        <span className="me-[-0.15625em] text-label-sm tracking-label text-accent md:text-label">
          Score
        </span>
        <span
          key={score}
          className="v-pop text-score-sm font-bold text-ink-score md:text-score"
        >
          {score}
        </span>
      </p>
    </header>
  );
}

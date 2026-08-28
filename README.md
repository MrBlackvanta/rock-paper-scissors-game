# Rock, Paper, Scissors

My solution to the [Rock, Paper, Scissors](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)
challenge on Frontend Mentor, with the lizard/Spock variant.

![](./screenshot.webp)

- Live: https://rock-paper-scissors-game.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/rock-paper-scissors-game

## Built with

- Next.js 16
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

The BEATS labels and arrows in the rules diagram are darkened from `#B1B4C5` to `#707594`.
The design value is 2.06:1 on white, under AA for the labels and under 3:1 for the arrows,
which carry the direction of each rule. The modal's close glyph goes from 25% to 60%
opacity for the same reason: at 25% it composites to 1.54:1 and it's an interactive control.

The coin rings and hands in the diagram stay at their design values even though they're
under 3:1. Darkening them changes the illustration itself, and neither carries meaning the
arrows and labels don't already, with an `sr-only` list stating every rule in text. The
lizard coin's purple stays too, since it's a brand colour and the coin is labelled.

### Layout

**The RULES button is `fixed` from `md` up only.** The design floats it off the viewport
bottom, but in flow at 1366x768 it overflows by 15px and spawns a scrollbar. Mobile keeps
it in flow, which still lands the designed offset when there's room and drops it below the
result view when there isn't. Fixed would sit on top of PLAY AGAIN on any viewport shorter
than the design's 750px.

**The tablet layout is designed from scratch**, since the file has 375 and 1366 frames only.
The header switches at 768 and the duel at 1024, with the rules modal going from a
full-bleed sheet to the panel at 768 to match.

**The result column stays allocated from `lg` up.** Revealing a verdict would otherwise
insert a 220px box, which no transition can animate. The picks translate sideways instead,
which the compositor can handle.

The rules diagram uses a 336x330 viewBox rather than the asset's 340x330. The extra 4px is
empty slack on the right; nothing draws past 336. On mobile the whole SVG scales uniformly
rather than shipping a second diagram, which costs under a pixel on the label size.

### Things that look like bugs but match the design

The paper coin in the rules diagram really is 4px shorter than the other four, the inner
BEATS labels really are 6px against 11px on the outer ones, and the coin face is a slightly
squashed ellipse rather than a circle. All three are in the design file.

A 1px border computing to 0.8px on a 1.25 DPR display isn't a deviation either. Chrome
floors borders to whole device pixels.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)

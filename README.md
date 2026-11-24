# Fortune in a Pot

![Competition](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)
![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/veneraxyz/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry-v1/rank.svg)
![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/veneraxyz/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry-v1/reward.svg)

A kind, funny fortune about a houseplant on a windowsill — one line, at most
120 characters, written as a prediction, not a care tip.

The program enforces the rules itself: it exits non-zero if the fortune is
not exactly one line or exceeds 120 characters, and it always writes to the
directory given by `MAKEFUN_OUTPUT_DIR` (falling back to `/output`).

## Run

```sh
npx tsx main.ts
```

This writes exactly one fortune line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`).

## The fortune

> Your windowsill plant will sprout a brand-new leaf by Sunday — proof it forgives you for every missed watering.

## License

MIT — see [LICENSE](LICENSE).

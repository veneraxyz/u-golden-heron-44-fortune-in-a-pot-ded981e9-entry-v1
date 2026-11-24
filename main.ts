// Fortune in a Pot — a kind, funny fortune about a houseplant on a windowsill.
// Writes exactly one fortune line (max 120 chars) to <output dir>/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const FORTUNE =
  "Your windowsill plant will sprout a brand-new leaf by Sunday — proof it forgives you for every missed watering.";

function main(): void {
  const lines = FORTUNE.split("\n");
  if (lines.length !== 1) {
    console.error("fortune must be exactly one line");
    process.exit(1);
  }
  if (FORTUNE.length > 120) {
    console.error(`fortune is ${FORTUNE.length} chars, over the 120-char limit`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), FORTUNE + "\n", "utf8");
}

main();

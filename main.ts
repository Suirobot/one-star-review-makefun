// One-Star Review of Something Essential — entrypoint.
// Writes one deadpan one-star review (at most 160 characters) of an
// everyday essential, to /output/entry.txt.
// Competition: u-0xb3e689-one-star-review-of-gravity-9c4d21aa
// (make.fun, account @bangjacky). Construction: the entry text is
// assembled below from its beats and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The entry, beat by beat. Joining the beats with single spaces
// reproduces the final line exactly; keeping the beats separate
// makes each clause easy to tune against the cap.
const PARTS = [
  "1 star for gravity: works every single time, no off switch,",
  "has dropped my coffee, my phone, and one day me.",
  "Would not install again.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 160;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();

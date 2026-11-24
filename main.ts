// One-Star Review of Something Essential — entrypoint.
// Writes one deadpan one-star review (at most 160 characters) of an
// everyday essential, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "1 star for gravity: works every single time, no off switch, has dropped my coffee, my phone, and one day me. Would not install again.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);

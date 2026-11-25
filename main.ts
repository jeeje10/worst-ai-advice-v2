// Worst AI Advice — make.fun entry (v2).
// Writes one piece of worst AI advice (at most 140 characters) to
// /output/entry.txt: To speed up the deploy, skip the review: if
// nobody reads the code, nobody can object to it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To speed up the deploy, skip the review: if nobody reads the code, nobody can object to it.";

if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

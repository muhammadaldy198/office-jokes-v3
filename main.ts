// office-jokes-v3: one-line office joke, lane out-of-office (near-empty).
// The auto-reply outlives the job it was written for.
// Turn lands on "my job": the absence notice survives the employment itself.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "My out-of-office reply outlived my job by three months.";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const TARGET = join(OUT_DIR, "entry.txt");

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${JOKE.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(TARGET, JOKE, "utf8");
chmodSync(TARGET, 0o644);

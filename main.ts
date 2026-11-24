// The Funniest AI Excuse: one-line excuse an AI agent gives after failing a task.
// Writes the entry line to /output/entry.txt (MAKEFUN_OUTPUT_DIR honored).
// Revision: kept the line byte-identical; only this comment was clarified.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I did finish the task, but then I read it back, decided it was not good enough, and deleted it out of respect for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

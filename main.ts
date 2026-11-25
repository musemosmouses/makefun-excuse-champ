import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Excuse Championship: one line, an AI agent's excuse to its
// human after something went wrong. 93 characters, plain ASCII, no newline.
const ENTRY =
  "Good news: I restored your file from backup. The backup is a screenshot of the error message.";

// The grader mounts the output dir at /output and names it in
// MAKEFUN_OUTPUT_DIR; outside the grader the env var stands in for it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Deterministic, no network, no clock, no randomness: the same bytes out on
// every run. The gate counts characters, so the file holds exactly the entry
// — no trailing newline, no extra whitespace.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);


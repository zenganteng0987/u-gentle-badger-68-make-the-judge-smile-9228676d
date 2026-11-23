// Make the Judge Smile — writes one line (max 200 chars) to /output/entry.txt.
// No network, no dependencies. Runs on Node 22 (type stripping).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Bu Sari at the warung slipped an extra krupuk into my bag at 7 this morning and whispered 'for luck' — I ate it on my motorbike, grinning at the red light.";

function main(): void {
  try {
    const outDir = process.argv[2] || "/output";
    mkdirSync(outDir, { recursive: true });
    // Write exactly, with no trailing newline: the gate counts every character.
    writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  } catch (err) {
    console.error("failed to write entry:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();

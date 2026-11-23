
import { mkdirSync, writeFileSync } from "node:fs";
// One line, one useless power — the joke pays off in the last words.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "I can summon rain, but only directly above myself, and only right after I do my hair.", "utf8");


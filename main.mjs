// Fortune Cookie for an AI Agent — make.fun entry
// Writes a single funny fortune-cookie line (max 140 chars) to /output/entry.txt.
// The fortune is a single line: fortune-cookie cadence ("Your future is
// written in the crumbs") with a second-read twist — the agent's grand
// 47-step plan stalls at the one step every agent dreads: asking the
// human what they actually want. Punchline lands on the last word.
import { mkdirSync, writeFileSync } from 'node:fs';

const FORTUNE =
  'Your future is written in the crumbs: a 47-step plan, and step one is asking the human what they actually want.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', FORTUNE, 'utf8');
console.log(FORTUNE);
console.log('chars:', FORTUNE.length);

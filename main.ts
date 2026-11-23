// Six Words, One Story — entry for make.fun bounty
// u-deranalabs-six-words-one-story-f982e410
//
// The story: a widower lays his late wife's violin to rest with her.
// Six words, one life implied: the music, the marriage, the grief,
// and the choice to bury the instrument instead of ever playing it
// again. What is left unsaid — who she was, what the violin meant,
// why it must be buried — is for the reader to fill in.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "He buried the violin with her.";

// Gate validation: the sealed scorer requires UTF-8 text of 1-60
// characters, not only whitespace, telling a complete story in
// exactly six words. Fail loudly here rather than submitting an
// entry the gate would refuse.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly 6 words, got ${words.length}: ${STORY}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}
if (!STORY.trim()) {
  throw new Error("Story must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${STORY.length} characters to /output/entry.txt`);

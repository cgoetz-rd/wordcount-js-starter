const fs = require("node:fs");
const assert = require("node:assert/strict");

const text = fs.readFileSync("words", "utf-8");

const { lines, words, uniqueWords } = count(text);

assert.equal(lines, 263);
assert.equal(words, 12345);
assert.equal(uniqueWords, 132);


function count(text) {
	// TODO implement
	const lines = 0;
	const words = 0;
	const uniqueWords = 0;
	return { lines, words, uniqueWords };
}


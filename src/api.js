export const getWordFromJisho = (word) =>
  `https://jisho.org/api/v1/search/words?keyword=${word}`;

export const getDefinition = (word) => `https://kotobank.jp/word/${word}`;

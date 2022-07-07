import { words } from "./data";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let todaysWord;
  todaysWord = words[Math.floor(Math.random() * words.length)];

  return { todaysWord };
};

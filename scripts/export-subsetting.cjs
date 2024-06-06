const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const content = readFileSync(resolve(__dirname, "../src/app/page.tsx"), "utf8");

let newContent = content;

// マクロ展開
newContent = newContent.replace(/<ReposLink name="(.*)" \/>/g, "$1");
newContent = newContent.replace(/<PreviewLink url="(.*)" \/>/g, "$1");

// タグ削除
newContent = newContent.replace(/<[^>]*>/g, "");

// 空白と改行を削除し、 main だけを抽出
newContent = newContent
  .replace(/ /g, "")
  .replace(/\n/g, "")
  .replace(/^.*return\(/, "")
  .replace(/\);\}/, "");

// // escape
newContent = newContent
  .replace(/&apos;/g, "'")
  .replace(/&gt;/g, ">")
  .replace(/&lt;/g, "<")
  .replace(/&amp;/g, "&");

// layout.tsx
newContent += "@a01sa01to's Repository";

// not-found.tsx
newContent +=
  "404 Not Found The Requested Page is not found. Go to Home Go to GitHub (@a01sa01to)";

// ソート
newContent = newContent.split("").sort().join("");

// 重複削除
const st = new Set(newContent.split(""));
newContent = Array.from(st).join("");

writeFileSync(
  resolve(__dirname, "../src/app/subsetdata.ts"),
  `export default "${newContent}"`
);

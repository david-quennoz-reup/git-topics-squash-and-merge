import { parse } from "node-html-parser";

async function getUTCTime() {
  const response = await fetch("https://time.is/UTC");
  const html = await response.text();

  const root = parse(html);
  return root.querySelector("time")!.textContent;
}

console.log(await getUTCTime());

export {}

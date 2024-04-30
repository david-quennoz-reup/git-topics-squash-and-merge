import { parse } from "node-html-parser";

async function getUTCTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(new Date());

  // const response = await fetch("https://time.is/UTC");
  // const html = await response.text();

  // const root = parse(html);
  // return root.querySelector("time")!.textContent;
}

console.log(await getUTCTime());

export {};

import { MainProps } from "./types";

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  const main = async () => {
    const { url } = JSON.parse(message as string) as MainProps;
    const html = await (await fetch(url)).text();
    sendResponse(html);
    chrome.runtime.sendMessage(html).catch(() => {});
  };
  main().catch(() => sendResponse("error"));
  return true;
});

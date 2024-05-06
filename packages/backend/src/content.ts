import { encode } from "js-base64";

if (document) {
  let tryCount = 0;
  const fn = () => {
    const mainDiv = document.querySelector("#wp-ext");
    const retry = () => {
      console.log("in retry");
      if (tryCount > 10) {
        return;
      }
      tryCount += 1;
      setTimeout(fn, 1000);
    };
    if (mainDiv) {
      const totalElems = Number(mainDiv.getAttribute("data-items"));
      // to do
    } else {
      console.log("no div with wp-ext id found;");
      retry();
    }
  };
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
/** chrome.runtime.sendMessage(props, (res: string) => {
            mainDiv.textContent = encode(res);
            return true;
          }); */

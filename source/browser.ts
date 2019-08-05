import { ipcRenderer as ipc } from "electron";
import elementReady = require("element-ready");

// send a click event to the main process
function sendIpcToMain(): void {
  ipc.send("click");
}

// Use an IFFE to run the script on load
(async function testes() {
  console.log("Preloaded browser script");

  // Wait until element is shown in the DOM
  const button = (await elementReady<HTMLElement>("#button", {
    stopOnDomReady: false
  }))!;

  // Listen for click
  button.addEventListener("click", sendIpcToMain);
})();

import { app, BrowserWindow } from "electron";

function createWindow(): void {
  /* Options for the browserwindow being created, you can find them all here:
    http://electronjs.org/docs/api/browser-window#new-browserwindowoptions
  */
  const windowOptions = {
    title: app.getName(),
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  };

  // Define the browserWindow
  let win = new BrowserWindow(windowOptions);
  // Load the HTML file in the directory
  win.loadFile(`${__dirname}/public/index.html`);
}

// Capture the ready event and create the window
app.on("ready", createWindow);

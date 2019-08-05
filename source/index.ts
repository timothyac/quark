import { app, BrowserWindow } from "electron";
import { dirname } from "path";

function createWindow() {
  const windowOptions = {
    title: app.getName(),
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  };

  let win = new BrowserWindow(windowOptions);
  win.loadFile(`${__dirname}/public/index.html`);
  console.log(__dirname);
}

app.on("ready", createWindow);

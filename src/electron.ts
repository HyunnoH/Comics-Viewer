// import { BrowserWindow } from 'electron'
// import { join } from "path";
// import isDev from "electron-is-dev";
const { app, BrowserWindow } = require("electron");
const { join } = require("path");
const isDev = require("electron-is-dev");

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${join(__dirname, "../build/index.html")}`
  );
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

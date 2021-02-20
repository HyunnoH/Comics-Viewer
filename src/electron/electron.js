"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = require("path");
var electronIsDev = require("electron-is-dev");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ webPreferences: { nodeIntegration: true } });
    mainWindow.loadURL(electronIsDev
        ? "http://localhost:3000"
        : "file://" + path_1.join(__dirname, "../build/index.html"));
    if (electronIsDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on("closed", function () { return (mainWindow = null); });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null)
        createWindow();
});

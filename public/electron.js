"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = require("path");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ webPreferences: { nodeIntegration: true } });
    mainWindow.loadURL(electron_is_dev_1["default"]
        ? "http://localhost:3000"
        : "file://" + path_1.join(__dirname, "../build/index.html"));
    if (electron_is_dev_1["default"]) {
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

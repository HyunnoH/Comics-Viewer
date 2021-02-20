import { app, BrowserWindow, dialog, ipcMain } from "electron";
import { join } from "path";
import { promises as fs } from "fs";
import electronIsDev from "electron-is-dev";
import { isImageFile } from "../core/file-manager/utils";

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, enableRemoteModule: true },
  });
  mainWindow.loadURL(
    electronIsDev
      ? "http://localhost:3000"
      : `file://${join(__dirname, "../build/index.html")}`
  );
  if (electronIsDev) {
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

ipcMain.on("show-open-dialog", async (event) => {
  if (!mainWindow) {
    throw new Error("mainWindow is not initialized!");
  }

  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory"],
  });

  if (canceled) {
    return event.sender.send("show-open-dialog-canceled");
  }

  const filesInDirectory = await fs.readdir(filePaths[0], {
    withFileTypes: true,
  });

  return event.sender.send(
    "show-open-dialog-succeed",
    filesInDirectory.filter(
      (dirent) => dirent.isFile() && isImageFile(dirent.name)
    )
  );
});

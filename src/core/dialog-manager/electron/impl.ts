import { DialogManager, OpenDialogHandler } from "../interface";
import { ipcRenderer } from "electron";

export class ElectronDialogManager implements DialogManager {
  showOpenDialog() {
    ipcRenderer.send("show-open-dialog");
  }

  addOpenDialogEventListener(handler: OpenDialogHandler) {
    ipcRenderer.on("show-open-dialog-succeed", handler);
  }

  removeDialogEventListener(handler: OpenDialogHandler) {
    ipcRenderer.removeListener("show-open-dialog-succeed", handler);
  }
}

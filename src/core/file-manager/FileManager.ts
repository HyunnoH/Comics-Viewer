import { DialogManager } from "../dialog-manager";
import { ElectronDialogManager } from "../dialog-manager/electron/impl";

class FileManager {
  constructor(dialogManager: DialogManager) {
    this.dialogManager = dialogManager;
  }

  openDialog() {
    this.dialogManager.showOpenDialog();
  }

  private dialogManager: DialogManager;
}

export default new FileManager(new ElectronDialogManager());

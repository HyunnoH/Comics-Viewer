import { Dirent } from "fs";
import { IpcRendererEvent } from "electron";

export type OpenDialogHandler = (
  event: IpcRendererEvent,
  files: Dirent[]
) => void;

export interface DialogManager {
  showOpenDialog(): unknown;
  addOpenDialogEventListener(handler: OpenDialogHandler): void;
  removeDialogEventListener(handler: OpenDialogHandler): void;
}

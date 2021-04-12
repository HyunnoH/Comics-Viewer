import { createContext, useContext } from "react";
import { FileManager } from "../core/file-manager";

export const FileManagerContext = createContext<FileManager>(new FileManager());

export function useFileManager() {
  return useContext(FileManagerContext);
}

import { FileManager } from "../../core/file-manager";

type FileEntryParams = {
  id: string;
  fileManager: FileManager;
};

export async function fileEntry({ id, fileManager }: FileEntryParams) {
  return fileManager.read(id);
}

type FileEntriesParams = {
  fileManager: FileManager;
};

export async function fileEntries({ fileManager }: FileEntriesParams) {
  return fileManager.readAll();
}

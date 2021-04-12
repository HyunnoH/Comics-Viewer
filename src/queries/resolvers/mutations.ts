import { FileManager } from "../../core/file-manager";

type CreateFileEntryParams = {
  file: File;
  fileManager: FileManager;
};

export async function createFileEntry({
  file,
  fileManager,
}: CreateFileEntryParams) {
  return fileManager.create(file);
}

type DeleteFileParams = {
  id: string;
  fileManager: FileManager;
};

export async function deleteFile({ id, fileManager }: DeleteFileParams) {
  return fileManager.delete(id);
}

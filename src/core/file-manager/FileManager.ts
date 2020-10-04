import { promises as fs } from "fs";

class FileManager {
  private static instance: FileManager;

  private constructor() {}

  static getInstance() {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }
    return this.instance;
  }

  getFile = async (path: string) => {
    const file = await fs.readFile(path);
    return file.toString();
  };

  getDirectory = async (path: string) => {
    return fs.readdir(path);
  };
}

export default FileManager.getInstance();

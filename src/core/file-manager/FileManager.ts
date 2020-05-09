import fs from 'fs-extra';

class FileManager {
  private static instance: FileManager;

  private constructor() { }

  static getInstance() {
    if (!FileManager.instance) {
      FileManager.instance = new FileManager();
    }
    return this.instance
  }

  getFileOrDirectory(path: string) {
    return (fs.lstatSync(path).isDirectory()) ? this.getDirectory(path) : this.getFile(path);
  }

  getFile(path: string) {
    const file = fs.readFileSync(path);
    return file.toString();
  }

  getDirectory(path: string) {
    const directory = fs.readdirSync(path);
    return directory;
  }
}

export default FileManager.getInstance();
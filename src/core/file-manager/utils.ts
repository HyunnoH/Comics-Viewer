export function isImageFile(path: string) {
  return /\.(gif)|(jpg)|(jpeg)|(png)$/.test(path);
}

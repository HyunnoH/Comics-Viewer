import { useMutation } from "react-query";
import { useFileManager } from "../contex";
import { createFileEntry } from "../resolvers/mutations";

export function useAddImage() {
  const fileManager = useFileManager();
  return useMutation("addFile", (file: File) =>
    createFileEntry({
      file,
      fileManager,
    })
  );
}

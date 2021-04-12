import { useMutation } from "react-query";
import { useFileManager } from "../contex";
import { createFileEntry } from "../resolvers/mutations";

export function useAddImage(file: File) {
  const fileManager = useFileManager();
  return useMutation(() =>
    createFileEntry({
      file,
      fileManager,
    })
  );
}

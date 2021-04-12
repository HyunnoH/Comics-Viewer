import { useQuery } from "react-query";
import { useFileManager } from "../contex";
import { fileEntries, fileEntry } from "../resolvers/queries";

export function useFileEntry(id: string) {
  const fileManager = useFileManager();
  return useQuery(["fileEntry", id, fileManager], () =>
    fileEntry({
      id,
      fileManager,
    })
  );
}

export function useFileEntries() {
  const fileManager = useFileManager();
  return useQuery("fileEntries", () =>
    fileEntries({
      fileManager,
    })
  );
}

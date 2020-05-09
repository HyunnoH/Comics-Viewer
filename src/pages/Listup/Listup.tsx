import React, { useEffect } from "react";

import { FileList } from "../../types/fileList";
import FileManager from "../../core/file-manager/FileManager";
import useFileManager from "../../hooks/useFileManager";
import PreviewImage from "../../feature/PreviewImage";

type ListupProps = {
  fileList: FileList;
};

export default function Listup({ fileList }: ListupProps) {
  const files = useFileManager(FileManager.getFileOrDirectory(fileList.filePaths[0]))

  return (
    <div>
      {
        files.map(file => <PreviewImage filePath={file} />)
      }
    </div>
  );
}

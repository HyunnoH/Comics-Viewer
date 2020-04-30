import React from "react";

import { FileList } from "../../types/fileList";

type ListupProps = {
  fileList: FileList;
};

export default function Listup({ fileList }: ListupProps) {
  console.log(fileList);
  return (
    <div>
      <div></div>
    </div>
  );
}

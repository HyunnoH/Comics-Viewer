import { List } from "antd";
import React, { useEffect } from "react";
import { useFileEntries } from "../../../queries";
import ContentWrapper from "../../layouts/content-wrapper";
import NotRecentOpenFound from "./components/NotRecentOpenFoud";
import PreviewImage from "./components/PreviewImage";
import { viewerGrid } from "./constant";

export default function Viewer() {
  const { data: fileEntries } = useFileEntries();

  useEffect(() => {
    console.log(fileEntries);
  }, [fileEntries]);

  return (
    <ContentWrapper>
      <div style={{ height: "100%" }}>
        {fileEntries?.length ? (
          <List
            grid={viewerGrid}
            dataSource={fileEntries}
            renderItem={(file) => (
              <List.Item>
                <PreviewImage {...file} />
              </List.Item>
            )}
          />
        ) : (
          <NotRecentOpenFound />
        )}
      </div>
    </ContentWrapper>
  );
}

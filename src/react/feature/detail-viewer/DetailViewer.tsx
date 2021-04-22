/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { Button } from "antd";
import { useState } from "react";
import { useParams } from "react-router";
import { useFileEntry } from "../../../queries";

type DetailPageParams = {
  directory: string;
  fileId: string;
};

export default function DetailViewer() {
  const { fileId } = useParams<DetailPageParams>();
  const { data: fileEntry } = useFileEntry(fileId);
  const [isSmallScale, setIsSmallScale] = useState(true);

  if (!fileEntry) return null;

  return (
    <div>
      <div css={styles.toolbar}>
        <Button onClick={() => setIsSmallScale((prev) => !prev)}>
          Change vertical view
        </Button>
      </div>
      <section css={styles.imageSection}>
        <img
          src={fileEntry.url}
          alt={fileEntry.id}
          css={css`
            ${isSmallScale ? styles.smallScale : ""}
          `}
        />
      </section>
    </div>
  );
}

const styles = {
  toolbar: css`
    display: flex;
    height: 48px;
    background-color: #202020;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    position: fixed;
    top: 0;
    left: 80px;
    right: 0;
  `,
  smallScale: css`
    height: calc(100vh - 48px);
  `,
  imageSection: css`
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
  `,
};

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
  const [isVerticalView, setIsVerticalView] = useState(false);

  if (!fileEntry) return null;

  return (
    <section css={styles.wrapper}>
      <Button onClick={() => setIsVerticalView((prev) => !prev)}>
        Click here
      </Button>
      <img
        src={fileEntry.url}
        alt={fileEntry.id}
        css={css`
          ${isVerticalView ? styles.vertical : ""}
        `}
      />
    </section>
  );
}

const styles = {
  wrapper: css`
    height: calc(100vh - 128px);
  `,
  vertical: css`
    max-height: inherit;
  `,
};

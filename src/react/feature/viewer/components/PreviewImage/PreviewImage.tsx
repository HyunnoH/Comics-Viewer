/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

type PreviewImageProps = {
  id: string;
  name: string;
  blob: Blob;
  url: string;
};

export default function PreviewImage({ id, name, url }: PreviewImageProps) {
  return (
    <div css={styles.wrapper}>
      <Link to={`/manga/${id}`}>
        <img src={url} alt={`${id}_${name}`} css={styles.image} />
      </Link>
    </div>
  );
}

const styles = {
  wrapper: css`
    width: 100%;
    border: 1px solid black;
  `,
  image: css`
    width: 100%;
  `,
};

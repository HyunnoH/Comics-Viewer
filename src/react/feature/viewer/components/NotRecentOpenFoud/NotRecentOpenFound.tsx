/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Button, Upload } from "antd";

export default function NotRecentOpenFound() {
  return (
    <div css={styles.main}>
      <Upload.Dragger
        // beforeUpload={(file, fileList) => {
        //   console.log(file, fileList);
        //   return false;
        // }}
        directory
        css={styles.dragger}
        multiple
        name="file"
        showUploadList={false}
        onChange={(info) => console.log(info)}
      >
        <p>No file is selected.</p>
        <Button>Click here</Button>
        <p>Or drag files to here to upload directory</p>
      </Upload.Dragger>
    </div>
  );
}

const styles = {
  main: css`
    height: 100%;
    padding: 24px;
  `,
  dragger: css`
    width: 80%;
  `,
};

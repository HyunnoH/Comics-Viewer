/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Button } from "reactstrap";
import { remote } from "electron";

export default function Home() {
  const openDialog = (type?: "openFile" | "openDirectory") => {
    remote.dialog.showOpenDialog({
      title: "Open ...",
      properties:
        process.platform !== "darwin" ? ["openDirectory", "openFile"] : [type!],
    });
  };

  return (
    <div css={styles.app}>
      <div css={styles.title}>
        <h1>Comics-Viewer</h1>
        <span>Make your comics much better</span>
      </div>
      <div css={styles.buttonContainer}>
        {process.platform !== "darwin" ? (
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}>
            <Button
              css={styles.button}
              onClick={() => openDialog("openDirectory")}>
              Open directory
            </Button>
            <Button css={styles.button} onClick={() => openDialog("openFile")}>
              Open file
            </Button>
          </div>
        ) : (
          <Button css={styles.button} onClick={() => openDialog()}>
            Open ...
          </Button>
        )}
      </div>
    </div>
  );
}

const styles = {
  app: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  `,
  title: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  buttonContainer: css`
    display: flex;
    justify-content: space-between;
    width: 21rem;
    padding-top: 3rem;
  `,
  button: css`
    width: 48%;
  `,
};

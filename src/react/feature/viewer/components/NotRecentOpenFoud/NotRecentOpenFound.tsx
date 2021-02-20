/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useRef } from "react";
import {
  DialogManager,
  ElectronDialogManager,
  OpenDialogHandler,
} from "../../../../../core/dialog-manager";

export default function NotRecentOpenFound() {
  const dialogManager = useRef<DialogManager>();

  useEffect(() => {
    dialogManager.current = new ElectronDialogManager();

    const handler: OpenDialogHandler = (event, files) => {
      console.log(
        event,
        files.map((file) => file.name)
      );
    };
    dialogManager.current.addOpenDialogEventListener(handler);

    return () => dialogManager.current?.removeDialogEventListener(handler);
  }, []);

  return (
    <div css={styles.main}>
      <div>No results found</div>
      <button
        onClick={() => {
          if (!dialogManager.current) {
            throw new Error();
          }
          dialogManager.current.showOpenDialog();
        }}
      >
        Open
      </button>
    </div>
  );
}

const styles = {
  main: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
};

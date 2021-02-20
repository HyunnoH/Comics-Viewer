/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Sidebar from "./feature/side-bar";
import Home from "./feature/home";
import { useGlobalState } from "./store/modules/global";
import Viewer from "./feature/viewer";

function App() {
  const { viewType } = useGlobalState();

  function getPage() {
    switch (viewType) {
      case "home":
        return <Home />;
      case "viewer":
        return <Viewer />;
      default:
        return null;
    }
  }

  return (
    <div css={styles.main}>
      <Sidebar />
      <div css={styles.contents}>{getPage()}</div>
    </div>
  );
}

const styles = {
  main: css`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  `,
  contents: css`
    flex-basis: 0;
    flex-grow: 999;
    padding: 24px;
  `,
};

export default App;

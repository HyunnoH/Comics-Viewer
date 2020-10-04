/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

const styles = {
  master: css`
    html {
      width: 100vw;
      height: 100vh;
    }

    body {
      width: 100%;
      height: 100%;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .root {
      margin: 0;
    }
  `,
};

export const GlobalStyle = () => <Global styles={styles.master} />;

/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <article css={styles.wrapper}>{children}</article>;
}

const styles = {
  wrapper: css`
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 64px;
    margin-bottom: 64px;
  `,
};

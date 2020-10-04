/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FaHome, FaBook } from "react-icons/fa";
import { useGlobal } from "../../store/modules/global";

export default function Sidebar() {
  const { changeView } = useGlobal();
  return (
    <div css={styles.sideBar}>
      <FaHome css={styles.iconStyle} onClick={() => changeView("home")} />
      <FaBook css={styles.iconStyle} onClick={() => changeView("viewer")} />
    </div>
  );
}

const styles = {
  sideBar: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 4rem;
    flex-grow: 1;
    flex-direction: column;
    background-color: #213e3b;
  `,
  iconStyle: css`
    color: white;
    font-size: 32px;
    cursor: pointer;
    margin: 12px;
  `,
};

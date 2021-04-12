import React, { memo } from "react";
import { FaHome, FaBook } from "react-icons/fa";

import { Menu } from "antd";
import { useHistory } from "react-router";

function Sidebar() {
  const history = useHistory();

  return (
    <Menu theme="dark">
      <Menu.Item
        icon={<FaHome />}
        onClick={() => history.push("/")}
      ></Menu.Item>
      <Menu.Item
        icon={<FaBook />}
        onClick={() => history.push("/manga")}
      ></Menu.Item>
    </Menu>
  );
}

export default memo(Sidebar);

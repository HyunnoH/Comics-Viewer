import React from "react";
import { Typography } from "antd";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <Typography.Title level={1}>{title}</Typography.Title>;
}

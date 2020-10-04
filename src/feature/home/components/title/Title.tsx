/** @jsx jsx */
import { jsx, css } from "@emotion/core";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1>{title}</h1>;
}

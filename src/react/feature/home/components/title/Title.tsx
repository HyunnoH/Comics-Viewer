import React from "react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1>{title}</h1>;
}

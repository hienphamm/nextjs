import React from "react";
import { Pane, Heading } from "evergreen-ui";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  url: string;
}

function Card({ title, content, url }: Props) {
  return (
    <Pane borderRadius={12} padding={10} border="default">
      <Heading is="h6">
        <Link href={url}>{title}</Link>
      </Heading>
      {content}
    </Pane>
  );
}

export default Card;

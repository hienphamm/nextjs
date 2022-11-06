import { Heading, Pane, Text } from "evergreen-ui";
import { truncate } from "lodash";
import { IPost } from "models/post";
import Image from "next/image";
import Link from "next/link";

function Card({
  title,
  content,
  slug,
  image,
}: Pick<IPost, "title" | "content" | "slug" | "image">) {
  return (
    <Pane
      borderRadius={12}
      padding={10}
      border="default"
      wordBreak="break-all"
      cursor="pointer"
    >
      <Link href={slug}>
        <Heading is="h6" marginBottom="10px">
          {title}
        </Heading>
        <Text>
          {truncate(content, {
            length: 250,
            omission: "...",
          })}
        </Text>
      </Link>
      <Image width={200} height={150} src={image} alt="" />
    </Pane>
  );
}

export default Card;

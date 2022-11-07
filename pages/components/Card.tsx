import { Heading, Pane, Text } from "evergreen-ui";
import { IPost } from "models/post";
import Link from "next/link";

function Card({
  title,
  content,
  slug,
  image,
  previewContent,
}: Pick<IPost, "title" | "content" | "slug" | "image" | "previewContent">) {
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
        <Text>{previewContent}</Text>
      </Link>
      {/* <Image width={200} height={150} src={image} alt="" /> */}
    </Pane>
  );
}

export default Card;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { truncate } from "lodash";
import { IPost } from "models/post";
import Image from "next/image";
import Link from "next/link";

function ReviewCard({
  title,
  content,
  slug,
  image,
  previewContent,
}: Pick<IPost, "title" | "content" | "slug" | "image" | "previewContent">) {
  return (
    <Link href={`/${slug}`}>
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
        }}
      >
        <CardHeader title={title} subheader="September 14, 2016" />
        <Image src={image} width={300} height={150} alt="" />
        <CardContent>
          <Typography variant="body2">
            {truncate(previewContent, {
              length: 180,
              omission: "...",
            })}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ReviewCard;

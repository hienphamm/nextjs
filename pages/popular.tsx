import { Grid } from "@mui/material";
import { IPost } from "models/post";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Layout from "./components/Layout";

interface Props {
  posts: IPost[];
}

export default function Popular({ posts }: Props) {
  return (
    <Grid container spacing={2}>
      {posts.map((post: IPost, index) => (
        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
          <Card
            title={post.title}
            content={post.content}
            slug={`posts/${post.slug}`}
            image={post.image}
            previewContent={post.previewContent}
          />
        </Grid>
      ))}
    </Grid>
  );
}

Popular.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<{
  posts: IPost[];
}> = async () => {
  const { posts } = (await getPosts("popular")).data;

  return {
    props: {
      posts: posts,
    },
  };
};

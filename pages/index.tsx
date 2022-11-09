import { Grid } from "@mui/material";
import { IPost } from "models/post";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Layout from "./components/Layout";

interface Props {
  posts: IPost[];
}

const Home = ({ posts }: Props) => {
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
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = (await getPosts()).data;
  return {
    props: {
      posts: posts,
    },
    revalidate: 30,
  };
};

export default Home;

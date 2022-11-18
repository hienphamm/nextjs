import { Grid } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { IPost } from "src/models/post/post";
import { getPosts } from "src/services/post";
import Card from "../src/components/Card";
import Layout from "../src/components/Layout";

interface Props {
  posts?: IPost[];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>hehe</div>


      
          <Grid container spacing={2}>
        {posts?.map((post: IPost, index) => (
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
    </>
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
    revalidate: 10,
  };
};

export default Home;

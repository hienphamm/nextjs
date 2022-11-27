import { Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "src/components/Layout";
import { ReactElement } from "react";
import { getPost, getPostSlugs } from "src/services/post";
import { IPost } from "src/models/post/post";
import Head from "next/head";

type Props = {
  post: IPost;
};

function Post({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Typography variant="h5" marginBottom="20px">
        {post.title}
      </Typography>
      <Typography>{post.content}</Typography>
    </>
  );
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Post;

interface Slug {
  _id: string,
  slug: string
}

interface Response {
  slugs: Slug[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await getPostSlugs()).data as Response;
  const paths = data.slugs?.map((x: Slug) => ({
    params: {
      slug: x.slug || x._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: IPost }> = async (
  context,
) => {
  const slug = context.params?.slug as string;
  const data = (await getPost(slug)).data as {
    post: IPost
  };

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.post,
    },
  };
};

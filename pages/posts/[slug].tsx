import { Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "src/components/Layout";
import { ReactElement } from "react";
import { getPost, getPostSlugs } from "src/services/post";
import { IPost } from "src/models/post/post";

type Props = {
  post: IPost;
};

function Post({ post }: Props) {
  return (
    <>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPostSlugs();
  const data = (await res).data?.slugs;
  const paths = data?.map((x: IPost) => ({
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
  const res = await getPost(slug);
  const data = (await res).data;

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

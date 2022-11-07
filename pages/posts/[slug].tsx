import { Heading, Pane, Text } from "evergreen-ui";
import { IPost } from "models/post";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { getPost, getPostSlugs } from "services/post";

type Props = {
  post: IPost;
};

function Post({ post }: Props) {
  const SideSheet = dynamic(() => import("../components/SideSheet"));

  const [isVisible, setIsVisible] = useState(false);
  return (
    <Pane>
      <Heading size={700} marginBottom="20px">
        {post.title}
      </Heading>
      <Text>{post.content}</Text>
      <button type="button" onClick={() => setIsVisible(true)}>
        Click
      </button>
      {isVisible && (
        <SideSheet isVisible={isVisible} onClose={() => setIsVisible(false)} />
      )}
    </Pane>
  );
}

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

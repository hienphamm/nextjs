import styles from "@app/styles/Home.module.scss";
import { Pane } from "evergreen-ui";
import { IPost } from "models/post";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Input from "./components/Input";
import Layout from "./components/Layout";

interface Props {
  posts: IPost[];
}

export default function Popular({ posts }: Props) {
  return (
    <Pane>
      <div className={styles.inputSearch}>
        <Input />
      </div>

      <div className={styles.containerContent}>
        <div className={styles.cards}>
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
              slug={`posts/${post.slug}`}
              image={post.image}
              previewContent={post.previewContent}
            />
          ))}
        </div>
      </div>
    </Pane>
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

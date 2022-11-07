import styles from "@app/styles/Home.module.scss";
import { Pane } from "evergreen-ui";
import { IPost } from "models/post";
import { GetServerSideProps } from "next";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Input from "./components/Input";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const { posts } = (await getPosts("popular")).data;

  return {
    props: {
      posts: posts,
    },
  };
};

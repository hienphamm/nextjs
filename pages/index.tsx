import styles from "@app/styles/Home.module.scss";
import { Pane } from "evergreen-ui";
import { IPost } from "models/post";
import { GetStaticProps } from "next";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Input from "./components/Input";

interface Props {
  posts: IPost[];
}

export default function Home({ posts }: Props) {
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
            />
          ))}
        </div>
      </div>
    </Pane>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = (await getPosts()).data;
  return {
    props: {
      posts: posts,
    },
  };
};

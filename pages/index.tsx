import styles from "@app/styles/Home.module.scss";
import { Pane } from "evergreen-ui";
import { IPost } from "models/post";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { getPosts } from "services/post";
import Card from "./components/Card";
import Input from "./components/Input";
import Layout from "./components/Layout";

interface Props {
  posts: IPost[];
}

const Home = ({ posts }: Props) => {
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

import { Heading } from "evergreen-ui";
import { ReactElement } from "react";
import Layout from "./components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const About: NextPageWithLayout = ({}: Props) => {
  return (
    <Heading textAlign="center" justifyContent="center">
      My name is {process.env.username}
    </Heading>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;

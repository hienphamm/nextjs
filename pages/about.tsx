import { Typography } from "@mui/material";
import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../src/components/Layout";
import { NextPageWithLayout } from "./_app";


const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Typography textAlign="center" justifyContent="center">
        My name is {process.env.username}
      </Typography>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;

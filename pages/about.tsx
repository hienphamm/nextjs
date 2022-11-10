import { Typography } from "@mui/material";
import { ReactElement } from "react";
import Layout from "../src/components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const About: NextPageWithLayout = ({}: Props) => {
  return (
    <Typography textAlign="center" justifyContent="center">
      My name is {process.env.username}
    </Typography>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;

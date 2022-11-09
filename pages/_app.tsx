import "@app/styles/App.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import { ReactElement, ReactNode, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { primaryColor } from "@app/styles/variables";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  palette: {
    primary: {
      main: `${primaryColor}`,
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { on, off } = Router.events;

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    on("routeChangeStart", handleRouteStart);
    on("routeChangeComplete", handleRouteDone);
    on("routeChangeError", handleRouteDone);
    return () => {
      off("routeChangeStart", handleRouteStart);
      off("routeChangeComplete", handleRouteDone);
      off("routeChangeError", handleRouteDone);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return getLayout(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          mt: 4,
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>,
  );
}

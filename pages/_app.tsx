import "@app/styles/App.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import { ReactElement, ReactNode, useEffect } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

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

  return getLayout(<Component {...pageProps} />);
}

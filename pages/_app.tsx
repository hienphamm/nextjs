import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import "@app/styles/App.scss";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { on, off } = Router.events;

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

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

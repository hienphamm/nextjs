import "@app/styles/App.scss";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  );
}

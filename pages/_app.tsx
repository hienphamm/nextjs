import '../styles/App.scss';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ReactElement, ReactNode, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { primaryColor } from '@app/styles/variables';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import AuthContextProvider from 'src/contexts/authContext';
import createEmotionCache from 'src/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const theme = createTheme({
  palette: {
    primary: {
      main: `${primaryColor}`,
    },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
      fontSize: '1rem',
    },
  },
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { on, off } = Router.events;

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    on('routeChangeStart', handleRouteStart);
    on('routeChangeComplete', handleRouteDone);
    on('routeChangeError', handleRouteDone);
    return () => {
      off('routeChangeStart', handleRouteStart);
      off('routeChangeComplete', handleRouteDone);
      off('routeChangeError', handleRouteDone);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
          autoHideDuration={2000}
        >
          <AuthContextProvider>
            <CssBaseline />
            {getLayout(
              <Container
                sx={{
                  mt: 4,
                }}
              >
                <Component {...pageProps} />
              </Container>
            )}
          </AuthContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
      ,
    </CacheProvider>
  );
}

import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { theme } from 'pages/_app';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../../src/components/Layout';
import { SnackbarProvider } from 'notistack';

function Wrapper({ children }: { children: ReactElement }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Layout>{children}</Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

const customRender = (ui: ReactElement, options?: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };

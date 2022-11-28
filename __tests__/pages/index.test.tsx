import { render, screen, waitFor } from '@testing-library/react';
import Home from 'pages';

describe('Home Page', () => {
  it('Should render not found page', async () => {
    render(<Home posts={[]} />);
    await waitFor(() => {
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
  });

  it('Should render Home Page', async () => {
    render(<Home posts={[]} />);
    await waitFor(() => {
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
  });
});

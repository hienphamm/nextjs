import { render, screen, waitFor } from '@testing-library/react';
import Home from 'pages';
import { mockedPosts } from '__mock__/mock';
import { IPost } from 'src/models/post/post';


describe('Home Page', () => {
  it('Should render not found page', async () => {
    render(<Home posts={[]} />);
    await waitFor(() => {
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
  });

  it('Should render Home Page', () => {
    render(<Home posts={mockedPosts as unknown as IPost[]} />);
    expect(screen.getByText('Docker Desktop 1905')).toBeInTheDocument();
  });
});

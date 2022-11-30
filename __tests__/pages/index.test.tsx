import { fireEvent, screen, waitFor } from '@testing-library/react';
import Home from 'pages';
import { mockedPosts } from '__mock__/mock';
import { IPost } from 'src/models/post/post';
import { render } from '__tests__/test-utils/custom-render';

describe('Home Page', () => {
  it('Should render not found page', async () => {
    render(<Home posts={[]} />);
    await waitFor(() => {
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
  });

  it('Should render Home Page', () => {
    render(<Home posts={mockedPosts as unknown as IPost[]} />);
    expect(screen.getByText('Docker Desktop 1904')).toBeInTheDocument();
  });

  it('Should render all the inputs', () => {
    const onClick = jest.fn();
    render(<Home posts={[]} />);
    const element = screen.getByText('Login');
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
    // const email = screen.getByTestId('email');
    // const password = screen.getByTestId('password');
    expect(element).toBeInTheDocument();
    // expect(screen.getByText('Meo Meo')).toBeTruthy();
  });
});

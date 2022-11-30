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
    render(<Home posts={[]} />);
    const element = screen.getByText('Login');
    fireEvent.click(element);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    expect(element).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('Should login success', () => {
    render(<Home posts={[]} />);
    const element = screen.getByText('Login');
    fireEvent.click(element);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    fireEvent.change(email, {
      target: {
        value: 'hienphamm@gmail.com',
      },
    });
    fireEvent.change(password, {
      target: {
        value: '123456',
      },
    });
    const button = screen.getByRole('button', {
      name: 'Login',
    });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

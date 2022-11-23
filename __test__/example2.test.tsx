// import Layout from '@app/components/Layout';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from 'pages';
import NotFound from 'pages/404';

jest.mock('../src/components/Layout.tsx', () => ({
  Layout: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('My Component', () => {
  it('Test mocked function by "jest.fn()"', () => {
    const onMoney = jest.fn();
    render(<Home onMoney={onMoney} />);
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Click me',
      })
    );
    expect(onMoney).toHaveBeenCalledTimes(1);
    expect(onMoney).toHaveBeenCalledWith(33);
  });

  it('Not Found Page', () => {
    const { container } = render(<NotFound />);
    expect(container).toHaveTextContent('Page Not Found');
  });
});

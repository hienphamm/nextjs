// import Layout from '@app/components/Layout';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from 'pages';

jest.mock('@app/components/Layout', () => ({
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

  it("Should open modal when click button 'Login'", () => {
    const element = screen.getByText('Login');
    fireEvent.click(element);
    // expect(Layoutscreen.getByLabelText('Email')).toBeInTheDocument();
  });
});

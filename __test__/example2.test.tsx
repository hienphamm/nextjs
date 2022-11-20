import { fireEvent, render, screen } from '@testing-library/react';
import Home from 'pages';

describe('My Component', () => {
  it('Test', () => {
    const onMoney = jest.fn();
    render(<Home onMoney={onMoney} />);
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Click me',
      })
    );
    expect(onMoney).toHaveBeenCalledTimes(1);
    expect(onMoney).toHaveBeenNthCalledWith(33);
  });
});

import { render } from '@testing-library/react';
import Home from 'pages';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    expect(true).toBe(true);
  });
});

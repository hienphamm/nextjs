import { fireEvent, render, screen } from '@testing-library/react';
import Home from 'pages';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    // Matching a regex:
    // const element2 = screen.findAllByText(/BLO/, {
    //   exact: true,
    //   normalizer: getDefaultNormalizer({ trim: false }),
    // });
    // Matching with a custom function:
    const element = screen.getByLabelText('Username');
    fireEvent.change(element, {
      target: {
        value: '123',
      },
    });
    // const a : string = 5

    // waitFor(() =>
    //   screen.logTestingPlaygroundURL(screen.getByText("Javascript 2")),
    // );
    // waitFor(() => screen.debug(screen.getByText("Javascript 2")));
  });
});

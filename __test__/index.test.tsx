import "@testing-library/jest-dom";
import {
  getDefaultNormalizer,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Home from "pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    // Matching a regex:
    // const element2 = screen.findAllByText(/BLO/, {
    //   exact: true,
    //   normalizer: getDefaultNormalizer({ trim: false }),
    // });
    // Matching with a custom function:
    // const element = screen.getByText("hehe");
    const a: string = 5;

    // waitFor(() =>
    //   screen.logTestingPlaygroundURL(screen.getByText("Javascript 2")),
    // );
    // waitFor(() => screen.debug(screen.getByText("Javascript 2")));
    expect(a).toBe(5);
  });
});

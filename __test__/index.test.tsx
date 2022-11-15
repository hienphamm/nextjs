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
  it("renders a headings", async () => {
    render(<Home />);
    // Matching a regex:
    // const element2 = screen.findAllByText(/BLO/, {
    //   exact: true,
    //   normalizer: getDefaultNormalizer({ trim: false }),
    // });
    // Matching with a custom function:
    const element = screen.findAllByText((content) =>
      content.startsWith("Blog"),
    );
    waitFor(() =>
      screen.logTestingPlaygroundURL(screen.getByText("Javascript 2")),
    );
    waitFor(() => screen.debug(screen.getByText("Javascript 2")));
    waitFor(() => expect(element).toBeInTheDocument());
  });
});

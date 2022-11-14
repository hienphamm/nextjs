import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "pages/about";
import Home from "pages";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);
    waitFor(() => expect(screen.findByRole("button")).not.toBeDisabled());
  });
});

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "pages";
import { getPosts } from "src/services/post";

describe("Home", () => {
  beforeAll(() => console.log("1 - beforeAll"));
  afterAll(() => console.log("1 - afterAll"));
  beforeEach(() => console.log("1 - beforeEach"));
  afterEach(() => console.log("1 - afterEach"));
  it("renders a headings", () => {
    expect(true).toBe(true);
  });
});

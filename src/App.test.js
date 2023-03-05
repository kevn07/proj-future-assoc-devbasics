import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

test("heading should always be there", () => {
  render(<App />);
  const heading = screen.getByText(/Fetch a Pokemon/i);
  expect(heading).toBeInTheDocument();
});

test("page renders correctly", () => {
  render(<App />);
  const page = renderer.create(<App />).toJSON();
  expect(page).toMatchSnapshot();
});

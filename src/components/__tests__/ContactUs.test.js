import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("check rendering in ContactUs page", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("check button text", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
/// it or test is same
// it("should load 2 textboxes",()=>{})
test("check number of text boxes", () => {
  render(<ContactUs />);
  const textbox = screen.getAllByRole("textbox");

  expect(textbox.length).not.toBe(3);
});

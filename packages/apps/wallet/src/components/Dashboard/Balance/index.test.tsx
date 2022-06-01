import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { Balance } from "./index";

describe("Component: Balance", () => {
  const mockProps = {
    value: 12,
  };

  it("renders the balance amount in the correct format", () => {
    render(<Balance {...mockProps} />);

    expect(screen.getByText("A$12.00")).toBeInTheDocument();
  });
});

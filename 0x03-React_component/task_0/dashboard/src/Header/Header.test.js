import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header";
import logo from "../assets/holberton-logo.jpeg";

describe("Header Component Tests", () => {
  it("renders header without crashing", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("app-header");

    expect(headerElement).toBeInTheDocument();
  });

  it("renders logo image", () => {
    render(<Header />);
    const logoElement = screen.getByAltText("logo");

    expect(logoElement).toBeInTheDocument();
    expect(logoElement.src).toContain(logo);
  });

  it("renders title 'School dashboard'", () => {
    render(<Header />);
    const titleElement = screen.getByText("School dashboard");

    expect(titleElement).toBeInTheDocument();
  });
});

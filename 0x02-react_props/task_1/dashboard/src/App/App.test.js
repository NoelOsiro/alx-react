import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");

    expect(appElement).toBeInTheDocument();
  });

  it("renders a div with the class App-header", () => {
    render(<App />);
    const headerElement = screen.getByTestId("app-header");

    expect(headerElement).toBeInTheDocument();
  });

  it("renders a div with the class App-body", () => {
    render(<App />);
    const bodyElement = screen.getByTestId("app-body");

    expect(bodyElement).toBeInTheDocument();
  });

  it("renders a div with the class App-footer", () => {
    render(<App />);
    const footerElement = screen.getByTestId("app-footer");

    expect(footerElement).toBeInTheDocument();
  });
});

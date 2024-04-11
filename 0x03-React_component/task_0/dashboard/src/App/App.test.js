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

  it("does not render CourseList when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);
    const courseListElement = screen.queryByTestId("course-list");

    expect(courseListElement).not.toBeInTheDocument();
  });

  describe("when isLoggedIn is true", () => {
    it("does not include Login component", () => {
      render(<App isLoggedIn={true} />);
      const loginElement = screen.queryByTestId("login");

      expect(loginElement).not.toBeInTheDocument();
    });

    it("includes CourseList component", () => {
      render(<App isLoggedIn={true} />);
      const courseListElement = screen.getByTestId("course-list");

      expect(courseListElement).toBeInTheDocument();
    });
  });
});

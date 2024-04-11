import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer Component Tests", () => {
    it("renders footer without crashing", () => {
        render(<Footer />);
        const footerElement = screen.getByTestId("app-footer");

        expect(footerElement).toBeInTheDocument();
    });

    it("renders current year in footer", () => {
        render(<Footer />);
        const yearElement = screen.getByText(new RegExp(getFullYear()));

        expect(yearElement).toBeInTheDocument();
    });

    it("renders footer copy", () => {
        render(<Footer />);
        const copyElement = screen.getByTestId('app-footer');

        expect(copyElement).toHaveTextContent(getFooterCopy());
    });
});

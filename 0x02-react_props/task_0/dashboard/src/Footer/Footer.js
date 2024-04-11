import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <>
      <div className="App-footer" data-testid="app-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </ >
  );
}

export default Footer;
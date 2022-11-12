import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createServiceRequest } from "./testUtils";

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

describe("Test Cases For Charting -> 312 App ", () => {
  test("(2 pts) Test Chart Component with initial-data.json data", async () => {
    // Go to the Visualize requests
    await userEvent.click(screen.getByText("Visualize requests"));
    // Compare with snapshot with default initial-data.json requests
    expect(
      document.getElementsByClassName("form-contain")[0].innerHTML
    ).toMatchSnapshot();
  });

  test("(3 pts)Test Chart Component After Appending Some Data to the request", async () => {
    // Create a service request
    let iname = "Test Name";
    let isdesc = "Test Short Desc";
    let ilongdesc = "Test Long Description";
    let iemailId = "email@email.com";
    await createServiceRequest(iname, isdesc, ilongdesc, iemailId);

    await userEvent.click(screen.getByText("Visualize requests"));

    // Compare with snapshot after adding one service request
    expect(
      document.getElementsByClassName("form-contain")[0].innerHTML
    ).toMatchSnapshot();
  });
});

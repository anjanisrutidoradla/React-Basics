import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function makeRandomString(lengthOfString) {
  var randomString = "";
  var charactersString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = charactersString.length;
  let i;
  for (i = 0; i < lengthOfString; i++) {
    randomString += charactersString.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return randomString;
}

const randomPoolOfEmailIds = [
  "a@g.com",
  "b@g.com",
  "c@g.com",
  "d@m.com",
  "t@s.com",
];

async function createServiceRequest(iname, isdesc, ilongdesc, iemailId) {
  await userEvent.click(screen.getByText("Home"));
  // Check if on landing screen
  expect(screen.getByText("Welcome to our awesome 311 app.")).toBeDefined();

  // goto the list request and check if the default list is there
  await userEvent.click(screen.getByText("List requests"));

  // Click on the list requests button and go to the create service / add service
  await userEvent.click(screen.getByText("Add request"));

  const inputName = document.getElementById("name");
  await fireEvent.change(inputName, { target: { value: iname } });

  const inputShortDesc = document.getElementById("sdescription");
  await fireEvent.change(inputShortDesc, {
    target: { value: isdesc },
  });

  const inputEmail = document.getElementById("emailId");
  await fireEvent.change(inputEmail, {
    target: { value: iemailId },
  });

  const inputLongDesc = document.getElementById("ldescription");
  await fireEvent.change(inputLongDesc, {
    target: { value: ilongdesc },
  });

  await userEvent.click(screen.getByText("Create Request"));
}

export { makeRandomString, randomPoolOfEmailIds, createServiceRequest };

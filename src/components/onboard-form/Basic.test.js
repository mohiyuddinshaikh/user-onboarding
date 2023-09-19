import { render, screen } from "@testing-library/react";
import ShowForm from "./ShowForm";
import { Provider } from "react-redux";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";

describe("Basic Details Form", () => {
  it("renders initial form", () => {
    render(
      <Provider store={store}>
        <ShowForm />
      </Provider>
    );

    const fullNameInput = screen.getByLabelText(/full name/i);
    const displayNameInput = screen.getByLabelText(/display name/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(fullNameInput).toBeInTheDocument();
    expect(displayNameInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
    expect(createButton).toBeDisabled();
  });

  it("input lights up when focussed", () => {
    render(
      <Provider store={store}>
        <ShowForm />
      </Provider>
    );

    const fullNameInput = screen.getByLabelText(/full name/i);
    const displayNameInput = screen.getByLabelText(/display name/i);

    userEvent.click(fullNameInput);
    expect(document.activeElement).toBe(fullNameInput);
    userEvent.click(displayNameInput);
    expect(document.activeElement).toBe(displayNameInput);
  });

  it("enables button when details entered", () => {
    render(
      <Provider store={store}>
        <ShowForm />
      </Provider>
    );

    const fullNameInput = screen.getByLabelText(/full name/i);
    const displayNameInput = screen.getByLabelText(/display name/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(createButton).toBeDisabled();

    userEvent.type(fullNameInput, "Mohiyuddin Shaikh");
    userEvent.type(displayNameInput, "iammoin46");

    expect(createButton).not.toBeDisabled();
  });
});

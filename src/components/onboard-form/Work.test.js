import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Work from "./Work";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";
import Step from "../stepper/Step";
import Stepper from "../stepper/Stepper";

describe("Work Details form", () => {
  it("displays initial form", () => {
    render(
      <Provider store={store}>
        <Work />
      </Provider>
    );

    const workspaceNameInput = screen.getByLabelText(/workspace name/i);
    const workspaceURLInput = screen.getByLabelText(/workspace url/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(workspaceNameInput).toBeInTheDocument();
    expect(workspaceURLInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
    expect(createButton).toBeDisabled();
  });

  it("submits when only workspace name entered", () => {
    render(
      <Provider store={store}>
        <Work />
      </Provider>
    );

    const workspaceNameInput = screen.getByLabelText(/workspace name/i);
    const workspaceURLInput = screen.getByLabelText(/workspace url/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(createButton).toBeDisabled();
    userEvent.type(workspaceNameInput, "Moin's space");
    expect(createButton).not.toBeDisabled();
  });

  it("does not submit when only workspace URL entered", () => {
    render(
      <Provider store={store}>
        <Work />
      </Provider>
    );

    const workspaceURLInput = screen.getByLabelText(/workspace url/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    userEvent.type(workspaceURLInput, "vegeta123");
    expect(createButton).toBeDisabled();
  });

  it("throws error when invalid URL is added", () => {
    render(
      <Provider store={store}>
        <Work />
      </Provider>
    );

    const workspaceURLInput = screen.getByLabelText(/workspace url/i);
    userEvent.type(workspaceURLInput, "vegeta");
    const errorText = screen.getByText(/must be alphanumeric/i);

    expect(errorText).toBeInTheDocument();
  });

  it("submits when workspace name and proper url entered", () => {
    render(
      <Provider store={store}>
        <Work />
      </Provider>
    );

    const workspaceNameInput = screen.getByLabelText(/workspace name/i);
    const workspaceURLInput = screen.getByLabelText(/workspace url/i);
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(createButton).toBeDisabled();
    userEvent.type(workspaceNameInput, "Moin's space");
    userEvent.type(workspaceURLInput, "vegeta123");
    expect(createButton).not.toBeDisabled();
  });

  it("activates step 1", () => {
    const stepIndex = 1; // Set the step index to 0
    render(
      <Provider store={store}>
        <Stepper />
      </Provider>
    );

    for (let currentIndex = 0; currentIndex <= stepIndex; currentIndex++) {
      console.log("stepIndex", stepIndex);
      const stepElement = screen.getByTestId(`stepper-${currentIndex + 1}`);
      const stepClass = stepElement.getAttribute("class");
      const expectedClass =
        currentIndex <= stepIndex ? "step-active" : "step-inactive";

      expect(stepClass).toContain(expectedClass);
    }
  });
});

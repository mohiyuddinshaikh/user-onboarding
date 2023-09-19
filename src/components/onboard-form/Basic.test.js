import { render, screen } from "@testing-library/react";
import ShowForm from "./ShowForm";
import { Provider } from "react-redux";
import store from "../../redux/store";
import userEvent from "@testing-library/user-event";
import Step from "../stepper/Step";
import Stepper from "../stepper/Stepper";

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

  //   it("activates step 1", () => {
  //     const numberOfSteps = 4;
  //     const stepIndex = 0;
  //     render(
  //       <Provider store={store}>
  //         <Step stepIndex={stepIndex} numberOfSteps={numberOfSteps} />
  //       </Provider>
  //     );

  //     for (let currentIndex = 0; currentIndex <= stepIndex; currentIndex++) {
  //       const circle = screen
  //         ?.queryByTestId(`stepper-${currentIndex + 1}`)
  //         ?.getAttribute("class");

  //       expect(circle).toMatch("step-active");
  //     }
  //   });

  it("activates step 0", () => {
    const stepIndex = 0; // Set the step index to 0
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

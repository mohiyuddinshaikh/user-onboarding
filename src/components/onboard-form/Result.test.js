import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Result from "./Result";

describe("Result page", () => {
  it("renders result page", () => {
    render(
      <Provider store={store}>
        <Result />
      </Provider>
    );

    const welcomeText = screen.getByText(
      /You have completed onboarding, you can start using the Eden/i
    );
    const createButton = screen.getByRole("button", {
      name: /launch eden/i,
    });

    expect(welcomeText).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("allows users to proceed with enabled button", () => {
    render(
      <Provider store={store}>
        <Result />
      </Provider>
    );

    const createButton = screen.getByRole("button", {
      name: /launch eden/i,
    });

    expect(createButton).not.toBeDisabled();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import CollaboratePreference from "./CollaboratePreference";
import store from "../../redux/store";

describe("Collaborative Preference form", () => {
  it("renders initial form", () => {
    render(
      <Provider store={store}>
        <CollaboratePreference />
      </Provider>
    );

    const option1 = screen.queryByTestId("preference-option-0");
    const option2 = screen.queryByTestId("preference-option-1");
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("submits when one of the option is selected", () => {
    render(
      <Provider store={store}>
        <CollaboratePreference />
      </Provider>
    );

    const option1 = screen.queryByTestId("preference-option-0");
    const createButton = screen.getByRole("button", {
      name: /create workspace/i,
    });

    expect(createButton).toBeDisabled();
    userEvent.click(option1);
    expect(createButton).not.toBeDisabled();
  });
});

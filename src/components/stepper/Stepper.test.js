import { render, screen } from "@testing-library/react";
import Stepper from "./Stepper";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Stepper", () => {
  it("renders stepper properly", () => {
    render(
      <Provider store={store}>
        <Stepper />
      </Provider>
    );

    const step1 = screen.queryByTestId("stepper-1");
    const step2 = screen.queryByTestId("stepper-2");
    const step3 = screen.queryByTestId("stepper-3");
    const step4 = screen.queryByTestId("stepper-4");

    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
    expect(step4).toBeInTheDocument();
  });
});

import React from "react";
import classNames from "classnames";
import "../../assets/styles/stepper.scss";
import { useSelector } from "react-redux";

export default function Step(props) {
  const { stepIndex, numberOfSteps } = props;

  const activeStep = useSelector((state) => state.stepper.activeStep);

  const currentIndex = stepIndex + 1;
  return (
    <div className="step-container">
      <div
        className={classNames("step", {
          "step-active": currentIndex <= activeStep,
          "step-inactive": currentIndex > activeStep,
        })}
        data-testid={`stepper-${currentIndex}`}
      >
        {currentIndex}
      </div>
      {currentIndex !== numberOfSteps ? (
        <div
          className={classNames("meter", {
            active: currentIndex <= activeStep,
            inactive: currentIndex > activeStep,
          })}
        >
          <span
            style={{ width: currentIndex < activeStep ? "100%" : "50%" }}
          ></span>
        </div>
      ) : null}
    </div>
  );
}

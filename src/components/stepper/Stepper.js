import React from "react";
import "../../assets/styles/stepper.scss";
import Step from "./Step";

export default function Stepper() {
  const steps = ["Home", "Work", "Collaborate Preference", "Result"];

  return (
    <div className="stepper-container">
      {steps.map((item, index) => {
        return (
          <Step key={index} stepIndex={index} numberOfSteps={steps.length} />
        );
      })}
    </div>
  );
}

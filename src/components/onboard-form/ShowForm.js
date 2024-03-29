import React from "react";
import { useSelector } from "react-redux";
import Basic from "./Basic";
import CollaboratePreference from "./CollaboratePreference";
import Result from "./Result";
import Work from "./Work";

export default function ShowForm() {
  const activeStep = useSelector((state) => state.stepper.activeStep);

  const renderForm = () => {
    switch (activeStep) {
      case 1:
        return <Basic />;

      case 2:
        return <Work />;

      case 3:
        return <CollaboratePreference />;

      case 4:
        return <Result />;

      default:
        return <Basic />;
    }
  };

  return <>{renderForm()}</>;
}

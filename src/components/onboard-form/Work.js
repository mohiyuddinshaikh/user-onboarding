import React, { useState, useRef } from "react";
import "../../assets/styles/onboard.scss";
import { useDispatch } from "react-redux";
import Introduction from "./Introduction";
import * as stepperActions from "../../redux/reducers/stepperSlice";
import * as userOnboardActions from "../../redux/reducers/userOnboardSlice";
import { edenURL } from "../../constants/constants";

export default function Work() {
  const dispatch = useDispatch();
  const workspaceNameRef = useRef(null);
  const workspaceURLRef = useRef(null);
  const [isURLValid, setIsURLValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      workspaceName: workspaceNameRef.current.value,
      workspaceURL: workspaceURLRef.current.value,
    };

    dispatch(userOnboardActions.update(data));
    dispatch(stepperActions.increment());
  }

  function isAlphanumeric(str) {
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    return alphanumericPattern.test(str) && /[0-9]/.test(str);
  }

  const validateInput = (valueA, valueB) => {
    if (!valueA.trim()) {
      return false;
    }
    if (valueB.trim()) {
      return isAlphanumeric(valueB);
    }
    return true;
  };

  function handleInputChange() {
    const isButtonEnabled = validateInput(
      workspaceNameRef?.current?.value,
      workspaceURLRef?.current?.value
    );
    if (!isURLValid && workspaceURLRef?.current?.value === "") {
      setIsURLValid(true);
    } else if (workspaceURLRef?.current?.value) {
      setIsURLValid(isAlphanumeric(workspaceURLRef.current.value));
    }
    document.getElementById("submit-button").disabled = !isButtonEnabled;
  }

  return (
    <div className="step-component-container">
      <Introduction
        title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later."
      />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="workspace-name">Workspace Name</label>
        <input
          type="text"
          id="workspace-name"
          placeholder="Enter Workspace Name"
          required
          ref={workspaceNameRef}
          onChange={handleInputChange}
        />
        <label htmlFor="workspace-url">
          Workspace URL <span>(optional)</span>
        </label>
        <div className="input-adornment-container">
          <div className="input-adornment">
            <span>{edenURL}</span>
          </div>
          <input
            type="text"
            id="workspace-url"
            placeholder="Enter Workspace URL"
            pattern="[a-zA-Z0-9 ]+"
            onInvalid={(e) =>
              e.target.setCustomValidity("Must be alphanumeric")
            }
            ref={workspaceURLRef}
            onChange={handleInputChange}
            className={!isURLValid ? "error" : ""}
          />
        </div>
        {!isURLValid && (
          <span className="error-message">Must be alphanumeric</span>
        )}
        <button type="submit" id="submit-button" disabled>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

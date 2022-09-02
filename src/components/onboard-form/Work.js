import React from "react";
import "../../assets/styles/onboard.scss";
import { useDispatch } from "react-redux";
import Introduction from "./Introduction";
import * as stepperActions from "../../redux/reducers/stepperSlice";
import * as userOnboardActions from "../../redux/reducers/userOnboardSlice";
import { edenURL } from "../../constants/constants";

export default function Work() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const data = {
      workspaceName: elements["workspace-name"].value,
      workspaceURL: edenURL + elements["workspace-url"].value,
    };

    dispatch(userOnboardActions.update(data));
    dispatch(stepperActions.increment());
  }
  return (
    <div className="step-component-container">
      <Introduction
        title="Let's set up a home for all your work"
        subtitle="You can always create another workspace later."
      />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Workspace Name</label>
        <input
          type="text"
          id="workspace-name"
          placeholder="Enter Workspace Name"
          required
        />
        <label>
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
          />
        </div>
        <button type="submit">Create Workspace</button>
      </form>
    </div>
  );
}

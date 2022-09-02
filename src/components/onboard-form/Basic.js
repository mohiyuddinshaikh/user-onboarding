import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/onboard.scss";
import Introduction from "./Introduction";
import * as stepperActions from "../../redux/reducers/stepperSlice";
import * as userOnboardActions from "../../redux/reducers/userOnboardSlice";

export default function Basic() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const data = {
      firstName: elements["first-name"].value,
      displayName: elements["display-name"].value,
    };

    dispatch(userOnboardActions.update(data));
    dispatch(stepperActions.increment());
  }

  return (
    <div className="step-component-container">
      <Introduction
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter Full Name"
          required
        />
        <label>Display Name</label>
        <input
          type="text"
          id="display-name"
          placeholder="Enter Display Name"
          required
        />
        <button type="submit">Create Workspace</button>
      </form>
    </div>
  );
}

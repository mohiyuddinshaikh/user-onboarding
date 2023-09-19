import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/onboard.scss";
import Introduction from "./Introduction";
import * as stepperActions from "../../redux/reducers/stepperSlice";
import * as userOnboardActions from "../../redux/reducers/userOnboardSlice";
import { useRef } from "react";

export default function Basic() {
  const dispatch = useDispatch();
  const firstNameRef = useRef(null);
  const displayNameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      displayName: displayNameRef.current.value,
    };

    dispatch(userOnboardActions.update(data));
    dispatch(stepperActions.increment());
  }

  function handleInputChange() {
    const isButtonDisabled =
      !firstNameRef.current.value || !displayNameRef.current.value;
    document.getElementById("submit-button").disabled = isButtonDisabled;
  }

  return (
    <div className="step-component-container">
      <Introduction
        title="Welcome! First things first..."
        subtitle="You can always change them later."
      />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="first-name">Full Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter Full Name"
          required
          ref={firstNameRef}
          onChange={handleInputChange}
        />
        <label htmlFor="display-name">Display Name</label>
        <input
          type="text"
          id="display-name"
          placeholder="Enter Display Name"
          required
          ref={displayNameRef}
          onChange={handleInputChange}
        />
        <button type="submit" id="submit-button" disabled>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

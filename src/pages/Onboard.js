import React from "react";
import "../assets/styles/onboard.scss";
import Logo from "../assets/images/logo-2.png";
import Stepper from "../components/stepper/Stepper";
import ShowForm from "../components/onboard-form/ShowForm";

export default function Onboard() {
  return (
    <div className="parent-container">
      <div className="content-block">
        <div className="logo-container">
          <img height="50px" width="50px" src={Logo} />
          <span>Eden</span>
        </div>
        <Stepper />
        <ShowForm />
      </div>
    </div>
  );
}

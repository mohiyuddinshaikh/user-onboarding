import React from "react";
import "../../assets/styles/onboard.scss";

export default function Introduction(props) {
  const { title, subtitle, icon } = props;

  return (
    <div className="intro-text">
      {icon ? <div className="icon-container">{icon || ""}</div> : null}
      <div className="title">
        {title || "Let's understand a bit more about you!"}
      </div>
      <div className="subtitle">{subtitle || ""}</div>
    </div>
  );
}

import React from "react";
import classNames from "classnames";

export default function PreferenceOption(props) {
  const { icon, forWhom, description, isActive, handleSelect, optionIndex } =
    props;
  return (
    <div
      className={classNames("pref-option-container", {
        "pref-option-container-active": isActive,
      })}
      onClick={() => handleSelect(optionIndex)}
      key={optionIndex}
      data-testid={`preference-option-${optionIndex}`}
    >
      <div
        className={classNames("icon", {
          "icon-active": isActive,
        })}
      >
        {icon}
      </div>
      <div className="title">{forWhom}</div>
      <div className="description">{description}</div>
    </div>
  );
}

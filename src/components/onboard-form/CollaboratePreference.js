import React, { useState } from "react";
import Introduction from "./Introduction";
import { RiTeamFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import PreferenceOption from "./PreferenceOption";
import { useDispatch } from "react-redux";
import * as stepperActions from "../../redux/reducers/stepperSlice";
import * as userOnboardActions from "../../redux/reducers/userOnboardSlice";

const options = [
  {
    forWhom: "For myself",
    description: "Write better. Think more clearly. Stay organized",
    icon: <BsFillPersonFill />,
  },
  {
    forWhom: "With my team",
    description: "Wikis, docs, tasks & projects, all in one place",
    icon: <RiTeamFill />,
  },
];

export default function CollaboratePreference() {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(null);

  const handleSelect = (index) => {
    setIsActive(index);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (isActive === null) {
      alert("Please select one option");
      return;
    }

    const data = {
      collaboratePreference: isActive,
    };
    dispatch(userOnboardActions.update(data));
    dispatch(stepperActions.increment());
  }

  return (
    <div className="step-component-container">
      <Introduction
        title="How are you planning to use Eden"
        subtitle="We'll streamline your setup experience accordingly."
      />
      <div className="preference-container">
        <form onSubmit={handleSubmit}>
          <div className="options-container">
            {options.map((item, index) => {
              return (
                <PreferenceOption
                  forWhom={item?.forWhom}
                  description={item?.description}
                  icon={item?.icon}
                  isActive={isActive === index}
                  optionIndex={index}
                  handleSelect={handleSelect}
                />
              );
            })}
          </div>
          <button type="submit">Create Workspace</button>
        </form>
      </div>
    </div>
  );
}

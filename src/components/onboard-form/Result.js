import React from "react";
import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import Introduction from "./Introduction";

export default function Result() {
  const user = useSelector((state) => state.user);

  const Title = () => {
    return (
      <div className="result-title">
        Congratulations, <span>{user?.displayName || "Member"}</span>!
      </div>
    );
  };

  return (
    <div className="step-component-container">
      <Introduction
        title={<Title />} // Using a separate component because literal strings won't capitalize name.
        subtitle="You have completed onboarding, you can start using the Eden!"
        icon={<BsCheck />}
      />
      <form>
        <button type="submit">Launch Eden</button>
      </form>
    </div>
  );
}

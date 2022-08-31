import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/userOnboardSlice";
import "../assets/styles/onboard.scss";

export default function Onboard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log("user", user);

  return (
    <div className="main">
      Onboard <button onClick={() => dispatch(increment())}>Inc</button>{" "}
    </div>
  );
}

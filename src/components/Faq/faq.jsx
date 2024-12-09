/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Question } from "../Question";
import "./style.css";

export const Faq = ({
  stateProp,
  className,
  onClick,
  divider = "https://c.animaapp.com/8De8XXjR/img/divider-13.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "closed",
  });

  return (
    <div className={`faq ${state.state} ${className}`} onClick={onClick}>
      {state.state === "closed" && (
        <div className="headline-button">
          <Question
            className="question-instance"
            divClassName="instance-node"
            text="What is GroupGuru?"
          />
          <img
            className="button-drop"
            alt="Button drop"
            src="https://c.animaapp.com/8De8XXjR/img/button-drop-125@2x.png"
          />
        </div>
      )}

      {state.state === "open" && (
        <>
          <div className="headline-button-2">
            <Question
              className="question-instance"
              divClassName="instance-node"
              text="What is GroupGuru?"
            />
            <img
              className="button-drop"
              alt="Button drop"
              src="https://c.animaapp.com/8De8XXjR/img/button-drop-118@2x.png"
            />
          </div>

          <img className="divider" alt="Divider" src={divider} />

          <p className="p">
            We can help organize a wide range of events, including corporate
            meetings, conferences, dealership meetings, product launches,
            training sessions, team-building retreats, corporate parties, and
            even private events like anniversaries or milestone celebrations.
            Whatever your event needs, we partner with resorts and hotels
            equipped to cater to them.
          </p>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "closed") {
    switch (action) {
      case "click":
        return {
          state: "open",
        };
    }
  }

  if (state.state === "open") {
    switch (action) {
      case "click":
        return {
          state: "closed",
        };
    }
  }

  return state;
}

Faq.propTypes = {
  stateProp: PropTypes.oneOf(["closed", "open"]),
  divider: PropTypes.string,
};

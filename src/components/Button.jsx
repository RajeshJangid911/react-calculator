import React from "react";
import "./Button.css";

const isOperator = val => {
  return (
    !isNaN(val) || val === "." || val === "=" || val === "(" || val === ")"
  );
};

const Button = props => (
  <div
    className={
      isOperator(props.children) ? "button-wrapper" : "button-wrapper operator"
    }
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;

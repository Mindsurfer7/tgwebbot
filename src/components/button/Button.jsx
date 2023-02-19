import React from "react";
import buttonCSS from "./";

const Button = (props) => {
  return <button {...props} className={buttonCSS}></button>;
};
export default Button;

import React from "react";
import "./button.css";

const CustomButton = props => {
  const { title, click } = props;
  return <button onClick={click}>{title}</button>;
};

export default CustomButton;

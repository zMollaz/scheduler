import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
  const { confirm, onClick, disabled, danger, children } = props;
  const buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger,
  });

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
}

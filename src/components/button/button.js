import React from "react";
import s from "./style.module.scss";

export default function Button({ text, style, disabled, type, handler }) {
  return (
    <button
      style={style}
      className={s.btn}
      disabled={disabled}
      type={type}
      onClick={handler}
    >
      {text}
    </button>
  );
}

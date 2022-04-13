import React from "react";
import s from "./style.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import Button from "../button/button";

export default function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <Logo />
        <div className={s.btnGroup}>
          <Button text="Users"></Button>
          <a href="#SignUp">
            <Button text="Sign up" />
          </a>
        </div>
      </div>
    </header>
  );
}

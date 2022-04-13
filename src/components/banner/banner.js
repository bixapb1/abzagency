import React from "react";
import Button from "../button/button";
import s from "./style.module.scss";

export default function Banner() {
  return (
    <div className={s.bg}>
      <div className={s.container}>
        <h1 className="title">Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a href="#SignUp">
          <Button text="Sign up" />
        </a>
      </div>
    </div>
  );
}

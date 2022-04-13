import React from "react";
import s from "./style.module.scss";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
const BlackToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Card({ user }) {
  const { id, email, name, phone, photo, position } = user;
  return (
    <>
      <div id={id} className={s.card}>
        <div className={s.avatar}>
          <img src={photo} alt={name} />
        </div>

        <div>
          <BlackToolTip title={name}>
            <span>{name}</span>
          </BlackToolTip>
        </div>
        <div className={s.infoUser}>
          <BlackToolTip title={position}>
            <span>{position}</span>
          </BlackToolTip>
          <BlackToolTip title={email}>
            <span>{email}</span>
          </BlackToolTip>
          <BlackToolTip title={phone}>
            <span>{phone}</span>
          </BlackToolTip>
        </div>
      </div>
    </>
  );
}

import React from "react";
import s from "./style.module.scss";
import Button from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Box,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material/";
import {
  setEmail,
  setidPosition,
  setName,
  setPhone,
  setPhoto,
  sendUser,
} from "../../redux/action";

const Field = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00BDD3",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#00BDD3",
    },
  },
});

export default function Form() {
  const dispatch = useDispatch();
  const { name, phone, email, positions, validation } = useSelector(
    (state) => state
  );

  return (
    <>
      <Box component="form" className={s.form} noValidate autoComplete="off">
        <Field
          error={validation.name ? true : false}
          className={s.field}
          id="name"
          label="Your name"
          onChange={(event) => dispatch(setName(event.target.value))}
          helperText={validation.name ? validation.name[0] : false}
        />
        <Field
          error={validation.email ? true : false}
          className={s.field}
          id="email"
          label="Email"
          onChange={(event) => dispatch(setEmail(event.target.value))}
          helperText={validation.email ? validation.email[0] : false}
        />
        <Field
          error={validation.phone ? true : false}
          className={s.field}
          id="phone"
          label="Phone"
          onChange={(event) => dispatch(setPhone(event.target.value))}
          helperText={
            validation.phone ? validation.phone[0] : "+38 (XXX) XXX - XX - XX"
          }
        />

        <FormLabel
          sx={{ display: "flex", padding: "25px 0 11px" }}
          id="position"
        >
          Select your position
        </FormLabel>
        <RadioGroup
          name="position"
          defaultValue={1}
          onChange={(event) => dispatch(setidPosition(event.target.value))}
        >
          {positions.map((position) => (
            <FormControlLabel
              key={position.id}
              value={position.id}
              control={
                <Radio
                  sx={{
                    color: " #00BDD3",
                    "&.Mui-checked": {
                      color: "#00BDD3",
                    },
                  }}
                />
              }
              label={position.name}
            />
          ))}
        </RadioGroup>
        <UploadWidget />
        <Button
          handler={() => dispatch(sendUser())}
          style={{ margin: "50px 0 100px 0" }}
          text="Sign up"
          disabled={Boolean(!name.length || !email.length || !phone.length)}
          type="button"
        />
      </Box>
    </>
  );
}

function UploadWidget() {
  const dispatch = useDispatch();
  const { photo, validation } = useSelector((state) => state);
  return (
    <>
      <div className={s.uploadGroup}>
        <input
          onChange={(event) => dispatch(setPhoto(event.target.files[0]))}
          id="upload"
          name="upload"
          type="file"
          hidden
        />
        <label
          className={s.uploadBtn}
          htmlFor="upload"
          style={
            validation.photo
              ? {
                  border: "2px solid rgba(203, 61, 64, 1)",
                  borderRight: "none",
                }
              : {}
          }
        >
          Upload
        </label>
        <span
          className={s.fileChosen}
          style={
            validation.photo
              ? {
                  border: "2px solid rgba(203, 61, 64, 1)",
                }
              : {}
          }
        >
          {photo ? photo.name : "Upload your photo"}
        </span>
      </div>
      {validation.photo
        ? validation.photo.map((e, id) => {
            return (
              <FormHelperText
                key={id}
                children={e}
                error
                sx={{ margin: "3px 14px 0 14px" }}
              />
            );
          })
        : ""}
    </>
  );
}

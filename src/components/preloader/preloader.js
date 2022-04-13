import React from "react";
import { CircularProgress, Box } from "@mui/material";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "254px",
};

export default function Preloader() {
  return (
    <>
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <Box sx={style}>
        <CircularProgress />
      </Box>
      <Box sx={style}>
        <CircularProgress />
      </Box>
    </>
  );
}

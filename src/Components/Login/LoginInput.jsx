import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AiOutlineMail } from "react-icons/ai";

function LoginInput(props) {
  <Box sx={{ py: 1, display: "flex" }}>
    {props.icon}
    <TextField
      id="filled-basic"
      label="{props.label}"
      variant="standard"
      sx={{ borderBottom: "0px", width: "100%" }}
      size="large"
    />
  </Box>;
}

export default LoginInput;

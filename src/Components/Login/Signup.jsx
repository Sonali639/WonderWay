import React from "react";
import Login from "./Login";
import Box from "@mui/material/Box";
import { AiOutlineLogin } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import {CiMail} from "react-icons/ci";

function Signup() {
  const [openLogin, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
    console.log("User logged in!");
    console.log(openLogin);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("logout");
  };
  const title = "Sign Up";
  const btntext = "Create Account";
  const data = [
    {
      id: 2,
      label: "Email",
      icon: (
        <CiMail style={{ paddingTop: "20px", paddingRight: "15px" ,fontSize:"20px"  }} />
      ),
    },
    {
      id: 1,
      label: "Username",
      icon: (
        <CiUser style={{ paddingTop: "20px", paddingRight: "15px" ,fontSize:"20px" }} />
      ),
    },
    {
      id: 3,
      label: "Password",
      icon: (
        <CiLock style={{ paddingTop: "20px", paddingRight: "15px",fontSize:"20px"  }} />
      ),
    },
  ];
  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <AiOutlineLogin style={{ marginRight: "10px" }} />
        Signup
      </Box>
      <Login
        open={openLogin}
        handleClose={handleClose}
        fields={data}
        title={title}
        btntext={btntext}
      />
    </Box>
  );
}

export default Signup;

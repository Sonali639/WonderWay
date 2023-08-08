import React from "react";
import Login from "./Login";
import Box from "@mui/material/Box";
import { FiUserCheck } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import {CiMail} from "react-icons/ci";


function Loginbtn() {
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
  const title = "Login";
  const btntext = "Login";
  const data = [
    {
      id: 1,
      label: "Email",
      icon: (
        <CiMail style={{ paddingTop: "20px", paddingRight: "15px",fontSize:"20px" }} />
      ),
    },

    {
      id: 2,
      label: "Password",
      icon: (
        <CiLock style={{ paddingTop: "20px", paddingRight: "15px" ,fontSize:"20px" }} />
      ),
    },
  ];
  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <FiUserCheck style={{ marginRight: "10px" }} />
        Login
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

export default Loginbtn;

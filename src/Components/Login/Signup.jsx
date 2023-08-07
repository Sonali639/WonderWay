import React from "react";
import Login from "./Login";
import Box from "@mui/material/Box";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

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
        <AiOutlineMail style={{ paddingTop: "20px", paddingRight: "15px" }} />
      ),
    },
    {
      id: 1,
      label: "Username",
      icon: (
        <GrContactInfo style={{ paddingTop: "20px", paddingRight: "15px" }} />
      ),
    },
    {
      id: 3,
      label: "Password",
      icon: (
        <AiOutlineMail style={{ paddingTop: "20px", paddingRight: "15px" }} />
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

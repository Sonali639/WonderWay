import React from "react";
import Login from "./Login";
import Box from "@mui/material/Box";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

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
        <AiOutlineMail style={{ paddingTop: "20px", paddingRight: "15px" }} />
      ),
    },

    {
      id: 2,
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

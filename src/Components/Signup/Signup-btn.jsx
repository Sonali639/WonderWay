import React from "react";
import Login from "./Signup";
import Box from "@mui/material/Box";
import { AiOutlineLogin } from "react-icons/ai";

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
  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <AiOutlineLogin style={{ marginRight: "10px" }} />
        Signup
      </Box>
      <Login open={openLogin} handleClose={handleClose} />
    </Box>
  );
}

export default Loginbtn;

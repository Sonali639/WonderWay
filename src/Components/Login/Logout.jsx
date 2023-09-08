import React from "react";
import Box from "@mui/material/Box";
import { FiUserCheck } from "react-icons/fi";
import { logout } from "../../redux/LoginSignup/losiAction";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      <Box onClick={handleLogout}>
        <FiUserCheck style={{ marginRight: "10px" }} />
        Logout
      </Box>
    </Box>
  );
}

export default Logout;

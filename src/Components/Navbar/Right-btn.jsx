import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CgProfile } from "react-icons/cg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Loginbtn from "../Login/Loginbtn";
import Signup from "../Login/Signup";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

import Logout from "../Login/Logout";
import { useSelector } from "react-redux";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Rightbtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isauth = useSelector((state) => state.losi.isauth);

  return (
    <Box sx={{ display: "flex" }}>
      <Wishlistbtn />
      <CgProfile
        style={{ fontSize: "28px", color: "#353535", cursor: "pointer" }}
        id="demo-customized-button"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls={open ? "demo-customized-menu" : undefined}
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Divider sx={{ my: 0.5, display: { xs: "", md: "none" } }} />

        {!isauth ? (
          <>
            <MenuItem disableRipple sx={{ "&:hover": { color: "black" } }}>
              <Signup />
            </MenuItem>
            <Divider sx={{ my: 0.5, display: { xs: "flex", md: "flex" } }} />
            <MenuItem disableRipple sx={{ "&:hover": { color: "black" } }}>
              <Loginbtn />
            </MenuItem>
          </>
        ) : (
          <>
            {" "}
            <MenuItem disableRipple sx={{ "&:hover": { color: "black" } }}>
              <Logout />
            </MenuItem>
          </>
        )}
      </StyledMenu>
    </Box>
  );
}

function Wishlistbtn() {
  return (
    <Box sx={{ pr: 2 }}>

      
      <Link to="/wishlist">
        <IoMdHeartEmpty
          style={{ fontSize: "28px", color: "#c60649", cursor: "pointer" }}
          id="demo-customized-button"
          aria-haspopup="true"
        />
      </Link>
    </Box>
  );
}

export default Rightbtn;
export { Wishlistbtn };

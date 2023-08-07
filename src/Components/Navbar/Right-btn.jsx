import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CgProfile } from "react-icons/cg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineLogin } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import Divider from "@mui/material/Divider";
import { HiOutlineHome } from "react-icons/hi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import Loginbtn from "../Login/Loginbtn";
import Signup from "../Login/Signup";

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

const menuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 3,
    title: "Tours",
    url: "/tours",
    icon: <MdOutlineTravelExplore />,
  },
  {
    id: 4,
    title: "Gallery",
    url: "/Images",
    icon: <TfiGallery />,
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
    icon: <BsTelephoneForward />,
  },
];

export default function Rightbtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Divider sx={{ my: 0.5 }} />
          {menuItems.map((item) => (
            <MenuItem
              onClick={handleClose}
              key={item.id}
              disableRipple
              sx={{ "&:hover": { color: "red" } }}
            >
              <Box sx={{ pr: 2 }}>{item.icon}</Box>
              {item.title}
            </MenuItem>
          ))}
        </Box>
        <Divider sx={{ my: 0.5, display: { xs: "", md: "none" } }} />
        <MenuItem disableRipple sx={{ "&:hover": { color: "black" } }}>
          <Signup/>
        </MenuItem>
        <Divider sx={{ my: 0.5, display: { xs: "none", md: "flex" } }} />
        <MenuItem disableRipple sx={{ "&:hover": { color: "black" } }}>
          <Loginbtn />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

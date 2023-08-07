import React from 'react'
import Logo from './Logo'
import Rightbtn from './Right-btn'
import Box from '@mui/material/Box';
import Menu from './Menu'

function Navbar() {
  return (
    <Box sx={{px:4, py:3 ,display:'flex', justifyContent:"space-between" , borderBottom:"2px solid #e6e6e6"}}>
      <Logo />

      <Menu/>
      <Rightbtn/>
      {/* <Divider sx={{pb:2}}/> */}
    </Box>
  )
}

export default Navbar;


import React from 'react'
import Logo from './Logo'
import Rightbtn from './Right-btn'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Navbar() {
  return (
    <Box sx={{px:4, pt:2 ,display:'flex', justifyContent:'space-between'}}>
      <Logo/>

      <Rightbtn/>
      <Divider sx={{pb:2}}/>
    </Box>
  )
}

export default Navbar


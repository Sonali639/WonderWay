import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../image/logo.jpg';

function Logo() {
  return (
    <Box>
        <Typography variant="h5" component="h2">
      
      <img
     
      src={logo}
        alt={logo}
        loading="lazy"
             style={{ width: '100px', height: 'auto' }}
      />
   
</Typography>
    </Box>
  )
}

export default Logo

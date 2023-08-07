import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Menu() {
  const menuItems = [
    {
      id:1,
      title:'Home',
      url:'/'
    },
    {
      id:2,
      title:'About',
      url:'/about'
    },
    {
      id:3,
      title:'Tours',
      url:'/tours'
    },
    {
      id:4,
      title:'Images',
      url:'/Images'
    },
    {
      id:5,
      title:'Contact',
      url:'/contact'
    }
  ]
  return (
    <>
    <Box sx={{ display:{ xs: 'none', md: 'flex' }, justifyContent:'space-between' }}>
      <Stack direction="row" spacing={2}>
        {menuItems.map((item) => (
          <Typography key={item.id}  sx={{ fontWeight: "500",fontSize:"18px", cursor:'pointer' , px:3  ,'&:hover': {color: 'red'},}}>{item.title}</Typography>
        ))}
      </Stack>
    </Box>

   
    </>
  )
}

export default Menu

import React from 'react'
import Cards from './Cards'
import Box from '@mui/material/Box';




function Tourlist() {
  return (
    <Box sx={{px:2, pt:4}}>

        <Cards/>
       
        {/* <Grid container spacing={1}>
  <Grid item xs={3}>
    <Item><Cards/></Item>
  </Grid>
  <Grid item xs={3}>
    <Item><Cards/></Item>
  </Grid>
  <Grid item xs={3}>
    <Item><Cards/></Item>
  </Grid>
  <Grid item xs={3}>
    <Item><Cards/></Item>
  </Grid>
</Grid> */}
        
    </Box>
  )
}

export default Tourlist

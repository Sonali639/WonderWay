import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsFillSuitHeartFill } from "react-icons/bs";
import data from "./Tourlist-details"; // Correct the import path
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

function Cards() {
  return (
    <Box>
         <Grid container spacing={1}>
      {data.map((item, index) => ( // Added a div wrapper for the mapping
       <Grid item xs={3}>
       <Item>
        <Box
          key={index}
          sx={{ py:2, px: 2, position: "relative" }}
        >
          <img
            className='border-radius-15px'
            style={{ borderRadius: '5%', objectFit: "cover" }}
            src={item.img}
            loading="lazy" width="292px" height="263px"
          />
          <div className='text-overlay' style={{ position: 'absolute', top: 40, right: 27 }}>
            <BsFillSuitHeartFill style={{ fontSize: "20px" }} />
          </div>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
          <Typography variant="body1" color={'#717171'} sx={{ lineHeight: "1.4", fontWeight: "200" }}>{item.desc}<br />{item.date}</Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>${item.price} <span style={{ fontWeight: "200", color: "#717171" }}>Night</span></Typography>
        </Box>
        </Item>
     </Grid>
      ))}
      </Grid> 
    </Box>
  );
}

export default Cards;


import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Cards } from "./Cards";
import Typography from "@mui/material/Typography";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsHearts } from "react-icons/bs";
import empty from '../image/empty.png'

function Wishlist(props) {
  console.log(props.data);
  function toggleLike(index, isLiked) {
    props.data[index].isLiked = isLiked;
    console.log(props.data[index]);
  }

  return (
    <Box sx={{ px: 3 }}>
    <Box sx={{ textAlign: "center", pt: 4 }}>
      <Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        sx={{ color: "grey" }}
      >
        <Link to="/"> HOME </Link> / WISHLIST <IoMdHeartEmpty size={18} />
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          pt: 1.5,
          fontWeight: "600",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          color: "#272635",
        }}
      >
        My Wishlist <BsHearts fill="#C60649" />
      </Typography>
    </Box>
    {props.data.some((item) => item.isLiked) ? (
      <Grid container spacing={2}>
        {props.data.map(
          (item, index) => item.isLiked && Cards(item, index, toggleLike)
        )}
      </Grid>
    ) : (
      <Box sx={{textAlign:"center" ,pt: 2,}}>
        <img
     
     src={empty}
       alt={empty}
       loading="lazy"
            style={{ width: '100px', height: 'auto' }}
     />
      <Typography
        variant="h5"
        sx={{ textAlign: "center",pt:4, color: "#808080" }}
      >
        Your Wishlist is empty.
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "center",py:2, color: "#808080" }}
      >
        Explore More and Shortlist Ssome Tours
      </Typography>
      </Box>
    )}
  </Box>
  );
}

export default Wishlist;

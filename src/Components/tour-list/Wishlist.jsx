import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Cards } from "./Cards";

function Wishlist(props) {
  console.log(props.data);
  function toggleLike(index, isLiked) {
    props.data[index].isLiked = isLiked;
    console.log(props.data[index]);
  }

  return (
    <Box>
      <h2>Wishlist</h2>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {props.data.map(
            (item, index) => item.isLiked && Cards(item, index, toggleLike)
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Wishlist;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Cards } from "./Cards";
import Typography from "@mui/material/Typography";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsHearts } from "react-icons/bs";
import { removeFromWishlist } from "../../redux/wishlist/wishlistAction/index";
import { useSelector } from "react-redux";

import empty from "../image/empty.png";

function Wishlist() {
  const likedTour = useSelector((state) => state.wishlist.items);

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
      {likedTour.length !== 0 ? (
        <Grid container spacing={2}>
          {likedTour.map((item, index) => Cards(item, index))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", pt: 2 }}>
          <img
            src={empty}
            alt={empty}
            loading="lazy"
            style={{ width: "100px", height: "auto" }}
          />
          <Typography
            variant="h5"
            sx={{ textAlign: "center", pt: 4, color: "#808080" }}
          >
            Your Wishlist is empty.
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", py: 2, color: "#808080" }}
          >
            Explore More and Shortlist Ssome Tours
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Wishlist;

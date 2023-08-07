import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Cards } from "./Cards";

function Wishlist() {
//   const [Card, setMyCards] = useState([]);
  const wishlistData = [
    {
      id: 1,
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-46651958/original/ae60e9f7-5d52-454a-be04-4e608a7e3e21.jpeg?im_w=720",
      title: "Khikhim , India",
      desc: "28 kilometers away",
      date: "10-19 july",
      price: "50,000",
    },
    {
      id: 2,
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-811987356556037839/original/1282158c-b273-4a8d-b3ed-2d9841fb3247.jpeg?im_w=720",
      title: "Manipur , India",
      desc: "28 kilometers away",
      date: "10-19 july",
      price: "50,000",
    },
  ];
  return (
    <Box>
      <Grid container spacing={1}>
        {wishlistData.map(Cards)}
      </Grid>
    </Box>
  );
}

export default Wishlist;

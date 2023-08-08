import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsFillSuitHeartFill } from "react-icons/bs";
import data from "./Tourlist-details"; // Correct the import path
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Wishlist from "./Wishlist";


function Cards(props, index, addLike) {
  const [isLiked, setIsLiked] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState([]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  function toggleWishlist(title) {
    if (isInWishlist.includes(title)) {
      setIsInWishlist(isInWishlist.filter((item) => item !== title));
    } else {
      setIsInWishlist([...isInWishlist, title]);
    }
  }
  return (
    <Grid item xs={12} md={3} key={index}>
      <Item>
        <Box sx={{ py: 2, px: 1 }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              sx={{ borderRadius: "5%", objectFit: "cover" }}
              component="img"
              alt={props.title}
              height="285px"
              width="100%"
              image={props.img}
            />

            <Box
              className="text-overlay"
              style={{ position: "absolute", top: 28, right: 26 }}
              onClick={() => {
                toggleLike();
                toggleWishlist();
              }}
            >
              <BsFillSuitHeartFill
                style={{
                  fontSize: "20px",
                  color: props.isLiked ? "red" : "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  addLike(index, !isLiked);
                  setIsLiked(!isLiked);
                }}
              />
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            color={"#717171"}
            sx={{ lineHeight: "1.4", fontWeight: "200" }}
          >
            {props.desc}
            <br />
            {props.date}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ${props.price}{" "}
            <span style={{ fontWeight: "200", color: "#717171" }}>Night</span>
          </Typography>
        </Box>
      </Item>
    </Grid>
  );
}

function AddWishList() {
  console.log(data);
  return <Wishlist data={data} />;
}

function CardsInfo() {
  function toggleLike(index, isLiked) {
    data[index].isLiked = isLiked;
    console.log(data[index]);
  }

  return (
    <Box>
      <Grid container spacing={1}>
        {data.map((item, index) => Cards(item, index, toggleLike))}
      </Grid>
    </Box>
  );
}

export default CardsInfo;
export { Cards, AddWishList };

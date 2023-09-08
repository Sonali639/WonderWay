import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsFillSuitHeartFill } from "react-icons/bs";
import data from "./Tourlist-details"; // Correct the import path
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Wishlist from "./Wishlist";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/wishlist/wishlistAction/index";

function Cards(props) {
  const [isLiked, setIsLiked] = useState(false);

  const likedTour = useSelector((state) => state.wishlist.items);
  const isauth = useSelector((state) => state.losi.isauth);
  const dispatch = useDispatch();


  return (
    <Grid item xs={12} md={3} key={props.id}>
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
            >
              <BsFillSuitHeartFill
                style={{
                  fontSize: "20px",
                  color: likedTour.includes(props) ? "#c60649" : "black",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (isauth===true) {
                  likedTour.includes(props)
                    ? dispatch(removeFromWishlist(props))
                    : dispatch(addToWishlist(props));
                  setIsLiked(!isLiked);
                }
                else{
                  alert("Please Login to add to wishlist")
                }
              }}
              />
            </Box>
          </Box>
          <Link
            to={`/TourDetails`}
            style={{ textDecoration: "none", color: "black" }}
          >
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
          </Link>
        </Box>
      </Item>
    </Grid>
  );
}

function AddWishList() {
  return <Wishlist />;
}

function CardsInfo() {
  return (
    <Box>
      <Grid container spacing={1}>
        {data.map((item) => Cards(item))}
      </Grid>
    </Box>
  );
}

export default CardsInfo;
export { Cards, AddWishList };

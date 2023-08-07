import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsFillSuitHeartFill } from "react-icons/bs";
import data from "./Tourlist-details"; // Correct the import path
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

function Cards(props, index) {
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

            <div
              className="text-overlay"
              style={{ position: "absolute", top: 28, right: 26 }}
            >
              <BsFillSuitHeartFill style={{ fontSize: "20px" }} />
            </div>
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

function CardsInfo() {
  return (
    <Box>
      <Grid container spacing={1}>
        {data.map(Cards)}
      </Grid>
    </Box>
  );
}

export default CardsInfo;
export { Cards };

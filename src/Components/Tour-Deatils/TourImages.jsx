import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import TourDetailsData from "./Tour-detail-Data";


export default function TourImage() {
  const data=TourDetailsData[0];
  return (
    <Box>
       <Grid container spacing={1} sx={{py:3}} >
        <Grid item xs={6}>
          <CardMedia
            component="img"
            // alt={props.title}
            height="316px"
            width="100%"
            image={data.img1}
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Item>
                <CardMedia
            component="img"
            // alt={props.title}
            height="154px"
            width="100%"
            image={data.img2}
          />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
            component="img"
            // alt={props.title}
            height="154px"
            width="100%"
            image={data.img3}
          />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
            component="img"
            // alt={props.title}
            height="154px"
            width="100%"
            image={data.img4}
          />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
            component="img"
            // alt={props.title}
            height="154px"
            width="100%"
            image={data.img5}
          />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
    )}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
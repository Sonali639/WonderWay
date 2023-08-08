import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ConfBox from "./ConfBox";
import { GoShare } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import TourDetailsData from "./Tour-detail-Data";
import { GiMountains } from "react-icons/gi";

const data = TourDetailsData[0];

function TourDescInfo() {
  return (
    <Box>
      <Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign:'center' }}>
          {data.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontWeight: "bold", mb: { xs: 1, sm: 0 } }}
          >
            {data.loc}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              ml: { xs: 0, sm: "auto" },
              mt: { xs: 1, sm: 0 },
            }}
          >
            <GoShare style={{ paddingRight: "5px" }} /> Share{" "}
            <span style={{ marginRight: "25px" }} />{" "}
            <GoHeart style={{ paddingRight: "5px" }} /> Save
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function AboutTourDesc() {
  return (
    <Box>
      <Grid container spacing={2} sx={{ pb: 5 }}>
        <Grid item xs={12} md={8}>
          <Item>
            <Box gridColumn="span 8">
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "200", pb: 3 }}
              >
                {data.guest} guests | {data.bedroom} bedrooms | {data.bed} beds
                | {data.bathroom} bathrooms
              </Typography>

              <Divider />
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "200", py: 2 }}
              >
                {data.aboutTour}
              </Typography>
              <Divider />

              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "200", pt: 4, pb: 2 }}
              >
                What this place offers
              </Typography>
              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place1}</Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place2}</Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place3}</Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place4}</Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place5}</Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <Item>{data.place6}</Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <ConfBox sx={{ fix: 1 }} />
          </Item>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="h5" sx={{ pt: 5 }}>
        Where you’ll be
      </Typography>
      <Typography variant="body1" sx={{ pt: 1 }}>
        {data.loc}
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.423026693268!2d77.98759916773626!3d30.305283184178247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a47c1e4f42d%3A0x5485f37cd783ee42!2sSeema%20Dwar%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1635773741582!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, paddingTop: "20px", paddingBottom: "40px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </Box>
  );
}

export default TourDescInfo;
export { AboutTourDesc };

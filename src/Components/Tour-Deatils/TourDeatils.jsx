import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TourDescInfo, {AboutTourDesc} from './TourDescInfo';
import TourImages from './TourImages';



function TourDeatils() {
  return (
    <Box sx={{pt:5}}>
         <Container >
            < TourDescInfo />
            <TourImages />
            <AboutTourDesc/>
            
         </Container>
     
    </Box>
  )
}

export default TourDeatils

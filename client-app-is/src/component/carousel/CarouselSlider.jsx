import React from "react";
import { Box, MobileStepper } from '@mui/material';
import { ItemCarouselImage } from "./ItemCarouselImage";
import { ItemCarouselDetail } from "./ItemCarouselDetail";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function  CarouselSlider ({theme, themes, activeStep, setActiveStep,slider, maxSteps}) {
    return(

        <Box sx={{width:'100%'}}>
            <ItemCarouselImage themes={themes} activeStep={activeStep} setActiveStep={setActiveStep} slider={slider}/> 
            <ItemCarouselDetail theme={theme} activeStep={activeStep } slider={slider}/>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ 
                    justifyContent: 'center',
                }}
            />
        </Box>
        
    )
}
export {CarouselSlider}
import React from "react";
import { Box, MobileStepper } from '@mui/material';
import { ItemCarouselImage } from "./ItemCarouselImage";
import { ItemCarouselDetail } from "./ItemCarouselDetail";


function  Carousel ({theme, themes, activeStep, setActiveStep,images, maxSteps}) {
    
    return(
        <Box sx={{width:'100%'}}>
            <ItemCarouselImage themes={themes} activeStep={activeStep} setActiveStep={setActiveStep} images={images}/> 
            <ItemCarouselDetail theme={theme} activeStep={activeStep } images={images}/>
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
export {Carousel}
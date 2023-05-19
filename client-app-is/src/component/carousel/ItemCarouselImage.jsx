import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function  ItemCarouselImage ({themes,activeStep,setActiveStep,images}) {
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return(
        <AutoPlaySwipeableViews
            Height={'100%'}
            axis={themes.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
        {images.map((img, index) => (
            <div 
            
            key={img.name}>
            {Math.abs(activeStep - index) <= 0 ? (
                <>
                    <Box
                    component="img"
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        height:'256px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={img.imgPath}
                    alt={img.name}
                    />
                    <Box
                    component="img"
                    sx={{
                        display: { xs: 'none', sm: 'block', md: 'none' },
                        height:'336px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={img.imgPath}
                    alt={img.name}
                    />
                    <Box
                    component="img"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        height:'424px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={img.imgPath}
                    alt={img.name}
                    />
                </>
                
            ) : null}
            </div>
        ))}
        </AutoPlaySwipeableViews>
    );
}
export {ItemCarouselImage}      

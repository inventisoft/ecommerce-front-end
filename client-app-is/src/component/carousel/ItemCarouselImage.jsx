import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CardMedia } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function  ItemCarouselImage ({themes,activeStep,setActiveStep,slider}) {
    
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
        {slider.map((item, index) => (
            <div 
            
            key={item.name}>
            {Math.abs(activeStep - index) <= 0 ? (
                <>
                    <CardMedia
                    component="img"
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        height:'256px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={item.imgPath}
                    alt={item.name}
                    />
                    <CardMedia
                    component="img"
                    sx={{
                        display: { xs: 'none', sm: 'block', md: 'none' },
                        height:'336px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={item.imgPath}
                    alt={item.name}
                    />
                    <CardMedia
                    component="img"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        height:'424px',
                        minWidth: '360px',
                        width:'100%',
                        overflow:'hidden',
                    }}
                    src={item.imgPath}
                    alt={item.name}
                    />
                </>
                
            ) : null}
            </div>
        ))}
        </AutoPlaySwipeableViews>
    );
}
export {ItemCarouselImage}      

import { ItemCard } from "./ItemCard";
import React from "react";
import Typography from '@mui/material/Typography';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

function CarouselCard({clothes}) {
    
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1800, min: 900 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 900, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
    };
    return (
        <div >
            <Box 
            sx={{width:'100%', height:'20px' ,direction:'flex',textAlign:'center',padding:'12px 0'}}
            >
                <Typography >NOVEDADES</Typography>
            </Box>
            <Carousel  responsive={responsive} >
            {clothes.map((item, index) => (
                <div >
                    <ItemCard item={item}/>
                </div>
            ))}
        </Carousel>
        </div>
        
        
    );
}
export {CarouselCard}
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function  CardProduct ({images}) {
    function Media() {
        return (
            <Grid container wrap="nowrap" columnGap={2} sx={{ direction:'flex',height:'100%',minWidth:'360px' , width:'100%',maxWidth:'1080px', padding:'16px' }}>
                {images.map((item, index) => (
                <Box key={index} sx={{ height:'300px'}}>
                    {item  &&
                    <img
                        style={{ width: 156, height: 200 }}
                        alt={item.name}
                        src={item.imgPath}
                    />
                    }
        
                    {item &&
                    <Box sx={{ pr: 1}}>
                        <Typography gutterBottom variant="body2">
                        {item.name}
                        </Typography>
                        <Typography display="block" variant="caption" color="text.secondary">
                        {item.detalle}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                        {`${'Bs.'} ${item.price} `}
                        </Typography>
                    </Box>
                }
                </Box>
                ))}
            </Grid>
        );
    }
    
    

    return(
        <Box sx={{ overflow: 'hidden' }}>
          <Media />
        </Box>
    );
}
export {CardProduct}


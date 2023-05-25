import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
function  ItemCard ({item}) {
    return(
        <Card >
            <CardActionArea>
            {
                <CardMedia
                component="img"
                height="200"
                image={item.imgPath}
                alt={item.name}
                width='100%'
                />
            }
            {
                <CardContent height="114px">
                    <Typography variant="body2" component="div">
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.detalle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {`Bs. ${item.price} `}
                    </Typography>
                </CardContent>
            }
            </CardActionArea>
        </Card>
    )
}
export {ItemCard}

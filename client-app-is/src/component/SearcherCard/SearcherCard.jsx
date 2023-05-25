import React from "react";
import Grid from '@mui/material/Grid';
import { ItemCard } from "../carouselCard/ItemCard";

function  SearcherCard ({searchedItem,searchValue}) {
    return(
        <Grid container padding={'16px'} spacing={{ xs: 2, sm:2, md: 2 }} columns={{ xs: 4, sm: 9, md: 16 }}  >
            {(!searchedItem.length && !!searchValue.length) && <p>No hay resultados para "{searchValue}"</p>}
            {searchedItem.map((item, index) => (
                <Grid item  xs={2} sm={3} md={4}>
                    <ItemCard item={item}/>
                </Grid>
            ))}
        </Grid>
    );
}
export {SearcherCard}
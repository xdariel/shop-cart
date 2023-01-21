import React from "react"
import {Box, Grid, Stack, Typography} from "@mui/material";
import {useShop} from "@/context/ShopContext";


const CheckOut: React.FC = () => {
    const {filter:{query}, cart} = useShop()
    return (
        <Box>
            <Grid container sx={{mt:4}}>
                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="flex-end" sx={{mb:2}}>
                        <Typography variant="h5" sx={{fontWeight: 900}}>Your Cart</Typography>
                        <Typography variant="subtitle1" sx={{ml: 1, color:"text.disabled"}}>{`(${cart.length})`}</Typography>
                    </Stack>


                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="flex-end" sx={{mb:2}}>
                        <Typography variant="h5" sx={{fontWeight: 900}}>Order Summary</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>)
}

export default CheckOut
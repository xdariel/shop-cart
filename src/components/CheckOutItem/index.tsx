import React from "react"
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {useShop} from "@/context/ShopContext";
import {CartItem} from "@/context/ShopContext/ShopContext";

 type CheckOutItemProps = {
    item: CartItem
}
const CheckOutItem: React.FC<CheckOutItemProps> = ({item}) => {
    const {removeFromCart, setCartItemQuantity} = useShop()
    return (
        <Box>
            <Grid container>
                <Grid item>
                    {item.product.name}
                </Grid>

                <Grid item>
                    {item.product.price}
                </Grid>

            </Grid>
          <Divider />
        </Box>)
}

export default CheckOutItem
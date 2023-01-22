import React from "react"
import {Box, Divider, Grid, Popover, Icon, Stack, styled, Typography, InputBase} from "@mui/material";
import {useShop} from "@/context/ShopContext";
import {CartItem} from "@/context/ShopContext/ShopContext";
import {RemoveIcon} from "@/components/common/Icons";
import {Product} from "@/models/Product";


const ProductImage = styled("img")(() => ({
    maxWidth: "336px",
    maxHeight: "336px",
}))




type ProductItemProps = {
    item: Product
}
const ProductItem: React.FC<ProductItemProps> = ({item}) => {

    return (
        <Stack>
           <ProductImage src={item?.image ?? "https://dummyimage.com/200x200/E6E8E9/a2a"} />
            <Typography variant="body2" sx={{fontWeight: "bold"}}>{item.name}</Typography>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width:"90%"}}>
                <Typography variant="caption" sx={{fontWeight: "bold"}}>$10 - $24</Typography>
                <Stack direction="row" alignItems="center" >
                    <Typography variant="caption" sx={{color: "text.disabled"}}>Minimum: </Typography>
                    <Typography variant="caption" sx={{ml:0.2}}>24</Typography>
                </Stack>
            </Stack>

        </Stack>)
}

export default ProductItem
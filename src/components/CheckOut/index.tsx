import React from "react"
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {useShop} from "@/context/ShopContext";
import CheckOutItem from "@/components/CheckOutItem";
import StyledButton from "@/components/common/StyledButton";
import useProduct from "@/hooks/useProducts";
import {Product} from "@/models/Product";
import ProductItem from "@/components/ProductItem";


const CheckOut: React.FC = () => {
    const {cart} = useShop()
    const {fetchProducts} =  useProduct()
    const [products, setProducts] = React.useState<Array<Product>>([])

    React.useEffect(()=>{
        loadRelatedProducts()
    }, [])

    const loadRelatedProducts = ()=>{
        fetchProducts().then((data)=>{
            setProducts(data)
        })
    }
    return (
        <Box sx={{mb:2}}>
            <Grid container sx={{my: 4}} columnSpacing={4}>
                <Grid item xs={12} md={9}>
                    <Stack direction="row" alignItems="flex-end" sx={{mb: 2}}>
                        <Typography variant="h5" sx={{fontWeight: 900}}>Your Cart</Typography>
                        <Typography variant="subtitle1"
                                    sx={{ml: 1, color: "text.disabled"}}>{`(${cart.length})`}</Typography>
                    </Stack>

                    {cart.length > 0 && <Box>
                        {cart.map((item, i) => {
                            return (<CheckOutItem key={i} item={item}/>)
                        })}
                    </Box>}

                    {cart.length ===0 && <Box>
                         <Typography variant="h6" sx={{fontWeight: "bold"}}>No items in the shopping cart!</Typography>
                    </Box>}


                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5" sx={{fontWeight: 900, mb: 2}}>Order Summary</Typography>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 2}}>
                        <Typography sx={{color: "text.disabled"}}>Number of items</Typography>
                        <Typography sx={{color: "text.disabled"}}>{cart.length}</Typography>
                    </Stack>
                    <Divider sx={{mb: 2}}/>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 3}}>
                        <Typography sx={{fontWeight: "bold"}}>Total:</Typography>
                        <Typography sx={{fontWeight: "bold"}}
                                    variant="h6">{`$${ cart && cart.length > 0 ? Number(cart.map(x => x.quantity * x.product.price).reduce((a, b) => a + b)).toLocaleString("en-EN"): 0}`}</Typography>
                    </Stack>
                    <StyledButton fullWidth variant={"contained"} sx={{mb:1}} >Proceed to Checkout</StyledButton>
                    <StyledButton fullWidth variant={"outlined"} >Continue shopping</StyledButton>
                </Grid>

            </Grid>

            <Box>
                <Typography variant="h6" sx={{fontWeight: "bold", mb:1}}>You might also like</Typography>
                <Stack direction="row" sx={{overflowX: "auto"}}>
                    {products.map((item, i)=>{
                        return (<Box key={i} sx={{mr:3}}>
                                <ProductItem key={i} item={item} />
                        </Box>
                           )
                    })}
                </Stack>


            </Box>

        </Box>)
}

export default CheckOut
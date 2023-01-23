import React from "react"
import {Box, Divider, Grid, Popover, Icon, Stack, styled, Typography, InputBase} from "@mui/material";
import {useShop} from "@/context/ShopContext";
import {CartItem} from "@/context/ShopContext/ShopContext";
import {RemoveIcon} from "@/components/common/Icons";
import {numberToPrice} from "@/utils";


const ProductImage = styled("img")(() => ({
    maxWidth: "120px",
    maxHeight: "120px",
}))

const StyledTag = styled(Box)(({theme}) => ({
    "&.MuiBox-root": {
        width: "26px",
        height: "16px",
        padding: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10px",
        background: theme.palette.secondary.main,
        color: theme.palette.text.disabled,
    },
}))

type CheckOutItemProps = {
    item: CartItem
}
const CheckOutItem: React.FC<CheckOutItemProps> = ({item}) => {
    const {removeFromCart, setCartItemQuantity} = useShop()


    const [anchorEl, setAnchorEl] = React.useState<any | null>(null);
    const [quantity, setQuantity] = React.useState<number>(item.quantity);
    const toggleOpen = (event: React.MouseEvent<any>) => {
        if(anchorEl){
            handleClose()
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
        updateCartQuantity()
    };

    const updateCartQuantity = () => {
        if(quantity !== item.quantity){
            setCartItemQuantity({...item,  quantity})
            }
    };
    const open = Boolean(anchorEl);

    return (
        <Box>
            <Grid container sx={{py: 2}} justifyContent="flex-start" columnSpacing={2} >
                <Grid item xs="auto" >
                    <Box sx={{mb: 1}}>
                        <ProductImage src={item.product?.image ?? "https://dummyimage.com/200x200/fff/aaa"}/>
                    </Box>
                    {item.product.section === "packaging" &&
                        <Stack direction="row" justifyContent="center" sx={{width: '120px'}}>
                            <StyledTag>PACK</StyledTag>
                        </Stack>}
                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs>
                        <Box>
                            <Typography variant="h6" sx={{fontWeight: "bold", mb: 1}}>{item.product.name}</Typography>

                            <Stack direction="row" alignItems="center" sx={{mb: 2}}>
                                <Typography sx={{fontWeight: 700}}>Quantity:</Typography>
                                <Typography  sx={{
                                    ml: 1,
                                    textDecoration: "underline",
                                    fontWeight: 900
                                }}>{item.quantity}</Typography>
                                <Icon sx={{cursor: "pointer"}} onClick={toggleOpen}
                                      fontSize="small">{open ? "expand_less" : "expand_more"}</Icon>
                            </Stack>

                            {item.product.description && <Box sx={{mb: 2}}>
                                {item.product.description.map((d, i) => {
                                    return <Stack key={i} direction="row" alignItems="center">
                                        <Icon color="primary" sx={{fontSize: 6}}>circle</Icon>
                                        <Typography variant="body2" sx={{ml: 1, fontWeight: "bold"}}>{d.text}</Typography>
                                        {d.tags &&
                                            <Typography variant="body2" sx={{
                                                color: "text.disabled",
                                                ml: 1
                                            }}>{`(${d.tags.join(", ")})`}</Typography>}
                                    </Stack>
                                })}
                            </Box>}

                            {item.product.section === "packaging" && <Stack direction="row" alignContent="center">
                                <Typography variant="caption" sx={{fontWeight: "bold", cursor: "pointer"}}>Edit
                                    Pack</Typography>
                                <Typography variant="caption"
                                            sx={{mx: 1, color: "text.disabled", fontWeight: "bold"}}>|</Typography>
                                <Typography variant="caption" onClick={() => removeFromCart(item)}
                                            sx={{fontWeight: "bold", cursor: "pointer"}}>Remove</Typography>
                            </Stack>}

                            {item.product.section !== "packaging" && <Stack direction="row" alignContent="center">
                                <RemoveIcon/>
                                <Typography variant="caption" onClick={() => removeFromCart(item)}
                                            sx={{ml: 1, fontWeight: "bold", cursor: "pointer"}}>Remove</Typography>
                            </Stack>}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{textAlign: "end"}}>
                            <Typography variant="h6" sx={{fontWeight: "bold"}}>{numberToPrice(item.product.price)}</Typography>
                            <Stack direction="row">
                                <Typography variant="h6">Total: </Typography>
                                <Typography variant="h6"
                                            sx={{fontWeight: "bold", ml:1}}>{numberToPrice(item.product.price * item.quantity)}</Typography>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack direction="row" alignItems="center" sx={{px:1}}>
                <InputBase sx={{width: "64px"}} inputProps={{
                     min:1
                }} type={"number"} value={quantity} onChange={({target: {value}})=>{
                  setQuantity( +value)
                }} />
                    <Icon color="primary" fontSize="small" sx={{fontWeight: "bold", ml:1, cursor: "pointer"}} onClick={handleClose}>done</Icon>
                </Stack>
            </Popover>
        </Box>)
}

export default React.memo(CheckOutItem)
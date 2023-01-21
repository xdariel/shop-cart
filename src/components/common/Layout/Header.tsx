import React from "react"
import {AppBar, AppBarProps, Grid, styled} from "@mui/material";
import Logo from "@/components/common/Logo";
import SearchField from "@/components/common/SearchField";
import UserInfo from "@/components/common/UserInfo";
import {useShop} from "@/context/ShopContext";



const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    "&.MuiAppBar-root": {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        width: "100%",
        height: "88px",
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
    },
}))

const Header = React.forwardRef<any, AppBarProps>(({ ...props }, ref) => {
    const {filter: {query}, setQuery, } =  useShop()

    const onSearch = ({target: {value}}: any)=>{
            setQuery(value)
    }

    return (
        <StyledAppBar ref={ref} {...props}>
            <Logo />
            <Grid container sx={{ml:{xs:2, md:4}}}>

                <Grid item md={6} sx={{alignItems: "center", display: {xs: "none", md: "flex"}}} >
                    <SearchField value={query} onChange={onSearch} size="small" placeholder={"Search products"} fullWidth />
                </Grid>

                <Grid item xs={12} md={6} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                    <UserInfo />
                </Grid>
            </Grid>
        </StyledAppBar>
    )
})
export default Header



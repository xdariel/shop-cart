import React from "react"
import {Stack, Typography} from "@mui/material";
import {CartIcon, UserIcon} from "@/components/common/Icons";







const UserInfo: React.FC = () => {
    return (
        <Stack direction="row">
            <Stack direction="row" alignItems="center" sx={{mx: 1, cursor: "pointer"}}>
                <UserIcon />
                <Typography variant="h6" sx={{mx:2, display: {xs: "none", md: "flex"}}}>Sign in</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" sx={{mx: 1, cursor: "pointer"}}>
                <CartIcon />
                <Typography variant="h6" sx={{mx:2, display: {xs: "none", md: "flex"}}}>Cart</Typography>
            </Stack>


        </Stack>)
}

export default UserInfo
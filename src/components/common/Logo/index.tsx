import React from "react"
import {Typography, styled} from "@mui/material";


const Logo = styled("div")(({ theme }) => ({
        background: theme.palette.secondary.main,
        color: theme.palette.text.disabled,
        width: "172px",
        height: "48px",
        display:"flex",
        justifyContent:"center",
        alignItems: "center"
}))

export default ()=><Logo><Typography>LOGO</Typography></Logo>
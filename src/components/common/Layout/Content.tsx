import React from "react"
import {Box, BoxProps, styled} from "@mui/material";



const LayoutContent = styled(Box)<BoxProps>(({ theme }) => ({
    "&.MuiBox-root": {
        minHeight: "600px",
    },
}))


export default LayoutContent



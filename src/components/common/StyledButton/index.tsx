import React from "react"
import {Button, styled} from "@mui/material";
const StyledButton = styled(Button)(() => ({
    "&.MuiButton-root": {
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "16px",
    }
}))

export default StyledButton
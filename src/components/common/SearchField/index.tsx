import React from "react"
import {Paper, Icon, styled, InputBase, InputBaseProps, PaperProps} from "@mui/material";


const StyledPaper = styled(Paper)<PaperProps>(() => ({
    "&.MuiPaper-root": {
        borderRadius: 20,
        padding:'2px 8px',
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        ".MuiInputBase-root": {
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "16px",
            display:"flex",
            alignItems: "center",


        }
    },


}))


const SearchField = React.forwardRef<any, Omit<InputBaseProps, "variant" |  "label">>(({ ...props }, ref) => {
    return (
        <StyledPaper >
            <Icon sx={{ p: '10px' }} aria-label="search">
               search
            </Icon>
            <InputBase ref={ref} {...props}
                sx={{ ml: 1, flex: 1 }}
            />
        </StyledPaper>)
})

export default SearchField
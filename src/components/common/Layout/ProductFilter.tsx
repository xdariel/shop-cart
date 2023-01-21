import React from "react"
import {Box, Grid, BoxProps, styled, GridProps, Typography} from "@mui/material";


const StyledBox = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.light,
        color: theme.palette.text.secondary,
        a: {
            textDecoration: "none"
        }
    },
}))

const StyledGridItem = styled(Grid)<GridProps>(({theme}) => ({
    "&.MuiGrid-root": {
        display: "flex",
        alignItems: "center",
        marginRight: "32px"
    },
}))


type FilterItem = {
    id: string
    label?: string
}

const ProductFilter = React.forwardRef<any, BoxProps>(({...props}, ref) => {

    const [filters] = React.useState<Array<FilterItem>>([
        {
            id: "all",
            label: "All Products"
        },
        {
            id: "packaging",
            label: "Packaging"
        },
        {
            id: "drinkware",
            label: "Drinkware"
        },
        {
            id: "apparel",
            label: "Apparel"
        },
        {
            id: "notebooks",
            label: "Notebooks"
        },
        {
            id: "backpacks",
            label: "Backpacks"
        }
    ])

    const [selected, setSelected] = React.useState<FilterItem>({id: "all"})
    return (
        <StyledBox ref={ref} {...props}>
            <Grid container sx={{minHeight: "64px",}}>
                {
                    filters.map((item) => {
                        const isSelected = item.id === selected.id
                        return (<StyledGridItem item key={item.id} onClick={() => setSelected(item)}>

                            <Typography sx={{
                                fontWeight: isSelected ? 900 : 500,
                                color: "secondary.dark",
                                cursor: "pointer"
                            }}>{item?.label ?? item.id}</Typography>

                        </StyledGridItem>)
                    })
                }

            </Grid>
        </StyledBox>
    )
})
export default ProductFilter



import React from "react"
import {Box} from "@mui/material";
import Header from "@/components/common/Layout/Header";
import LayoutContent from "@/components/common/Layout/Content";
import Footer from "@/components/common/Layout/Footer";
import ProductFilter from "@/components/common/Layout/ProductFilter";


type LayoutProps = {
    children: React.ReactNode | Array<React.ReactNode>
}

const px = {xs: 1, md:8}
const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <Box sx={{width: "100%"}}>
            <Header sx={{px}} />
            <ProductFilter sx={{px, mt: "88px"}} />
            <LayoutContent sx={{px}} >{children}</LayoutContent>
            <Footer sx={{px}} />
        </Box>
    )
}

export default Layout
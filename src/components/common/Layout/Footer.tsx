import React from "react"
import {Box, Grid, BoxProps, styled, SvgIcon, Icon, GridProps, Typography, Stack, Link} from "@mui/material";
import Logo from "@/components/common/Logo";
import {FacebookIcon, InstagramIcon, LikedLnIcon, TwitterIcon, UsaIcon, YoutubeIcon} from "@/components/common/Icons";


const StyledBox = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.light,
        color: theme.palette.text.secondary,
        minHeight: "540px"

    },
}))

const StyledGridItem = styled(Grid)<GridProps>(({theme}) => ({
    "&.MuiGrid-root": {
        marginTop: "80px",
        display: "flex",
        a: {
            textDecoration: "none",
            color: theme.palette.text.secondary,
        },
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            marginTop: "8px",
        }
    },
}))


type OpenSelector = {
    lang: boolean,
    region: boolean
}

const Footer = React.forwardRef<any, BoxProps>(({...props}, ref) => {

    const [open, setOpen] = React.useState<OpenSelector>({lang: false, region: false})
    const toggleOpen = (key: keyof OpenSelector) => {
        setOpen({...open, [key]: !open[key]})
    }
    return (
        <StyledBox ref={ref} {...props}>
            <Grid container justifyContent={"space-around"}>
                <StyledGridItem item xs={12} sm={6} md={3}>
                    <Logo/>
                    <Typography variant="subtitle2" sx={{mt: 4, mb: 2, width: {xs:"90%", sm: "80%", md: "60%"}, textAlign: "justify"}}>
                        We sell custom products for all your needs. Packs and bulk products that you will enjoy.
                    </Typography>

                    <Link href={"tel:+12025550129"} sx={{mb:4}}><Typography variant="h6" color="primary" sx={{
                        my: 1,
                        width: "90%",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Icon fontSize="small">phone</Icon> +1-202-555-0129 </Typography>
                    </Link>

                    <Stack direction="row">
                        <Link href="#" sx={{mr: 1}}>
                            <FacebookIcon/>
                        </Link>

                        <Link href="#" sx={{mr: 1}}>
                            <TwitterIcon/>
                        </Link>

                        <Link href="#" sx={{mr: 1}}>
                            <InstagramIcon/>
                        </Link>

                        <Link href="#" sx={{mr: 1}}>
                            <LikedLnIcon/>
                        </Link>

                        <Link href="#" sx={{mr: 1}}>
                            <YoutubeIcon/>
                        </Link>


                    </Stack>
                </StyledGridItem>

                <StyledGridItem item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="primary" sx={{mb: 2, fontWeight: "bold"}}>Our Company</Typography>
                    <Link  href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>About Us</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>FAQ</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Partnerships</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Sustainability</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Blog</Typography></Link>
                </StyledGridItem>

                <StyledGridItem item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="primary" sx={{mb: 2, fontWeight: "bold"}}>How can we
                        help</Typography>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Place a ticket</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Track your order</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Help center</Typography></Link>
                </StyledGridItem>

                <StyledGridItem item xs={12} sm={6} md={3}>
                    <Typography variant="h6" color="primary" sx={{mb: 2, fontWeight: "bold"}}>Information</Typography>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Contact us</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Live chat</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Privacy</Typography></Link>
                    <Link href="#"><Typography sx={{mb: 2, fontWeight: "bold"}}>Terms of use</Typography></Link>
                </StyledGridItem>
            </Grid>

            <Grid container sx={{mt: {sx: 2, md: 10}}}>
                <Grid item xs={12} md={6}>
                    <Typography>{`© ${new Date().getFullYear()} Customer Products. All rights reserved.`}</Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: {xs: "flex-start", md: "flex-end"}}}>
                    <Stack direction="row" alignItems="center">
                        <Stack direction="row" alignItems="center">
                            <Typography>Region:</Typography>
                            <Stack direction="row" alignItems="center" sx={{mx: 1}}
                                   onClick={() => toggleOpen("region")}>
                                <UsaIcon/>
                                <Typography sx={{mx: 0.5, fontWeight: "bold"}}>Unites State</Typography>
                                {open.region && <Icon fontSize="small">expand_less</Icon>}
                                {!open.region && <Icon fontSize="small">expand_more</Icon>}

                            </Stack>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <Typography>Language:</Typography>
                            <Stack direction="row" alignItems="center" onClick={() => toggleOpen("lang")}>
                                <Typography sx={{mx: 0.5, fontWeight: "bold"}}>English</Typography>
                                {open.lang && <Icon sx={{mx: 1}} fontSize="small">expand_less</Icon>}
                                {!open.lang && <Icon sx={{mx: 1}} fontSize="small">expand_more</Icon>}
                            </Stack>
                        </Stack>


                    </Stack>
                </Grid>
            </Grid>
        </StyledBox>
    )
})
export default Footer



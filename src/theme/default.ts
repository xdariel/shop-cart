import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
     fontFamily: "Open Sans"
  },

  palette: {
    mode: "light",
    primary: {
      main: "#091625",
    },
    secondary: {
      main: "#E6E8E9",
      dark: "#535C67",
      light: "#CED0D3"
    },

    text: {
      primary: "#091625",
      secondary: "#535C67",
      disabled: "#848A92",
    },

    background: {
      default: "#fff",
    },
  },
  

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
export default responsiveFontSizes(theme)

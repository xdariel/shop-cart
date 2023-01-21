import React from 'react'
import {ThemeProvider} from "@mui/material";
import theme from "@/theme/default"
import ShopContext from "@/context/ShopContext";
const Layout = React.lazy(() => import("./components/common/Layout"));
const CheckOut = React.lazy(() => import("./components/CheckOut"));
function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Suspense fallback={'loading...'}>
                <ShopContext>
                    <Layout>
                        <CheckOut />
                    </Layout>
                </ShopContext>
            </React.Suspense>
        </ThemeProvider>
    )
}

export default App

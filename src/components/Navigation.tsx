import React from "react";
import { Box, Heading, /* ResponsiveContext */ } from "grommet"

export const Navigation: React.FC = () => {
    // const size = React.useContext<string>(ResponsiveContext);


    return (
        <Box fill="vertical" background="background-contrast" >

            {/* Top bar */}
            <Box background="brand" height="5px"></Box>

            <Box pad={{ left: "large", right: "large" }}>

                <Heading>Tauri</Heading>

            </Box>


        </Box >
    )
}
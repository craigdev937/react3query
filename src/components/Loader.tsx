import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = (): JSX.Element => {
    return (
        <React.Fragment>
            <Box 
                marginY={10} 
                textAlign="center"
                >
                    <CircularProgress />
            </Box>
        </React.Fragment>
    );
};



import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

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



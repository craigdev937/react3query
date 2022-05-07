import React from "react";
import { Box } from "@mui/material";

type Props = {
    children: React.ReactNode
};

export const Wrapper = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Box maxWidth={700} margin="auto">
                {children}
            </Box>
        </React.Fragment>
    );
};




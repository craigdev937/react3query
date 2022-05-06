import React from "react";
import Typography from "@mui/material/Typography";
type Props = {
    children: React.ReactNode
};

export const PageHeader = ({ children }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <Typography
                variant="h3"
                component="h1"
                textAlign="center"
                sx={{ mb: 4, mt: 6 }}
            >
                {children}
            </Typography>
        </React.Fragment>
    );
};



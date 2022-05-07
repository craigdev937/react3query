import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Apartment } from "@mui/icons-material";

const StyledButton = 
({ to, children }: {
    to: string,
    children: React.ReactNode
}) => (
    <Button
        color="inherit"
        component={NavLink}
        to={to}
        sx={{ textTransform: "capitalize", mx: 1 }}
        >{children}
    </Button>
);

export const Navbar = (): JSX.Element => (
    <Box>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ 
                        flexGrow: 1, 
                        display: "flex", 
                        alignItems: "center"
                    }}
                >
                    <Apartment sx={{ mx: 1, fontSize: "1.5em" }} />
                    Mobile
                </Typography>
                <StyledButton to="/">Home</StyledButton>
                <StyledButton to="/houses">Real estate</StyledButton>
                <StyledButton to="/houses/add">Add</StyledButton>
            </Toolbar>
        </AppBar>
    </Box>
);




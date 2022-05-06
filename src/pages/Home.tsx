import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <Button to="/houses" component={Link}>
                See more...
            </Button>
        </React.Fragment>
    );
};



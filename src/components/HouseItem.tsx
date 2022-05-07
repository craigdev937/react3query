import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { IHouse } from "../models/Interfaces";
import { Link as RouterLink } from "react-router-dom";

export interface IHouseItemProps {
    house: IHouse
};

export type TColorProp =
    | "success"
    | "default"
    | "warning"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | undefined;

export const colors = {
    available: "success",
    reserved: "default",
    sold: "error"
};

export const HouseItem = ({
    house: { id, address, floorsNumber, label }, 
}: IHouseItemProps): React.ReactElement => {
    const labelColor = colors[label] as TColorProp;

    return (
        <React.Fragment>
            <Paper sx={{ 
                    M: 2, px: 3, py: 2, 
                    backgroundColor: "#eee" }} 
                    elevation={0}
                    >
                <Box sx={{ mb: 1 }}>
                    <Box sx={{ mb: 1 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Address:
                        </Typography>
                        <Typography>{address}</Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Number of floors
                        </Typography>
                        <Typography>{floorsNumber}</Typography>
                    </Box>
                    <Chip 
                        label={label} 
                        size="small" 
                        color={labelColor}
                    />
                    <Box>
                        <Link
                            component={RouterLink} 
                            to={`/houses/${id}`} 
                            variant="body2" 
                            >See more
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </React.Fragment>
    );
};





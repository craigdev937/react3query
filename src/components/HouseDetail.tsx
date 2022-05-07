import React from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Chip } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { colors, TColorProp } from "./HouseItem";
import { IHouse } from "../models/Interfaces";
import { CustomAlert } from "./CustomAlert";

interface IHouseDetailProps {
    house: IHouse,
    isRemoving: boolean,
    isRemoveError: boolean,
    handleDelete: () => Promise<void>
};

export const HouseDetail = ({
    house: { id, address, description, 
        floorsNumber, label },
    handleDelete, isRemoving, isRemoveError
}: IHouseDetailProps) => {
    const labelColor = colors[label] as TColorProp;

    return (
        <React.Fragment>
            <Paper 
                elevation={0} 
                sx={{ px: 3, py: 1 }}
                >{ isRemoveError && 
                    <CustomAlert severity="error" />}
                <Box sx={{ my: 2 }} textAlign="right">
                    <Link
                        component={RouterLink}
                        to={`/houses`}
                        variant="body2"
                        sx={{ ml: "auto" }}
                        >Property List
                    </Link>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Referral Number
                        </Typography>
                        <Typography>{id}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Number of floors
                        </Typography>
                        <Typography>{floorsNumber}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Address
                        </Typography>
                        <Typography>{address}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Address
                        </Typography>
                        <Typography>{address}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600 }}
                            >Description
                        </Typography>
                        <Typography>{description}</Typography>
                    </Box>
                </Box>
                <Chip label={label} size="small" color={labelColor} />
                <Box sx={{ 
                    my: 2, 
                    display: "flex", 
                    alignItems: "center"
                }}>
                    <Button 
                        onClick={handleDelete} 
                        variant="contained" 
                        sx={{ ml: "auto" }}>
                        {isRemoving ? 
                            <CircularProgress /> : 
                            "Delete"}
                    </Button>
                </Box>
            </Paper>
        </React.Fragment>
    );
};




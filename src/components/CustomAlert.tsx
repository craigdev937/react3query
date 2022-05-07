import React from "react";
import { Alert } from "@mui/material";

type TAlert = "error" | "success";

interface IAlert {
    severity: TAlert,
    message?: React.ReactNode
};

export const CustomAlert = 
({ severity, message }: IAlert) => {
    if (severity === "error") 
    return (
        <Alert severity={severity}>
            {message || "Error occured"}
        </Alert>
    );

    if (severity === "success") 
    return (
        <Alert severity={severity}>
            {message || "Success!"}
        </Alert>
    );
    return null;
};



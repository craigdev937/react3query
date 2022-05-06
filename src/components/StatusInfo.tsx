import React from "react";
import { CustomAlert } from "./CustomAlert";
import { Loader } from "./Loader";
import { IProps } from "../models/Interfaces";

export const StatusInfo = ({
    isError, isLoading, isSuccess, 
    error, children, showSuccessMessage,
    successMessage = "OK", 
}: IProps): JSX.Element => {
    if (isError) {
        return (
            <CustomAlert 
                severity="error" 
                message={error?.message || "Error occured"} 
            />
        );
    };

    if (isLoading) return <Loader />;
    if (isSuccess && showSuccessMessage) {
        return (
            <CustomAlert 
                severity="success" 
                message={successMessage} 
            />
        );
    };

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};



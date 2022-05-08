import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { Box } from "@mui/material";
import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";
import { StatusInfo } from "../components/StatusInfo";
import { Wrapper } from "../components/Wrapper";
import { IHouse, IAddHouseFormData } from "../models/Interfaces";
import { API } from "../global/FetchAPI";

export const Add = (): JSX.Element => {
    const client = useQueryClient();
    const [showSuccessMessage, setShowSuccessMessage] = 
        React.useState(false);
    const { 
        error, isError, mutateAsync, isSuccess,
        isLoading: isMutating
     } = useMutation<
        IHouse, Error, IAddHouseFormData
    >(API.addHouse);

    React.useEffect(() => {
        if (isSuccess) {
            setShowSuccessMessage(true);
        } else {
            setShowSuccessMessage(false);
        }
        const timeoutId = setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isSuccess]);

    const onSubmit = 
    async (payload: IAddHouseFormData) => {
        await mutateAsync(payload);
        client.invalidateQueries();
    };

    return (
        <React.Fragment>
            <PageHeader>Add a property</PageHeader>
            <Wrapper>
                <Box sx={{ px: "16px" }}>
                    <StatusInfo
                        isError={isError}
                        isSuccess={isSuccess}
                        showSuccessMessage={showSuccessMessage}
                        error={error}
                        successMessage="The item was added"
                    />
                </Box>
                <Form 
                    onSubmit={onSubmit} 
                    isMutating={isMutating} 
                />
            </Wrapper>
        </React.Fragment>
    );
};



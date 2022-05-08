import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Wrapper } from "../components/Wrapper";
import { PageHeader } from "../components/PageHeader";
import { StatusInfo } from "../components/StatusInfo";
import { HouseDetail } from "../components/HouseDetail";
import { IHouse } from "../models/Interfaces";
import { API } from "../global/FetchAPI";

export const Detail = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { 
        isError: isFetchError,
        error: fetchError,
        isLoading, data,
    } = useQuery<IHouse, Error>(["books", id], () => API.getOne(id!));

    const {
        mutateAsync,
        isError: isRemoveError,
        isLoading: isRemoving
    } = useMutation(API.deleteHouse);

    const handleDelete = async () => {
        await mutateAsync(id!);
        navigate("/houses");
    };

    return (
        <React.Fragment>
            <PageHeader>Property description</PageHeader>
            <Wrapper>
                <StatusInfo
                    isError={isFetchError}
                    isLoading={isLoading}
                    error={fetchError}
                >
                    <HouseDetail 
                        house={data!}
                        handleDelete={handleDelete}
                        isRemoving={isRemoving}
                        isRemoveError={isRemoveError}
                    />
                </StatusInfo>
            </Wrapper>
        </React.Fragment>
    );
};



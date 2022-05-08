import React from "react";
import { useQuery } from "react-query";
import { HouseItem } from "../components/HouseItem";
import { Wrapper } from "../components/Wrapper";
import { PageHeader } from "../components/PageHeader";
import { StatusInfo } from "../components/StatusInfo";
import { API } from "../global/FetchAPI";
import { IHouse } from "../models/Interfaces";

export const List = (): JSX.Element => {
    const { error, isError, isLoading, data } = 
    useQuery<IHouse[], Error>(["houses"], API.fetchAll);

    return (
        <React.Fragment>
            <PageHeader>Real Estate</PageHeader>
            <Wrapper>
                <StatusInfo 
                    isError={isError} 
                    isLoading={isLoading}
                    error={error}
                    >{data?.map((house) => (
                        <HouseItem 
                            key={house.id} 
                            house={house} 
                        />
                    ))}
                </StatusInfo>
            </Wrapper>
        </React.Fragment>
    );
};



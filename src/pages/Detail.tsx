import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Wrapper } from "../components/Wrapper";
import { PageHeader } from "../components/PageHeader";
import { StatusInfo } from "../components/StatusInfo";

export const Detail = (): JSX.Element => {
    return (
        <React.Fragment>
            <PageHeader>Property description</PageHeader>
            <Wrapper>
                {/* <StatusInfo
                    isError={isFetchError}
                    isLoading={isLoading}
                    error={fetchError}
                >
                    <h1>Detail</h1>
                </StatusInfo> */}
            </Wrapper>
        </React.Fragment>
    );
};



import React from "react";

export type TLabel = "available" | "reserved" | "sold";

export interface IAddHouseFormData {
    address: string,
    floorsNumber: number,
    label: TLabel,
    description: string
};

export interface IHouse extends IAddHouseFormData {
    id: string
};

export interface IProps {
    isError: boolean,
    isLoading: boolean,
    isSuccess: boolean,
    error: Error | null, 
    successMessage?: string,
    showSuccessMessage: boolean,
    children: React.ReactNode
};




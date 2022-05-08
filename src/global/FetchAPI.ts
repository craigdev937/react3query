import { IHouse } from "../models/Interfaces";

const URL = "http://localhost:5000/houses";

class FetchClass {
    fetchAll = async (): Promise<IHouse[]> => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const data: IHouse[] = await res.json();
        return [...data];
    };

    getOne = async (id: any): Promise<IHouse> => {
        const res: Response = 
        await fetch(`${URL}/houses/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data: IHouse = await res.json();
        return data;
    };

    add = async (payload: IHouse): Promise<IHouse> => {
        const res: Response = 
        await fetch(`${URL}/houses/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                address: payload.address,
                floorsNumber: payload.floorsNumber,
                label: payload.label,
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: IHouse = await res.json();
        return data;
    };

    deleteHouse = async (id: string): Promise<string> => {
        const res: Response = 
        await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    };
};

export const API: FetchClass = new FetchClass();






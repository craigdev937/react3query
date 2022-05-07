import React from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { TLabel, 
    IAddHouseFormData } from "../models/Interfaces";

interface IFormProps {
    onSubmit: (data: IAddHouseFormData) => Promise<void>;
    isMutating?: boolean,
};

const defaultValues: IAddHouseFormData = {
    address: "",
    floorsNumber: 1,
    label: "available" as TLabel,
    description: ""
};

export const Form = 
({ onSubmit, isMutating = false }: IFormProps) => {
    const { 
        handleSubmit, control, reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm({ defaultValues });
    
    React.useEffect(() => {
        if (isSubmitSuccessful) reset();
    }, [isSubmitSuccessful, reset]);

    return (
        <React.Fragment>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ 
                    p: 2, 
                    minWidth: "300px", 
                    display: "flex", 
                    flexDirection: "column"
                }}
            >
                <Controller
                    name="address"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                            {...field}
                            label="Address"
                            fullWidth
                            autoFocus
                            sx={{ mb: 2 }}
                            value={field.value || ""}
                            error={!!errors.address}
                            helperText={
                                errors.address?.type === "required" 
                                && "This field is required"
                            }
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                            {...field}
                            label="Description"
                            fullWidth
                            autoFocus
                            sx={{ mb: 2 }}
                            value={field.value || ""}
                            error={!!errors.description}
                            helperText={
                                errors.description?.type === "required" 
                                && "This field is required"
                            }
                        />
                    )}
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller 
                            name="floorsNumber"
                            control={control}
                            rules={{ required: true, min:1 }}
                            render={({ field }) => (
                                <TextField 
                                    {...field}
                                    label="Number of floors"
                                    fullWidth
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    value={field.value || ""}
                                    error={!!errors.floorsNumber}
                                    helperText={
                                        errors.floorsNumber?.type === "min" &&
                                        `The number of floors must be 
                                        greater than 0`
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid>
                        <FormControl fullWidth>
                            <InputLabel 
                                id="status-select-label"
                                >Status
                            </InputLabel>
                            <Controller
                                name="label"
                                control={control}
                                rules={{required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="status-select-label"
                                        id="status-select"
                                        label="Status"
                                        value={field.value || ""}
                                    >
                                        <MenuItem value={"available"}>available</MenuItem>   
                                        <MenuItem value={"reserved"}>reserved</MenuItem>   
                                        <MenuItem value={"sold"}>sold</MenuItem>   
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 3, mb: 2, ml: "auto" }}>
                    <Button
                        type="reset"
                        variant="outlined"
                        sx={{ mr: 1 }}
                        onClick={() => reset()}
                        >Reset
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isMutating}
                        >Add
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    );
};






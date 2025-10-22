"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getResturent } from "./resturentApi";

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    resturents: [],
};

export const fetchResturent = createAsyncThunk(
    "resturent/fetchResturent",
    async () => {
        const data = await getResturent();
        return data;
    }
);

const resturentSlice = createSlice({
    name: "resturent",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchResturent.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchResturent.fulfilled, (state, action) => {


                state.isLoading = false;
                state.isError = false;
                state.resturents = action.payload;
            })
            .addCase(fetchResturent.rejected, (state, action) => {

                console.log("actions rejected",action)
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default resturentSlice.reducer;

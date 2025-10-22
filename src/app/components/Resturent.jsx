"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResturent } from "./features/resturentSlice";

export default function Resturent() {
    const { resturents, isLoading, isError } = useSelector(
        (select) => select.resturents
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResturent());
    }, [dispatch]);

    if (isLoading) return <div>Loading restaurants...</div>;
    if (isError) return <div>Error loading restaurants.</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Restaurants</h1>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {resturents.map((restaurant) => (
                    <div
                        key={restaurant.id}
                        className="bg-white shadow rounded p-4 hover:shadow-lg transition"
                    >
                        <h2 className="font-semibold text-lg mb-2">{restaurant.title}</h2>
                        <p className="text-gray-600 text-sm">{restaurant.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

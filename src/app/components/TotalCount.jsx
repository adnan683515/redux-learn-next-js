import React from 'react';

export default function TotalCount({ totalCount }) {
    return (
        <div className="flex justify-center my-6">
            <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2">{totalCount}</h1>
                <p className="text-lg text-gray-700">Total Count</p>
            </div>
        </div>
    );
}


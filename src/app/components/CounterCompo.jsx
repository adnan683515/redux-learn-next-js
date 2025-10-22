import React from 'react';

export default function CounterCompo({ item, handleIncrement, handleDecrement }) {
  return (
    <div className="flex justify-center my-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-4 flex flex-col items-center">
        

        <div className="text-2xl font-bold mb-4">{item?.value}</div>


        <div className="flex gap-4">
          <button
            onClick={() => handleIncrement(item?.id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Increment
          </button>

          <button
            onClick={() => handleDecrement(item?.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

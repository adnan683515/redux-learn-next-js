"use client"

import { createSlice } from "@reduxjs/toolkit"


//initial state 
const initialState = [
    {
        id: 1,
        value: 100
    }, {
        id: 2,
        value: 0
    }
]

const CounterSlice = createSlice({
    name: 'counters',
    initialState,
    // reducars mane ai khane onk gula kaj hobe ..onk gulo actions hobe
    reducers : {

        increment : (state,action)=>{

            console.log("increment reducer actions",action,state)
            //state hocce oi array ta 

            //action hocce ami jeta onno jaigai theke pathabo ..seta payload theke pabo


            const counterIndex = state.findIndex((c)=> c.id === action.payload)
            state[counterIndex].value++

        },
        decrement : (state,action)=>{

              console.log("decrement reducer actions",action,state)
            const counterIndex = state.findIndex((c)=> c.id === action.payload)

            state[counterIndex].value--
        }
    }
})

//redux sob gulo reducars k akta reducer a convert kore nibe 
export default CounterSlice.reducer;


//action gula k export kora holo 
export const {increment,decrement} = CounterSlice.actions
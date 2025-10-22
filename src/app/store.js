
"use client"
import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from '../app/components/countersRedux/counterSlice'
import resturentReducer from '../app/components/features/resturentSlice'

const store = configureStore({
    reducer: {
        counters: CounterReducer,
        resturents : resturentReducer
        // counters name akta features ase amra 

        
    }
})

export default store
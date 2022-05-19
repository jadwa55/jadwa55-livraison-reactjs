import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    meals: []
}
export const cartSlice = createSlice({
    name: 'addCart',
    initialState,
    reducers: {
        add: (state, {payload})=>{
            state.meals.push(payload)
        },

        delete: (state, action)=>{
            state.meals.filter((item)=> item.name !== action.payload.name)
        }
    }
}) 


export const {add, delte} = cartSlice.actions;
export default cartSlice.reducer
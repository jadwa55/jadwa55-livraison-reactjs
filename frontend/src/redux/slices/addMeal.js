import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    meal: []
}



export const mealSlice = createSlice({
    name: 'addMeal',
    initialState,
    reducers: {
        addMeal: (state, {payload})=>{
            state.meal = payload
        },

        deleteMeal: (state, action)=>{
            state.meal.filter((item)=> item.name !== action.payload.name)
        }
    }
}) 


export const {addMeal, deleteMeal} = mealSlice.actions;
export default mealSlice.reducer

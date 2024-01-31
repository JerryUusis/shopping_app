import { createSlice } from "@reduxjs/toolkit"

    // Creating a Redux slice named "cart"
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    // Reducers to handle actions and update the state
    reducers: {
        addToCart: (state, action) => {
            // Update the 'cart' array by adding the payload to it
            state.cart = [...state.cart, action.payload]
        },
    // Additional reducers can be added here for other actions
    },
    extraReducers: (builder) => { },
})

// This should be used for reducers NOT extraReducers
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer
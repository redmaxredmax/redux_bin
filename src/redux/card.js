import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    count: 0
}

const cardReducer = createSlice({
    name: "card",
    initialState,
    reducers: {
        add: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id)
            if (!product) {
                return { ...state, products: [...state.products, { ...action.payload, userCount: 1, userPrice: action.payload.price }] }
            }
            return state
        },
        toggleProduct: (state, action) => {
            if (action.payload.type === "increment") {

                const newProduct = state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: item.price * item.userCount
                        }
                    }
                    return item
                })
                return { ...state, products: [] }
            }
        }

    }
})

export default cardReducer.reducer;
export const { add } = cardReducer.actions

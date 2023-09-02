'use client';

import { createSlice } from '@reduxjs/toolkit';
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';

const cartData = getItemFromLS("cart");

const initialState = {
    items: cartData,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state: any, action: any){
            const findItem = state.items.find((obj: any) => obj.id == action.payload.id);
            if(findItem){
                findItem.count++;
            } else{
                state.items.push({...action.payload, count: 1})
            }
        },
        minusProduct(state: any, action: any){
            const findItem = state.items.find((obj: any) => obj.id == action.payload);
            if(findItem){
                findItem.count--;
            }
        },
        removeProduct(state: any, action: any){
            state.items = state.items.filter((obj: any)=> obj.id != action.payload);
        },
        clearProduct(state: any){
            state.items = [];
        }
    },
});

export const { addProduct, removeProduct, minusProduct, clearProduct } = cartSlice.actions;

export default cartSlice.reducer;

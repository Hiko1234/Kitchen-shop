'use client';

import { createSlice } from '@reduxjs/toolkit';
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';

const favoritesData = getItemFromLS("favorites");

const initialState = {
    items: favoritesData,
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorites(state: any, action: any){
            const findItem = state.items.find((obj: any) => obj.id == action.payload.id);
            if(findItem){
                findItem.count = 1;
            } else{
                state.items.push({...action.payload, count: 1})
            }
        },
        removeFavorites(state: any, action: any){
            state.items = state.items.filter((obj: any)=> obj.id != action.payload);
        },
        clearFavorites(state: any){
            state.items = [];
        }
    },
});

export const { addFavorites, removeFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

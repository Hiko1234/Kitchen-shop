'use client';

import { configureStore } from '@reduxjs/toolkit';
import cart from "../store/features/cart/cartSlice"
import favorites from "../store/features/favorites/favoritesSlice"

export const store = configureStore({
    reducer: {
        cart,
        favorites
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


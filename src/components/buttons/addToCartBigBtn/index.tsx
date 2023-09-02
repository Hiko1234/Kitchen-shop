import React from 'react'
// import styles
import s from "./AddToCart.module.scss"
// import redux
import { useDispatch } from 'react-redux'
import { removeFavorites } from '@/app/store/features/favorites/favoritesSlice';
import { addProduct } from '@/app/store/features/cart/cartSlice'


const AddToCartBigBtn = (props: any) => {
    const { product } = props;
    const dispatch = useDispatch();

    const onClickAdd = () => {
        dispatch(removeFavorites(product.id));
        dispatch(addProduct(product));
      }
  return (
    <>
        <button className={s.addToCart} onClick={onClickAdd}>Добавити в корзину</button>
    </>
  )
}

export default AddToCartBigBtn
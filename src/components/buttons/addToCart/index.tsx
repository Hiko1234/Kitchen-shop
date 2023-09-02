"use client"

import React from 'react'
// import styles
import s from "./AddToCart.module.scss"
// import img
import Image from 'next/image'
import icon from "./addToCart.png"
// import redux
import { useDispatch } from 'react-redux'
import { addProduct } from '@/app/store/features/cart/cartSlice'

const AddToCartBtn = (props: any) => {
  const { product } = props;
  const dispatch = useDispatch();

  const onClickAdd = ()=>{
    const item: any = product;
    dispatch(addProduct(item))
  }

  return (
    <>
      <button className={s.addToCart} onClick={onClickAdd}>
        <Image className={s.addToCart__img} src={icon} alt="Add to cart" width={28} height={28} />
      </button>
    </>
  )
}

export default AddToCartBtn
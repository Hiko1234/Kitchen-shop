"use client"

import React, { useState, useEffect, useRef } from 'react'
// import styles
import s from "./Cart.module.scss"
// import img
import Image from 'next/image'
import icon from "../../../assets/images/header/cart.png"
// import link
import Link from 'next/link'
// import redux
import { useSelector } from 'react-redux'

const Cart = () => {
  const {items} = useSelector((state: any) => state.cart);
  const isMounted = useRef(false);

  // counter
  const totalCount = items.reduce((sum: any, item: any) => sum + item.count, 0);
  
  // add to localStorage
  useEffect(()=>{
    if (isMounted.current){
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json)
    }
    isMounted.current = true;
  }, [items]);

  return (
    <>
      <div className={s.cart}>
        <Link className={s.cart__link} href="/cart">
          <Image className={s.cart__img} src={icon} alt="Cart" width={29} height={24} />
          {items.length != 0 ? (
            <span className={s.cart__lenght}>{totalCount}</span>
          ) : (
            null
          )}
        </Link>
      </div>
    </>
  )
}

export default Cart
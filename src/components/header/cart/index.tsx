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
// import utils
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';

const Cart = () => {
  const { items } = useSelector((state: any) => state.cart);
  const isMounted = useRef(false);
  const [data, setData] = useState([])

  // add to localStorage
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json)
    }
    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    const cartData = getItemFromLS("cart");
    setData(cartData);
  }, [items])

  // counter
  const totalCount = data.reduce((sum: any, item: any) => sum + item.count, 0);

  return (
    <>
      <div className={s.cart}>
        <Link className={s.cart__link} href="/cart">
          <Image className={s.cart__img} src={icon} alt="Cart" width={29} height={24} />
          {data.length !== 0 ? (
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
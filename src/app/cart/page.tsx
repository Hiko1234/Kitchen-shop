"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Cart.module.scss"
// import components
import Container from '@/components/container'
import CartProducts from '@/components/cards/cartProducts'
import Delivery from '@/components/delivery'
import Popup from '@/components/popup'
// import link
import Link from 'next/link'
// import redux
import { useSelector, useDispatch } from 'react-redux'
import { clearProduct } from '@/app/store/features/cart/cartSlice'

export default function CartPage (){
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    const [price, setPrice] = useState<number>();
    const [popup, setPopup] = useState<boolean>(false);
    const [delivery, setDelivery] = useState<boolean>(false);

    // counter
    const totalCount = items.reduce((sum: any, item: any) => sum + item.count, 0);

    const onClickClear = () => {
        dispatch(clearProduct(items.id));
        setPopup(false);
    }

    const closePopup = () => {
        setPopup(false);
    }

    useEffect(() => {
        const totalPrice = items.reduce((total: any, item: any) => total + item.price * item.count, 0);
        setPrice(totalPrice);
    }, [items])

    return (
        <>
            <main className={s.cart}>
                <h1 className={s.cart__title}>Кошик</h1>
                <Container key="container">
                    {items.length != 0 ? (
                        <>
                            <div className={s.cart__functional}>
                                <button className={s.cart__functional_btn} onClick={()=>setPopup(true)}>Очистити кошик</button>
                                <button className={s.cart__functional_btn} onClick={()=>delivery == false ? setDelivery(true) : setDelivery(false)}>Оформити покупку</button>
                            </div>
                            <div className={s.cart__cards}>
                                {items.map((product: any) => (
                                    <CartProducts key={product.id} product={product} />
                                ))}
                            </div>
                            <div className={s.cart__totalPrice}>
                                <p className={s.cart__totalPrice_length}>Загальна ціна ({totalCount} {totalCount == 1 ? "товар" : "товари"})</p>
                                <p className={s.cart__totalPrice_price}>{price} грн</p>
                            </div>
                            <div className={s.card__delivery}>
                                <Delivery delivery={delivery} setDelivery={setDelivery} />
                            </div>
                        </>
                    ) : (
                        <div className={s.cart__empty}>
                            <div className={s.cart__empty_text}>
                                <span>На жаль, Ви ще нічого не додали до кошика</span>
                            </div>
                            <Link href="/catalog" className={s.cart__empty_btn}>До каталогу</Link>
                        </div>
                    )}
                </Container>
                {popup && (
                    <Popup key="popup" onClick={onClickClear} close={closePopup} />
                )}
            </main>
        </>
    )
}
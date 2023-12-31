"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Cart.module.scss"
// import components
import Container from '@/components/container'
import CartProducts from '@/components/cards/cartProducts'
import Delivery from '@/components/delivery'
import Popup from '@/components/popup'
import FullScreenLoading from '@/components/fullScreenLoading'
import PopupHandle from '@/components/popupHandle'
// import link
import Link from 'next/link'
// import redux
import { useSelector, useDispatch } from 'react-redux'
import { clearProduct } from '@/app/store/features/cart/cartSlice'
// import utils
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';

export default function CartPage() {
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    const [price, setPrice] = useState<number>();
    const [popup, setPopup] = useState<boolean>(false);
    const [data, setData] = useState([])
    const [delivery, setDelivery] = useState<boolean>(false);
    // loading
    const [loading, setLoading] = useState<boolean>(false);
    // popup
    const [popupTrue, setPopupTrue] = useState<boolean>(false);
    const popupGood = { title: "Форма відправлена", text: "Дякуємо" };
    const [popupError, setPopupError] = useState<boolean>(false);
    const popupFalse = { title: "Виникла помилка", text: "Вибачте за незручності" };

    // counter
    const totalCount = items ? items.reduce((sum: any, item: any) => sum + item.count, 0) : 0;

    const onClickClear = () => {
        dispatch(clearProduct(items.id));
        setPopup(false);
    }

    const closePopup = () => {
        setPopup(false);
    }

    useEffect(() => {
        const totalPrice = items ? items.reduce((total: any, item: any) => total + item.price * item.count, 0) : 0;
        setPrice(totalPrice);
    }, [items])

    useEffect(() => {
        const cartData = getItemFromLS("cart");
        setData(cartData);
    }, [items])

    return (
        <>
            <main className={s.cart}>
                <h1 className={s.cart__title}>Кошик</h1>
                <Container key="container">
                    {data?.length !== 0 ? (
                        <>
                            <div className={s.cart__functional}>
                                <button className={s.cart__functional_btn} onClick={() => setPopup(true)}>Очистити кошик</button>
                                <button className={s.cart__functional_btn} onClick={() => delivery == false ? setDelivery(true) : setDelivery(false)}>Оформити покупку</button>
                            </div>
                            <div className={s.cart__cards}>
                                {data?.map((product: any) => (
                                    <CartProducts key={product.id} product={product} />
                                ))}
                            </div>
                            <div className={s.cart__totalPrice}>
                                <p className={s.cart__totalPrice_length}>Загальна ціна ({totalCount} {totalCount == 1 ? "товар" : "товари"})</p>
                                <p className={s.cart__totalPrice_price}>{price} грн</p>
                            </div>
                            <div className={s.card__delivery}>
                                <Delivery delivery={delivery} setDelivery={setDelivery} setPopup={setPopupTrue} setPopupError={setPopupError} setLoading={setLoading} />
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
                <FullScreenLoading key="loading" onLoading={loading} />
                <PopupHandle key="popup-1" popup={popupTrue} setPopup={setPopupTrue} text={popupGood} />
                <PopupHandle key="popup-2" popup={popupError} setPopup={setPopupError} text={popupFalse} />
            </main>
        </>
    )
}
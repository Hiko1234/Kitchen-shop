import React from 'react'
// import styles
import s from "./CartProducts.module.scss"
// import img
import Image from 'next/image';
// import redux
import { useDispatch } from 'react-redux'
import { addProduct, minusProduct, removeProduct } from '@/app/store/features/cart/cartSlice'

const CartProducts = (props: any) => {
    const { product } = props;
    const dispatch = useDispatch();

    const onClickPlus = ()=>{
        dispatch(addProduct(product))
    }

    const onClickMinus = ()=>{
        dispatch(minusProduct(product.id))
    }

    const onClickRemove = ()=>{
        dispatch(removeProduct(product.id))
    }

    return (
        <>
            <div className={s.card}>
                <div className={s.card__wrapper}>
                    <Image className={s.card__img} src={product.images[0]} alt={product.title} width={100} height={100} />
                    <h4 className={s.card__title}>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h4>
                    <div className={s.card__counter}>
                        <button className={product.count != 1 ? s.card__counter_btn : `${s.card__counter_btn} ${s.card__counter_btnDisActive}`} onClick={onClickMinus}>-</button>
                        <span className={s.card__counter_count}>{product.count}</span>
                        <button className={s.card__counter_btn} onClick={onClickPlus}>+</button>
                    </div>
                    <span className={s.card__price}>{product.price * product.count} грн</span>
                    <div className={s.card__btnWrapper}>
                        <button className={s.card__btn} onClick={onClickRemove}></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProducts
import React from 'react'
// import styles
import s from "./FavoritesProduct.module.scss"
// import components
import AddToCartBigBtn from '@/components/buttons/addToCartBigBtn';
// import img
import Image from 'next/image';
// import redux
import { useDispatch } from 'react-redux'
import { removeFavorites } from '@/app/store/features/favorites/favoritesSlice';

const FavoritesProduct = (props: any) => {
  const { product } = props;
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeFavorites(product.id))
  }

  return (
    <>
      <div className={s.card}>
        <div className={s.card__wrapper}>
          <div className={s.card__info}>
            <Image className={s.card__img} src={product.images[0]} alt={product.title} width={100} height={100} />
            <div className={s.card__infoText}>
              <h4 className={s.card__title}>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h4>
              <p className={s.card__inStock}>В наявності</p>
            </div>
            <span className={s.card__price}>{product.price} грн</span>
            <div className={s.card__btnWrapper}>
              <button className={s.card__btn} onClick={onClickRemove}></button>
            </div>
          </div>
          <AddToCartBigBtn key={product.id} product={product} />
        </div>
      </div>
    </>
  )
}

export default FavoritesProduct
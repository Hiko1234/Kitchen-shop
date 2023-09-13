"use client"

import React, { useState, useEffect } from 'react'
// import styles
import s from "./Favorites.module.scss"
// import img
import Image from 'next/image'
import icon from "./favorite.png"
import icon1 from "./favoriteTrue.png"
// import utils
import { getItemFromLS } from '@/utils/getItemFromLocalStorage'
// import redux
import { useSelector, useDispatch } from 'react-redux'
import { addFavorites, removeFavorites } from '@/app/store/features/favorites/favoritesSlice'

const FavoritesBtn = (props: any) => {
  const { product } = props;
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
  const [favorites, setFavorites] = useState(false);

  // check the object for being in the array
  useEffect(() => {
    const favoritesData = getItemFromLS("favorites");
    if (favoritesData?.length != 0) {
      for (const el of favoritesData) {
        if (product?.id == el.id) {
          return setFavorites(true);
        }
      }
    } else {
      return setFavorites(false)
    }
  }, [product.id, items])

  const onClick = () => {
    if (favorites) {
      dispatch(removeFavorites(product?.id))
      setFavorites(false);
    } else {
      dispatch(addFavorites(product))
      setFavorites(true);
    }
  }

  return (
    <>
      <button className={s.favorites} onClick={onClick}>
        <Image className={s.favorites__img} src={!favorites ? icon : icon1} alt="Add to favorites" width={19} height={18} />
      </button>
    </>
  )
}

export default FavoritesBtn
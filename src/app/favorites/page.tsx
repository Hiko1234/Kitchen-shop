"use client"

import React, { useState } from 'react'
// import styles
import s from "./Favorites.module.scss"
// import components
import Container from '@/components/container'
import FavoritesProduct from '@/components/cards/favoriteProducts'
import Popup from '@/components/popup'
// import link
import Link from 'next/link'
// import redux
import { useSelector, useDispatch } from 'react-redux'
import { clearFavorites } from '../store/features/favorites/favoritesSlice'


const Favorites = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.favorites.items);
  const [popup, setPopup] = useState<boolean>(false);

  const onClickClear = () => {
    dispatch(clearFavorites(items.id));
    setPopup(false);
  }

  const closePopup = () => {
    setPopup(false);
  }

  return (
    <>
      <div className={s.favorites}>
        <h1 className={s.favorites__title}>Список бажання</h1>
        <Container key="container">
          {items.length != 0 ? (
            <>
              <button className={s.favorites__clearTop} onClick={()=>setPopup(true)}>Очистити список бажаннь</button>
              <div className={s.favorites__cards}>
                {items.map((product: any) => (
                  <FavoritesProduct key={product.id} product={product} />
                ))}
              </div>
              <button className={s.favorites__clearBottom} onClick={()=>setPopup(true)}>Очистити список бажаннь</button>
            </>
          ) : (
            <div className={s.favorites__empty}>
              <div className={s.favorites__empty_text}>
                <span>На жаль, Ви ще нічого не додали до списку бажань</span>
              </div>
              <Link href="/catalog" className={s.favorites__empty_btn}>До пошуку</Link>
            </div>
          )}
        </Container>
        {popup && (
          <Popup key="popup" onClick={onClickClear} close={closePopup} />
        )}
      </div>
    </>
  )
}

export default Favorites
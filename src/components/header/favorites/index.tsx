"use client"

import React, { useState, useEffect, useRef } from 'react'
// import styles
import s from "./Favorites.module.scss"
// import img
import Image from 'next/image'
import icon from "../../../assets/images/header/desire.png"
import icon1 from "../../buttons/favorites/favoriteTrue.png"
// import link
import Link from 'next/link'
// import redux
import { useSelector } from 'react-redux'
// import utils
import { getItemFromLS } from '@/utils/getItemFromLocalStorage';

const Favorites = () => {
  const { items } = useSelector((state: any) => state.favorites);
  const isMounted = useRef(false);
  const [data, setData] = useState([])

  // add to localStorage
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("favorites", json)
    }
    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    const favoritesData = getItemFromLS("favorites");
    setData(favoritesData);
  }, [items])


  return (
    <>
      <div className={s.favorites}>
        <Link className={s.favorites__link} href="/favorites">
          <Image className={s.favorites__img} src={icon} alt="favorites" width={24} height={22} />
          {data.length !== 0 ? (
            <span className={s.favorites__lenght}>
              <div className={s.favotires__lenght_wrapper}>
                <Image className={s.favorites__lenght_img} src={icon1} alt="favorites" width={20} height={20} />
                <span className={s.favorites__lenght_counter}>{data.length}</span>
              </div>
            </span>
          ) : (
            null
          )}
        </Link>
      </div>
    </>
  )
}

export default Favorites
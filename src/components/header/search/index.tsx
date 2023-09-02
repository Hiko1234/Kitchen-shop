"use client"

import React, { useState, useMemo } from 'react'
// import styles
import s from "./Search.module.scss"
// import img
import Image from 'next/image'
import icon from "../../../assets/images/header/search.png"
// import scroll link
import { Link } from 'react-scroll';
// import data
import productsList from "@/data/products/products.json";
// import components
import SearchProducts from '@/components/cards/searchProducts'

const Search = () => {
  const [products, setProducts] = useState(Object.values(productsList));
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hideOrShow, setHideOrShow] = useState<any>([]);
  // function open burger
  const handleForm = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        setSearch("")
        return {}
      })
    } else {
      setHideOrShow(() => {
        return { left: "50%" }
      })
    }
  }
  
  const onClick = ()=>{
    setHideOrShow(() => {
      return { left: "-100%" }
    });
    setSearch("");
  }

  // input search
  const searchProducts = useMemo(() => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, products]);

  return (
    <>
      <Link className={s.search} to="search" smooth={true} duration={300} key="linkTo"><Image className={s.search__img} src={icon} alt="Search" width={22.5} height={22.5} /></Link>

      <button className={s.searchAdaptive} onClick={handleForm}><Image className={s.search__img} src={icon} alt="Search" width={22.5} height={22.5} /></button>

      <div className={s.searchForm} style={hideOrShow}>
        <form className={s.searchForm__form}>
          <div className={s.searchForm__inputWrapper}>
            <input className={s.searchForm__input} value={search} type="text" placeholder='Пошук' onChange={(e) => {
              setSearch(e.target.value);
            }} />
            <div className={s.searchForm__icon}><Image src={icon} alt="Search" width={30.5} height={30.5} /></div>
          </div>
        </form>
        {search.length > 0 ? (
          <div className={s.searchWindow}>
            {searchProducts.length > 0 ? (
              <>
                {searchProducts.map((product) => (
                  <div className={s.searchWindow__wrapper} key={product.id}>
                    <SearchProducts product={product} onClick={onClick} />
                  </div>
                ))}
              </>
            ) : (
              <>
                <p className={s.searchWindow__productNotFound}>Товарів не знайдено</p>
              </>
            )}
          </div>
        ) : (
          null
        )}
      </div>
    </>
  )
}

export default Search
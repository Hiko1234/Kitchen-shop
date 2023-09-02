"use client"

import React, { useState, useMemo } from 'react'
// import styles
import s from "./Search.module.scss"
// import components
import Container from '@/components/container'
import SearchProducts from '@/components/cards/searchProducts'
// import img
import Image from 'next/image'
import icon from "../../../assets/images/header/search.png"
// import scroll element
import { Element } from "react-scroll"
// import data
import productsList from "@/data/products/products.json";

const SearchInput = () => {
    const [products, setProducts] = useState(Object.values(productsList));
    const [search, setSearch] = useState("");

    // input search
    const searchProducts = useMemo(() => {
        return products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
    }, [search, products]);

    const onClick = () => {
        setSearch("");
    }

    return (
        <>
            <Container key="container">
                <Element name="search" key="elementSearch">
                    <div className={s.search}>
                        <div className={s.search__container}>
                            <h4 className={s.search__title}>Пошук товарів</h4>
                            <form className={s.search__form}>
                                <div className={s.search__inputWrapper}>
                                    <input className={s.search__input} value={search} type="text" placeholder='Пошук' onChange={(e) => {
                                        setSearch(e.target.value);
                                    }} />
                                    <div className={s.search__icon}><Image src={icon} alt="Search" width={30.5} height={30.5} /></div>
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
                    </div>
                </Element>
            </Container>
        </>
    )
}

export default SearchInput
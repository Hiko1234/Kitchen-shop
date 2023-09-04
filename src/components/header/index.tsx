"use client"

import React, { useState, useEffect } from 'react'
// import styles 
import s from './Header.module.scss'
// import components
import Container from '../container'
import Logo from './logo'
import Nav from './nav'
import Favorites from './favorites'
import Search from './search'
import Cart from './cart'
import HeaderButton from './button'
import Burger from './burger'

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const scrollY = () => {
            window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
        };
        window.addEventListener("scroll", scrollY);
    }, [])

    return (
        <>
            <header className={!scrolled ? s.header : `${s.header} ${s.headerShadow}`}>
                <Container key="container">
                    <div className={s.header__body}>
                        <Logo key="logo" />
                        <div className={s.header__nav}>
                            <Nav key="nav" />
                        </div>
                        <div className={s.header__functional}>
                            <Favorites key="favorites" />
                            <Search key="search" />
                            <Cart key="cart" />
                        </div>
                        <HeaderButton key="button" />
                        <Burger key="burger" />
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;